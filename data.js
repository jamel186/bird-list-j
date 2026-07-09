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
    habitat: ["coastal"],
    notes: "It was winter when I went to New York City for vacation. I heard that Jamaica Bay NWR was a great birdwatching spot, so I headed there. It was a windy winter morning and there were geese everywhere. It was the first time I had seen so many before. The Brant were near the parking lot right on the beach.",
    photos: [{ file: "brant.JPG", caption: "In Holly Tree, backyard" }],
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
    location: "Meadowlark Botanical Gardens, VA, USA",
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
    location: "Meadowlark Botanical Gardens, VA, USA",
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

    commonName: "Northern Shoveler",
    scientificName: "Spatula clypeata",
    dateFirstSeen: "2020-12-19",
    location: "Meadowlark Botanical Gardens, VA, USA",
    habitat: ["marsh"],
    notes: "Common in Huntley, slowly swaying its beak in the water in large flocks.",
    photos: [{ file: "shovFlock.JPG", caption: "In Holly Tree, backyard" }
            { file: "shov.JPG", caption: "In Holly Tree, backyard" }],
    videoUrl: ""
  },
  {

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

    commonName: "Northern Cardinal",
    scientificName: "Cardinalis cardinalis",
    dateFirstSeen: "2018-04-05",
    location: "Backyard, Alexandria, VA, USA",
    habitat: ["urban", "shrubland"],
    notes: "Stunning red male at the feeder, sunflower seed in bill. The female arrived three days later — her rusty blush is underrated.",
    photos: [{file: "cardinalM.JPG"}],
    videoUrl: ""
  },
  {

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

    commonName: "Painted Bunting",
    scientificName: "Passerina ciris",
    dateFirstSeen: "2021-01-16",
    location: "Great Falls, MD, USA",
    habitat: ["shrubland", "woodland"],
    notes: "Absolutely electric — the male looks hand-painted. Found him in a thicket near the wetland loop. Spent an hour photographing him as he worked through the brambles.",
    photos: [{file:"paintedB.JPG"}],
    videoUrl: ""
  },
  {

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
    dateFirstSeen: "2019-04-14",
    location: "Huntley Meadows Park, VA, USA",
    habitat: ["wetland", "woodland"],
    notes: "Drake in full breeding plumage. The iridescent green, burgundy, and white face pattern looks almost artificial — like a decoy come to life.",
    photos: [],
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
    dateFirstSeen: "2018-08-30",
    location: "Backyard, Alexandria, VA, USA",
    habitat: ["urban", "woodland"],
    notes: "First hummingbird ever — appeared at the salvia in late August. The gorget only flashes red at the right angle; otherwise appears dark.",
    photos: [],
    videoUrl: ""
  },
  {

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
    habitat: ["wetland"],
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
    habitat: ["wetland"],
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
    habitat: ["lake"],
    notes: "Right at the head of the bayview trail, there was a raft of them on the bay",
    photos: [{file:"canvas.JPG"}],
    videoUrl: ""
  },
];
