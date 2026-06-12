const RELIC_RAW_DATA = {
  magicthegathering: `__Tier 1 Relic Concept: **Magic the Gathering**__
- Upon unlocking this relic, receive the *Wizard's diadem,* a headgear item with +5 Magic accuracy.
- The *Wizard's diadem* acts as an infinite source of water, earth, fire and mind runes.
- When the Wizard's diadem is equipped, all *Fishing, Woodcutting,* and *Mining* actions are replaced with gathering spells, a 5-tick action (4 with Harmonised nightmare staff).
- Gathering spells can be cast from a 10-tile range on any fishing spot, tree, or rock that you have the relevant level for. This must pass a Magic accuracy roll, with higher tier resources having higher Magic defence. Successful rolls will award the resource (dropped if inventory is full), *full skilling XP,* and an equal amount of *Magic XP.*
   - On unsuccessful rolls (splashes), you will still receive half that amount of Magic XP.
- Casting a gathering spell requires:
   - 1 Water, 1 Mind rune for fishing spots;
   - 1 Earth, 1 Mind rune for trees;
   - 1 Fire, 1 Mind rune for ore rocks.

- The *Wizard's diadem* evolves with your *Magic level,* granting it bonus Magic accuracy and allowing you to use higher tier casts for better yield. Higher tier casts replace the Mind rune requirement with the following runes, if you have them:
   - *Level 17:* 1 Chaos rune, yields 1.5x resources (grants 2 every other cast) (+10 Magic accuracy)
   - *Level 41:* 1 Death rune, yields 2x resources (+15 Magic accuracy)
   - *Level 62:* 1 Blood rune, yields 2.5x resources (grants 3 every other cast) (+20 Magic accuracy)
   - *Level 81:* 1 Wrath rune, yields 3x resources (+25 Magic accuracy)
- *Full skilling XP* is given for all additional resources gathered.

- Additionally, the *Wizard's diadem* can be charged with Nature and Law runes:
   - You can spend 1 Nature rune to process a gathered resource (cooks fish, burns logs, and smelts ore), granting *full skilling XP.*
   - You can spend 1 Law rune to send a gathered resource to the bank.
- Both effects can be active at once and are toggleable.`,
  symbiosis: `__Tier 1 Relic Concept: **Symbiosis**__

- Your first action on a mining rock, fishing spot, or tree is now *guaranteed to succeed.* This is tracked individually per node.
   - To be considered a first action, you must not have interacted with that node in 1 minute.
   - Hopping worlds does not reset this timer.
- All mining rocks now contain *5 sets of bones* in them. Mining a rock retrieves the bones, the tier of which scales with the quality of the ore (e.g. Bones for Copper, Dragon bones for Mithril, Superior dragon bones for Runite).
   - The bones take 1 minute to respawn per unique rock.
   - Toggleable effect: Automatically bury bones received from mining rocks (all 5 in 1 tick).
- All fishing spots now have *exceptionally agile fish.* Catching an agile fish grants additional Agility XP equivalent to 5x your Fishing XP drop.
   - The exceptionally agile fish takes 1 minute to respawn per unique fishing spot.
- All trees now have a *full birdhouse* in them. Chopping a tree grants the full rewards and Hunter XP of a birdhouse equivalent to their tier of wood (e.g. Oak trees have Oak birdhouses, Willow trees have Willow birdhouses, Magic trees have Magic birdhouses).
   - The birdhouse takes 1 minute to respawn per unique tree.
   - Toggleable effect: Discard the birdhouse loot onto the ground.`,
  financialfraud: `__Tier 1 Relic Concept: **Financial Fraud**__

- Upon unlocking this relic, receive *100,000 Coins* and the *Fanciest boots.*
   - The *Fanciest boots* grant +3 defence in all styles. That's it.
   - You cannot receive item rewards from the Stronghold of Security.

- Any time you would receive *Coins* through skilling actions or monster drops, there is instead a 50% chance not to receive them, and a 50% chance to double them. If doubled, there is a 50% chance to further double it, repeating until unsuccessful.
   - If you receive over 100,000,000 Coins through this, the excess will be automatically converted into Platinum tokens.

- Toggleable effect: You can now *invest* in yourself. While investing, every XP drop will yield a bonus XP drop for that same skill, spending 10 Coins per 1 bonus XP. The total amount received in the bonus XP drop scales with your total level, unaffected by Leagues multipliers:
   - *Total Level 1:* 20 bonus XP (200 Coins);
   - *Total Level 500:* 60 bonus XP (600 Coins);
   - *Total Level 1000:* 150 bonus XP (1500 Coins);
   - *Total Level 1500:* 300 bonus XP (3000 Coins);
   - *Total Level 2000:* 600 bonus XP (6000 Coins).
- Payment prioritizes Coins in the bank. If you cannot pay for a bonus XP drop, you will automatically stop investing.`,
  conman: `__Tier 2 Relic Concept: **Conman**__

- Upon unlocking this relic, receive the *Slippin' suit,* a body slot item.

- While wearing the *Slippin' suit,* you are too classy to train Thieving. You are training *"Charisma"* now, so you can no longer engage in the following:
   - Steal from stalls;
   - Steal from the Sorceress' Garden;
   - Steal from Varlamore houses;
   - Loot various picklockable chests;
   - Equip Rogues' equipment.

- While wearing the *Slippin' suit,* every "Pickpocket" option is replaced with *"Charm."* Charming an NPC engages a passive dialogue exchange, lasting indefinitely. During this time, they will gift you receipts every 2 ticks, granting items and *Thieving XP* they would normally yield.
   - Stall owners are also given this option, with the same yield as their stalls would give.
   - All loot received is noted.
   - Coins are received instead of Coin pouches.

- While the *Slippin' suit* is worn, every shop offers a 0.5-49.5% discount, scaling linearly with your *"Charisma"* level. This stacks multiplicatively with any other discounts.`,
  holyharvest: `__Tier 2 Relic Concept: **Holy Harvest**__

- You can now offer any seed (except Anima and Spirit tree) to an altar, regardless of Farming level, with a 75% chance not to consume it (stacks multiplicatively with the Wilderness Chaos altar).
- When offering a seed, you will instantly receive what you would normally harvest from it, with Ultracompost applied, in noted form. This grants full *Farming XP.*
   - For tree seeds, this also offers *Woodcutting XP* from chopping the logs.

- Additionally, if you have any god item equipped, you will receive a noted secondary ingredient for each item harvested, chosen randomly from a list associated with that god. Multiple god items can work simultaneously.
   - *Saradomin:* Unicorn horn dust, Chocolate dust, Dragon scale dust, Yew roots, Crushed nest, Squid paste, Crushed superior dragon bones, Yellow fin;
   - *Zamorak:* Volcanic ash, Red spiders' eggs, Mort myre fungus, Wine of zamorak, Demonic tallow, Crab paste, Lava scale shard, Araxyte venom sack;
   - *Armadyl:* White berries, Snape grass, Poison ivy berries, Aldarium, Cotton yarn, Amylase crystal, Marlin scales;
   - *Bandos:* Eye of newt, Limpwurt root, Toad's legs, Kebbit teeth dust, Nail beast nails, Jangerberries, Haddock eye, Zulrah's scales;
   - *Ancient:* Goat horn dust, Potato cactus, Magic roots, Nihil dust, Lily of the sands, Rainbow crab paste, Crystal dust, Ancient essence.`,
  perpetualstew: `__Tier 2 Relic Concept: **Perpetual Stew**__ 

- Upon unlocking this relic, receive the *Perpetual stew,* with 1,000 charges.

- Any food item (but not potions) can be added to the stew. Both raw and cooked versions can be added, granting the full *Cooking XP* you'd receive from cooking it normally.
   - For multi-step processes, such as pies, only the final step in preparation or the cooked version will work.
   - Noted food can be added to the stew, processing 1 item every 8 ticks. This will not be interrupted by other actions like skilling and combat.
   - Toggleable effect: Any food obtained through skilling actions or monster drops will automatically be added to the stew.

- Each piece of food added to the stew grants it charges equal to the amount of *Hitpoints* it heals, storing up to 2,147,483,647 charges.
- Sipping from the stew consumes a set number of charges, healing you for the same amount.
   - This incurs the standard 3-tick action delay.
- The *Perpetual stew* initially heals 3 Hitpoints per sip, but the recipe is improved to heal an additional 3 Hitpoints every 14 Cooking levels:
   - *Level 1:* Heals 3 HP
   - *Level 15:* Heals 6 HP
   - *Level 29:* Heals 9 HP
   - *Level 43:* Heals 12 HP
   - *Level 57:* Heals 15 HP
   - *Level 71:* Heals 18 HP
   - *Level 85:* Heals 21 HP
   - *Level 99:* Heals 24 HP`,
  friendoftheforest: `__Tier 3 Relic Concept: **Friend of the Forest**__

- Upon unlocking this relic, receive the *Druid ring,* which:
   - Can mark up to 8 Oak or higher tier *trees* in the game (choppable, excludes instances and player-farmed trees), provided you have the Woodcutting level to chop them.
      - A new tree can be marked at any time.
   - Provides unlimited teleports to any marked tree.

- Additionally, the *Druid ring* will:
   - Passively collect and store random *grimy herbs* whilst running over "grassy terrain." This would include, for example, plains, forests, jungles, large gardens, but not isolated patches of grass in cities.
   - Every tile travelled has a 5% chance to collect a grimy herb.
   - Items stored in the ring can only be retrieved at the bank.
   - You cannot manually store any items in the ring.

- This ring ignores Wilderness teleport restrictions.`,
  harnessedearth: `__Tier 3 Relic Concept: **Harnessed Earth**__

- Upon unlocking this relic, receive the *Golem ring*, which:
   - Can mark up to 8 *mining rocks* in the game (excludes instances), provided you have the Mining level to use them, or *runic altars.*
      - A new rock or runic altar can be marked at any time.
      - Both rocks and runic altars count towards the same limit.
   - Provides unlimited teleports to any marked rock or runic altar.
   - Acts as a wearable talisman for all runic altars.

- Additionally, the *Golem ring* will:
   - Passively collect and store *pure essence and uncut gems* whilst running over "barren terrain." This would include, for example, mountains (rocky or snowy), plateaus, deserts, volcanoes, but not man-made structures like stone bridges.
   - Every tile travelled has a 5% chance to collect a resource:
      - 49% chance of receiving 5-15 Pure essence;
      - 49% chance of receiving any basic uncut gem;
      - 2% chance of receiving an Uncut dragonstone.
   - Items stored in the ring can only be retrieved at the bank.
   - You cannot manually store any items in the ring.

- This ring ignores Wilderness teleport restrictions.`,
  callofthesea: `__Tier 3 Relic Concept: **Call of the Sea**__

- Upon unlocking this relic, receive the *Merfolk ring,* which:
   - Can mark up to 8 *fishing spots* in the game (excludes instances), provided you have the Fishing level to catch their lowest level fish available, or *salvaging stations* (excluding your boat's).
      - A new fishing spot or salvaging station can be marked at any time.
      - Both fishing spots and salvaging stations count towards the same limit.
   - Provides unlimited teleports to any marked fishing spot or salvaging station.

- Additionally, the *Merfolk ring* will:
   - Passively collect and store *random planks and nails* whilst sailing anywhere.
   - You will collect a resource every 10 ticks while your boat is moving:
      - 49% chance of receiving any random plank;
      - 49% chance of receiving 5-15 of any basic nail;
      - 2% chance of receiving 5-15 Dragon nails.
   - Items stored in the ring can only be retrieved at the bank.
   - You cannot manually store any items in the ring.

- This ring ignores Wilderness teleport restrictions.`,
  runtotherescue: `__Tier 4 Relic Concept: **Run to the Rescue**__

- *Agility courses* are now under attack! The following courses have 5-10 unaggressive monsters scattered throughout them, only visible to you:
   - All Rooftop courses;
   - All Hallowed Sepulchre floors;
   - Gnome Stronghold course;
   - Ape Atoll course;
   - Werewolf course;
   - Wilderness course.
- The monsters spawned are randomly selected from all Slayer master lists, only spawning those which you have the requirements to kill. They will respect Combat level adjustment, if enabled.
   - In addition to their standard drops, each monster has a 20% chance of dropping 5 *Marks of grace* or *Hallowed marks* in their respective courses.
- Once all the monsters are slain, completion of a lap will generate another set of monsters, randomly chosen.
- If you have one, the monsters spawned will always be the ones on your *Slayer task* (excluding boss tasks).
   - Every reset has a 33% chance of replacing 1 Slayer monster with its *Superior* variant.

- Killing all the monsters in a course before completing a lap will award:
   - *10x Agility XP* and completion count;
   - 20% of the above gained as bonus *Slayer XP,* regardless of your Slayer task.
   - A 25% chance to receive a *Scroll box,* the maximum possible tier of which scales with the course's Agility level requirement:
      - Up to Easy at levels 1-19;
      - Up to Medium at levels 20-39;
      - Up to Hard at levels 40-59;
      - Up to Elite at levels 60-79;
      - Up to Master at levels 80+.`,
  industrialevolution: `__Tier 4 Relic Concept: **Industrial Evolution**__

- All Furnaces in the game become *Processors.*
- Processors will take certain noted materials and transform them into finished products at a rate of 1 every 32 ticks, outputting a maximum of 3,000 products at a time. The Processor can:
   - Mix herbs and vials of water into unfinished potions;
   - Mix unfinished potions and secondaries into potions;
   - Tan leather and hides;
   - Craft tanned leather and hides into armour;
   - Craft glass and pottery items;
   - Smelt soda ash and sand into molten glass;
   - Smelt ore into bars;
   - Smith bars into armour and weapons;
   - Turn various Construction materials into flatpacks.
- Each Processor can only perform one action at a time, but up to *8 different Processors* around Gielinor can be active at once.
- Processed items are sent directly to your bank. You can interact with a Processor to cancel its current process, retrieving all remaining resources.
- *Full skilling XP* is given for each action. A token amount of bonus *Smithing XP* is also given.
- Processors will continue running *even while you are offline.*

- Toggleable effect: You can right-click a Processor to revert it to a Furnace, and vice versa.`,
  unleashedteleport: `__Tier 4 Relic Concept: **Unleashed Teleport**__

- Home and Minigame Teleports are now an instant cast.
- All spellbook teleports are now *free to cast,* and have no quest, diary, or Magic level requirements.
- All teleportation items no longer consume charges nor themselves.
- Toggleable effect: Upon casting any teleport (including those from relics), you will be presented with your *Bank interface.*`,
  lordoftherings: `__Tier 5 Relic Concept: **Lord of the Rings**__

- All rings have unlimited charges.
- All rings have their stat bonuses doubled.
- The passive effects of all rings are twice as powerful. Some examples include:
   - The Ring of recoil and Ring of suffering reflect 20% + 2 damage;
   - The Lightbearer regenerates 20% special attack energy every 15 seconds;
   - The Celestial ring offers a +8 boost to Mining;
   - The Druid, Golem and Merfolk rings gather double the resources per trigger.
- You are granted a *second ring slot.* When two rings are equipped, only the highest of any shared stat bonus is taken, and identical effects do not stack.`,
  runicfreelancer: `__Tier 5 Relic: **Runic Freelancer**__

- Upon unlocking this relic, receive the *Freelance kit,* which:
   - Can store any amount of runes of all types;
   - Acts as a Book of the dead for summoning thralls;
   - Has a *"Reactive Alchemy"* option, prompting you to choose an item or item stack in your inventory.

- Upon getting any XP drop, you will automatically cast High Level Alchemy on the item assigned to your *"Reactive Alchemy"* option, provided it is in your inventory, regardless of runes, spellbook, or Magic level.
   - This cast will not interrupt other skilling or combat actions.
   - This effect can only trigger once every 3 ticks.
- Your spellbook icon can be right-clicked to find a *"DIY Spellbook."* The DIY Spellbook presents a 7x7 grid interface, where up to 49 different spells from any spellbook can be manually chosen for each slot.
   - The DIY Spellbook can be edited at any time.
   - All autocasting weapons can autocast any combat spell that you can cast from the DIY Spellbook.`,
  faith: `__Tier 5 Relic Concept: **Faith**__

- The "Sit down" emote is replaced with *"Meditate,"* which loops indefinitely. While meditating, you will receive *Prayer XP* equal to your half Prayer level (affected by Leagues modifiers) every 8 ticks.
- Active prayers drain Prayer points 4x slower.
- You may now activate two overhead prayers at once.`,
  feralexorcism: `__Tier 6 Relic Concept: **Feral Exorcism**__

- Upon unlocking this relic, receive the *Spirit lantern,* a main-hand or off-hand item (toggleable).
   - This item functions as both a light source and a tinderbox.

- Creatures around Gielinor are now infested with malevolent spirits. The *Spirit lantern* will siphon the spirit of all monsters you kill and Hunter creatures you catch, storing up to *1,000 spirits* (can be equipped or in the inventory).
- Toggleable effect: The Spirit lantern will note all loot received from Hunter creatures.
- Successfully hunting a creature causes the lantern to siphon the spirits of all creatures of the same kind up to 15 tiles away.
   - This grants full loot and *Hunter XP* for each creature, but does not kill them, meaning other players can also catch them and there is no respawn timer.

- The *Spirit lantern* can be used at any player-made Fire to cleanse the caught spirits, granting *Firemaking XP* equal to 4x your Firemaking level (affected by Leagues multipliers) every 2 ticks.
   - This action automatically turns it into a Forester's campfire and refreshes its duration.
- When cleansing spirits, there is a 0.1-9.9% chance (scaling linearly with Firemaking level) per Firemaking XP drop to receive a *bonus XP drop in your lowest levelled skill, *equal to 2x that skill's level (affected by Leagues multipliers).

- Additionally, the *Spirit lantern* can be used to spiritually commune with every Guild hunter, allowing you to remotely receive, turn in, and be awarded for *Hunter Rumours.*
   - Novice Hunter Rumours can be started from Level 1 Hunter.
   - Master Hunter Rumours do not require completion of At First Light.`,
  papercrafting: `__Tier 6 Relic Concept: **Papercrafting**__

- Upon unlocking this relic, receive the *Scissors.*
   - This item functions as chisel, knife, needle and thread.

- The *Scissors* can be used on any noted stack of *craftable* and *fletchable* items that would normally require being unnoted to craft and fletch, converting 10 of them into their finished product every 3 ticks. *Full XP* is given for all items, which are also received in noted form. The *Scissors* can turn:
   - Tanned hide and similar materials to armour;
   - Uncut gems to cut gems;
   - Cut gems to bolt tips;
   - Logs to arrow shafts, bows, crossbow stocks and shields;
   - Celastrus bark to battlestaves.
- Similarly, as long as the *Scissors* are in the inventory, its processing effect is also applied to items combined through *Crafting* and *Fletching:*
   - Bow strings to unfinished bows;
   - Crossbow strings to unfinished crossbows;
   - Steel studs to Leather bodies and chaps;
   - Orbs to battlestaves.
- The *Scissors* have no effect on Crafting and Fletching actions with items that are already stackable by default, e.g. feathers to arrow shafts.

- If the Scissors are in the inventory, a noted stack of *Pure essence can be used on a runic altar,* converting 10 of them into runes every 3 ticks.

- All aforementioned actions can be done manually to speed up the process, similar to fletching darts.`,
  mariner: `__Tier 6 Relic Concept: **Mariner**__

- Toggleable effect: All your sailing vessels move at 2x speed.
- *Charting activities* receive the following benefits:
   - Placing a current duck automatically finishes its route;
   - Portable weather stations gather all relevant data upon the first reading, regardless of where it is done;
   - Mermaid riddles are automatically solved;
   - Drinks in sealed crates will no longer teleport you or change your inventory;
   - Harmful NPCs no longer spawn from charting.
- In addition to Sailing XP, each unique charted location also awards *1,000,000 Coins.*
   - The 100% completion bonus is modified to only include the charter locations in your bordering oceans, once all possible areas are unlocked.
- Completing *port tasks* and *Barracuda Trials* roll on a unique drop table that includes:
   - 3 rolls on the highest level salvaging loot table you can access;
   - Lucky caskets, accessing the Lucky impling drop table;
   - Noted Frost dragon bones, Gryphon feathers, and a chance at Belle's folly;
   - Cannonballs (100-500), the tier of which scales with your Sailing level;
   - Boat parts (cannon, sheets, hull, keel), the tier of which scales with your Sailing level;
   - Full facility bottles (containing a random completed facility);
   - A chance at Magic stones and Bottled storm.
- With any *trawling net* built onto your boat, you will passively catch fish every 16-24 ticks whilst you are on your boat, up to what your Fishing level allows you to catch. Better quality nets yield more fish (2-5) each time this effect triggers. Each catch grants full *Fishing XP.*
   - Toggleable effect: Caught fish is sent directly to your bank.
- All salvage is instantly sorted through as if at a Salvaging station, granting *full XP,* and loot is received noted.
- Crewmates yield *100% Sailing experience* for all tasks performed.`,
  reapersavarice: `__Tier 7 Relic Concept: **Reaper's Avarice**__

- Upon unlocking this relic, receive the *Ring of avarice.* Whilst equipped, gain the following benefits:
   - Automatically note and pick up all loot dropped by monsters. Both effects are toggleable.
   - Every time you kill a monster, there is a 50% chance to roll its standard loot table again. This includes all Boss and Raids standard tables.
      - With *Lord of the Rings,* there is a second 50% chance if the first fails.
   - Instead of dropping clue scrolls, all monsters directly drop *clue caskets,* with a 25% chance of it being one tier higher than they normally drop.`,
  rainingluck: `__Tier 7 Relic Concept: **Raining Luck**__

- Every 40-80 minutes, a *Lucky star* will fall somewhere in your available areas (only visible to you). You will be notified of this 1 minute before it lands. Once it does, an arrow will point out its location on the world map.
   - This timer starts immediately upon unlocking this relic, and runs while offline. If the player is ineligible to receive a star after the timer has ended (e.g. was offline, or in an instance), it will instead spawn within a 1-2 minute window as soon as eligible.
- The *Lucky star* remains for 5 minutes, during which it can be continuously mined from.
- Each successful *Mining action on the star grants XP* equal to 10x your Mining level (affected by Leagues multipliers), and rolls on a unique drop table with several high tier resources, such as:
   - Snapdragon and torstol seeds;
   - Raw anglerfish and marlins (noted);
   - Teak and mahogany logs (noted);
   - Dragon equipment, including a 1/32,768 chance at a Dragon full helm;
   - Uncut dragonstones, Uncut onyxes, and a 1/32,768 chance at an Uncut zenyte;
   - Elite and Master clue geodes;
   - *Wishing lamps,* granting 10,000 XP (affected by Leagues multipliers) in a random non-combat skill.`,
  squealoffortune: `__Tier 7 Relic Concept: **Squeal of Fortune**__

- Upon unlocking this relic, receive the *Squeal of fortune.*

- The *Squeal of fortune* can be interacted with "Spins," which are purchased with Coins through the *Squeal of fortune,* and are stored in it.
- Each Spin makes a roll on a random monster's drop table. The monster elected must be within your unlocked regions, and the chance for the monster chosen is as follows:
   - *Common:* 45% chance of a monster below Combat level 30
   - *Uncommon:* 30% chance of a monster between Combat levels 30-100
   - *Rare:* 15% chance of a non-boss monster above Combat level 100
   - *Epic:* 8% chance of a roll on a Boss or Raid's standard loot table
   - *Legendary:* 2% chance of a roll on a Boss or Raid's unique loot table

- A Spin has a base cost of 1,000 Coins, but increases by 10x for each consecutive Spin within an hour:
   - *1st Spin:* 1,000 gp
   - *2nd Spin:* 10,000 gp
   - *3rd Spin:* 100,000 gp
   - *4th Spin:* 1,000,000 gp
   - *5th Spin:* 10,000,000 gp
   - *6th Spin:* 100,000,000 gp
   - *7th Spin onwards:* 1,000,000,000 gp
- The price resets after 60 realtime minutes without buying a Spin.`,
  grandmasteratarms: `__Tier 8 Relic Concept: **Grandmaster at Arms**__

- Toggleable effect: When equipping a weapon, you will *automatically equip* optimal items in your inventory for its attack style.

- All attacks (excluding special attacks) now have *100% increased accuracy* and deal *100% increased damage.*
   - This value is reduced to 75%, 50%, 25%, and 0% for subsequent attacks with the same weapon in the next *24 ticks,* refreshing the duration with each one.
   - The value resets to 100% after 24 ticks without using the weapon. This is tracked individually per weapon.

- All special attacks now have *100% increased accuracy.*
- All special attacks now cost *0 energy.*
   - This value is increased to 10%, 20%, 40%, and 80% for subsequent special attacks with the same weapon in the next *24 ticks,* refreshing the duration with each one.
   - The value resets to 0 energy after 24 ticks without using the weapon's special attack. This is tracked individually per weapon.

- A visual timer for the cooldown period would be overlayed onto each weapon. Manual tracking is not necessary.
   - Each weapon shares the same standard and special attack timer (e.g. After a standard attack with an Arkan blade, the Arkan blade's special attack will cost 10%, not 0 energy).`,
  dragonmulticannon: `__Tier 8 Relic Concept: **Dragon Multicannon**__

- Upon unlocking this relic, receive the *Dragon multicannon.*

- The *Dragon multicannon* is mechanically similar to the Dwarf multicannon, but differs in the following ways:
   - It is a singular item, as opposed to 4 parts.
   - The item does not leave your inventory, and has a "Recall" option, allowing you to remotely pick up your cannon.
   - Upon placing it, the Dragon multicannon will automatically mount, load itself, and start firing. This process takes 8 ticks before it starts rotating and attacking.
   - Its damage is *typeless,* but still rolls against the target's Heavy ranged defence. Similar to the Dwarf multicannon, the *Dragon multicannon's* accuracy depends on your equipment accuracy bonuses.

- The *Dragon multicannon* can be deployed and loaded with any type of cannonball, automatically choosing the highest tier in your inventory. The tier of cannonball determines its max hit:
   - *Bronze cannonballs:* 20
   - *Iron cannonballs:* 25
   - *Steel cannonballs:* 30
   - *Mithril/Granite cannonballs:* 35
   - *Adamant cannonballs:* 40
   - *Rune cannonballs:* 45
   - *Dragon cannonballs:* 50
      - Additionally, Dragon cannonballs burn the target for 10 damage over 10 ticks.
- The *Dragon multicannon* can store up to 300 cannonballs at a time.
- The *Dragon multicannon* can be used and will remain in areas where a Dwarf multicannon is disabled or gets destroyed.
   - This perk will also work inside the Gauntlet.
- If placed in an instance, the *Dragon multicannon* immediately despawns when you leave it.`,
  leap: `__Tier 8 Relic Concept: **Leap**__

- On your next *interactive click* ("red X"), you will leap up to *10 tiles in 1 tick* towards your target, as soon as it would put you within interacting range.
   - This effectively skips the last 5 checkpoint tiles of your route, meaning it will respect walls and pathing.
   - Interacting range differs between actions, e.g. banking requires standing 1 tile away from a Bank booth, but shooting with a Twisted bow only requires being 10 tiles away from an NPC.
- This effect has a *cooldown of 4 ticks* each time it triggers.
- Killing an enemy *resets* both your Leap cooldown and your weapon attack delay.

- The Leap effect is toggleable by right-clicking the Run energy orb.`,
};
