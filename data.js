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
    location: "Backyard, Alexandria, VA",
    habitat: ["urban", "woodland"],
    notes: "My first lifer — a bold male pulling worms from the lawn on a rainy morning in early April. Has been a near-daily presence in the yard ever since.",
    photos: [{ file: "AmericanRobin.jpg", caption: "In Holly Tree, backyard" },],
    videoUrl: ""
  },
  {
    number: 2,
    commonName: "Northern Cardinal",
    scientificName: "Cardinalis cardinalis",
    dateFirstSeen: "2018-04-05",
    location: "Backyard, Alexandria, VA",
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
    location: "Huntley Meadows Park, VA",
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
    location: "Brazos Bend State Park, TX",
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
    location: "Occoquan Bay NWR, VA",
    habitat: ["wetland", "coastal"],
    notes: "Rattling call announced it before I spotted it — perched on a dead branch over the creek, then plunged headfirst for a fish. Females have the rufous belly band.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 6,
    commonName: "Snowy Owl",
    scientificName: "Bubo scandiacus",
    dateFirstSeen: "2022-01-08",
    location: "Jones Beach, NY",
    habitat: ["coastal", "open field"],
    notes: "Irruption year. This ghostly bird sat on a dune for two hours in flat winter light. No words for the stillness of a snowy owl watching the ocean.",
    photos: [],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    number: 7,
    commonName: "Wood Duck",
    scientificName: "Aix sponsa",
    dateFirstSeen: "2019-04-14",
    location: "Huntley Meadows Park, VA",
    habitat: ["wetland", "woodland"],
    notes: "Drake in full breeding plumage. The iridescent green, burgundy, and white face pattern looks almost artificial — like a decoy come to life.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 8,
    commonName: "Roseate Spoonbill",
    scientificName: "Platalea ajaja",
    dateFirstSeen: "2021-03-16",
    location: "Brazos Bend State Park, TX",
    habitat: ["wetland"],
    notes: "Pink beyond what you'd expect, and the spatula bill is even stranger in person. Swept it back and forth through the shallows in a trance-like rhythm.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 9,
    commonName: "Ruby-throated Hummingbird",
    scientificName: "Archilochus colubris",
    dateFirstSeen: "2018-08-30",
    location: "Backyard, Alexandria, VA",
    habitat: ["urban", "woodland"],
    notes: "First hummingbird ever — appeared at the salvia in late August. The gorget only flashes red at the right angle; otherwise appears dark.",
    photos: [],
    videoUrl: ""
  },
  {
    number: 10,
    commonName: "Eastern Bluebird",
    scientificName: "Sialia sialis",
    dateFirstSeen: "2020-02-22",
    location: "Shenandoah Valley, VA",
    habitat: ["open field", "woodland"],
    notes: "A dozen of them working a fence line in February sun. The blue is almost ceramic — a color that doesn't feel like it belongs to a living thing.",
    photos: [],
    videoUrl: ""
  }
];
