// ═══════════════════════════════════════════════════════
//  BIRD LIST J — LOCATIONS DATA
//  Edit this file to add/update birding locations.
//
//  FORMAT:
//  {
//    name: "Location Name",
//    region: "State/Region, Country",
//    photo: "filename.jpg",          <- lives in your photos/ folder
//    description: "A paragraph about this place...",
//    iconicSpecies: ["American Robin", "Northern Cardinal"]
//      ^ these must match commonName exactly as written in data.js
//        so the site can pull each bird's photo automatically
//  }
// ═══════════════════════════════════════════════════════

const LOCATIONS = [
  {
    name: "Huntley Meadows",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Red-winged Blackbird", "Hooded Merganser"]
  },
  {
    name: "Huntley Meadows Hike & Bike",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["White-eyed Vireo", "Indigo Bunting"]
  },
  {
    name: "Dyke Marsh",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "Right by the river",
    iconicSpecies: ["Eastern Warbling Vireo", "Barred Owl", "Northern Rough-winged Swallow"]
  },
  {
    name: "Backyard",
    region: "VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["American Robin", "Northern Cardinal"]
  },
  {
    name: "Anacostia Park",
    region: "DC, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["American Goldfinch"]
  },
  {
    name: "Meadowlark Botanical Gardens",
    region: "Vienna, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Eastern Bluebird", "Pine Siskin"]
  },
  {
    name: "Prince William Forest Park",
    region: "Triangle, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Wood Thrush"]
  },
  {
    name: "Mason Neck State Park",
    region: "Lorton, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Ruddy Duck", "Yellow-throated Warbler"]
  },
  {
    name: "Pohick Bay Regional Park",
    region: "Lorton, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Lesser Scaup", "Winter Wren"]
  },
  {
    name: "Theodore Roosevelt Island",
    region: "DC, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Prothonotary Warbler", "Wood Duck"]
  },
  {
    name: "Great Falls Tavern",
    region: "Potomac, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Painted Bunting"]
  },
  {
    name: "Patuxent Research Wildlife Refuge",
    region: "Laurel, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Pine Warbler"]
  },
  {
    name: "Sandy Point State Park",
    region: "Annapolis, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["American Pipit"]
  },
  {
    name: "Quiet Waters Park",
    region: "Annapolis, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Horned Grebe"]
  },
  {
    name: "Kennilworth Aquatic Gardens",
    region: "DC, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Common Merganser"]
  },
  {
    name: "Fort CF Smith Park",
    region: "Arlington, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Great Horned Owl"]
  },
  {
    name: "Central Library",
    region: "Arlington, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Ruby-throated Hummingbird", "American Goldfinch"]
  },
  {
    name: "National Arboretum",
    region: "DC, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Brown Thrasher"]
  },
  {
    name: "Glencarlyn Park",
    region: "Arlington, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Wood Thrush", "Brown-headed Cowbird"]
  },
  {
    name: "Neighborhood",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Oriental Magpie", "Brown-eared Bulbul", "Large-billed Crow"]
  },
  {
    name: "Waryong Park",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Azure-winged Magpie", "Asian Tit", "Oriental Turtle-Dove"]
  },
  {
    name: "Cheonggyecheon",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Gray Heron", "Little Egret"]
  },
  {
    name: "Bomun Lake",
    region: "Gyeongju, Gyeongsangbuk-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Eastern Spot-bellied Duck", "Great Cormorant"]
  },
  {
    name: "Pohang Coast",
    region: "Pohang, Gyeongsangbuk-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Black-tailed Gull"]
  },
  {
    name: "Seoul Forest",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Little Heron", "Great Egret"]
  },
  {
    name: "Bukhansan National Park",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Great Spotted Woodpecker"]
  },
  {
    name: "Namsan Outdoor Botanical Garden",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Ring-necked Pheasant", "Vinous-throated Parrotbill"]
  },
  {
    name: "Olympic Forest",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Chinese Blackbird"]
  },
  {
    name: "Shenandoah National Park",
    region: "Front Royal, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Acadian Flycatcher", "Hooded Warbler", "Kentucky Warbler"]
  },
  {
    name: "Twin Lakes Preserve",
    region: "Wantagh, NY, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Mute Swan", "American Wigeon"]
  },
  {
    name: "Jamaica Bay NWR",
    region: "Broad Channel, NY, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Snow Goose", "Brant"]
  },
  {
    name: "Central Park",
    region: "Manhattan, NY, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Great Black-backed Gull", "Ring-billed Gull"]
  },
  {
    name: "Mason Neck Great Marsh Trail",
    region: "Lorton, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Tundra Swan"]
  },
  {
    name: "Lettuce Lake Park",
    region: "Tampa, FL, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Black-crowned Night Heron"]
  },
  {
    name: "Grand Hyatt Tampa Bay",
    region: "Tampa, FL, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Boat-tailed Grackle", "Least Tern"]
  },
  {
    name: "Fort De Soto Park",
    region: "Tierra Verde, FL, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Willet", "Royal Tern"]
  },
  {
    name: "Honeymoon Island State Park",
    region: "Dunedin, FL, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["American Oystercatcher", "Common Ground Dove"]
  },
  {
    name: "Tampa International Airport",
    region: "Tampa, FL, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Western Cattle Egret"]
  },
  {
    name: "Occoquan Bay NWR",
    region: "Woodbridge, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Prairie Warbler", "Yellow-breasted Chat"]
  },
  {
    name: "Jug Bay Wetlands Sanctuary",
    region: "Upper Marlboro, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Prothonotary Warbler", "Orchard Oriole"]
  },
  {
    name: "Seoripul Park",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Eurasian Jay"]
  },
  {
    name: "Odaesan National Park",
    region: "Pyeongchang-gun, Gangwon-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Blue-and-white Flycatcher", "Varied Tit"]
  },
  {
    name: "Gyeongpo Lake",
    region: "Gangneung, Gangwon-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Oriental Reed Warbler", "Great Egret"]
  },
  {
    name: "Pension",
    region: "Seogwipo, Jeju-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Blue Rock Thrush"]
  },
  {
    name: "Gotjawal Provincial Park",
    region: "Seogwipo, Jeju-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Japanese Bush Warbler", "Warbling White-eye"]
  },
  {
    name: "Mara-do",
    region: "Seogwipo, Jeju-do, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Pleske's Grasshopper Warbler", "Pacific Swift"]
  },
  {
    name: "Ganghwa-do Mudflats",
    region: "Ganghwa-gun, Incheon, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Common Greenshank", "Black-faced Spoonbill"]
  },
  {
    name: "Ganghwa-do South Fields",
    region: "Ganghwa-gun, Incheon, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Eastern Cattle-Egret", "Medium Egret"]
  },
  {
    name: "Tommy Thompson Park",
    region: "Toronto, Ontario, Canada",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Long-tailed Duck", "Red-breasted Merganser"]
  },
  {
    name: "Presque Isle State Park",
    region: "Erie, PA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Common Loon"]
  },
  {
    name: "National Colonial Farm",
    region: "Accokeek, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Eastern Meadowlark", "Brown-headed Cowbird"]
  },
  {
    name: "Shohei Bridge",
    region: "Tokyo, Japan",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Oriental Greenfinch"]
  },
  {
    name: "Meadowood Mustang Trailhead",
    region: "Lorton, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Summer Tanager", "Eastern Meadowlark"]
  },
  {
    name: "Hammonasset Beach State Park",
    region: "New Haven, CT, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Willow Flycatcher", "Common Tern"]
  },
  {
    name: "Wells Reserve at Laudholm",
    region: "Kennebunkport, ME, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Piping Plover"]
  },
  {
    name: "Newbury Salt Marsh",
    region: "Newbury, MA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Marsh Wren"]
  },
  {
    name: "Mckee Beshers Hughes Hollow",
    region: "Poolesville, MD, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Hooded Merganser", "Prothonotary Warbler", "Yellow-throated Vireo"]
  },
  {
    name: "Old North Bridge",
    region: "Concord, MA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Northern Harrier"]
  },
  {
    name: "Manassas Battlefield Brawner Farm",
    region: "Lorton, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Grasshopper Sparrow", "Eastern Meadowlark"]
  },
  {
    name: "Changgyeonggung Palace",
    region: "Seoul, South Korea",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Dollarbird"]
  },
  {
    name: "Monticello Park",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Northern Parula", "Black-throated Blue Warbler"]
  },
  {
    name: "Green Spring Gardens",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Mississippi Kite", "Ruby-throated Hummingbird"]
  },
  {
    name: "Mason District Park",
    region: "Annandale, VA, USA",
    photo: "",
    description: "One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Red-breasted Nuthatch", "Pileated Woodpecker"]
  },
  {
    name: "Great Falls Park",
    region: "Great Falls, VA, USA",
    photo: "",
    description: "Where it all started.",
    iconicSpecies: ["Red-flanked Bluetail", "Ring-necked Duck"]
  },
];
