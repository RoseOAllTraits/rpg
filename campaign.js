(()=>{
 'use strict';
 const {chapters,levels,itemDescriptions,itemMetadata}=window.QuietStory;
 const phaseNames=['The First Account','What the Record Says','A Useful Limit','The Small Trial','What to Carry','When Conditions Change','The Other Person’s Need','Looking Again','A Clear Handover','A Place to Leave It'];
 const skies=['Morning: thin light reaches the worktable.','Late morning: wind lifts the corner of a notice.','Noon: a moving shadow crosses the doorway.','Afternoon: a brief rain passes along the road.','Evening: lamps begin to appear in neighboring windows.'];
 const weather=['The air smells of wet earth.','Somewhere nearby, a gate closes.','A cart moves slowly past the entrance.','The room is warmer near the open door.','A bird calls once beyond the roofs.'];
 const phases=[
  ['You arrive while the discussion is still taking shape. Someone has already proposed a solution, but nobody has written down who it serves or what it might cost.', '"Before you decide," {guide} says, "see what is actually happening. You do not have to take over just because you noticed."'],
  ['An account lies on the table beside a newer note. They describe the same situation differently. The discrepancy may matter more than the confidence with which either version is told.', '"This is what we recorded," {guide} says. {other} points to a missing detail. Neither has to be lying for the record to be incomplete.'],
  ['There is enough time for a small piece of work, not every change that has been suggested. The people available today will not all be available tomorrow.', 'A blank space has been left beside the next task. {other} waits before offering their name. "If I say yes to this part, it is only this part."'],
  ['A possible approach is ready to be tried. It has not been tested under the conditions in which people will actually use it.', '{guide} asks where the trial should stop if it reveals a problem. The question makes the plan smaller, but also easier to trust.'],
  ['The work has produced notes, questions, and a small number of things worth keeping. Carrying everything would make the next stage harder rather than safer.', '{other} sorts what must stay here from what another person could use. A record can travel without taking the shared supplies away.'],
  ['The conditions shift before anyone is ready to declare the job complete. A detail that seemed minor earlier now affects the next decision.', '"We can change the plan," {guide} says. "That does not mean the first decision was dishonest. It means we have another observation."'],
  ['The proposed arrangement helps one person and asks more of another. Nobody noticed the difference until both people stood beside the same plan.', '{other} describes the part they cannot manage. There is a pause in which it would be easy to argue with the limit instead of understanding it.'],
  ['You return to the part of the work that was hardest to see at first. The trial has left evidence, though not a guarantee about every future day.', '{guide} puts the earlier account beside what can be observed now. "What would you change if you did not need to defend your first answer?"'],
  ['Someone else will need to understand the work after you leave. An impressive description would be easier to write than a useful one.', 'The handover has three spaces: what was tried, what remains uncertain, and who has agreed to the next check. {other} leaves the last space blank until someone consents.'],
  ['The work reaches a stopping place. There are useful changes to preserve and limits that have not vanished. Another task is already waiting elsewhere.', '{guide} closes the record without calling the whole matter finished. You can decide how to leave this particular responsibility without deciding what your whole journey means.']
 ];
 const routes=[
  [
   ['Look at the situation before offering a plan','A firsthand observation may reveal a detail the discussion missed.','You walk the relevant ground with {guide}. The problem is still present, but a specific part of it can now be checked rather than guessed.','awareness','evidence'],
   ['Ask who needs the change most','A quieter person may describe a need the proposed solution does not cover.','{other} describes how the situation affects an ordinary day. You write that need beside the proposed remedy instead of assuming they are the same thing.','compassion','heard'],
   ['Offer one short visit, not an open-ended promise','An honest limit may make a smaller contribution possible.','You explain how long you can stay. {guide} marks the task as shared work, not a duty silently transferred to a traveler.','equanimity','bounded']
  ],
  [
   ['Compare the two accounts','You may find a useful discrepancy without deciding who is a better person.','You compare the dates and the observations. One account describes an earlier condition. {guide} adds a date to both, so a past fact need not masquerade as a present one.','clarity','evidence'],
   ['Hear the missing account first','The record may become more accurate when someone can describe its omissions.','{other} names what happened between the two entries. You add the account with its source rather than replacing every other account with it.','compassion','heard'],
   ['Work from the newer note for now','A quicker start may leave an assumption that still needs checking.','You use the latest note to begin. {guide} circles the unverified detail. Work moves sooner, but the circle remains a warning rather than a decorative mark.','acceptance','provisional']
  ],
  [
   ['Choose a task with a clear stopping point','A bounded task may be easier to finish and pass on safely.','You agree on one piece of work and the condition that ends it. The larger need remains visible, without becoming the measure of whether your contribution counts.','simplicity','bounded'],
   ['Ask what can be shared today','A consent-based arrangement may protect a person who has been carrying too much.','{other} offers one part and declines another. {guide} finds a second willing pair of hands. The plan changes to fit actual capacity.','compassion','heard'],
   ['Make the smallest reversible change','A modest trial may preserve options while leaving some needs unmet.','You choose a change that can be undone. It addresses only part of the problem. Nobody crosses the remaining work off the board.','clarity','trial']
  ],
  [
   ['Test where a failure would matter','A careful trial may expose a weak point before others depend on it.','You and {guide} test the difficult part under controlled conditions. A weakness appears while it is still possible to stop and adjust without involving everyone else.','clarity','tested'],
   ['Invite the person using it to try','The trial may reveal a practical obstacle that its makers did not notice.','{other} tries the arrangement and pauses at a point you had passed without difficulty. You revise that part instead of asking them to become a different kind of user.','compassion','heard'],
   ['Use it temporarily with a clear warning','The immediate need may be met while a verification task remains.','You mark the arrangement as temporary and explain its limit. It can serve a narrow purpose today; it is not offered as a promise about untested conditions.','acceptance','provisional']
  ],
  [
   ['Keep a copy of the field notes','A small record may help you compare later observations without taking shared supplies.','{guide} gives you a copy of the observations. You leave the working record here and carry only what will help you remember how the decision was made.','awareness','notes'],
   ['Leave the record where everyone can use it','A shared reference may be more useful here than in your pack.','You put the notes beside the work instead of taking them. {other} adds a plain heading so a newcomer can understand why they matter.','simplicity','shared'],
   ['Ask someone to explain the record back','A short conversation may reveal whether the notes are actually clear.','{other} reads the notes and asks about a word you thought was obvious. You replace it with a description of an action someone can actually carry out.','clarity','heard']
  ],
  [
   ['Review the observation before defending the plan','New conditions may require a revision rather than more effort on the same approach.','You compare the changed condition with the original aim. {guide} removes a step that is no longer useful. Revising the plan does not erase the care taken earlier.','clarity','adapted'],
   ['Ask who is carrying the extra work','The change may be possible without quietly exhausting the most reliable helper.','{other} names the extra burden. You reduce the scope and ask for consent to what remains, rather than calling endurance the only available solution.','compassion','bounded'],
   ['Keep the useful part and label the limit','Partial usefulness may be preserved without pretending the changed conditions are solved.','You retain the part that still works. Beside it, {guide} writes what it no longer covers. The distinction keeps a useful tool from becoming a misleading promise.','acceptance','provisional']
  ],
  [
   ['Ask for the limit in practical terms','A specific limit may make the disagreement easier to work with.','{other} describes what they can do, when they can do it, and what they cannot take on. The plan now has enough detail to change without treating a boundary as an insult.','clarity','heard'],
   ['Offer to change your own part','Adjusting a shared task may be more useful than persuading someone past their capacity.','You take a different bounded part, after checking your own capacity. {guide} records the change so your offer does not become an unspoken permanent duty.','compassion','bounded'],
   ['Pause the disputed part','A pause may leave work unfinished while protecting consent and safety.','You leave the disputed part inactive and explain why. Other work can continue. The blank space on the board records an unresolved need, not a name to blame.','equanimity','paused']
  ],
  [
   ['Compare the result with the original need','A review may show a useful result and a remaining shortfall at the same time.','You ask whether the change serves the need first described. Some of it does; another part needs a later check. {guide} records both without turning the review into a verdict on anyone.','awareness','reviewed'],
   ['Ask for a second set of eyes','Another observer may see a limit that the people doing the work have grown used to.','{other} approaches without being told what to notice. Their first question exposes an unclear step. You change the instruction rather than coach them toward praise.','compassion','reviewed'],
   ['Remove a claim the evidence cannot support','A more honest description may be less impressive and more reliable.','You cross out a broad assurance and replace it with the conditions actually checked. The account loses some confidence and gains something a stranger can use.','clarity','reviewed']
  ],
  [
   ['Write a handover someone else can follow','A practical record may keep knowledge from depending on your continued presence.','You write the checked steps and the unresolved questions. {other} follows the record once while you are still present, and you correct the part that was unclear.','clarity','handover'],
   ['Ask for two willing keepers, not one hero','Sharing care may make the arrangement more sustainable without pretending everyone has equal capacity.','Two people agree to different parts of the next check. {guide} leaves an alternative contact rather than assuming neither will ever be unavailable.','compassion','shared'],
   ['Leave the next responsibility unassigned honestly','An explicit gap may be safer than placing a name beside a promise never made.','You record that no one has yet accepted the remaining task. The gap is visible to the next person who reads the board. No reluctant helper is made responsible by silence.','equanimity','pending']
  ],
  [
   ['Agree on the next shared check','This responsibility may reach a useful resting point with continuing care clearly named.','You agree on a modest next check with the people who will be here. The task leaves your hands as a shared arrangement, not as a claim that nothing can go wrong again.','compassion','settled'],
   ['Record what still needs attention','An honest unfinished account may be the most useful result you can leave.','You name the remaining uncertainty and where the record can be found. {guide} accepts the account without pretending that writing something down has physically repaired it.','clarity','pending'],
   ['Thank the others and continue','You may leave with a clear goodbye without turning departure into indifference.','You thank the people who worked beside you. {other} keeps the local record. The work remains theirs to continue, and you leave without calling either staying or leaving the only caring choice.','equanimity','departed']
  ]
 ];
 const originalCount=levels.length;
 chapters.forEach((chapter,ci)=>{
  const [region,guide,role,other,episodes]=window.QuietArcs[ci];
  const note='Field notes: '+region;
  itemDescriptions[note]='A concise record from '+region+', noting what was observed, what was tried, and what still needs checking.';
  itemMetadata[note]={category:'Field record',discoveredAt:region};
  chapter.region=region;chapter.guide=guide;
  for(let e=0;e<5;e++)for(let p=0;p<10;p++){
   const id=chapter.first+e*10+p;if(id<=originalCount)continue;
   const [title,problem,aim]=episodes[e],key='c'+chapter.id+'e'+e+'_',questId='chapter-'+chapter.id;
   const fill=text=>text.replaceAll('{guide}',guide).replaceAll('{other}',other);
   const paragraphs=[(p===0?guide+', the '+role+', meets you in '+region+'. ': 'At '+region+', the matter of '+title.toLowerCase()+' is still before you. ')+problem[0].toUpperCase()+problem.slice(1)+'. The practical aim is to '+aim+'.',...phases[p].map(fill)];
   if(p===0&&e===0&&ci>0)paragraphs.unshift('The road from '+window.QuietArcs[ci-1][0]+' has brought you into '+region+'. What you carried from the previous region remains with you; its people do not vanish because your road has moved on.');
   const choices=routes[p].map(([label,preview,outcome,stat,flag],index)=>({
    label,detail:fill(index===0?'Stay with what can be checked in '+title.toLowerCase()+'.':index===1?'Let another person’s experience shape this next step.':'Choose a limited response without claiming the whole problem.'),preview,
    outcome:fill(outcome)+' Here, that means working toward the attempt to '+aim+'.',
    bearing:fill('In '+region+', '+title.toLowerCase()+' now has '+(flag==='pending'?'an explicitly unfinished next step.':flag==='provisional'?'a temporary response whose limits remain visible.':'a clearer account of what was tried.')),
    stats:{[stat]:1},flags:{[key+flag]:true},
    characters:{[guide]:fill('At '+region+', you worked with {guide} on '+title.toLowerCase()+'. '+(index===0?'You paid attention to what could be checked.':index===1?'You made room for someone else’s account.':'You named a limit rather than promising certainty.')),[other]:fill('{other} helped describe the practical effects of '+title.toLowerCase()+'.')},
    quest:{id:questId,title:chapter.title,description:'Find accountable next steps for the five situations in '+region+'.',status:e===4&&p===9?'completed':'active',stage:title+': '+(p===9?(index===0?'A next check is agreed.':index===1?'The unfinished work is documented.':'The local record has been handed back.'):'Step '+(p+1)+' of 10: '+phaseNames[p].toLowerCase()+'.')},
    journal:fill('In '+region+', '+title.toLowerCase()+': '+label.toLowerCase()+'. '+outcome)
   }));
   if(e===2&&p===4)choices[0].items=[note];
   if(p===7&&!(ci===0&&e===1)){const extra={label:'Use the earlier observation as a test',detail:'Return to evidence gathered here rather than starting with a guess.',preview:'An observation from earlier in this situation may help you check the changed result.',requires:{flags:[key+'evidence']},outcome:guide+' helps you repeat the earlier observation under today’s conditions. The comparison reveals which part of the change is reliable and which still needs attention. You mark the difference rather than declaring the entire plan a success.',bearing:'An earlier observation has become a practical comparison, not a fixed answer.',stats:{clarity:1,awareness:1},flags:{[key+'reviewed']:true},journal:'At '+region+', you used an earlier observation to review '+title.toLowerCase()+'.',quest:{...choices[0].quest}};choices.push(extra);}
   if(p===8&&e>=3)choices.push({label:'Consult your field notes together',detail:'Use the record you chose to carry, without treating it as unquestionable.',preview:'Your notes may reveal a useful connection or an assumption worth revising.',requires:{items:[note]},outcome:other+' reads your field notes beside the current handover. A familiar pattern becomes easier to name, but you keep today’s observations separate from yesterday’s conclusions. '+guide+' adds the useful comparison to the shared record.',bearing:'A carried record has helped without replacing the people here.',stats:{clarity:1},flags:{[key+'handover']:true},quest:{...choices[0].quest},journal:'You consulted your notes from '+region+' while handing over '+title.toLowerCase()+'.'});
   levels.push({id,chapter:chapter.id,title:title+' / '+phaseNames[p],place:region+' - '+title,weather:skies[e]+' '+weather[(ci+p)%weather.length],bearing:guide+' has asked for a useful next step, not a perfect answer.',paragraphs,choices,
    variants:[
     ...(p>0&&!(ci===0&&e===1)?[{requires:{flags:[key+'evidence']},text:'Your earlier observation remains in the record. '+guide+' asks what still matches it, and what might have changed.'},{requires:{flags:[key+'heard']},text:other+' recognizes the concern you made room for earlier. It is part of the plan now, rather than an interruption to it.'},...(p>=2?[{requires:{flags:[key+'provisional']},text:'A temporary measure from earlier still needs its limits checked. Calling it temporary did not remove the responsibility to review it.'}]:[])]:[]),
     ...(ci>0&&e===0&&p===0?[{requires:{quests:{['chapter-'+ci]:'completed'}},text:'You left an accountable record in the previous region. Completing its chapter did not mean every local need disappeared.'}]:[])
    ]});
  }
 });
 window.QuietStory.levelById=new Map(levels.map(level=>[level.id,level]));
 window.QuietStory.totalLevels=levels.length;
})();
