const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements=new Map(),stored=new Map();let blocked=false;
const fake=()=>({hidden:false,textContent:'',classList:{add(){},remove(){},toggle(){}},style:{setProperty(){}},focus(){},querySelector(){return fake()},setAttribute(){}});
const ctx={window:{},document:{querySelector(s){if(!elements.has(s))elements.set(s,fake());return elements.get(s)},querySelectorAll(){return []}},localStorage:{getItem(k){return stored.get(k)||null},setItem(k,v){if(blocked)throw Error('Quota');stored.set(k,v)}},console,Date,Intl,Object,Array,Number,String,Math,JSON,setTimeout(){},clearTimeout(){}};vm.createContext(ctx);
for(const file of ['story.js','chapter-arcs.js','campaign.js','meditations.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
const source=fs.readFileSync('game.js','utf8');const code=source.slice(0,source.lastIndexOf('init();'))+'window.Test={freshSave,normalizeSave,normalizeDatabase,normalizeSettings,requirementsMet,validateStoryData,readSaves,writeSaves,state,endingMarkup};})();';vm.runInContext(code,ctx);
const t=ctx.window.Test,{levels,chapters}=ctx.window.QuietStory,issues=t.validateStoryData();
if(issues.length)console.log(issues.slice(0,80));assert.equal(issues.length,0,'Story validation');
assert.equal(chapters.length,60);assert.equal(levels.length,3000);assert.equal(ctx.window.QuietMeditations.length,25);
let campaign;
const coverage=new Set();
for(let run=0;run<8;run++){
 let save=t.freshSave('Journey '+run);
 for(const level of levels){
  save.level=level.id;const choices=level.choices.filter(c=>t.requirementsMet(c.requires,save));assert(choices.length>=2,'No route at '+level.id);
  const c=choices[run<3?Math.min(run,choices.length-1):run===3?(choices.length>3?choices.length-1:0):Math.floor(Math.random()*choices.length)];
  assert(c.preview&&c.outcome&&c.detail);coverage.add(level.id+':'+c.label);save.choices[level.id]=c.label;
  for(const [key,n] of Object.entries(c.stats||{}))save.stats[key]=Math.min(999,(save.stats[key]||0)+n);
  Object.assign(save.flags,c.flags||{});Object.assign(save.characters,c.characters||{});if(c.quest)save.quests[c.quest.id]={...save.quests[c.quest.id],...c.quest};
  for(const item of c.items||[])if(!save.inventory.includes(item)){save.inventory.push(item);save.itemNotes[item]={level:level.id,time:123};}
  if(level.id%500===0){const replay=t.normalizeSave(save);assert.equal(Object.keys(replay.choices).length,level.id);assert.equal(JSON.stringify(replay.flags),JSON.stringify(save.flags));assert.equal(JSON.stringify(replay.inventory),JSON.stringify(save.inventory));assert.equal(JSON.stringify(replay.quests),JSON.stringify(save.quests));assert.equal(JSON.stringify(replay.stats),JSON.stringify(save.stats));}
 }
 const replay=t.normalizeSave(JSON.parse(JSON.stringify(save)));assert.equal(replay.level,3000);assert.equal(Object.keys(replay.choices).length,3000);assert.equal(replay.visited.length,3000);t.state.save=replay;assert(t.endingMarkup().includes('3,000 levels'));campaign=replay;
}
for(let run=0;run<800;run++){let raw=t.freshSave('Opening audit');for(const level of levels.slice(0,15)){raw.level=level.id;const replay=t.normalizeSave(raw);const available=level.choices.filter(c=>t.requirementsMet(c.requires,replay));const c=available[Math.floor(Math.random()*available.length)];raw.choices[level.id]=c.label;coverage.add(level.id+':'+c.label);}}
const total=levels.reduce((n,l)=>n+l.choices.length,0);if(coverage.size!==total)console.log('Missing',levels.flatMap(l=>l.choices.filter(c=>!coverage.has(l.id+":"+c.label)).map(c=>l.id+":"+c.label)));assert.equal(coverage.size,total,'All choices reachable in full journeys');
const old=t.freshSave('Old');old.version=1;old.level=15;assert.equal(t.normalizeSave(old).level,1);assert.equal(t.normalizeSave(old).version,2);
const invalid=t.normalizeDatabase({slots:{bad:{version:999,private:'preserve'},good:campaign}});assert.equal(invalid.quarantine[0].raw.private,'preserve');t.writeSaves(invalid);assert.equal(t.readSaves().quarantine.length,1);
blocked=true;const db=t.readSaves();db.slots.session=t.freshSave('session');assert.equal(t.writeSaves(db),false);assert(t.readSaves().slots.session);
for(const theme of ['midnight','parchment','forest','ocean','dusk','ember','rose','slate','sand'])assert.equal(t.normalizeSettings({theme}).theme,theme);
campaign.journal=levels.flatMap(l=>[{text:l.choices.find(c=>c.label===campaign.choices[l.id]).journal||l.title,type:'journey',level:l.id,time:123},{text:'You arrived at '+l.place+'.',type:'place',level:l.id,time:123}]);assert.equal(t.normalizeSave(campaign).journal.length,6000);
const bytes=Buffer.byteLength(JSON.stringify({app:'the-quiet-within',version:2,save:campaign}));assert(bytes<10*1024*1024);
console.log(JSON.stringify({chapters:60,levels:3000,choices:total,reachableChoices:coverage.size,fullJourneys:8,openingJourneys:800,chapterReplayChecks:8*6,items:Object.keys(ctx.window.QuietStory.itemMetadata).length,fullSaveBytes:bytes,migrations:'pass',recovery:'pass'},null,2));
