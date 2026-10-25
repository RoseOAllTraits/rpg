from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
files = ['index.html','styles.css','game.js','story.js','chapter-arcs.js','campaign.js','storage.js','offline.js','meditations.js','sky.js','read-aloud.js','sw.js','manifest.webmanifest','favicon.svg','icons/icon-192.png','icons/icon-512.png','icons/apple-touch.png','OFFLINE.md']
with ZipFile('quiet-within-offline.zip', 'w', ZIP_DEFLATED) as archive:
    for file in files:
        assert Path(file).is_file(), file
        archive.write(file, 'quiet-within/' + file)
print('Offline folder:', Path('quiet-within-offline.zip').stat().st_size, 'bytes;', len(files), 'files')
