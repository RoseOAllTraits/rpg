const chapters = [
  ['The Restless Beginning','A crowded settlement where everyone seems to be going somewhere.'],
  ['The Tyranny of Thought','A city of imagined futures and rehearsed regrets.'],
  ['The Moment That Exists','A valley whose people keep different kinds of time.'],
  ['The Art of Allowing','A river settlement facing a flood it cannot command.'],
  ['The Self That Must Be Protected','A court where recognition is counted aloud.'],
  ['The Weight of Yesterday','An abandoned town with several versions of one disaster.'],
  ['The Fear of Tomorrow','A council preparing for every possible calamity.'],
  ['Desire Without End','A market city where every purchase reveals another lack.'],
  ['Power Without Domination','Rival communities learning how to share a border.'],
  ['The Strength of Softness','A mountain pass that defeats every rigid plan.'],
  ['The Quiet Between Words','A settlement where listening has become rare.'],
  ['Compassion Without Self-Abandonment','A region rebuilding with limited hands and supplies.'],
  ['The Natural Way','A forest shaped by well-meant interference.'],
  ['The Mirror of Relationships','Communities negotiating love, trust, and change.'],
  ['Loss and Impermanence','A coastal city deciding what can still be carried.'],
  ['The Shadow Within','A region that makes hidden contradictions visible.'],
  ['The Ordinary Miracle','A farming village with no prophecy to fulfill.'],
  ['Freedom in Action','Communities facing choices with no perfect answer.'],
  ['The Final Search','A gathering of people who turned progress into identity.'],
  ['The Open Gate','A return to familiar places, changed but unfinished.'],
  ["The Unsent Letter","A post house holding messages people could not bring themselves to send."],
  ["The Shape of Enough","An orchard deciding what to keep and what to share."],
  ["A Room for Anger","A kiln yard learning to disagree without making enemies."],
  ["What Rest Requires","A harbor where even the resting boats are expected to work."],
  ["The Borrowed Voice","A school whose pupils repeat answers nobody has tested."],
  ["Trust Without Certainty","Two ferries crossing a river with no fixed banks."],
  ["The Unfinished House","Builders deciding when a home can be inhabited."],
  ["A Place for Grief","A hillside garden that makes room for what cannot be repaired."],
  ["When Help Is Refused","A wayside refuge learning the limits of an invitation."],
  ["The Work of Repair","A workshop where apologies need something to follow them."],
  ["Between Two Homes","Travelers making a life without a single place to return to."],
  ["An Honest No","A small council learning that boundaries can protect a welcome."],
  ["The Weather Inside","A moor where moods and weather change at different speeds."],
  ["What We Inherit","A village sorting useful traditions from old injuries."],
  ["The Cost of Being Right","A market dispute in which every witness has missed something."],
  ["The Courage to Ask","A well house where needs have become difficult to name."],
  ["A Slower Kind of Hope","A nursery tending trees that will outlive its keepers."],
  ["The Empty Chair","A household learning to gather after someone has left."],
  ["Work Without Applause","Night workers keeping an ordinary town alive."],
  ["The Moving Shore","A coastal road that cannot be fixed in one place."],
  ["Learning to Receive","A traveler shelter whose keeper struggles to accept help."],
  ["The Name We Carry","A registry that mistakes descriptions for whole people."],
  ["After the Apology","Neighbors deciding what trust would look like in practice."],
  ["The Edge of Knowing","An observatory where useful questions outnumber answers."],
  ["Making Room","A crowded courtyard negotiating space without erasing anyone."],
  ["The Patient Fire","A winter workshop balancing urgency and careful work."],
  ["The Stories We Repeat","A public archive comparing memory with what remains."],
  ["The Door Left Open","A border village deciding how to welcome without exhausting itself."],
  ["The Weight of Praise","A festival whose honored guest would rather be ordinary."],
  ["When Plans Break","A caravan adapting after its familiar route is lost."],
  ["A Common Ground","Two gardens sharing a wall and a water supply."],
  ["The Gentle Return","A return to a place that has changed without you."],
  ["The Things We Keep","A storehouse making room without discarding its history."],
  ["Listening Again","Old friends hearing how their lives have diverged."],
  ["The Ordinary Choice","A day with no grand turning point and many small decisions."],
  ["Beyond the Answer","A gathering that has stopped expecting one final explanation."],
  ["The Light We Tend","A lantern house whose care passes between many hands."],
  ["No Perfect Arrival","A town at the end of several roads, still doing its washing."],
  ["Another Beginning","Familiar travelers choosing what to carry into a new season."],
  ["The Road Remains","An open horizon that does not require a finished self."]
].map(([title,description],i)=>({id:i+1,title,description,first: i*50+1,last:(i+1)*50}));

const levels = [
 {id:1,title:'The Road That Never Ends',place:'The Crossroads of Many Promises',weather:'Early morning · a fine mist drifts between the trees.',bearing:'You have just arrived. The road offers two directions and no explanation.',paragraphs:[
  'You awaken beside a stone road. You do not remember arriving.',
  'To the east, towers catch the morning light. To the west, a narrow path disappears beneath the trees. Two signs lean toward the road. THE CITY OF BECOMING: Everything you want is waiting there. THE QUIET VILLAGE: Nothing important happens here.',
  'A traveler passes with a pack heavy enough to pull one shoulder low. “First time here? Everything changes when you become the person you were meant to be.” They smile as if the matter is settled and walk east.',
  'The mist moves through the grass. Somewhere in the trees, a bird calls. Nothing asks you to interpret the sound. The moment passes.'
 ],choices:[
  {label:'Follow the traveler east',preview:"Meet the courier on the city road, where belonging may come with expectations.",detail:'Find out what the bright city promises.',outcome:'The city towers draw nearer. You keep pace with the traveler, who introduces themself as Sella, a courier between places. “There is a place for everyone there,” they say. “If you can prove you belong.” The road is smooth. Your questions are not.',bearing:'The City of Becoming lies ahead. Sella is traveling with you for now.',stats:{clarity:1},flags:{cityRoad:true},characters:{sella:'You walked east with Sella, a courier who spoke of finding a place in the city.'},journal:'You chose the road toward the City of Becoming. A courier named Sella travels beside you.'},
  {label:'Take the path beneath the trees',preview:"A quieter route may reveal an ordinary object worth carrying.",detail:'See why the village is so easily dismissed.',outcome:'The forest path narrows, then opens beside a low stone wall. A hand-painted arrow points toward a village roof between the branches. The traveler is already out of sight. You hear a broom moving over a doorstep.',bearing:'A forest path is now familiar to you.',stats:{simplicity:1},flags:{forestRoad:true},items:['Smooth river stone'],journal:'You chose the less-traveled forest path and found a smooth river stone near the wall.'},
  {label:'Examine the signs',preview:"Closer inspection may reveal a warning the large lettering leaves out.",detail:'Look closely before choosing a direction.',outcome:'The lettering on both signs is fresh, but the wood is old. Under the city sign, someone has scratched a smaller line: “You may leave when you like.” The village sign has no such promise, only a tiny painted bird.',bearing:'The signs were made by someone who knows both roads.',stats:{awareness:1,clarity:1},flags:{readSigns:true},journal:'You noticed a quiet warning beneath the city sign and a bird painted on the village marker.'},
  {label:'Sit beside the road',preview:"A pause may let you notice the morning without settling your destination.",detail:'Let the morning pass before deciding.',outcome:'You sit. The road carries footsteps in both directions. The grass is wet at the hem of your trousers. Nothing is solved while you wait, and the morning does not punish you for it.',bearing:'You allowed a pause without turning it into a promise.',stats:{awareness:1},journal:'You sat beside the road and let the morning be a morning.'},
  {label:'Call after the traveler',preview:"A direct question may open a more honest conversation with the traveler.",detail:'Ask what “meant to be” means to them.',outcome:'Sella stops. “I used to think it meant a hidden answer,” they say. “Now I think it means whatever I can keep doing without lying to myself.” They adjust the pack. “That is not much of a sales pitch, is it?”',bearing:'Sella is willing to answer a direct question.',stats:{clarity:1},flags:{metSella:true},characters:{sella:'You asked Sella what they meant. They answered honestly, without pretending to know your destination.'},journal:'Sella admitted they no longer believe there is one hidden role waiting for everyone.'}
 ]},
 {id:2,title:'A Place at the Table',place:'Brindle, the roadside settlement',weather:'Late morning · chimney smoke leans west in the wind.',bearing:'A small settlement sits where the road meets a stream.',paragraphs:[
  'The settlement is called Brindle. Its main street is crowded, though almost every doorway stands open. People carry bundles, ledgers, framed certificates, and covered dishes from one place to another.',
  'At a public table, a baker named Tovin has set out bread for anyone passing through. Nobody sits. A notice beside the loaf reads: “TAKE ONE AFTER YOU HAVE EARNED YOUR PLACE.”',
  'Tovin catches you reading it. “I wrote that after the flour went missing,” they say. “I keep meaning to take it down. Then I remember why I put it up.”'
 ],choices:[
  {label:'Ask Tovin what happened to the flour',preview:"You may learn why the table became guarded, without settling the dispute yet.",detail:'Hear the story before deciding what would help.',outcome:'“A hungry family took a sack,” Tovin says. “I was angry. Still am, some days. The sign was meant to stop it happening again. Mostly it stops people from sitting down.” A child watches from the doorway across the street.',bearing:'Tovin is wary of the table becoming a source of conflict.',stats:{awareness:1},flags:{heardTovin:true},characters:{tovin:'You listened to Tovin explain why the table became guarded.'},journal:'Tovin told you why the public bread table now carries a condition.'},
  {label:'Offer to help make the table useful again',preview:"Tovin may name a practical task you can help with, beginning a shared responsibility.",detail:'Ask what kind of help is wanted.',outcome:'Tovin considers this. “A lid for the flour bin would help. So would someone asking the neighbors what they can spare, instead of deciding for them.” It is not a large task. It is also not yours alone.',bearing:'Tovin named two practical ways to help, neither requiring you to take over.',stats:{compassion:1},flags:{tableQuest:true},quest:{id:'table',title:'The Shared Table',description:'Help Tovin make the public table welcoming without ignoring the earlier shortage.',status:'active',stage:'Find a usable lid and ask the neighbors what they can contribute.'},journal:'Tovin asked for practical help: a flour-bin lid and a conversation with the neighbors.'},
  {label:'Leave a coin and keep walking',preview:"A small contribution may help the supplies without changing who feels welcome.",detail:'Contribute quietly, without asking for a place.',outcome:'The coin lands on the edge of the table. Tovin sees it but does not call after you. The bread remains covered. Across the street, the child closes the door.',bearing:'You offered help, but the problem at the table remains.',stats:{compassion:1},flags:{leftCoin:true},journal:'You left a coin on the public table. It did not resolve the dispute.'},
  {label:'Tell Tovin the sign is unkind',preview:"Your objection may change the sign without removing Tovin’s concern.",detail:'Say plainly what you think, and risk an argument.',outcome:'“It is,” Tovin says, more sharply than you expect. Then they look at the sign. “And the missing flour was real.” Neither statement cancels the other. Tovin takes the notice down, but folds it rather than throwing it away.',bearing:'Tovin heard your objection. Their concern about the missing flour remains.',stats:{clarity:1},flags:{challengedSign:true},characters:{tovin:'You challenged the sign. Tovin removed it, while remaining concerned about the shortage.'},journal:'You told Tovin the sign was unkind. They took it down without dismissing what happened.'}
 ]},
 {id:3,title:'The Water Keeps Its Own Time',place:'The footbridge at Brindle',weather:'Afternoon · the stream rises against its banks.',bearing:'The settlement is behind you; the stream is louder than before.',paragraphs:[
  'A narrow footbridge crosses the stream beyond the houses. A cart driver is trying to guide a loaded wheelbarrow across alone.',
  'The water has risen since morning. A length of rope is tied to the bridge rail, though one knot has begun to slip. The cart driver looks from the water to the wheelbarrow.',
  '“I can make it,” they say. They do not sound certain.'
 ],choices:[
  {label:'Check the knot and the downstream bank',preview:"Inspection may identify a weak point and a safer place along the bank.",detail:'Gather facts before attempting the crossing.',outcome:'The rope is sound except for the last knot. Downstream, the bank is shallow enough for a person to stand, but not for the loaded cart. The driver watches you inspect it. “That is more useful than a guess,” they say.',bearing:'You know where the rope is weak and where the bank is shallow.',stats:{clarity:1,awareness:1},flags:{bridgeChecked:true},journal:'You inspected the bridge and found the slipping knot before anyone crossed.'},
  {label:'Hold the rope while the driver crosses',preview:"Sharing the crossing may help the driver now while leaving a repair unfinished.",detail:'Act now, sharing the risk rather than leaving them alone.',outcome:'You brace the rope as the driver guides the cart across. The bridge shudders. On the far bank, the wheel catches, but the driver steadies it. Your hands ache. The knot still needs repair before another crossing.',bearing:'The crossing worked once. The bridge still needs attention.',stats:{compassion:1},flags:{crossedTogether:true},items:['Weathered cord'],journal:'You helped the driver cross. The bridge remains unsafe for repeated use.'},
  {label:'Tell the driver not to cross yet',preview:"A warning may lead to a slower route, and some frustration.",detail:'Be direct about the risk, even if they disagree.',outcome:'“Then help me find another way,” the driver says. Their voice is angry, but they turn from the bridge. Together you find a shallow ford farther upstream. The cart makes it across slowly.',bearing:'A clear warning changed the plan. The driver is safe, though frustrated.',stats:{equanimity:1},flags:{warnedDriver:true},journal:'You warned the driver away from the failing bridge and found a slower ford.'},
  {label:'Wait and watch the water',preview:"Watching may clarify the danger without making the bridge safer.",detail:'Give the stream a little time to show its direction.',outcome:'A branch spins in the eddy, then catches against a stone. The water is rising, not settling. Waiting gave you a clearer answer, but it did not make the crossing safer.',bearing:'The stream is still rising. A decision cannot be postponed indefinitely.',stats:{awareness:1},flags:{sawRisingWater:true},journal:'You waited long enough to see that the stream was continuing to rise.'}
 ]},
 {id:4,title:'What the Map Leaves Out',place:'The old mile house',weather:'Evening · rain ticks on a roof of mismatched slate.',bearing:'A weathered mile house offers shelter and an unmarked map.',paragraphs:[
  'The road reaches an old mile house with one dry room and a table scarred by compass points. An empty map is pinned beneath a brass weight. It shows rivers and hills, but no roads, borders, or names.',
  'An elderly mapmaker named Orra is mending a sleeve by the fire. “People keep asking me to finish it,” she says. “They want to know where they are before they have gone anywhere.”',
  'Outside, rain blurs the road into a gray ribbon.'
 ],choices:[
  {label:'Ask Orra how the blank map is used',preview:"Orra may entrust you with a map to fill through your own discoveries.",detail:'Find out whether it is unfinished or meant to stay open.',outcome:'“Take it with you,” Orra says. “Mark what you actually find. Leave room for what you have not.” She lifts the brass weight and gives you the paper. The map is still mostly empty.',bearing:'You carry a map that records discoveries, not promises.',stats:{simplicity:1,clarity:1},items:['Empty map'],flags:{hasMap:true},characters:{orra:'Orra gave you an empty map and urged you to record places after seeing them.'},journal:'Orra gave you an empty map and suggested marking only what you have actually seen.'},
  {label:'Ask Orra to draw the safest route',preview:"You may get a useful route whose reliability still depends on the weather.",detail:'A reliable path matters more than a blank page tonight.',outcome:'Orra draws a route around the flooded lowlands and marks one bridge in red. “This is safer today,” she says. “Not forever.” You fold the map carefully.',bearing:'You have a useful route, with a reminder that conditions change.',stats:{clarity:1},flags:{safeRoute:true},characters:{orra:'Orra drew a route that is safer in current conditions, while warning that weather changes it.'},journal:'Orra drew a route around the flooded lowlands and marked a bridge that may not remain safe.'},
  {label:'Help mend the sleeve',preview:"A small shared task may offer shelter and a closer acquaintance.",detail:'Stay with the task in front of you.',outcome:'The needle catches the cloth. Orra shows you how to turn the seam so it does not pull. The rain passes from a hard tapping to a softer one. The road can wait until morning.',bearing:'You spent the evening on a small, finished task.',stats:{simplicity:1,compassion:1},flags:{helpedOrra:true},characters:{orra:'You helped Orra mend a sleeve and shared a quiet evening at the mile house.'},journal:'You helped Orra mend a sleeve while the rain moved through.'},
  {label:'Step outside and check the rain',preview:"Checking outside may reveal how much the drawn route has changed.",detail:'See what the road is doing rather than guessing.',outcome:'The rain has eased, but the low path is already shining with runoff. Orra was right about the map: the road is different from the one drawn there yesterday.',bearing:'The low road is becoming difficult to use.',stats:{awareness:1},flags:{checkedRain:true},characters:{orra:'Orra’s route proved useful, though runoff changed the low road overnight.'},journal:'You checked the road after the rain and saw runoff covering the low path.'}
 ]},
 {id:5,title:'A Village That Does Not Hurry',place:'The upper path to Bellwether',weather:'Dawn · clouds thin above a distant ridge.',bearing:'Bellwether is visible beyond the ridge. The road is steep but open.',paragraphs:[
  'The climb toward Bellwether begins before sunrise. A bell rings once from somewhere beyond the ridge. No one answers it.',
  'Halfway up, you find a small marker set into the earth. It bears the same bird painted on the village sign. Beside it lies a cracked clay bowl, clean and dry beneath a shelf of stone.',
  'The climb has not made the kingdom quiet. Below, Brindle is waking. Smoke rises, doors open, and people begin the day with the problems they had yesterday.'
 ],choices:[
  {label:'Carry the cracked bowl to Bellwether',preview:"The bowl may become one of your useful, ordinary belongings.",detail:'It may belong to someone, or it may simply be useful.',outcome:'You settle the bowl carefully into your pack. It is ordinary clay, chipped at the rim. You carry it anyway. From the ridge, the village looks small enough to reach before the sun is high.',bearing:'You are approaching Bellwether with a few ordinary things and no certainty about what they mean.',stats:{compassion:1},items:['Cracked bowl'],flags:{bowlFound:true},journal:'You found a cracked bowl beneath the ridge and chose to carry it.'},
  {label:'Leave the bowl and continue uphill',preview:"You may reach the village without adding to what you carry.",detail:'Not every found object needs to become yours.',outcome:'You leave the bowl where it is. A small bird lands on the marker, then lifts away as you approach. Bellwether comes into view. Its roofs are weathered, and a thin line of smoke rises from the center.',bearing:'You reached the ridge without adding anything to your pack.',stats:{simplicity:1},flags:{leftBowl:true},journal:'You left the cracked bowl at the marker and continued toward Bellwether.'},
  {label:'Stop and look back at Brindle',preview:"Looking back may offer perspective without resolving Brindle’s troubles.",detail:'See the place as it is, not as a problem to solve.',outcome:'From here, Brindle is a scatter of roofs beside a narrow stream. You can see the public table in the square, though not whether anyone is sitting there. The view does not settle what should happen next.',bearing:'You can hold the village in view without knowing how its story ends.',stats:{awareness:1,equanimity:1},flags:{lookedBack:true},journal:'You looked back at Brindle from the ridge. Its unfinished troubles remained visible.'},
  {label:'Keep climbing without stopping',preview:"You may reach Bellwether sooner, with less energy to spare.",detail:'You have chosen a destination. Reach it.',outcome:'The path steepens. Your legs protest, and you continue. By the time Bellwether comes into view, you are tired and glad to see it. The bell rings once more, closer now.',bearing:'You reached the village by keeping to the climb.',stats:{equanimity:1},flags:{pressedOn:true},journal:'You kept climbing and reached Bellwether before the morning was far along.'}
 ]},
 {id:6,title:'The Bell That Missed Noon',place:'Bellwether ridge',weather:'Morning · the wind carries a bell note from the valley.',bearing:'A ridge village is waking around a bell that no longer rings on schedule.',paragraphs:[
  'Bellwether sits just below the ridge. Its houses are close together, built to keep the wind from threading through the streets. At the square, a bell hangs over a public cistern. Its rope is frayed, and its wooden handle is polished by many hands.',
  'A young keeper named Miri is checking the cistern. “The bell used to mark the shared meal,” she says. “Then the rope began to fail. Now people wait for someone else to decide when it is safe.”',
  'No one seems especially alarmed. A few people have brought their own cups.'
 ],variants:[
  {requires:{flags:['cityRoad']},text:'The city road has not disappeared behind you. From the ridge, its towers still catch the light.'},
  {requires:{flags:['forestRoad']},text:'The bird painted on the first sign resembles the small mark carved above the cistern.'},
  {requires:{flags:['readSigns']},text:'You remember the smaller line scratched beneath the city sign: “You may leave when you like.”'},
  {requires:{items:['Cracked bowl']},text:'The bowl shifts gently in your pack as you stop beside the cistern.'}
 ],choices:[
  {label:'Ask Miri what the bell used to bring people together for',preview:"Miri may explain what the bell’s silence has changed for the village.",detail:'Learn what changed before proposing a repair.',outcome:'“A meal, mostly,” Miri says. “Sometimes a warning. The bell never solved anything. It just let people know they could come.” She looks at the frayed rope. “I miss hearing it.”',bearing:'Miri has explained the bell’s old purpose and what its absence changed.',stats:{awareness:1},characters:{miri:'You asked Miri about the bell. She misses its invitation to gather, not its authority.'},journal:'Miri told you the bell once invited people to a shared meal and sometimes carried warnings.'},
  {label:'Inspect the rope before anyone pulls it',preview:"You may identify a repair and begin a responsibility to make the bell safe.",detail:'Check what is unsafe instead of guessing.',outcome:'The fibers are worn through near the handle. The bell itself is sound. A short length of cord would reinforce the grip, but the rope should not be pulled hard until then.',bearing:'The bell is usable only after its frayed handle is secured.',stats:{clarity:1},flags:{bellInspected:true},quest:{id:'bell',title:'A Bell Worth Hearing',description:'Help Miri make the bell safe and useful again.',status:'active',stage:'Find a safe way to reinforce the frayed handle.'},journal:'You found the weak point in the bell rope. The bell itself is still sound.'},
  {label:'Offer the cracked bowl to carry water',preview:"Your bowl may help test the water without becoming a gift you must give away.",detail:'A small practical help while the cistern is checked.',requires:{items:['Cracked bowl']},outcome:'Miri accepts the bowl, fills it, then hands it back. “It holds more than it looks like it should.” The water is clean. A useful test, and no reason to make the bowl a symbol.',bearing:'The cistern water is clean, and your bowl remains yours.',stats:{compassion:1},flags:{cisternWaterChecked:true},journal:'You and Miri checked the cistern water with the cracked bowl.'},
  {label:'Find Sella on the far side of the square',preview:"A familiar conversation may deepen and lead to an offer of practical help.",detail:'Continue a conversation you began on the road.',requires:{flags:['metSella']},outcome:'Sella has arrived ahead of you, delivering a sealed bundle. “I kept thinking about what you asked,” they say. “I still do not know what I am meant to become. I do know who I want to be useful to today.” They offer to help inspect the bell.',bearing:'Sella is glad to see you and offers practical help.',stats:{compassion:1},flags:{sellaInBellwether:true},characters:{sella:'Sella met you in Bellwether and offered help without pretending to have found a final answer.'},journal:'You met Sella again in Bellwether. They are choosing usefulness over a perfect answer.'}
 ]},
 {id:7,title:'A List of Necessary Things',place:'Bellwether’s shared storehouse',weather:'Late morning · sunlight reaches the floor in narrow bands.',bearing:'The storehouse is orderly, but its list of duties is longer than the week.',paragraphs:[
  'The storehouse contains grain, spare tools, and a slate board covered in names. Beside each name is a list of duties. Some people have three. Miri has eleven.',
  'The keeper rubs chalk from her palm. “The old list was meant to make the work fair. We kept adding tasks whenever something went wrong. Nobody remembers which ones still matter.”',
  'A neighbor carrying kindling pauses at the door. “The roof leaks over the grain,” they say. “That one still matters.”'
 ],choices:[
  {label:'Ask the neighbors which duties still protect someone',preview:"The neighbors may identify essential work while leaving larger questions open.",detail:'Keep necessary work while questioning the rest.',outcome:'Three neighbors name the leaking roof, the weekly water check, and the evening walk for anyone arriving late. The rest can be discussed. Miri erases no names yet, but makes space on the slate.',bearing:'The community identified three useful duties without deciding every question at once.',stats:{clarity:1,compassion:1},flags:{dutiesReviewed:true},journal:'You helped Bellwether separate three useful duties from a longer, unquestioned list.'},
  {label:'Help Miri shorten the list immediately',preview:"The list may become lighter, but a necessary duty could need adding back.",detail:'Make room for rest, knowing some duties may be missed.',outcome:'Miri removes six old tasks. The room feels lighter until the neighbor points out the grain-roof leak. You add that duty back. The new list is shorter, not perfect, and everyone can see what remains.',bearing:'The list is shorter, and the roof repair is now visible as a real need.',stats:{simplicity:1},flags:{listShortened:true,roofNeedsRepair:true},journal:'You helped shorten Bellwether’s duty list and kept the leaking roof on it.'},
  {label:'Volunteer for the evening arrival walk',preview:"You may take one clear responsibility without becoming the whole plan.",detail:'Take one clear task rather than promising to fix everything.',outcome:'Miri writes your name beside the walk. “Only tonight,” you say. She nods and leaves the next night blank. The late arrivals will have someone to meet, and you have not become the whole plan.',bearing:'You accepted one bounded responsibility.',stats:{compassion:1,equanimity:1},flags:{walkedTonight:true},journal:'You volunteered for one evening arrival walk, without taking responsibility for every duty.'},
  {label:'Notice the worn chalk marks beneath the current list',preview:"Older marks may reveal that today’s arrangement was not always necessary.",detail:'Look for what the storehouse has already forgotten.',requires:{stats:{awareness:1}},outcome:'Under the latest names, older marks show that the water check was once shared by three households. Miri follows the faded lines with her thumb. “We changed this after one bad week and never changed it back.”',bearing:'The current arrangement is newer than the problem it was meant to solve.',stats:{clarity:1},flags:{oldDutyPlanFound:true},journal:'You found traces of an older shared duty plan beneath the current list.'},
  {label:'Secure the bell handle with the storehouse binding',preview:"You may finish the bell repair with Miri and test that it is safe.",detail:'Finish the repair with Miri instead of leaving a known hazard.',requires:{flags:['bellInspected'],quests:{bell:'active'}},outcome:'Miri finds a short, sound length of binding. You hold the rope while she ties it above the frayed section. The bell rings once, not as a command but as a test. A neighbor looks up and nods.',bearing:'The bell is safe to ring again. Miri will decide with the village when it should be used.',stats:{compassion:1,clarity:1},flags:{bellRepaired:true},quest:{id:'bell',title:'A Bell Worth Hearing',description:'Help Miri make the bell safe and useful again.',status:'completed',stage:'The rope was reinforced and tested with the village nearby.'},journal:'You helped Miri secure and test the bell rope.'}
 ]},
 {id:8,title:'The Dry Cistern',place:'Bellwether’s lower garden',weather:'Afternoon · clouds gather beyond the eastern ridge.',bearing:'A lower cistern is nearly empty, though rainwater channels run nearby.',paragraphs:[
  'The lower garden is planted in narrow rows. A stone cistern sits at its center, nearly dry. A shallow channel passes within a few steps, carrying rainwater toward the road instead.',
  'A gardener named Pell kneels beside the channel. “We widened it last season so the path would stay dry,” they say. “Now the cistern receives nothing.”',
  'A storm is gathering beyond the ridge. There is time to prepare, but not to build a perfect system.'
 ],variants:[
  {requires:{flags:['safeRoute']},text:'Orra’s route around the lowland is tucked into your map. The weather has changed since she drew it.'},
  {requires:{flags:['bridgeChecked']},text:'You remember how a small weak point made the bridge unsafe. The channel has one too: a stone wedged at its bend.'},
  {requires:{flags:['warnedDriver']},text:'The cart driver took the upstream ford after your warning. Their wheel tracks are visible beyond the garden.'}
 ],choices:[
  {label:'Move the stone at the channel bend',preview:"A small obstruction may be the main problem; restoring flow could leave a maintenance task.",detail:'Restore the old flow before adding a new structure.',outcome:'The stone is wedged against a root. You loosen it carefully. A thin stream turns toward the cistern, carrying leaves with it. Pell clears the grate while you hold the channel open.',bearing:'Water is flowing into the cistern again; the grate will need regular clearing.',stats:{awareness:1,simplicity:1},flags:{channelRestored:true},items:['Flat slate'],quest:{id:'cistern',title:'Water for the Lower Garden',description:'Restore a dependable flow to the lower cistern without sending the water through the road.',status:'active',stage:'The channel flows again. Pell will watch it through the next rainfall.'},journal:'You found a stone blocking the channel and restored a modest flow toward the cistern.'},
  {label:'Ask Pell to cover the open grate with a flat slate',preview:"An accessible cover may protect the grate while leaving it easy to check.",detail:'Keep debris out, but leave the channel easy to inspect.',outcome:'The slate fits across the grate without sealing it. Pell can lift it to clear leaves after the storm. “A cover we can still reach,” they say. The cistern begins to fill.',bearing:'The grate is protected without hiding the channel from view.',stats:{clarity:1},flags:{grateCovered:true},quest:{id:'cistern',title:'Water for the Lower Garden',description:'Keep the rain channel clear and the lower cistern supplied.',status:'active',stage:'The grate is covered. Check the channel after the storm.'},journal:'You used a flat slate to keep debris out of the cistern grate while leaving it accessible.'},
  {label:'Ask Pell to show where the channel used to run',preview:"Learning the old route may uncover a slower but more balanced solution.",detail:'Understand the garden before changing it again.',outcome:'Pell points to a darker line in the soil. The old channel curved around the garden rather than crossing the path. Reopening it would take longer, but would protect both the water and the walkway.',bearing:'You found an older route that may serve both the cistern and the path.',stats:{clarity:1,awareness:1},flags:{oldChannelFound:true},quest:{id:'cistern',title:'Water for the Lower Garden',description:'Restore a dependable flow to the lower cistern without sending water through the road.',status:'active',stage:'Pell showed you the old route. Decide whether it is safe to reopen.'},journal:'Pell showed you the old channel route around the lower garden.'},
  {label:'Build a quick barrier across the channel',preview:"The road may become drier while a new weak point needs watching.",detail:'Stop the water from reaching the road, even if the cistern stays dry.',outcome:'The barrier turns most of the flow away from the path. The cistern gets a little water, but the soil behind the wall begins to soften. Pell asks you to watch it during the storm.',bearing:'The road is drier for now, but the new barrier needs attention.',stats:{acceptance:1},flags:{quickBarrier:true},quest:{id:'cistern',title:'Water for the Lower Garden',description:'Keep the road safe while finding a better way to supply the lower cistern.',status:'active',stage:'Watch the temporary barrier during the storm.'},journal:'You built a temporary channel barrier. It helped the road, but left the garden’s water supply uncertain.'}
 ]},
 {id:9,title:'A Meal Without a Place Card',place:'Bellwether’s square',weather:'Evening · rain begins softly on the slate roofs.',bearing:'The village is preparing a shared meal without deciding who belongs.',paragraphs:[
  'A long table has been carried into the square. Nobody has put names on the places. People arrive with bowls, bread, and questions about whether they should stay.',
  'Miri stands near the bell, which is still silent. Tovin has come up from Brindle with a basket of bread. They set it down, then look at the old notice folded beneath the basket.',
  '“We can eat first,” Tovin says. “We can still talk about what went wrong.”'
 ],variants:[
  {requires:{flags:['dutiesReviewed']},text:'The list of village duties is shorter now, though the leaking roof remains on it.'},
  {requires:{flags:['channelRestored']},text:'Water from the lower channel reaches the garden. Pell has left a small bundle of greens for the table.'},
  {requires:{flags:['tableQuest']},text:'Tovin recognizes you from Brindle and repeats the practical request: a covered flour bin, and a conversation with the neighbors.'},
  {requires:{flags:['challengedSign']},text:'The notice Tovin folded in Brindle is beneath the bread basket. It is still there, but it no longer decides who may sit.'},
  {requires:{flags:['leftCoin']},text:'Tovin added the coin you left in Brindle to the flour account. It helped a little; it could not settle the question of who belongs.'},
  {requires:{flags:['bellRepaired']},text:'The bell rings once from the square. Miri waits until the neighbors look up before speaking.'}
 ],choices:[
  {label:'Help Tovin set a place for anyone who wants to sit',preview:"Opening the table may allow a difficult conversation without making belonging conditional.",detail:'Make an invitation without pretending the earlier harm did not happen.',outcome:'You move the folded notice aside and set out the bowls. Tovin tells the neighbors what happened to the flour; the neighbors explain what they were short of. The conversation is uneven, but nobody is asked to earn a chair.',bearing:'The table is open tonight. The earlier shortage still deserves a practical plan.',stats:{compassion:1,clarity:1},flags:{tableOpened:true},quest:{id:'table',title:'The Shared Table',description:'Make the public table welcoming while responding to the earlier flour shortage.',status:'completed',stage:'The neighbors agreed to share the table and plan a covered flour store together.'},characters:{tovin:'You helped Tovin reopen the table. The earlier shortage was discussed rather than erased.'},journal:'You helped reopen the shared table. The neighbors discussed both the harm and the shortage.'},
  {label:'Ask first what would make the table feel safe',preview:"Naming needs may lead to both a welcome and a practical safeguard.",detail:'Let people name needs before deciding on a solution.',outcome:'One neighbor asks for a covered flour bin. Another asks that anyone can sit without explaining why they are hungry. Tovin agrees to both. The table is not a settlement of every old grievance, but it is a place to begin.',bearing:'The group named a practical safeguard and a clear welcome.',stats:{compassion:1,awareness:1},flags:{tableNeedsNamed:true},quest:{id:'table',title:'The Shared Table',description:'Agree on practical ways to keep the public table both welcoming and sustainable.',status:'completed',stage:'The group agreed on open seating and a covered flour bin.'},journal:'The neighbors agreed that the table should be open and the flour safely stored.'},
  {label:'If you found a flat slate, offer it as a temporary cover',preview:"A carried object may meet an immediate need while neighbors take up the longer repair.",detail:'Use what is at hand to protect the flour while the group talks.',requires:{items:['Flat slate']},outcome:'The slate is wide enough to keep the rain from the basket. Tovin laughs at the makeshift lid, then asks who can build a proper one. Two neighbors volunteer. You have helped with the immediate need without deciding the whole arrangement.',bearing:'The bread is dry, and the neighbors have taken up the longer repair together.',stats:{simplicity:1,compassion:1},flags:{temporaryCoverUsed:true},quest:{id:'table',title:'The Shared Table',description:'Keep the public table open and make its shared supplies safer.',status:'completed',stage:'A temporary cover protected the food while neighbors agreed to build a proper lid.'},journal:'You used the flat slate as a temporary cover; the neighbors volunteered to build a proper lid.'},
  {label:'Stay nearby and listen without taking charge',preview:"The meal may be shared even if the disagreement is not resolved.",detail:'Make room for disagreement without forcing a quick agreement.',outcome:'Tovin and the neighbors disagree about whether the old notice should be kept as a reminder. The conversation does not end in agreement. Still, people eat, and nobody is made responsible for forgiving anyone.',bearing:'The meal was shared. The disagreement remains, without closing the table.',stats:{equanimity:1},flags:{tableDisagreementRemains:true},journal:'You stayed while the neighbors disagreed and shared a meal without forcing a resolution.'}
 ]},
 {id:10,title:'The First Quiet Morning',place:'The path above Bellwether',weather:'The next morning · rainwater glints in the grass.',bearing:'The road continues beyond the ridge. Bellwether is not finished, and neither are you.',paragraphs:[
  'Rain has passed. Bellwether is visible below, already awake. Someone is clearing leaves from the cistern grate. Someone else is carrying a roof tile to the storehouse.',
  'No bell announces that the work is complete. The village has not become quiet in every way. A dog barks at a cart. Two neighbors resume yesterday’s disagreement as they cross the square.',
  'You have a road ahead, a few ordinary things, and the memory of choices that did not make every problem disappear.'
 ],variants:[
  {requires:{flags:['tableOpened']},text:'The public table remains in the square. This morning, someone has left a loaf beneath a cloth.'},
  {requires:{flags:['tableDisagreementRemains']},text:'The neighbors who disagreed yesterday are carrying the same basket between them. Neither mentions the argument.'},
  {requires:{flags:['channelRestored']},text:'The cistern has gathered enough rainwater to keep the lower garden going for now.'}
 ],choices:[
  {label:'Walk back down and help with one unfinished task',preview:"You may help with one unfinished task without taking responsibility for the whole village.",detail:'Choose a practical responsibility without claiming the whole village.',outcome:'You return to the square. The roof still leaks, the cistern still needs watching, and the table still needs a proper lid. You choose one task and begin. The morning does not become a conclusion.',bearing:'You turned toward useful work without needing to finish everything.',stats:{compassion:1,equanimity:1},flags:{returnedToHelp:true},journal:'You returned to Bellwether and chose one unfinished task to help with.'},
  {label:'Take the open road beyond the ridge',preview:"You may continue the road while leaving Bellwether’s choices to its people.",detail:'Leave while the path is clear, carrying what you learned.',outcome:'The path descends toward a country you have not seen. Bellwether remains below, imperfect and inhabited. You leave without deciding that departure means indifference.',bearing:'You chose to continue the journey while leaving the village to its people.',stats:{simplicity:1},flags:{tookOpenRoad:true},journal:'You continued beyond the ridge without treating departure as a solution.'},
  {label:'Sit until the sunlight reaches the wet grass',preview:"A pause may offer an ordinary morning rather than a final answer.",detail:'Let the morning be ordinary before choosing what comes next.',outcome:'You sit above the village. Sunlight reaches the grass in separate patches. Below, someone calls for a bucket. The quiet is brief, and the call is real. You stand when you are ready.',bearing:'For a little while, nothing needed to be improved or explained.',stats:{awareness:1,acceptance:1},flags:{satAtDawn:true},journal:'You sat through the morning light and then stood when someone needed a bucket.'},
  {label:'Write down one thing you know and one thing you do not',preview:"Writing may separate what you know from what remains uncertain.",detail:'Carry an honest record rather than a final answer.',outcome:'You write: “The village can change.” Then: “I do not know how it will.” The two lines fit on the same page. The road is still there when you close the notebook.',bearing:'You left room for both what is known and what remains uncertain.',stats:{clarity:1},flags:{wroteAtDawn:true},journal:'You recorded one thing you know and one thing you cannot know yet.'},
  {label:'Return to Pell and check the cistern after the rain',preview:"Reviewing the channel may bring the cistern task to a shared, sustainable resting point.",detail:'Review a practical choice after conditions have changed.',requires:{quests:{cistern:'active'}},outcome:'The water has settled. Pell lifts the grate and clears a few leaves. The channel held through the rain. Together you choose a simple weekly check, shared by two households rather than left to one person.',bearing:'The lower garden has water for now, and the village has a sustainable way to check the channel.',stats:{clarity:1,equanimity:1},flags:{cisternQuestDone:true},quest:{id:'cistern',title:'Water for the Lower Garden',description:'Restore a dependable flow to the lower cistern without sending water through the road.',status:'completed',stage:'The channel held through the rain, and its care is shared.'},journal:'You and Pell checked the cistern after the storm and shared responsibility for maintaining it.'}
 ]},
{
 "id": 11,
 "title": "A Light for the Lower Road",
 "place": "The lantern shed beyond Bellwether",
 "weather": "Late afternoon · wind combs the long grass.",
 "bearing": "The lower road needs a guide after dark, not a promise that nobody will get lost.",
 "paragraphs": [
  "By afternoon the path beyond the ridge reaches a lantern shed. A woman named Ena is counting wicks beside an unlit lamp. Bellwether is still close enough to return to; the next stretch leads toward the low fields.",
  "“We used to leave a light at the fork,” she says. “Last week the glass broke. Two travelers took the flooded lane. Nobody was hurt, but it is not a plan I want to repeat.”",
  "The oil tin is half full. A clean cloth hangs from a nail. Ena has enough for one careful repair, not for lighting the whole valley."
 ],
 "variants": [
  {
   "requires": {
    "flags": [
     "returnedToHelp"
    ]
   },
   "text": "The task you helped with in Bellwether is in other hands now. Coming here does not undo it."
  },
  {
   "requires": {
    "flags": [
     "tookOpenRoad"
    ]
   },
   "text": "This is the first unfamiliar doorway since you chose the open road."
  },
  {
   "requires": {
    "flags": [
     "wroteAtDawn"
    ]
   },
   "text": "The two lines you wrote this morning still leave room for an unknown road."
  }
 ],
 "choices": [
  {
   "label": "Inspect the lamp with Ena",
   "detail": "Find what can safely be repaired before lighting it.",
   "preview": "You may begin a shared repair and learn what the lamp needs.",
   "outcome": "The frame is sound. A loose hinge lets the broken glass rattle. Ena sets the lamp aside until there is a wind shield. You agree to ask the mill workshop for a spare panel, then test it together.",
   "bearing": "You and Ena have a bounded repair to investigate.",
   "stats": {
    "clarity": 1
   },
   "flags": {
    "lampInspected": true
   },
   "characters": {
    "ena": "You inspected the lamp together. Ena values a safe repair over a quick-looking solution."
   },
   "quest": {
    "id": "lantern",
    "title": "A Light at the Fork",
    "description": "Help Ena restore a safe light and a useful marker at the lower-road fork.",
    "status": "active",
    "stage": "Ask the mill workshop for a wind shield, then test the lamp."
   },
   "journal": "You and Ena inspected the damaged lamp and planned to find a safe wind shield."
  },
  {
   "label": "Ask who actually uses the fork at night",
   "preview": "The people using the road may help decide where a light belongs.",
   "detail": "Learn whose journey the light would serve.",
   "outcome": "“Mill workers, mostly. And anyone arriving late.” Ena names Iven, who walks home before dawn. She agrees to ask him where a light would be visible rather than placing it where she has always placed it.",
   "bearing": "The people using the road can help decide where its light belongs.",
   "stats": {
    "awareness": 1,
    "compassion": 1
   },
   "flags": {
    "nightTravelersAsked": true
   },
   "characters": {
    "ena": "You asked Ena who uses the night road. She will consult the people walking it."
   },
   "journal": "You asked who needed the lantern and learned about Iven, a mill worker."
  },
  {
   "label": "Fold the clean cloth for the repair",
   "preview": "You may carry a small repair supply without promising to do the whole job.",
   "detail": "Take one small part of the job, with permission.",
   "outcome": "Ena gives you a strip of clean linen for wrapping a replacement panel. You fold it into your pack. “Bring it back if the workshop has glass,” she says. The rest of the cloth stays on its nail.",
   "bearing": "You carry a small repair supply, not responsibility for the whole road.",
   "stats": {
    "simplicity": 1,
    "compassion": 1
   },
   "items": [
    "Linen strip"
   ],
   "flags": {
    "carriedLinen": true
   },
   "characters": {
    "ena": "Ena entrusted you with a linen strip for carrying a lamp panel safely."
   },
   "journal": "Ena gave you a linen strip to protect a replacement panel on the road."
  },
  {
   "label": "Tell Ena you cannot take on a repair today",
   "preview": "An honest limit may leave space for someone else to take up the repair.",
   "detail": "Be honest about your capacity without dismissing the need.",
   "outcome": "“Then do not promise it,” Ena says. She writes the repair on a board by the door where the next visitor can see it. You point out that the unlit fork needs a daylight marker too. She nods and reaches for chalk.",
   "bearing": "A clear limit left room for another person to help.",
   "stats": {
    "equanimity": 1,
    "clarity": 1
   },
   "flags": {
    "repairBoundary": true
   },
   "journal": "You declined a repair you could not promise and suggested a daylight marker."
  }
 ]
},
{
 "id": 12,
 "title": "The Mill Between Thoughts",
 "place": "The low-field mill",
 "weather": "Dusk · the mill wheel turns beneath a violet sky.",
 "bearing": "A worker is listening to a sound that may or may not mean trouble.",
 "paragraphs": [
  "The mill wheel turns slowly. Inside, Iven has stopped beside a sack of grain. Every few turns a wooden tooth clicks against its neighbor.",
  "“I hear that sound all the way home,” he says. “Then I start imagining the wheel breaking. I check it, and check it again.” A maintenance slate hangs beside the door. Its last entry is yesterday.",
  "On a bench lie spare panes for the mill lamps, a pencil, and a mug gone cold."
 ],
 "variants": [
  {
   "requires": {
    "flags": [
     "nightTravelersAsked"
    ]
   },
   "text": "Iven recognizes Ena’s name. He says the old lamp was hidden by reeds from his approach."
  },
  {
   "requires": {
    "flags": [
     "lampInspected"
    ]
   },
   "text": "A spare panel looks close to the size Ena needs. Iven offers to measure it with you."
  }
 ],
 "choices": [
  {
   "label": "Read the maintenance slate with Iven",
   "preview": "The maintenance record may give Iven a clearer next step without erasing his worry.",
   "detail": "Separate a recorded fault from an imagined one.",
   "outcome": "The slate records the same click and a scheduled tooth replacement. You check the written stop conditions together. Nothing asks for an emergency shutdown tonight. Iven still feels uneasy, but he has a plan more specific than listening forever.",
   "bearing": "A recorded check can guide the next action even while worry remains.",
   "stats": {
    "clarity": 1,
    "equanimity": 1
   },
   "flags": {
    "millPlanRead": true
   },
   "characters": {
    "iven": "You reviewed the maintenance plan together. Iven can be worried without needing to repeat every check."
   },
   "journal": "You helped Iven distinguish the mill’s recorded maintenance need from a feared emergency."
  },
  {
   "label": "Ask what the worry feels like right now",
   "preview": "Being heard may help Iven consult his own information rather than rely on reassurance.",
   "detail": "Listen without arguing him out of the feeling.",
   "outcome": "“Like I left a door open,” Iven says. You sit nearby while he describes it. You do not certify the wheel safe. After a while he takes down the maintenance slate himself and reads what the mill keeper wrote.",
   "bearing": "Listening made room for Iven to consult the plan himself.",
   "stats": {
    "compassion": 1,
    "acceptance": 1
   },
   "flags": {
    "heardIven": true
   },
   "characters": {
    "iven": "You listened to Iven without offering false certainty about the mill."
   },
   "journal": "Iven described his worry while you listened without trying to erase it."
  },
  {
   "label": "Measure a spare panel for Ena",
   "preview": "You may find a protected replacement panel and move the lantern repair forward.",
   "detail": "Work on the repair you came to understand.",
   "requires": {
    "flags": [
     "lampInspected"
    ]
   },
   "outcome": "One panel matches. Iven rounds its sharp edge and gives it to you in a padded wooden sleeve. You do not need to settle every worry in the mill before taking this useful thing back.",
   "bearing": "You have a protected panel for the lantern repair.",
   "stats": {
    "simplicity": 1,
    "clarity": 1
   },
   "items": [
    "Shielded lamp panel"
   ],
   "flags": {
    "lampPanelFound": true
   },
   "quest": {
    "id": "lantern",
    "title": "A Light at the Fork",
    "description": "Help Ena restore a safe light and a useful marker at the lower-road fork.",
    "status": "active",
    "stage": "A protected replacement panel is ready. Return for a supervised test."
   },
   "journal": "Iven helped you measure and protect a replacement panel for Ena’s lantern."
  },
  {
   "label": "Offer to carry the finished flour sack to the door",
   "preview": "A bounded piece of work may get smaller even if the worrying sound remains.",
   "detail": "Help with work that has a clear ending.",
   "outcome": "You move one sack, then another only after asking. Iven labels them for the morning cart. The wheel keeps clicking. The job beside you becomes smaller, though the sound does not disappear.",
   "bearing": "One completed task does not have to fix the whole evening.",
   "stats": {
    "compassion": 1,
    "simplicity": 1
   },
   "flags": {
    "millSacksMoved": true
   },
   "characters": {
    "iven": "You helped with a bounded task while leaving the mill’s inspection to its keeper."
   },
   "journal": "You helped Iven move the finished flour sacks without taking over the mill."
  }
 ]
},
{
 "id": 13,
 "title": "The Bench That Asked Nothing",
 "place": "The willow turn",
 "weather": "Early night · willow leaves stir above the dark water.",
 "bearing": "There is a place to rest before returning to the fork.",
 "paragraphs": [
  "A bench stands where the mill path turns toward the lantern shed. Someone has carved a bird into its back. A fresh notice says that the lower lane is flooded.",
  "Sella is sitting with their pack on the ground. “I have delivered everything,” they say. “I keep thinking I have forgotten something anyway.”",
  "The bench is wide enough for two people and a little space between them."
 ],
 "variants": [
  {
   "requires": {
    "flags": [
     "metSella"
    ]
   },
   "text": "Sella remembers your first question about what people are meant to become. Tonight they seem grateful not to answer it again."
  },
  {
   "requires": {
    "flags": [
     "millPlanRead"
    ]
   },
   "text": "The maintenance slate comes to mind: a useful record, not an instruction to keep checking forever."
  }
 ],
 "choices": [
  {
   "label": "Sit without asking the rest to achieve anything",
   "preview": "A rest may be possible without making your thoughts stop first.",
   "detail": "Allow a pause without making it another task.",
   "outcome": "You sit beside Sella. A leaf turns in the water and catches against the bank. Your mind makes plans; you do not need to finish them before your legs can rest. When Sella stands, neither of you claims to be changed.",
   "bearing": "Rest was possible without a perfect quiet mind.",
   "stats": {
    "acceptance": 1,
    "awareness": 1
   },
   "flags": {
    "restedAtWillow": true
   },
   "journal": "You rested at the willow bench without requiring your thoughts to stop."
  },
  {
   "label": "Ask whether Sella wants company or quiet",
   "preview": "Asking may reveal a kind of support that does not require advice or a new promise.",
   "detail": "Let them choose the kind of support they need.",
   "outcome": "“Company, without advice.” You stay. Sella talks about a letter they could not deliver because its recipient moved. You hear the story without volunteering to find the missing person tonight.",
   "bearing": "You offered company without turning it into a new obligation.",
   "stats": {
    "compassion": 1,
    "clarity": 1
   },
   "characters": {
    "sella": "You asked what kind of support Sella wanted and offered company without advice."
   },
   "flags": {
    "sellaCompany": true
   },
   "journal": "Sella asked for company without advice, and you stayed."
  },
  {
   "label": "Copy the flood notice onto a loose board",
   "preview": "A copied warning may help the next traveler decide before reaching the flood.",
   "detail": "Make information useful to someone approaching from the other direction.",
   "outcome": "Sella lends you chalk. You copy the warning and face it toward the mill path. It does not drain the lane, but the next person can decide before reaching the water.",
   "bearing": "A clear warning now faces both approaches.",
   "stats": {
    "clarity": 1,
    "compassion": 1
   },
   "flags": {
    "floodWarningCopied": true
   },
   "journal": "You copied the flood warning so travelers from the mill could see it."
  },
  {
   "label": "Notice three sounds, then continue",
   "preview": "Noticing sounds may offer a point of return while tomorrow’s thoughts remain.",
   "detail": "Use what is around you as a brief point of return.",
   "outcome": "Leaves, water, a latch on the shed. Between them you hear your own shoes shifting on the gravel. You are still thinking about tomorrow. You also know where your feet are tonight.",
   "bearing": "The present has room for both thought and the road beneath you.",
   "stats": {
    "awareness": 1,
    "equanimity": 1
   },
   "flags": {
    "noticedNightSounds": true
   },
   "journal": "You noticed leaves, water, and a shed latch before continuing."
  }
 ]
},
{
 "id": 14,
 "title": "A Marker in the Reeds",
 "place": "The lower-road fork",
 "weather": "Night · low clouds move across a pale moon.",
 "bearing": "The fork is difficult to read from the direction most travelers approach.",
 "paragraphs": [
  "At the fork, the old lantern hook stands behind a screen of reeds. From Bellwether it is easy to see. From the mill it almost disappears.",
  "Ena holds a shuttered lamp while Iven approaches along the lower path. “Here,” he calls. “This is where I stop knowing which way it goes.”",
  "A fallen marker lies beside the junction. Its face is intact; its base has rotted."
 ],
 "variants": [
  {
   "requires": {
    "flags": [
     "floodWarningCopied"
    ]
   },
   "text": "Iven saw your copied flood warning before leaving the mill. He did not have to approach the water to find out."
  },
  {
   "requires": {
    "items": [
     "Shielded lamp panel"
    ]
   },
   "text": "The protected panel in your pack is still sound. Ena asks you to keep it wrapped until you reach the shed."
  },
  {
   "requires": {
    "flags": [
     "repairBoundary"
    ]
   },
   "text": "Ena found a neighbor for the lamp repair. Your honest limit did not leave her without help."
  }
 ],
 "choices": [
  {
   "label": "Walk both approaches before placing the marker",
   "preview": "Testing both approaches may reveal where the marker needs to stand.",
   "detail": "Test the sign from the places it will be read.",
   "outcome": "From the mill, a low branch hides the first position you choose. You move the marker three paces and check again. Ena holds it while Iven walks the route once more. This time he can read it before the paths divide.",
   "bearing": "The marker is positioned for its readers, not just its makers.",
   "stats": {
    "clarity": 1,
    "awareness": 1
   },
   "flags": {
    "markerTested": true
   },
   "journal": "You tested the fork marker from both approaches and moved it into view."
  },
  {
   "label": "Brace the marker with loose stones",
   "preview": "A temporary support may make the sign useful tonight while leaving a daylight repair.",
   "detail": "Make a temporary support that remains easy to inspect.",
   "outcome": "You set stones around the sound part of the post. Ena marks the base for replacement in daylight. It stands for tonight without pretending to be a permanent repair.",
   "bearing": "The marker stands, and its temporary support is clearly named.",
   "stats": {
    "simplicity": 1
   },
   "flags": {
    "markerBraced": true
   },
   "journal": "You braced the road marker and left its base repair visible on the work list."
  },
  {
   "label": "Ask Iven to describe the directions in his own words",
   "preview": "The sign may become easier to follow when it names places, not only directions.",
   "detail": "Find out whether the wording is useful to a tired traveler.",
   "outcome": "“Uphill to the village. Right to the mill. Not the lane beside the water.” The old sign says only NORTH and EAST. Ena chalks the destinations underneath. Iven can follow them without imagining a map.",
   "bearing": "The marker names destinations as well as directions.",
   "stats": {
    "compassion": 1,
    "clarity": 1
   },
   "flags": {
    "markerReworded": true
   },
   "characters": {
    "iven": "You asked Iven to help make the road directions useful to tired travelers."
   },
   "journal": "Iven helped replace abstract directions with clear destination names."
  },
  {
   "label": "Use your cord to steady the post while Ena works",
   "preview": "Your cord may help steady the marker without being used up or given away.",
   "detail": "Put a carried tool to use with someone else.",
   "requires": {
    "items": [
     "Weathered cord"
    ]
   },
   "outcome": "You loop the cord around the post and hold it steady while Ena packs the base. When the stones hold, you untie it. A tool can be useful without being used up.",
   "bearing": "The post is steadier; your cord remains in your pack.",
   "stats": {
    "compassion": 1,
    "simplicity": 1
   },
   "flags": {
    "markerBraced": true,
    "cordUsedAtFork": true
   },
   "journal": "You used your weathered cord to steady the marker while Ena secured its base."
  }
 ]
},
{
 "id": 15,
 "title": "Enough Light for the Next Step",
 "place": "The lantern shed at first light",
 "weather": "Before dawn · a thin blue line opens above the fields.",
 "bearing": "The night’s work can be reviewed without becoming a verdict on the whole journey.",
 "paragraphs": [
  "Back at the shed, Ena lays the lantern beside the repair board. Iven puts his cold mug near the stove. The sky is turning a little lighter above the mill.",
  "The fork has not become impossible to misread. The lane is still flooded. There is a marker where a traveler can see it, and people who know what needs doing next.",
  "Ena asks what should go on tomorrow’s list. There is room for a few lines, not the entire future."
 ],
 "variants": [
  {
   "requires": {
    "flags": [
     "markerTested"
    ]
   },
   "text": "Iven confirms that he could read the marker before the paths divided."
  },
  {
   "requires": {
    "flags": [
     "markerBraced"
    ]
   },
   "text": "The temporary support needs a daylight check. Nobody has crossed it off as finished."
  },
  {
   "requires": {
    "flags": [
     "markerReworded"
    ]
   },
   "text": "“The destinations helped,” Iven says. “I did not have to work out where north was.”"
  },
  {
   "requires": {
    "flags": [
     "restedAtWillow"
    ]
   },
   "text": "You remember the bench: rest did not need to solve the night to be worth taking."
  }
 ],
 "choices": [
  {
   "label": "Test the repaired lamp with Ena",
   "preview": "A supervised test may complete the lantern task and leave its ongoing care shared.",
   "detail": "Close the loop on a repair you began together.",
   "requires": {
    "items": [
     "Shielded lamp panel"
    ],
    "quests": {
     "lantern": "active"
    }
   },
   "outcome": "Ena fits the panel and checks the hinge. Outside, you test the shield against the wind before carrying the lamp to its hook. Iven walks the approach once. It is visible. Tomorrow’s list keeps an oil check and a daylight inspection, shared between two people.",
   "bearing": "The lantern works, and its continuing care belongs to more than one pair of hands.",
   "stats": {
    "clarity": 1,
    "compassion": 1
   },
   "flags": {
    "lanternTested": true
   },
   "quest": {
    "id": "lantern",
    "title": "A Light at the Fork",
    "description": "Restore a safe light and a useful marker at the lower-road fork.",
    "status": "completed",
    "stage": "The lamp was repaired, tested from the approach, and given a shared maintenance plan."
   },
   "characters": {
    "ena": "You completed a tested repair together and shared its ongoing care."
   },
   "journal": "You and Ena tested the repaired lantern and agreed on shared oil and safety checks."
  },
  {
   "label": "Write down the unfinished repair clearly",
   "preview": "An honest record may help others continue without assuming the job is finished.",
   "detail": "Leave a useful handover instead of an appearance of completion.",
   "outcome": "You write what is known: inspect the glass, check the oil, replace the marker base. Ena adds names only after asking the people beside her. The repair is still unfinished, but nobody has to begin by guessing what happened.",
   "bearing": "An honest handover is more useful than calling an unfinished job complete.",
   "stats": {
    "clarity": 1,
    "acceptance": 1
   },
   "flags": {
    "nightHandover": true
   },
   "journal": "You left a clear handover naming the lantern and marker work still needed."
  },
  {
   "label": "Thank the others and take the morning road",
   "preview": "You may continue the journey without having to turn unfinished work into a verdict.",
   "detail": "Leave without making departure a judgment on what remains.",
   "outcome": "Ena raises a hand. Iven starts toward home. You pass the fork in the growing light. What you helped with is here; what you did not finish is here too. Neither has to become the whole account of you.",
   "bearing": "You can continue while the village continues its own work.",
   "stats": {
    "equanimity": 1,
    "simplicity": 1
   },
   "flags": {
    "leftAtFirstLight": true
   },
   "journal": "You left at first light, grateful for shared work and honest about its limits."
  },
  {
   "label": "Accept a cup and wait for daylight",
   "preview": "Accepting a small kindness may let the morning begin without another obligation.",
   "detail": "Let yourself receive care without adding a new promise.",
   "outcome": "Iven warms water on the stove. You accept a cup. Ena opens the door to let out a little smoke. The three of you watch the fields become visible, saying very little. This morning can begin before you know what kind of person it will make you.",
   "bearing": "You accepted a small kindness without needing to earn it.",
   "stats": {
    "acceptance": 1,
    "compassion": 1
   },
   "flags": {
    "acceptedMorningCup": true
   },
   "characters": {
    "iven": "Iven shared a warm cup with you after the night’s work."
   },
   "journal": "You accepted a warm cup and waited for the fields to become visible."
  }
 ]
}
];

const itemDescriptions={
 'Linen strip':'Clean linen entrusted to you by Ena for carrying a repair panel safely.',
 'Shielded lamp panel':'A measured glass panel in a padded wooden sleeve. Ena can fit and test it at the lantern shed.',
 'Smooth river stone':'A smooth stone from beside the forest wall. It fits easily in the hand. Nothing more is required of it.',
 'Weathered cord':'A short length of cord recovered after helping at the footbridge. It may be useful for a practical repair.',
 'Empty map':'An unmarked map given by Orra. It can record places you have actually visited.',
 'Cracked bowl':'A plain clay bowl with a chipped rim. It still holds water.',
 'Flat slate':'A thin, flat stone from the lower garden channel. It can cover a grate without sealing it shut.'
};

const itemMetadata={
 'Linen strip':{category:'Repair supply',discoveredAt:'The lantern shed beyond Bellwether'},
 'Shielded lamp panel':{category:'Repair part',discoveredAt:'The low-field mill'},
 'Smooth river stone':{category:'Natural object',discoveredAt:'The forest wall at the Crossroads'},
 'Weathered cord':{category:'Tool',discoveredAt:'The footbridge at Brindle'},
 'Empty map':{category:'Map',discoveredAt:'The old mile house'},
 'Cracked bowl':{category:'Household object',discoveredAt:'The upper path to Bellwether'},
 'Flat slate':{category:'Natural object',discoveredAt:'Bellwether’s lower garden'}
};
window.QuietStory={chapters,levels,itemDescriptions,itemMetadata};
