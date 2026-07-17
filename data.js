// ═══════════════════════════════════════════════════════
//  BIRD LIST J — SHARED DATA
//  Edit this file to add/update birds.
//  All pages on the site read from this one file.
//
//  PHOTOS FORMAT:
//  Each photo is an object with a file name and optional caption.
//  Example:
//    photos: [
//      { file: "robin-1.jpg", caption: "Male in the backyard, April 2018" },
//      { file: "robin-2.jpg", caption: "Juvenile in August" }
//    ]
//  No caption? Just leave it blank:
//    { file: "robin-1.jpg", caption: "" }
//  No photos yet? Leave the array empty:
//    photos: []
// ═══════════════════════════════════════════════════════

const BIRDS = [
  {
    commonName: "American Black Duck",
    scientificName: "Anas rubripes",
    dateFirstSeen: "2020-11-22",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["marsh"],
    notes: "Uncommon, but can be seen at Huntley & Meadowlark, especially in the fall",
    photos: [{ file: "blackDuck.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Veery",
    scientificName: "Catharus fuscescens",
    dateFirstSeen: "2022-04-30",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Chipping Sparrow",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-10-24",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["meadow"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Hairy Woodpecker",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-10-31",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Hermit Thrush",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-10-31",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "White-throated Sparrow",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-07",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Dark-eyed Junco",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-14",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Carolina Chickadee",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-15",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Tufted Titmouse",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-15",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "House Finch",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-15",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest", "urban"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Yellow-bellied Sapsucker",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-21",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Northern Flicker",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-21",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Cedar Waxwing",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-21",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Pine Siskin",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-21",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Downy Woodpecker",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-21",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Red-bellied Woodpecker",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-22",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Black Vulture",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-22",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["urban", "open field"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Ruby-crowned Kinglet",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-27",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Brown Creeper",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-28",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Red-shouldered Hawk",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-28",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Pileated Woodpecker",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-11-29",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Red-breasted Nuthatch",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-13",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Ruddy Duck",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-20",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Lesser Scaup",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-20",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["open water"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Greater Scaup",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-20",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["open water"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "American Coot",
    scientificName: "Fulica americana",
    dateFirstSeen: "2020-12-20",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["marsh", "open water"],
    notes: "very nice",
    photos: [{ file: "coot.JPG"}],
    videoUrl: ""
  },
  {
    commonName: "Redhead",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-20",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["open water"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Bufflehead",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-20",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["open water"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Winter Wren",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-30",
    location: "Pohick Bay Regional Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Baltimore Oriole",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-25",
    location: "Dyke Marsh, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Ring-billed Gull",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-12-25",
    location: "Dyke Marsh, VA, USA",
    habitat: ["river", "coast"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Clapper Rail",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2021-01-02",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Merlin",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2021-01-02",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh", "open field"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Sora",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2021-01-18",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Hooded Merganser",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2021-01-18",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Wilson's Snipe",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2021-01-30",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Scarlet Tanager",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2020-09-27",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "White-breasted Nuthatch",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2020-09-26",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Swainson's Thrush",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2020-09-26",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Indigo Bunting",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-08",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Canada Warbler",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-08",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["swamp"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Eastern Kingbird",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-14",
    location: "Dyke Marsh, VA, USA",
    habitat: ["open field"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Great Crested Flycatcher",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-02",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Common Yellowthroat",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-02",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "White-eyed Vireo",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-08",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Black-throated Blue Warbler",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2021-05-08",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Little Blue Heron",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2020-09-05",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Green Heron",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2020-09-05",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Osprey",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2020-09-05",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Great Egret",
    scientificName: "Passerina cyanea",
    dateFirstSeen: "2020-09-05",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Snow Goose",
    scientificName: "Piranga olivacea",
    dateFirstSeen: "2021-12-18",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
      {
    commonName: "Great Horned Owl",
    scientificName: "Bubo virginianus",
    dateFirstSeen: "2021-03-12",
    location: "Fort CF Smith Park, VA, USA",
    habitat: ["forest"],
    notes: "Uncommon. I checked eBird and saw that someone reported there being a nest in a local park. I went over and did a stakeout. Eventually I was able to spot the owls off in the distance. They were very well camoflauged. I believe that was the last year those owls bred there.",
    photos: [{ file: "horned.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "Barred Owl",
    scientificName: "Strix varia",
    dateFirstSeen: "2021-01-23",
    location: "Huntley Meadows, VA, USA",
    habitat: ["swamp"],
    notes: "Quite common in swamps and riparian woodlands. Their booming calls are unmistakable and very loud. There is an active nest in Dyke Marsh which many birders flock to in April. The first owl I ever saw; it was sleeping in a Redcedar tree at Huntley Meadows.",
    photos: [{ file: "bar1.JPG", caption: "In Holly Tree, backyard" },
             { file: "bar2.JPG", caption: "In Holly Tree, backyard" },
            { file: "babybar.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Green-winged Teal",
    scientificName: "Strix varia",
    dateFirstSeen: "2021-01-23",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Quite common in swamps and riparian woodlands. Their booming calls are unmistakable and very loud. There is an active nest in Dyke Marsh which many birders flock to in April. The first owl I ever saw; it was sleeping in a Redcedar tree at Huntley Meadows.",
    photos: [{ file: "bar1.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Eastern Phoebe",
    scientificName: "Strix varia",
    dateFirstSeen: "2021-01-23",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest", "river"],
    notes: "Quite common in swamps and riparian woodlands. Their booming calls are unmistakable and very loud. There is an active nest in Dyke Marsh which many birders flock to in April. The first owl I ever saw; it was sleeping in a Redcedar tree at Huntley Meadows.",
    photos: [{ file: "bar1.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Ovenbird",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-05-01",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24"  },
            { file: "oven2.JPG", caption: "Prince William Forest Park, 5/1/21"  }],
    videoUrl: ""
  },
  {
    commonName: "Red-eyed Vireo",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-05-01",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Northern Parula",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-05-01",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
   {
    commonName: "Wood Thrush",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-05-01",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Louisiana Waterthrush",
    scientificName: "Parkesia motacilla",
    dateFirstSeen: "2021-05-01",
    location: "Prince William Forest Park, VA, USA",
    habitat: ["forest"],
    notes: "Have only seen a few times. This is probably because they are early migrants and I don't go birdwatching that often in March and April. If you know where to look, they are common.",
    photos: [{ file: "lowa.JPG", caption: "Riverbend Park, 3/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Northern Waterthrush",
    scientificName: "Parkesia noveboracensis",
    dateFirstSeen: "2021-08-28",
    location: "Dyke Marsh, VA, USA",
    habitat: ["marsh"],
    notes: "Uncommon. Interestingly I have seen them in marsh habitats when they supposedly breed in swamps and bogs. I saw one at Dyke and another at Jug Bay.",
    photos: [{ file: "nowa.JPG", caption: "Dyke Marsh, 8/28/21" }],
    videoUrl: ""
  },
  {
    commonName: "Black-and-white Warbler",
    scientificName: "Mniotilta varia",
    dateFirstSeen: "2021-05-08",
    location: "Huntley Meadows Hike & Bike, VA, USA",
    habitat: ["forest"],
    notes: "Very common during migration season in any type of forest. Not a deep forest bird, likes the edges and sunny areas of the forest. Seems to associate with habitat suited for Redstarts.",
    photos: [{ file: "blw.JPG", caption: "Meadowood Recreation Area, 9/21/24" }],
    videoUrl: ""
  },
   {
    commonName: "Acadian Flycatcher",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-05-02",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Blue-gray Gnatcatcher",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-05-02",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Pine Warbler",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-04-04",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Palm Warbler",
    scientificName: "Seiurus aurocapilla",
    dateFirstSeen: "2021-04-04",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest"],
    notes: "One of my favorite birds. I love the crescendo song of the Ovenbird. And, I find its name funny. Very common in forests during migration season. I believe they breed in Prince William Forest.",
    photos: [{ file: "oven.JPG", caption: "Glencarlyn Park, 4/28/24" }],
    videoUrl: ""
  },
  {
    commonName: "Prothonotary Warbler",
    scientificName: "Protonotaria citrea",
    dateFirstSeen: "2021-04-17",
    location: "Dyke Marsh, VA, USA",
    habitat: ["swamp"],
    notes: "A very common breeder in swamps and riverside woods in the area. I still can't forget my first time really getting to see this bird. It amazed me how bright this bird was; it was like a highlighter. I took the video below during that time, and I still remember this moment to this day. I think that the ringtone adds something interesting to the song.",
    photos: [{ file: "proth.JPG", caption: "Huntley Meadows, 5/2/21" },
            { file: "pro2.JPG", caption: "Jug Bay, 5/15/22" }],
    videoUrl: ""
  },
  {
    commonName: "Virginia Rail",
    scientificName: "Rallus limicola",
    dateFirstSeen: "2021-12-25",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Rare. The first time I saw was when I went to Huntley Meadows for a regular outing when I saw a crowd of birders on the boardwalk. I asked what they were seeing and they told me it was the rail. This was my second rail stakeout in Huntley Meadows. We waited and the rail stuck its head out of a clump of cattails before revealing itself completely and sitting still. I took as many photos as I could. I was especially intrigued at its eyes.",
    photos: [{ file: "vaRail.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
     {
    commonName: "Brant",
    scientificName: "Branta bernicla",
    dateFirstSeen: "2021-12-20",
    location: "Jamaica Bay NWR, NY, USA",
    habitat: ["coast"],
    notes: "It was winter when I went to New York City for vacation. I heard that Jamaica Bay NWR was a great birdwatching spot, so I headed there. It was a windy winter morning and there were geese everywhere. It was the first time I had seen so many before. The Brant were near the parking lot right on the beach.",
    photos: [{ file: "brant.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Oriental Magpie",
    scientificName: "Garrulus glandarius",
    dateFirstSeen: "2021-06-28",
    location: "Neighborhood, Seoul, South Korea",
    habitat: ["urban"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Brown-eared Bulbul",
    scientificName: "Garrulus glandarius",
    dateFirstSeen: "2021-06-28",
    location: "Neighborhood, Seoul, South Korea",
    habitat: ["urban"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Azure-winged Magpie",
    scientificName: "Garrulus glandarius",
    dateFirstSeen: "2021-07-02",
    location: "Waryong Park, Seoul, South Korea",
    habitat: ["urban", "forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
   {
    commonName: "Eurasian Tree Sparrow",
    scientificName: "Garrulus glandarius",
    dateFirstSeen: "2021-07-02",
    location: "Waryong Park, Seoul, South Korea",
    habitat: ["urban", "forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Eurasian Jay",
    scientificName: "Garrulus glandarius",
    dateFirstSeen: "2022-06-28",
    location: "Seoripul Park, Seoul, South Korea",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Gray-backed Thrush",
    scientificName: "Turdus hortulorum",
    dateFirstSeen: "2022-06-28",
    location: "Seoripul Park, Seoul, South Korea",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Marsh Tit",
    scientificName: "Poecile palustris",
    dateFirstSeen: "2021-07-02",
    location: "Waryong Park, Seoul, South Korea",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Oriental Reed Warbler",
    scientificName: "Acrocephalus orientalis",
    dateFirstSeen: "2022-07-02",
    location: "Gyeongpo Lake, Gangwon-do, South Korea",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Common Kingfisher",
    scientificName: "Alcedo atthis",
    dateFirstSeen: "2022-07-02",
    location: "Gyeongpo Lake, Gangwon-do, South Korea",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Whiskered Tern",
    scientificName: "Chlidonias hybrida",
    dateFirstSeen: "2022-07-02",
    location: "Gyeongpo Lake, Gangwon-do, South Korea",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Hooded Warbler",
    scientificName: "Setophaga citrina",
    dateFirstSeen: "2022-06-04",
    location: "Shenandoah National Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Kentucky Warbler",
    scientificName: "Geothlypis formosa",
    dateFirstSeen: "2022-06-04",
    location: "Shenandoah National Park, VA, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Summer Tanager",
    scientificName: "Piranga rubra",
    dateFirstSeen: "2022-05-21",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest", "scrub", "meadow"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Yellow-throated Vireo",
    scientificName: "Vireo flavifrons",
    dateFirstSeen: "2022-05-15",
    location: "Jug Bay Wetlands Sanctuary, MD, USA",
    habitat: ["forest"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Orchard Oriole",
    scientificName: "Icterus spurius",
    dateFirstSeen: "2021-05-22",
    location: "Dyke Marsh, VA, USA",
    habitat: ["swamp"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Purple Martin",
    scientificName: "Progne subis",
    dateFirstSeen: "2022-05-14",
    location: "Patuxent Research Wildlife Refuge, MD, USA",
    habitat: ["open field"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" }],
    videoUrl: ""
  },
  {
    commonName: "Nanday Parakeet",
    scientificName: "Aratinga nenday",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["urban", "scrub"],
    notes: "One of the first birds I saw when I arrived at Fort De Soto Park. Making loud calls and were traveling in a flock. While invasive, being able to look at parrots in the wild was quite nice.",
    photos: [{ file: "nanday.JPG", caption: "Teal chest patch is noticable" }],
    videoUrl: ""
  },
  {
    commonName: "Sanderling",
    scientificName: "Calidris alba",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Much smaller than I imagined. Looking at them running along the shore and away from the waves was quite cute.",
    photos: [{ file: "sanderlingFlock.JPG", caption: "Flock of Sanderlings on shore" },
            { file: "shoreCrazy.JPG", caption: "Three species in this photo: Sanderling, Dunlin, & Least Sandpiper. Note froth on Sandpiper's beak in center" }],
    videoUrl: ""
  },
  {
    commonName: "Dunlin",
    scientificName: "Calidris alpina",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "A larger shorebird. The black belly patch is distinctive.",
    photos: [{ file: "dunlin.JPG", caption: "Probing sand for food" }],
    videoUrl: ""
  },
  {
    commonName: "Least Sandpiper",
    scientificName: "Calidris minutilla",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach", "mudflat"],
    notes: "Common both on the beach and in freshwater marshes like Huntley Meadows. Large congregations in Huntley during the fall. Small size and yellow legs are distinctive.",
    photos: [{ file: "least.JPG", caption: "Huntley in Fall" },
            { file: "leastPair.JPG", caption: "Pair on the beach. Dunlin in the background" }],
    videoUrl: ""
  },
  {
    commonName: "Ruddy Turnstone",
    scientificName: "Arenaria interpres",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach", "coast"],
    notes: "Common on the shore. Love how colorful the bird is.",
    photos: [{ file: "ruddy.JPG", caption: "On rocky shore; especially like the color of the water" }],
    videoUrl: ""
  },
  {
    commonName: "Brown Pelican",
    scientificName: "Pelecanus occidentalis",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["ocean"],
    notes: "Quite common when I went to Tampa. Many were sitting on the water in the bay.",
    photos: [{ file: "pelican.JPG", caption: "Floating on the water" }],
    videoUrl: ""
  },
  {
    commonName: "Willet",
    scientificName: "Tringa semipalmata",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Smaller than I had imagined. Seeing the wing pattern in person was incredible. Quite common on the beach, strutting around and probing for food.",
    photos: [{ file: "willet.JPG", caption: "While plain, still quite handsome" },
            { file: "willetWing.JPG", caption: "Blurry, but note the flashy wing pattern" }],
    videoUrl: ""
  },
  {
    commonName: "Laughing Gull",
    scientificName: "Leucophaeus atricilla",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Common on Southeastern beaches. The call actually does sound like somebody laughing.",
    photos: [{ file: "laughing.JPG", caption: "In the very center of the large flock, with the black head" }],
    videoUrl: ""
  },
  {
    commonName: "Black Skimmer",
    scientificName: "Rynchops niger",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Seeing the bills in person was quite the sight. They are bright orange and very long, with the lower bill being longer than the upper one. Many were doing courtship displays when I was in Florida.",
    photos: [{ file: "skimmer.JPG", caption: "The bill still amazes me" },
            { file: "skimmerPair.JPG", caption: "Perhaps a courtship ritual" },
            { file: "skimmerFlock.JPG", caption: "Hundreds were just loafing on the beach" }],
    videoUrl: ""
  },
  {
    commonName: "Royal Tern",
    scientificName: "Thalasseus maximus",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Common on the beaches of the Southeast. Very large and conspicuous because of their bright orange bills. Many were doing their courtship displays.",
    photos: [{ file: "royal.JPG", caption: "Quite a royal looking bird" },
            { file: "royalFlock.JPG", caption: "Couple dozen were loafing on the beach with Sandwiches, a couple Forster's, and some sandpipers and plovers" },
            { file: "royalPair.JPG", caption: "Courtship ritual. Note the funny looking fish" }],
    videoUrl: ""
  },
  {
    commonName: "Sandwich Tern",
    scientificName: "Thalasseus sandvicensis",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Common on the beaches of the Southeast. Always hanging out with the Royal Terns. Kaufman's description of the birds were correct: 'The kid brother of the royal tern'",
    photos: [{ file: "sandwich.JPG", caption: "The bicolored bill is very distinctive" },
            { file: "sandwichFlock.JPG", caption: "Always tagging along with the larger Royals" },
            { file: "sandwichJuv.JPG", caption: "To the right is the Sandwich juvenile. The left is a Royal juvenile" }],
    videoUrl: ""
  },
  {
    commonName: "Red Knot",
    scientificName: "Calidris canutus",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach"],
    notes: "Uncommon. There was a flock of about 100 in the protected beach area with the skimmers and terns. Not in full breeding plumage yet when I saw them. After reading the book Moonbird, I was surprised at how long their migratory journey was and how endangered these birds really were.",
    photos: [{ file: "redknot.JPG", caption: "Large flock resting. Not in breeding plumage yet. This was taken in early April" }],
    videoUrl: ""
  },
  {
    commonName: "Black-bellied Plover",
    scientificName: "Pluvialis squatarola",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach", "mudflat"],
    notes: "Common when I went to Florida. Many were on the beaches, associating with the terns. There were also many on the mudflats on the bay. One of my favorite birds.",
    photos: [{ file: "bPlover.JPG", caption: "Nonbreeding plumage. Associating with the terns" },
            { file: "bPloverNice.JPG", caption: "Breeding plumage coming in. Hanging out on the flats" }],
    videoUrl: ""
  },
  {
    commonName: "Semipalmated Plover",
    scientificName: "Charadrius semipalmatus",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach", "mudflat"],
    notes: "Common. Abundant on the beaches when I went to Florida. Also present at Huntley in the Fall on the flats.",
    photos: [{ file: "semiP.JPG", caption: "Tiny little plover feeding on the beach by seaweed." }],
    videoUrl: ""
  },
  {
    commonName: "Short-billed Dowitcher",
    scientificName: "Limnodromus griseus",
    dateFirstSeen: "2022-04-11",
    location: "Fort De Soto Park, FL, USA",
    habitat: ["beach", "mudflat"],
    notes: "Common on the beaches. Larger than the other shorebirds and used its long bill to probe into the sand for food.",
    photos: [{ file: "shortDow.JPG", caption: "Bird with long bill probing in the foreground" }],
    videoUrl: ""
  },
  {
    commonName: "Marbled Godwit",
    scientificName: "Limosa fedoa",
    dateFirstSeen: "2022-04-12",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["mudflat"],
    notes: "Uncommon. Saw 2 on the flats in the bay. Quite surprised when I saw them. The upturned bill is very unique.",
    photos: [{ file: "godwit.JPG", caption: "Not the best quality, but note the upturned bill" },
            { file: "godwitPair.JPG", caption: "A pair of them" }],
    videoUrl: ""
  },
  {
    commonName: "American Oystercatcher",
    scientificName: "Haematopus palliatus",
    dateFirstSeen: "2022-04-12",
    location: "Honeymoon Island State Park, FL, USA",
    habitat: ["oysterbeds"],
    notes: "Uncommon. Saw 1 at Honeymoon Island, where they had oyster beds. Its red bill is very noticable, even from a distance.",
    photos: [{ file: "oyster.JPG", caption: "Far out on the oyster beds. The bill is especially noticable" }],
    videoUrl: ""
  },
  {
    commonName: "Prairie Warbler",
    scientificName: "Setophaga discolor",
    dateFirstSeen: "2022-04-12",
    location: "Honeymoon Island State Park, FL, USA",
    habitat: ["scrub"],
    notes: "Common in their preferred habitat. Abundant in places like Occoquan. Their rising song is quite distinctive.",
    photos: [{ file: "prairie.JPG", caption: "Bright yellow bird in the mangroves. Winters in Florida" }],
    videoUrl: ""
  },
  {
    commonName: "Killdeer",
    scientificName: "Charadrius vociferus",
    dateFirstSeen: "2022-04-12",
    location: "Honeymoon Island State Park, FL, USA",
    habitat: ["open field", "coast"],
    notes: "Uncommon. I haven't seen that many in my years of birding. Some come through during Fall migration in Huntley.",
    photos: [{ file: "killdeer.JPG", caption: "On the flats in Huntley during Fall migration" },
            { file: "killdeerCall.JPG", caption: "Making its characteristic kill-deer call" }],
    videoUrl: ""
  },
  {
    commonName: "Common Ground Dove",
    scientificName: "Columbina passerina",
    dateFirstSeen: "2022-04-12",
    location: "Honeymoon Island State Park, FL, USA",
    habitat: ["scrub"],
    notes: "Saw one on Florida in the parking lot of a park by the ocean. Small and pink.",
    photos: [{ file: "groundDove.JPG", caption: "Small dove on the ground near a parking lot" }],
    videoUrl: ""
  },
  {
    commonName: "Forster's Tern",
    scientificName: "Sterna forsteri",
    dateFirstSeen: "2022-04-12",
    location: "Honeymoon Island State Park, FL, USA",
    habitat: ["beach", "coast"],
    notes: "Common when I was in Florida. The forked tails and black and red bills are distinctive. They hunt by hovering in the air and dive bombing into the water.",
    photos: [{ file: "forsterLoaf.JPG", caption: "Loafing in the sand" },
             { file: "forster.JPG", caption: "Two winter birds changing into breeding plumage" },
            { file: "forsterDive.JPG", caption: "Divebombing into the water to catch fish" }],
    videoUrl: ""
  },
  {
    commonName: "Common Nighthawk",
    scientificName: "Chordeiles minor",
    dateFirstSeen: "2022-04-11",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["urban", "scrub"],
    notes: "Uncommon. When I used to live in an apartment, I think I would hear the nighthawk's calls on certain nights. I also see them active during dusk, especially around stadium lights.",
    photos: [],
    videoUrl: ""
  },
  {
    commonName: "Black-crowned Night Heron",
    scientificName: "Nycticorax nycticorax",
    dateFirstSeen: "2022-04-10",
    location: "Lettuce Lake Park, FL, USA",
    habitat: ["marsh", "river"],
    notes: "Uncommon. A small heron that haunts the river's edge. I believe the reason I haven't seen many are because these birds are actually nocturnal, being active around dusk and into the night.",
    photos: [{ file: "blackNight.JPG", caption: "Flying in a cypress swamp during the day. Usually active during the night" }],
    videoUrl: ""
  },
  {
    commonName: "Yellow-crowned Night Heron",
    scientificName: "Nyctanassa violacea",
    dateFirstSeen: "2022-04-10",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["marsh"],
    notes: "Uncommon. Saw a couple in mangroves by the bay at dusk. Juveniles have a black bill, while Black-crowns have a yellowish bill",
    photos: [{ file: "yellowNight.JPG", caption: "Juvenile in the mangroves at evening. Note the black bill" }],
    videoUrl: ""
  },
  {
    commonName: "Tricolored Heron",
    scientificName: "Egretta tricolor",
    dateFirstSeen: "2022-04-10",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["marsh"],
    notes: "Common. Saw a few roosting in mangroves by the bay at dusk. Both the juveniles and adults are striking. A smaller heron, about the size of a Reddish Egret",
    photos: [{ file: "tricolor.JPG", caption: "Adult in the mangroves. Sky blue bill and red eyes are unmistakable" },
            { file: "tricolorJuv.JPG", caption: "Juvenile was right by the adult. The yellow is distinctive" }],
    videoUrl: ""
  },
  {
    commonName: "Snowy Egret",
    scientificName: "Egretta thula",
    dateFirstSeen: "2022-04-10",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["beach"],
    notes: "Common along the coast up and down the Eastern Seaboard. The first time I saw them was in Florida, hunting right by a boat launch. The yellow feet and black bill are distinctive.",
    photos: [{ file: "SnowyEgret.JPG", caption: "I find it funny how it is sitting on a No Trespassing sign. Shows how nature doesn't listen to human laws" },
            { file: "snowy.JPG", caption: "Hunting by a boat launch" }],
    videoUrl: ""
  },
  {
    commonName: "White Ibis",
    scientificName: "Eudocimus albus",
    dateFirstSeen: "2022-04-10",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["mudflat", "marsh"],
    notes: "Common in Florida. Some have even come to Huntley Meadows as vagrants. I got to view one up close at Fort De Soto. It was resting in a tree and its blue eyes were incredible.",
    photos: [{ file: "ibis.JPG", caption: "Resting in some coastal trees. The curved red bill and skin patch makes it look almost like a dinosaur" }],
    videoUrl: ""
  },
  {
    commonName: "Boat-tailed Grackle",
    scientificName: "Quiscalus major",
    dateFirstSeen: "2022-04-10",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["coast"],
    notes: "Common in the Southeast by the coast. Large and iridescent.",
    photos: [{ file: "boatTail.JPG", caption: "Note the large tail and iridescent feathers. Taken right outside of the hotel" }],
    videoUrl: ""
  },
  {
    commonName: "Least Tern",
    scientificName: "Sternula antillarum",
    dateFirstSeen: "2022-04-10",
    location: "Grand Hyatt Tampa Bay, FL, USA",
    habitat: ["beach"],
    notes: "While endangered, they are quite common in certain places. Saw a couple in Florida and saw breeding pairs in Maine along with chicks.",
    photos: [{ file: "leastT.JPG", caption: "In a fenced off area on the beach for breeding" },
            { file: "leastTChick.JPG", caption: "A small chick. Colored like the sand for camoflauge. Very cute" },
            { file: "leastTPair.JPG", caption: "The parent and the chick" }],
    videoUrl: ""
  },
  {
    commonName: "Western Cattle-Egret",
    scientificName: "Ardea ibis",
    dateFirstSeen: "2022-04-14",
    location: "Tampa International Airport, FL, USA",
    habitat: ["farmland"],
    notes: "Quite common. I was very surprised to see this bird when the airplane was preparing to take off. I was glad to add another bird to the lifelist, even though I saw it during my final seconds in Florida.",
    photos: [{ file: "westCattle.JPG", caption: "Photo taken right out of the airplane. Feeding in the grassy patches between the runways. Florida really is wild" }],
    videoUrl: ""
  },
    {
    commonName: "Red-winged Blackbird",
    scientificName: "Agelaius phoeniceus",
    dateFirstSeen: "2020-05-25",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Very common in marshes across the area. The first time I saw them, I was amazed at the red and yellow wing patches of the males and their conk-a-ree songs.",
    photos: [{ file: "redMergM.JPG", caption: "4/3/2023" },
            { file: "redMergF.JPG", caption: "4/3/2023" }],
    videoUrl: ""
  },
  {
    commonName: "Red-breasted Merganser",
    scientificName: "Mergus serrator",
    dateFirstSeen: "2023-04-03",
    location: "Tommy Thompson Park, ON, Canada",
    habitat: ["open water"],
    notes: "Quite common when I went to Lake Erie and Lake Ontario. Usually winters on the ocean in the Northeast.",
    photos: [{ file: "redMergM.JPG", caption: "4/3/2023" },
            { file: "redMergF.JPG", caption: "4/3/2023" }],
    videoUrl: ""
  },
  {
    commonName: "American Tree Sparrow",
    scientificName: "Spizelloides arborea",
    dateFirstSeen: "2023-04-03",
    location: "Tommy Thompson Park, ON, Canada",
    habitat: ["open woods"],
    notes: "Common in the North, uncommon here in Virginia. At least one is spotted every year in Huntley Meadows.",
    photos: [{ file: "ameriTree.JPG", caption: "4/3/2023" }],
    videoUrl: ""
  },
  {
    commonName: "Long-tailed Duck",
    scientificName: "Clangula hyemalis",
    dateFirstSeen: "2023-04-03",
    location: "Tommy Thompson Park, ON, Canada",
    habitat: ["open water"],
    notes: "Quite common when I went to Lake Ontario. Usually winters on the ocean in the Northeast.",
    photos: [{ file: "longTM.JPG", caption: "4/3/2023" },
            { file: "longTF.JPG", caption: "4/3/2023" },
            { file: "longTRaft.JPG", caption: "4/3/2023" }],
    videoUrl: ""
  },
  {
    commonName: "Common Goldeneye",
    scientificName: "Bucephala clangula",
    dateFirstSeen: "2023-04-03",
    location: "Tommy Thompson Park, ON, Canada",
    habitat: ["open water"],
    notes: "Quite common when I went to Lake Ontario. Usually winters on the ocean in the Northeast.",
    photos: [{ file: "goldeneye.JPG", caption: "4/3/2023" },
            { file: "goldeneyeF.JPG", caption: "4/3/2023" },
            { file: "goldeneyeWeird.JPG", caption: "4/3/2023" }],
    videoUrl: ""
  },
  {
    commonName: "Common Loon",
    scientificName: "Gavia immer",
    dateFirstSeen: "2023-04-06",
    location: "Presque Isle State Park, PA, USA",
    habitat: ["open water"],
    notes: "Quite common when I went to Lake Erie. An uncommon winter migrant to Virginia, usually winters in the bay. A few fly over and spend time on the river.",
    photos: [{ file: "loon.JPG", caption: "4/6/2023" }],
    videoUrl: ""
  },
  {
    commonName: "Wild Turkey",
    scientificName: "Meleagris gallopavo",
    dateFirstSeen: "2023-04-06",
    location: "Presque Isle State Park, PA, USA",
    habitat: ["forest"],
    notes: "Uncommon here in Virginia. Usually seen in Huntley Meadows. Very common in Cambridge, MA where there were turkeys all over the streets and in Harvard Yard. There was also a time in Mckee-Beshers where I remember a turkey flying over me and I could hear how heavy its wingbeats were.",
    photos: [{ file: "tom.JPG", caption: "4/6/2023" },
            { file: "hen.JPG", caption: "4/6/2023" }],
    videoUrl: ""
  },
  {
    commonName: "Blue Rock Thrush",
    scientificName: "Monticola solitarius",
    dateFirstSeen: "2022-07-18",
    location: "Pension, Jeju-do, South Korea",
    habitat: ["forest"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "Warbling White-eye",
    scientificName: "Zosterops japonicus",
    dateFirstSeen: "2022-07-19",
    location: "Gotjawal Provincial Park, Jeju-do, South Korea",
    habitat: ["forest"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Lesser Cuckoo",
    scientificName: "Cuculus poliocephalus",
    dateFirstSeen: "2022-07-19",
    location: "Gotjawal Provincial Park, Jeju-do, South Korea",
    habitat: ["forest"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Japanese Bush Warbler",
    scientificName: "Horornis diphone",
    dateFirstSeen: "2022-07-19",
    location: "Gotjawal Provincial Park, Jeju-do, South Korea",
    habitat: ["forest"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Pacific Swift",
    scientificName: "Apus pacificus",
    dateFirstSeen: "2022-07-20",
    location: "Mara-do, Jeju-do, South Korea",
    habitat: ["cliffs"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Pleske's Grasshopper Warbler",
    scientificName: "Helopsaltes pleskei",
    dateFirstSeen: "2022-07-20",
    location: "Mara-do, Jeju-do, South Korea",
    habitat: ["scrub"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Peregrine Falcon",
    scientificName: "Falco peregrinus",
    dateFirstSeen: "2022-07-20",
    location: "Mara-do, Jeju-do, South Korea",
    habitat: ["cliffs"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Black-faced Spoonbill",
    scientificName: "Platalea minor",
    dateFirstSeen: "2022-08-13",
    location: "Ganghwa-do Mudflats, Incheon, South Korea",
    habitat: ["mudflat"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Common Greenshank",
    scientificName: "Tringa nebularia",
    dateFirstSeen: "2022-08-13",
    location: "Ganghwa-do Mudflats, Incheon, South Korea",
    habitat: ["mudflat"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Medium Egret",
    scientificName: "Ardea intermedia",
    dateFirstSeen: "2022-08-13",
    location: "Ganghwa-do South Fields, Incheon, South Korea",
    habitat: ["marsh", "farmland"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Eastern Cattle-Egret",
    scientificName: "Ardea coromanda",
    dateFirstSeen: "2022-08-13",
    location: "Ganghwa-do South Fields, Incheon, South Korea",
    habitat: ["farmland"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Pectoral Sandpiper",
    scientificName: "Calidris melanotos",
    dateFirstSeen: "2022-08-24",
    location: "Huntley Meadows, VA, USA",
    habitat: ["mudflat", "marsh"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Semipalmated Sandpiper",
    scientificName: "Calidris pusilla",
    dateFirstSeen: "2022-08-24",
    location: "Huntley Meadows, VA, USA",
    habitat: ["mudflat"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Long-billed Dowitcher",
    scientificName: "Limnodromus scolopaceus",
    dateFirstSeen: "2022-08-24",
    location: "Huntley Meadows, VA, USA",
    habitat: ["mudflat"],
    notes: "Common in the southern part of Korea, especially in Jeju-do. As the name suggests, their songs are very nice.",
    photos: [{ file: "warbling.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "American Pipit",
    scientificName: "Anthus rubescens",
    dateFirstSeen: "2021-02-20",
    location: "Sandy Point State Park, MD, USA",
    habitat: ["beach", "open field"],
    notes: "Have only seen once. I know that these birds like bare ground, like beaches or agricultural fields.",
    photos: [{ file: "pipit.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Horned Grebe",
    scientificName: "Anthus rubescens",
    dateFirstSeen: "2021-02-20",
    location: "Quiet Waters Park, MD, USA",
    habitat: ["open water"],
    notes: "Have only seen once. I know that these birds like bare ground, like beaches or agricultural fields.",
    photos: [{ file: "pipit.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "White Wagtail",
    scientificName: "Motacilla alba",
    dateFirstSeen: "2022-07-01",
    location: "Odaesan National Park, Gangwon-do, South Korea",
    habitat: ["river"],
    notes: "Supposedly quite common in streams and riparian areas in Korea, but I have only seen twice. Maybe I am overlooking them.",
    photos: [{ file: "wag.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    commonName: "Eurasian Nuthatch",
    scientificName: "Motacilla alba",
    dateFirstSeen: "2022-07-01",
    location: "Odaesan National Park, Gangwon-do, South Korea",
    habitat: ["river"],
    notes: "Supposedly quite common in streams and riparian areas in Korea, but I have only seen twice. Maybe I am overlooking them.",
    photos: [{ file: "wag.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "Blue-and-white Flycatcher",
    scientificName: "Cyanoptila cyanomelana",
    dateFirstSeen: "2022-07-01",
    location: "Odaesan National Park, Gangwon-do, South Korea",
    habitat: ["forest", "river"],
    notes: "Uncommon. To my understanding, they prefer to be near water. Reminds me of Black-throated Blue Warblers in America.",
    photos: [{ file: "blue&white.JPG", caption: "In Holly Tree, backyard" },
            { file: "blue&whiteF.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "Daurian Redstart",
    scientificName: "Phoenicurus auroreus",
    dateFirstSeen: "2021-07-13",
    location: "Bomun Lake, Gyeongsangbuk-do, South Korea",
    habitat: ["forest"],
    notes: "Very common. I have seen many in city parks in Korea. They often trick me into thinking they are other flycatchers.",
    photos: [{ file: "daurian.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {
    commonName: "Blue-winged Teal",
    scientificName: "Spatula discors",
    dateFirstSeen: "2025-04-19",
    location: "Mckee Beshers Hughes Hollow, MD, USA",
    habitat: ["marsh"],
    notes: "A long time nemesis bird. Saw through the scope of a fellow birdwatcher far out in the eastern marsh of the park",
    photos: [{ file: "blueTeal.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {

    commonName: "Northern Pintail",
    scientificName: "Anas acuta",
    dateFirstSeen: "2020-12-19",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Common in places like Huntley Meadows in the late fall and early winter. It's always a treat to see the Pintails. Apparently they also taste the best?",
    photos: [
              { file: "pintailM.JPG", caption: "In Holly Tree, backyard" },
              { file: "pintailF.JPG", caption: "In Holly Tree, backyard" }
            ],
    videoUrl: ""
  },
    {

    commonName: "Gadwall",
    scientificName: "Mareca strepera",
    dateFirstSeen: "2021-01-24",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Common in places like Huntley Meadows. I don't know what it is, but Gadwalls look boring in a way.",
    photos: [{ file: "gad.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {

    commonName: "American Wigeon",
    scientificName: "Mareca americana",
    dateFirstSeen: "2021-12-19",
    location: "Twin Lakes Preserve, NY, USA",
    habitat: ["marsh"],
    notes: "It was a very cold evening in Long Island. I saw that there was a pond on the road we were traveling on, so I asked if I could go birdwatching in the pond. Surprisingly, there were many ducks, geese, and even swans there. Amongst all the ducks, there was a lone American Wigeon.",
    photos: [{ file: "wig.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {

    commonName: "Mute Swan",
    scientificName: "Mareca americana",
    dateFirstSeen: "2021-12-19",
    location: "Twin Lakes Preserve, NY, USA",
    habitat: ["marsh"],
    notes: "It was a very cold evening in Long Island. I saw that there was a pond on the road we were traveling on, so I asked if I could go birdwatching in the pond. Surprisingly, there were many ducks, geese, and even swans there. Amongst all the ducks, there was a lone American Wigeon.",
    photos: [{ file: "wig.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
    {

    commonName: "Northern Shoveler",
    scientificName: "Spatula clypeata",
    dateFirstSeen: "2020-12-19",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh"],
    notes: "Common in Huntley, slowly swaying its beak in the water in large flocks.",
    photos: [
        { file: "shov.JPG"},
        { file: "shovFlock.JPG"}
    ],
    videoUrl: ""
  },
  {

    commonName: "American Robin",
    scientificName: "Turdus migratorius",
    dateFirstSeen: "2020-04-03",
    location: "Backyard, VA, USA",
    habitat: ["urban", "forest"],
    notes: "My first lifer — a bold male pulling worms from the lawn on a rainy morning in early April. Has been a near-daily presence in the yard ever since.",
    photos: [{ file: "AmericanRobin.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {

    commonName: "Northern Cardinal",
    scientificName: "Cardinalis cardinalis",
    dateFirstSeen: "2020-05-01",
    location: "Backyard, VA, USA",
    habitat: ["urban", "scrub"],
    notes: "Stunning red male at the feeder, sunflower seed in bill. The female arrived three days later — her rusty blush is underrated.",
    photos: [{file: "cardinalM.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Great Blue Heron",
    scientificName: "Ardea herodias",
    dateFirstSeen: "2020-05-25",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh", "river", "open water"],
    notes: "Stood motionless in the shallows for over twenty minutes before lunging at a fish with prehistoric precision. One of the most dramatic first sightings I've had.",
    photos: [{file: "bheron.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Painted Bunting",
    scientificName: "Passerina ciris",
    dateFirstSeen: "2021-01-16",
    location: "Great Falls, MD, USA",
    habitat: ["scrub", "forest"],
    notes: "Absolutely electric — the male looks hand-painted. Found him in a thicket near the wetland loop. Spent an hour photographing him as he worked through the brambles.",
    photos: [{file:"paintedB.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Belted Kingfisher",
    scientificName: "Megaceryle alcyon",
    dateFirstSeen: "2021-07-22",
    location: "Huntley Meadows, VA, USA",
    habitat: ["marsh", "swamp", "river"],
    notes: "Rattling call announced it before I spotted it — perched on a dead branch over the creek, then plunged headfirst for a fish. Females have the rufous belly band.",
    photos: [{ file: "beltedM.JPG"},
            { file: "beltedF.JPG"},
            { file: "beltedBack.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Red-flanked Bluetail",
    scientificName: "Tarsiger cyanurus",
    dateFirstSeen: "2026-01-02",
    location: "Great Falls Park, VA, USA",
    habitat: ["forest"],
    notes: "Vagrant from East Asia. Found in the brambles right by the northernmost parking lot.",
    photos: [{file: "RedFlankedBluetail.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Wood Duck",
    scientificName: "Aix sponsa",
    dateFirstSeen: "2021-01-10",
    location: "Theodore Roosevelt Island, VA, USA",
    habitat: ["swamp", "marsh"],
    notes: "Drake in full breeding plumage. The iridescent green, burgundy, and white face pattern looks almost artificial — like a decoy come to life.",
    photos: [{ file: "woodD.JPG"},
            { file: "woodDflock.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Purple Finch",
    scientificName: "Haemorhous purpureus",
    dateFirstSeen: "2026-01-17",
    location: "Dyke Marsh, VA, USA",
    habitat: ["forest"],
    notes: "My nemesis bird for a long while. Was on the hunt for an Orange-crowned Warbler when I stumbled upon a flock of Purple Finches. Larger and more red than I imagined.",
    photos: [
      {file: "PurpleFinchMale.JPG"}, 
      {file: "PurpleFinchFemale.JPG"}
    ],
    videoUrl: ""
  },
  {

    commonName: "Ruby-throated Hummingbird",
    scientificName: "Archilochus colubris",
    dateFirstSeen: "2020-08-14",
    location: "Central Library, VA, USA",
    habitat: ["urban", "open woods"],
    notes: "First hummingbird ever — appeared at the salvia in late August. The gorget only flashes red at the right angle; otherwise appears dark.",
    photos: [{ file: "hum.JPG"},
            { file: "humF.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Eastern Bluebird",
    scientificName: "Sialia sialis",
    dateFirstSeen: "2020-09-19",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["open field"],
    notes: "Meadowlark was where.",
    photos: [{ file: "EasternBluebird.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "Northern Yellow Warbler",
    scientificName: "Setophaga aestiva",
    dateFirstSeen: "2021-05-22",
    location: "Dyke Marsh, VA, USA",
    habitat: ["open woods", "swamp"],
    notes: "very nice",
    photos: [{file:"YellowWarbler.JPG"}],
    videoUrl: ""
  },
  {

    commonName: "House Wren",
    scientificName: "Setophaga aestiva",
    dateFirstSeen: "2021-05-22",
    location: "Fort CF Smith Park, VA, USA",
    habitat: ["open woods", "urban"],
    notes: "very nice",
    photos: [{file:"YellowWarbler.JPG"}],
    videoUrl: ""
  },
   {

    commonName: "Tree Swallow",
    scientificName: "Tachycineta bicolor",
    dateFirstSeen: "2021-04-03",
    location: "Huntley Meadows, VA, USA",
    habitat: ["forest", "open water", "open field"],
    notes: "very nice",
    photos: [{file:"TreeSwallow.JPG"}],
    videoUrl: ""
  },
   {

    commonName: "Worm-eating Warbler",
    scientificName: "Helmitheros vermivorum",
    dateFirstSeen: "2025-09-09",
    location: "Monticello Park, VA, USA",
    habitat: ["forest"],
    notes: "Went out in the late afternoon after a long day of studying for some fall migration birding. The woods were very quite, with there only being one Magnolia Warbler. While sitting on a bench getting ready to head out, I spotted a bird high in the treetops. Turned out to be this Worm-eating Warbler.",
    photos: [{file:"Wormie.JPG"}],
    videoUrl: ""
  },
    {

    commonName: "Dollarbird",
    scientificName: "Eurystomus orientalis",
    dateFirstSeen: "2025-07-19",
    location: "Changgyeonggung, Seoul, South Korea",
    habitat: ["forest"],
    notes: "It was a hot day. I was walking along a path in the park when I heard some weird sounds. I looked up, and there was a whole family of Dollarbirds in a tree.",
    photos: [{file:"dollarbird.JPG"}],
    videoUrl: ""
  },
    {

    commonName: "Grasshopper Sparrow",
    scientificName: "Ammodramus savannarum",
    dateFirstSeen: "2025-07-04",
    location: "Manassas Battlefield Brawner Farm, VA, USA",
    habitat: ["open field"],
    notes: "A bird I had been wanting to see for a long time. Heard about there being an abundance of Grasshopper Sparrows in this park, so I headed there as soon as possible. They were all over the park, singing their buzzy songs. Yet, they were quite hard to see.",
    photos: [{file:"grasshoppersparrow.JPG"}],
    videoUrl: "https://www.youtube.com/embed/DqEm_EjREFU"
  },
  {

    commonName: "Bobolink",
    scientificName: "Dolichonyx oryzivorus",
    dateFirstSeen: "2025-05-11",
    location: "Meadowood Mustang Trailhead, VA, USA",
    habitat: ["open field"],
    notes: "very nice",
    photos: [{file:"bobo.JPG"}],
    videoUrl: ""
  },
    {

    commonName: "Purple Gallinule",
    scientificName: "Porphyrio martinica",
    dateFirstSeen: "2025-04-19",
    location: "Mckee Beshers Hughes Hollow, MD, USA",
    habitat: ["marsh"],
    notes: "A vagrant species from much further south. Heard reports about it and had to go see it. Got quite close and was very colorful. Its feet were huge and it had a habit of flicking its tail constantly.",
    photos: [{file:"purpleG.JPG"}],
    videoUrl: ""
  },
    {

    commonName: "Piping Plover",
    scientificName: "Charadrius melodus",
    dateFirstSeen: "2024-07-28",
    location: "Wells Reserve at Laudholm, ME, USA",
    habitat: ["beach"],
    notes: "On a roadtrip all the way to Acadia National Park. Knew that there were Pipers on the way so I had to stop by. Initially had no luck, only finding a Semipalmated Plover. I went in a little further to a more secluded part of the beach and found one juvenile foraging. Very cute seeing in person.",
    photos: [{file:"piper.JPG"}],
    videoUrl: "https://www.youtube.com/embed/tUHagSJ6cTo"
  },
  {

    commonName: "Marsh Wren",
    scientificName: "Cistothorus palustris",
    dateFirstSeen: "2024-07-28",
    location: "Newbury Salt Marsh, MA, USA",
    habitat: ["marsh"],
    notes: "very nice",
    photos: [{file:"marshW.JPG"}],
    videoUrl: ""
  },
    {

    commonName: "Seaside Sparrow",
    scientificName: "Ammospiza maritima",
    dateFirstSeen: "2024-07-27",
    location: "Hammonasset Beach State Park, CT, USA",
    habitat: ["beach"],
    notes: "On a roadtrip all the way to Acadia National Park. Saw a couple on rocky areas and cliffs by the seaside.",
    photos: [{file:"seasideS.JPG"}],
    videoUrl: ""
  },
    {

    commonName: "Willow Flycatcher",
    scientificName: "Empidonax traillii",
    dateFirstSeen: "2024-07-27",
    location: "Hammonasset Beach State Park, CT, USA",
    habitat: ["swamp"],
    notes: "On a roadtrip all the way to Acadia National Park. Heard the wheezy fitz-bew as I got out of the car in the parking lot of the park.",
    photos: [{file:"willowF.JPG"}],
    videoUrl: ""
  },
   {

    commonName: "Common Tern",
    scientificName: "Sterna hirundo",
    dateFirstSeen: "2024-07-27",
    location: "Hammonasset Beach State Park, CT, USA",
    habitat: ["beach"],
    notes: "There was a flock of them far out on the rocks in the ocean",
    photos: [{file:"commonT.JPG"}],
    videoUrl: ""
  },
     {

    commonName: "Tennessee Warbler",
    scientificName: "Leiothlypis peregrina",
    dateFirstSeen: "2024-05-11",
    location: "Meadowood Mustang Trailhead, VA, USA",
    habitat: ["forest", "swamp"],
    notes: "Heard but did not see the bird in a swampy area in the park right by some development",
    photos: [],
    videoUrl: ""
  },
       {

    commonName: "Canvasback",
    scientificName: "Aythya valisineria",
    dateFirstSeen: "2024-01-27",
    location: "Mason Neck State Park, VA, USA",
    habitat: ["open water"],
    notes: "Right at the head of the bayview trail, there was a raft of them on the bay",
    photos: [{file:"canvas.JPG"}],
    videoUrl: ""
  },
];
