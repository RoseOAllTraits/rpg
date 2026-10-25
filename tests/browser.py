import json, os, subprocess, sys, tempfile, zipfile
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/tmp/quiet-within-browsers'
subprocess.run([sys.executable, '-m', 'playwright', 'install', 'chromium'], check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
ORIGIN = 'https://759c47b5-20fb-4b1f-81ba-9fd57901ecce.sandbox.websim.com/'
results = []

def fit(page, label):
    report = page.evaluate('''() => ({width:innerWidth,scroll:document.documentElement.scrollWidth,overflow:[...document.querySelectorAll('button,input,select,summary,.story-column,.modal')].filter(e=>e.getClientRects().length&&!e.closest('[hidden]')).filter(e=>{const r=e.getBoundingClientRect();return r.left < -1 || r.right > innerWidth+1}).map(e=>e.id||e.className||e.tagName)})''')
    assert report['scroll'] <= report['width']+1, (label,report)
    assert not report['overflow'], (label,report)
    results.append(label + ': fits')

def tap(page, selector):
    page.locator(selector).first.tap()

def close_panel(page):
    page.locator('.close-button').click()
    expect(page.locator('.modal')).to_have_count(0)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=['--no-sandbox'])
    mobile=browser.new_context(viewport={'width':320,'height':640},is_mobile=True,has_touch=True,device_scale_factor=1)
    page=mobile.new_page()
    own_errors=[]
    page.on('pageerror', lambda error: own_errors.append(str(error)))
    page.goto(ORIGIN,wait_until='domcontentloaded')
    page.wait_for_function('window.QuietStorage && window.QuietStorage.available !== undefined')
    page.locator('#newGameButton').click()
    expect(page.locator('#gameScreen')).to_be_visible()
    fit(page,'320px story')
    tap(page,'#choices .choice-card:nth-child(1)')
    expect(page.locator('#choices .preview-open')).to_have_count(1)
    expect(page.locator('#outcomeBox')).to_be_hidden()
    tap(page,'#choices .choice-card:nth-child(2)')
    expect(page.locator('#choices .preview-open')).to_have_count(1)
    expect(page.locator('#choices .choice-card:nth-child(2)')).to_have_class('choice-card preview-open')
    tap(page,'#choices .choice-card:nth-child(2)')
    expect(page.locator('#outcomeBox')).to_be_visible()
    page.locator('#nextButton').click()
    expect(page.locator('#levelMeta')).to_have_text('LEVEL 002')
    results.append('Touch preview switching and two-tap choice: passed')
    page.locator('.mobile-nav [data-panel="meditations"]').click()
    expect(page.locator('.meditation-card')).to_have_count(25)
    page.locator('.meditation-card summary').first.click()
    expect(page.locator('.meditation-card').first).to_have_attribute('open','')
    fit(page,'320px meditation sheet')
    assert page.locator('#app').evaluate('(e)=>e.inert')
    close_panel(page)
    page.locator('.mobile-nav [data-panel="settings"]').click()
    expect(page.locator('#themeSelect option')).to_have_count(9)
    for theme in ['midnight','parchment','forest','ocean','dusk','ember','rose','slate','sand']:
        page.locator('#themeSelect').select_option(theme)
        assert page.locator('html').get_attribute('data-theme') == theme
    page.locator('#fontRange').focus();page.keyboard.press('End')
    page.locator('#lineRange').focus();page.keyboard.press('End')
    page.locator('#widthRange').focus();page.keyboard.press('End')
    page.locator('#reducedMotion').check(force=True)
    fit(page,'320px settings, maximum text controls')
    expect(page.locator('#offlineStatus')).to_contain_text('All 3,000 levels',timeout=30000)
    close_panel(page)
    for width,height in [(320,640),(360,740),(390,844),(667,375),(768,1024)]:
        page.set_viewport_size({'width':width,'height':height})
        fit(page,str(width)+'x'+str(height)+' large-text story')
    page.set_viewport_size({'width':390,'height':844})
    page.locator('.mobile-nav [data-panel="map"]').click()
    expect(page.locator('.chapter-row')).to_have_count(60)
    fit(page,'390px world panel')
    close_panel(page)
    page.locator('.mobile-nav [data-panel="journal"]').click()
    page.locator('#journalSearch').fill('forest')
    expect(page.locator('.journal-entry')).to_have_count(1)
    close_panel(page)
    page.wait_for_function('navigator.serviceWorker.controller !== null')
    mobile.set_offline(True)
    page.reload(wait_until='domcontentloaded')
    page.locator('#continueButton').click()
    expect(page.locator('#levelMeta')).to_have_text('LEVEL 002')
    tap(page,'#choices .choice-card:nth-child(1)');tap(page,'#choices .choice-card:nth-child(1)')
    expect(page.locator('#outcomeBox')).to_be_visible()
    page.locator('#nextButton').click()
    expect(page.locator('#levelMeta')).to_have_text('LEVEL 003')
    results.append('Mobile network-disabled reload, resume, choice and advance: passed')
    mobile.close()

    desktop=browser.new_context(viewport={'width':1440,'height':900},accept_downloads=True)
    page=desktop.new_page()
    page.on('pageerror', lambda error: own_errors.append(str(error)))
    page.goto(ORIGIN,wait_until='domcontentloaded')
    page.locator('#newGameButton').click()
    fit(page,'1440px desktop')
    page.locator('.side-rail [data-panel="settings"]').click()
    expect(page.locator('#offlineStatus')).to_contain_text('All 3,000 levels',timeout=30000)
    fixture=page.evaluate('''() => ({app:'the-quiet-within',version:2,save:{version:2,name:'Late audit',level:2999,choices:Object.fromEntries(window.QuietStory.levels.slice(0,2998).map(l=>[l.id,l.choices.find(c=>!c.requires).label])),journal:window.QuietStory.levels.slice(0,2998).flatMap(l=>[{text:l.choices[0].journal||l.title,type:'journey',level:l.id,time:1234},{text:l.paragraphs.join(' '),type:'place',level:l.id,time:1234}]),startedAt:1234,updatedAt:1234}})''')
    page.locator('#importSave').set_input_files({'name':'late.quiet.json','mimeType':'application/json','buffer':json.dumps(fixture).encode()})
    expect(page.locator('#levelMeta')).to_have_text('LEVEL 2999',timeout=30000)
    page.keyboard.press('1');expect(page.locator('#outcomeBox')).to_be_visible()
    page.locator('#nextButton').click();expect(page.locator('#levelMeta')).to_have_text('LEVEL 3000')
    page.keyboard.press('1');expect(page.locator('#journeyEnd')).to_contain_text('3,000 levels')
    results.append('Real file import at level 2999, keyboard choice and level-3000 ending: passed')
    page.locator('.side-rail [data-panel="settings"]').click()
    with page.expect_download() as downloaded:
        page.locator('#exportSave').click()
    download=downloaded.value
    assert download.suggested_filename=='late-audit.quiet.json'
    data=json.loads(Path(download.path()).read_text())
    assert data['save']['level']==3000 and len(data['save']['choices'])==3000
    close_panel(page)
    page.wait_for_function('window.QuietStorage.snapshot?.slots?.["Late audit"]?.choices?.[3000] !== undefined')
    page.evaluate('localStorage.removeItem("quiet-within-saves-v1")')
    desktop.set_offline(True)
    page.reload(wait_until='domcontentloaded')
    page.locator('#continueButton').click()
    expect(page.locator('#levelMeta')).to_have_text('LEVEL 3000')
    expect(page.locator('#journeyEnd')).to_be_visible()
    fit(page,'Desktop offline restored ending')
    results.append('Desktop offline reload, full-save download and IndexedDB recovery: passed')
    desktop.close()
    with tempfile.TemporaryDirectory(prefix='quiet-folder-') as folder:
        with zipfile.ZipFile('quiet-within-offline.zip') as archive: archive.extractall(folder)
        local=browser.new_context(offline=True)
        page=local.new_page();page.on('pageerror',lambda error:own_errors.append(str(error)))
        page.goto((Path(folder)/'quiet-within/index.html').as_uri(),wait_until='load')
        page.locator('#newGameButton').click()
        expect(page.locator('#gameScreen')).to_be_visible()
        assert page.evaluate('window.QuietStory.levels.length')==3000
        page.keyboard.press('1');page.locator('#nextButton').click()
        expect(page.locator('#levelMeta')).to_have_text('LEVEL 002')
        results.append('Extracted PC folder, file:// launch with network disabled: passed')
        local.close()
    browser.close()
    assert not own_errors, own_errors
print(json.dumps({'checks':results,'uncaughtAppErrors':own_errors},indent=2))
