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
    number: 1,
    commonName: "American Robin",
    scientificName: "Turdus migratorius",
    dateFirstSeen: "2018-04-03",
    location: "Backyard, Alexandria, VA, USA",
    habitat: ["urban", "woodland"],
    notes: "My first lifer — a bold male pulling worms from the lawn on a rainy morning in early April. Has been a near-daily presence in the yard ever since.",
    photos: [{ file: "AmericanRobin.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {
    number: 2,
    commonName: "Northern Cardinal",
    scientificName: "Cardinalis cardinalis",
    dateFirstSeen: "2018-04-05",
    location: "Backyard, Alexandria, VA, USA",
    habitat: ["urban", "shrubland"],
    notes: "Stunning red male at the feeder, sunflower seed in bill. The female arrived three days later — her rusty blush is underrated.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 3,
    commonName: "Great Blue Heron",
    scientificName: "Ardea herodias",
    dateFirstSeen: "2018-05-12",
    location: "Huntley Meadows Park, VA, USA",
    habitat: ["wetland"],
    notes: "Stood motionless in the shallows for over twenty minutes before lunging at a fish with prehistoric precision. One of the most dramatic first sightings I've had.",
    photos: [],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    number: 4,
    commonName: "Painted Bunting",
    scientificName: "Passerina ciris",
    dateFirstSeen: "2021-03-18",
    location: "Brazos Bend State Park, TX, USA",
    habitat: ["shrubland", "woodland"],
    notes: "Absolutely electric — the male looks hand-painted. Found him in a thicket near the wetland loop. Spent an hour photographing him as he worked through the brambles.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 5,
    commonName: "Belted Kingfisher",
    scientificName: "Megaceryle alcyon",
    dateFirstSeen: "2019-07-22",
    location: "Occoquan Bay NWR, VA, USA",
    habitat: ["wetland", "coastal"],
    notes: "Rattling call announced it before I spotted it — perched on a dead branch over the creek, then plunged headfirst for a fish. Females have the rufous belly band.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 260,
    commonName: "Red-flanked Bluetail",
    scientificName: "Tarsiger cyanurus",
    dateFirstSeen: "2026-01-02",
    location: "Great Falls Park, VA, USA",
    habitat: ["forest"],
    notes: "Vagrant from East Asia. Found in the brambles right by the northernmost parking lot.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 7,
    commonName: "Wood Duck",
    scientificName: "Aix sponsa",
    dateFirstSeen: "2019-04-14",
    location: "Huntley Meadows Park, VA, USA",
    habitat: ["wetland", "woodland"],
    notes: "Drake in full breeding plumage. The iridescent green, burgundy, and white face pattern looks almost artificial — like a decoy come to life.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 261,
    commonName: "Purple Finch",
    scientificName: "Haemorhous purpureus",
    dateFirstSeen: "2026-01-17",
    location: "Dyke Marsh, VA, USA",
    habitat: ["forest"],
    notes: "My nemesis bird for a long while. Was on the hunt for an Orange-crowned Warbler when I stumbled upon a flock of Purple Finches. Larger and more red than I imagined.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 9,
    commonName: "Ruby-throated Hummingbird",
    scientificName: "Archilochus colubris",
    dateFirstSeen: "2018-08-30",
    location: "Backyard, Alexandria, VA, USA",
    habitat: ["urban", "woodland"],
    notes: "First hummingbird ever — appeared at the salvia in late August. The gorget only flashes red at the right angle; otherwise appears dark.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 10,
    commonName: "Eastern Bluebird",
    scientificName: "Sialia sialis",
    dateFirstSeen: "2020-08-22",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["open field"],
    notes: "Meadowlark was where.",
    photos: [{ file: "EasternBluebird.JPG"}],
    videoUrl: ""
  },
  {
    number: 11,
    commonName: "American Coot",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["lake"],
    notes: "very nice",
    photos: [],
    videoUrl: ""
  },
  {
    number: 12,
    commonName: "Yellow Warbler",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["woodland", "swamp"],
    notes: "very nice",
    photos: [{file:"YellowWarbler.JPG"}],
    videoUrl: ""
  },
   {
    number: 13,
    commonName: "Tree Swallow",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["woodland", "lake"],
    notes: "very nice",
    photos: [{file:"TreeSwallow.JPG"}],
    videoUrl: ""
  },
   {
    number: 259,
    commonName: "White-crowned Sparrow",
    scientificName: "Zonotrichia leucophrys",
    dateFirstSeen: "2025-11-29",
    location: "Meadowood Hidden Pond, VA, USA",
    habitat: ["forest"],
    notes: "Found this in a mixed flock of sparrows on a crisp morning in the late fall. I still can't forget just how many birds there were that morning.",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  },
   {
    number: 258,
    commonName: "Worm-eating Warbler",
    scientificName: "Helmitheros vermivorum",
    dateFirstSeen: "2025-09-09",
    location: "Monticello Park, VA, USA",
    habitat: ["woodland"],
    notes: "Went out in the late afternoon after a long day of studying for some fall migration birding. The woods were very quite, with there only being one Magnolia Warbler. While sitting on a bench getting ready to head out, I spotted a bird high in the treetops. Turned out to be this Worm-eating Warbler.",
    photos: [{file:"BrownHeadedCowbird.JPG"}],
    videoUrl: ""
  },
    {
    number: 14,
    commonName: "Snowy Egret",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["wetland"],
    notes: "very nice",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  },
    {
    number: 14,
    commonName: "Snowy Egret",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["wetland"],
    notes: "very nice",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  },
    {
    number: 14,
    commonName: "Snowy Egret",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["wetland"],
    notes: "very nice",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  },
    {
    number: 14,
    commonName: "Snowy Egret",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["wetland"],
    notes: "very nice",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  },
    {
    number: 14,
    commonName: "Snowy Egret",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["wetland"],
    notes: "very nice",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  },
    {
    number: 14,
    commonName: "Snowy Egret",
    scientificName: "hello",
    dateFirstSeen: "2018-04-03",
    location: "mason neck, VA, USA",
    habitat: ["wetland"],
    notes: "very nice",
    photos: [{file:"SnowyEgret.JPG"}],
    videoUrl: ""
  }
];
