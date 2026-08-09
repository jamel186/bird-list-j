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
    name: "Huntley Meadows Park",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "A freshwater wetland tucked into the middle of Fairfax County — boardwalks wind through marsh and open water where herons, ducks, and rails are reliable almost year-round. One of my most-visited spots and where several early lifers came from.",
    iconicSpecies: ["Great Blue Heron", "Wood Duck"]
  },
  {
    name: "Brazos Bend State Park",
    region: "Needville, TX, USA",
    photo: "",
    description: "A Gulf Coast park known for its lakes, alligators, and dense brushy trails. Spring migration here is spectacular — this is where I found some of my most colorful lifers.",
    iconicSpecies: ["Painted Bunting", "Roseate Spoonbill"]
  },
  {
    name: "Backyard",
    region: "Alexandria, VA, USA",
    photo: "",
    description: "Where it all started. A modest suburban yard with a few feeders and a holly tree that somehow keeps producing new species every year.",
    iconicSpecies: ["American Robin", "Northern Cardinal", "Ruby-throated Hummingbird"]
  }
];
