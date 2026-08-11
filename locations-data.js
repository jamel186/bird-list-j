// ═══════════════════════════════════════════════════════
//  BIRD LIST J — LOCATIONS DATA
//  Edit this file to add/update birding locations.
//
//  FORMAT:
//  {
//    name: "Location Name",
//    region: "State/Region, Country",
//    photos: "filename.jpg",          <- lives in your photoss/ folder
//    description: "A paragraph about this place...",
//    iconicSpecies: ["American Robin", "Northern Cardinal"]
//      ^ these must match commonName exactly as written in data.js
//        so the site can pull each bird's photos automatically
//  }
// ═══════════════════════════════════════════════════════

const LOCATIONS = [
  {
    name: "Huntley Meadows",
    region: "Alexandria, VA, USA",
    photos: [{ file:"huntleyMarsh", caption:"The view from the boardwalk" },
            { file:"huntleyForest", caption:"The forest that the trail cuts through" },
            { file:"huntleyWater", caption:"The section with open water" },
            { file:"huntleyMudflat", caption:"Sometimes in the late summer, the open water section turns into mudflats. Here you can see egrets in the distance" }],
    description: "One of my most-visited spots and where many of my early lifers came from. The first part of the trail is through swampy woods dominated by Sweetgum and Northern Red Oak. Then there is a boardwalk that goes through marsh with cattails and Swamp Rose Mallow. There is an area of open water that turns to mudflats in the late summer; perfect for shorebirds. Finally, there is an observation tower next to a small field with a Bluebird box",
    iconicSpecies: ["Red-winged Blackbird", "Hooded Merganser"]
  },
  {
    name: "Huntley Meadows Hike & Bike",
    region: "Alexandria, VA, USA",
    photos: [{ file:"huntleyPath", caption:"The very straight path in May" },
            { file:"huntleyMeadow", caption:"The meadow early in the spring" },
            { file:"huntleyObs", caption:"The view from one of the observation decks" }],
    description: "One of my favorite places to visit. The trail is completely paved and very straight (you can look down and see the end of it from over a mile away). The trail mainly goes through swampy woodlands. There is a large meadow near the beginning that has Indigo Buntings. There are also thickets and Bigtooth Aspen stands scattered throughout the trail. The trail ends at an observation deck where you can look out at the open water of the marsh. There is also another large field near the end and a trail that goes to another observation deck. The latter trail has Prothonotary Warblers and White-eyed Vireos.",
    iconicSpecies: ["White-eyed Vireo", "Indigo Bunting"]
  },
  {
    name: "Dyke Marsh",
    region: "Alexandria, VA, USA",
    photos: [{ file:"dykeIsland.jpg", caption:"The island that has Bald Eagles perched on it often" },
            { file:"dykeMarsh.jpg", caption:"The namesake of the park: its marsh. Mainly cattails and spatterdock" },
            { file:"dykeForest.jpg", caption:"The open riparian forest that characterizes much of the trail" }],
    description: "A wooded trail right by the river. The beginning of the trail has many large trees spaced out evenly; perfect habitat for orioles. The sylvan trail then goes right by the river, providing a great view of the marsh. The islands in the distance often have Bald Eagles perched on them. Red-winged Blackbirds constantly sing. Near the end, there is an observation deck to look at the open water. There is always a Kingbird there and skinks in the wooden bridge posts. Sometimes, you can hear Sora calling early in the morning.",
    iconicSpecies: ["Eastern Warbling Vireo", "Barred Owl", "Northern Rough-winged Swallow"]
  },
  {
    name: "Backyard",
    region: "VA, USA",
    photos: [],
    description: "Where it all started. Average suburban backyard that has all of the common species. Interestingly, there are many Catbirds and Cedar Waxwings in my neighborhood. Sometimes, in the winter, a Cooper's Hawk can be seen on snowy days.",
    iconicSpecies: ["American Robin", "Northern Cardinal"]
  },
  {
    name: "Anacostia Park",
    region: "DC, USA",
    photos: [{ file:"anacostia.jpg", caption:"The meadow filled with thistles and other flowers; where I saw my first Goldfinch" }],
    description: "Have only visited once. Don't remember much; all I remember is a trail by the river that had thistles and many Goldfinches.",
    iconicSpecies: ["American Goldfinch"]
  },
  {
    name: "Meadowlark Botanical Gardens",
    region: "Vienna, VA, USA",
    photos: [{ file:"meadowlarkMeadows.jpg", caption:"The meadows that have many sparrows and finches in the winter. Filled with goldenrod, senna, and bonoset" },
            { file:"meadowlarkForest.jpg", caption:"Tall Tulip Poplars comprise the majority of the forest" },
            { file:"meadowlarkPond.jpg", caption:"A small woodland pond surrounded by reeds" }],
    description: "I used to visit this park every single week for nearly five months. It is a beautiful small park with many flowers in the Spring and Summer. Many of my early lifers came from here and has a variety of habitats, from meadow to forest to lawn to ponds.",
    iconicSpecies: ["Eastern Bluebird", "Pine Siskin"]
  },
  {
    name: "Prince William Forest Park",
    region: "Triangle, VA, USA",
    photos: [{ file:"princeScenic.jpg", caption:"The Scenic Drive in the fall" },
            { file:"princeOrenda.jpg", caption:"The North Orenda Road in the fall, with its wide trails" },
            { file:"princeCreek.jpg", caption:"The creek in the winter" }],
    description: "A large, mature piedmont forest. Going in feels like I've traveled deep into the mountains, when in reality it's only been about half an hour. Has a creek running through. The habitat is all forest, with some creekside habitat and open habitat in the parking lots. Often did the Laurel Loop and Birch Bluff trails. Recently started to go on Laurel Loop and then go on the North Orenda Road for a little bit. A nice road because it is wide and has gravel (no need to worry about ticks!)",
    iconicSpecies: ["Wood Thrush"]
  },
  {
    name: "Mason Neck State Park",
    region: "Lorton, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Ruddy Duck", "Yellow-throated Warbler"]
  },
  {
    name: "Pohick Bay Regional Park",
    region: "Lorton, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Lesser Scaup", "Winter Wren"]
  },
  {
    name: "Theodore Roosevelt Island",
    region: "DC, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Prothonotary Warbler", "Wood Duck"]
  },
  {
    name: "Great Falls Tavern",
    region: "Potomac, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Painted Bunting"]
  },
  {
    name: "Patuxent Research Wildlife Refuge",
    region: "Laurel, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Pine Warbler"]
  },
  {
    name: "Sandy Point State Park",
    region: "Annapolis, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["American Pipit"]
  },
  {
    name: "Quiet Waters Park",
    region: "Annapolis, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Horned Grebe"]
  },
  {
    name: "Kennilworth Aquatic Gardens",
    region: "DC, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Common Merganser"]
  },
  {
    name: "Fort CF Smith Park",
    region: "Arlington, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Great Horned Owl"]
  },
  {
    name: "Central Library",
    region: "Arlington, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Ruby-throated Hummingbird", "American Goldfinch"]
  },
  {
    name: "National Arboretum",
    region: "DC, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Brown Thrasher"]
  },
  {
    name: "Glencarlyn Park",
    region: "Arlington, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Wood Thrush", "Brown-headed Cowbird"]
  },
  {
    name: "Neighborhood",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Oriental Magpie", "Brown-eared Bulbul", "Large-billed Crow"]
  },
  {
    name: "Waryong Park",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Azure-winged Magpie", "Asian Tit", "Oriental Turtle-Dove"]
  },
  {
    name: "Cheonggyecheon",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Gray Heron", "Little Egret"]
  },
  {
    name: "Bomun Lake",
    region: "Gyeongju, Gyeongsangbuk-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Eastern Spot-bellied Duck", "Great Cormorant"]
  },
  {
    name: "Pohang Coast",
    region: "Pohang, Gyeongsangbuk-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Black-tailed Gull"]
  },
  {
    name: "Seoul Forest",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Little Heron", "Great Egret"]
  },
  {
    name: "Bukhansan National Park",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Great Spotted Woodpecker"]
  },
  {
    name: "Namsan Outdoor Botanical Garden",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Ring-necked Pheasant", "Vinous-throated Parrotbill"]
  },
  {
    name: "Olympic Forest",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Chinese Blackbird"]
  },
  {
    name: "Shenandoah National Park",
    region: "Front Royal, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Acadian Flycatcher", "Hooded Warbler", "Kentucky Warbler"]
  },
  {
    name: "Twin Lakes Preserve",
    region: "Wantagh, NY, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Mute Swan", "American Wigeon"]
  },
  {
    name: "Jamaica Bay NWR",
    region: "Broad Channel, NY, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Snow Goose", "Brant"]
  },
  {
    name: "Central Park",
    region: "Manhattan, NY, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Great Black-backed Gull", "Ring-billed Gull"]
  },
  {
    name: "Mason Neck Great Marsh Trail",
    region: "Lorton, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Tundra Swan"]
  },
  {
    name: "Lettuce Lake Park",
    region: "Tampa, FL, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Black-crowned Night Heron"]
  },
  {
    name: "Grand Hyatt Tampa Bay",
    region: "Tampa, FL, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Boat-tailed Grackle", "Least Tern"]
  },
  {
    name: "Fort De Soto Park",
    region: "Tierra Verde, FL, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Willet", "Royal Tern"]
  },
  {
    name: "Honeymoon Island State Park",
    region: "Dunedin, FL, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["American Oystercatcher", "Common Ground Dove"]
  },
  {
    name: "Tampa International Airport",
    region: "Tampa, FL, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Western Cattle Egret"]
  },
  {
    name: "Occoquan Bay NWR",
    region: "Woodbridge, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Prairie Warbler", "Yellow-breasted Chat"]
  },
  {
    name: "Jug Bay Wetlands Sanctuary",
    region: "Upper Marlboro, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Prothonotary Warbler", "Orchard Oriole"]
  },
  {
    name: "Seoripul Park",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Eurasian Jay"]
  },
  {
    name: "Odaesan National Park",
    region: "Pyeongchang-gun, Gangwon-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Blue-and-white Flycatcher", "Varied Tit"]
  },
  {
    name: "Gyeongpo Lake",
    region: "Gangneung, Gangwon-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Oriental Reed Warbler", "Great Egret"]
  },
  {
    name: "Pension",
    region: "Seogwipo, Jeju-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Blue Rock Thrush"]
  },
  {
    name: "Gotjawal Provincial Park",
    region: "Seogwipo, Jeju-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Japanese Bush Warbler", "Warbling White-eye"]
  },
  {
    name: "Mara-do",
    region: "Seogwipo, Jeju-do, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Pleske's Grasshopper Warbler", "Pacific Swift"]
  },
  {
    name: "Ganghwa-do Mudflats",
    region: "Ganghwa-gun, Incheon, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Common Greenshank", "Black-faced Spoonbill"]
  },
  {
    name: "Ganghwa-do South Fields",
    region: "Ganghwa-gun, Incheon, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Eastern Cattle-Egret", "Medium Egret"]
  },
  {
    name: "Tommy Thompson Park",
    region: "Toronto, Ontario, Canada",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Long-tailed Duck", "Red-breasted Merganser"]
  },
  {
    name: "Presque Isle State Park",
    region: "Erie, PA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Common Loon"]
  },
  {
    name: "National Colonial Farm",
    region: "Accokeek, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Eastern Meadowlark", "Brown-headed Cowbird"]
  },
  {
    name: "Shohei Bridge",
    region: "Tokyo, Japan",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Oriental Greenfinch"]
  },
  {
    name: "Meadowood Mustang Trailhead",
    region: "Lorton, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Summer Tanager", "Eastern Meadowlark"]
  },
  {
    name: "Hammonasset Beach State Park",
    region: "New Haven, CT, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Willow Flycatcher", "Common Tern"]
  },
  {
    name: "Wells Reserve at Laudholm",
    region: "Kennebunkport, ME, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Piping Plover"]
  },
  {
    name: "Newbury Salt Marsh",
    region: "Newbury, MA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Marsh Wren"]
  },
  {
    name: "Mckee Beshers Hughes Hollow",
    region: "Poolesville, MD, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Hooded Merganser", "Prothonotary Warbler", "Yellow-throated Vireo"]
  },
  {
    name: "Old North Bridge",
    region: "Concord, MA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Northern Harrier"]
  },
  {
    name: "Manassas Battlefield Brawner Farm",
    region: "Lorton, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Grasshopper Sparrow", "Eastern Meadowlark"]
  },
  {
    name: "Changgyeonggung Palace",
    region: "Seoul, South Korea",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Dollarbird"]
  },
  {
    name: "Monticello Park",
    region: "Alexandria, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Northern Parula", "Black-throated Blue Warbler"]
  },
  {
    name: "Green Spring Gardens",
    region: "Alexandria, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Mississippi Kite", "Ruby-throated Hummingbird"]
  },
  {
    name: "Mason District Park",
    region: "Annandale, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Red-breasted Nuthatch", "Pileated Woodpecker"]
  },
  {
    name: "Great Falls Park",
    region: "Great Falls, VA, USA",
    photos: [{ file:"", caption:"" }],
    description: "Where it all started.",
    iconicSpecies: ["Red-flanked Bluetail", "Ring-necked Duck"]
  },
];
