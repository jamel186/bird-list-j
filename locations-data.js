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
  }
];
