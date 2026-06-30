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
    photos: [{file: "RedFlankedBluetail.JPG"}],
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
    photos: [
      {file: "PurpleFinchMale.JPG"}, 
      {file: "PurpleFinchFemale.JPG"}
    ],
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
    commonName: "Worm-eating Warbler",
    scientificName: "Helmitheros vermivorum",
    dateFirstSeen: "2025-09-09",
    location: "Monticello Park, VA, USA",
    habitat: ["woodland"],
    notes: "Went out in the late afternoon after a long day of studying for some fall migration birding. The woods were very quite, with there only being one Magnolia Warbler. While sitting on a bench getting ready to head out, I spotted a bird high in the treetops. Turned out to be this Worm-eating Warbler.",
    photos: [{file:"Wormie.JPG"}],
    videoUrl: ""
  },
    {
    number: 258,
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
    number: 257,
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
    number: 256,
    commonName: "Purple Gallinule",
    scientificName: "Porphyrio martinica",
    dateFirstSeen: "2025-04-19",
    location: "Mckee Beshers Hughes Hollow, MD, USA",
    habitat: ["wetland"],
    notes: "A vagrant species from much further south. Heard reports about it and had to go see it. Got quite close and was very colorful. Its feet were huge and it had a habit of flicking its tail constantly.",
    photos: [{file:"purpleG.JPG"}],
    videoUrl: ""
  },
    {
    number: 255,
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
    number: 254,
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
    number: 253,
    commonName: "Willow Flycatcher",
    scientificName: "Empidonax traillii",
    dateFirstSeen: "2024-07-27",
    location: "Hammonasset Beach State Park, CT, USA",
    habitat: ["wetland"],
    notes: "On a roadtrip all the way to Acadia National Park. Heard the wheezy fitz-bew as I got out of the car in the parking lot of the park.",
    photos: [{file:"willowF.JPG"}],
    videoUrl: ""
  }
];
