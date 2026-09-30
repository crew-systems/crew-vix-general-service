import { SITE_URL } from "../config/site";

export const IMAGES = {
  hero: "/images/concepts/end-to-end-construction-hero.webp",
  ogMeta:
    `${SITE_URL}/images/concepts/end-to-end-construction-hero.webp`,
  before:
    "/images/projects/orga-new-construction-rough-in.webp",
  after:
    "/images/projects/orga-finished-electrical-panel.webp",
  finalCta:
    "/images/site/final-cta.webp",

  services: {
    generalConstruction: "/images/concepts/end-to-end-construction-hero.webp",
    remodeling: "/images/projects/jack-cove-lighting-upgrade.webp",
    plumbing: "/images/concepts/plumbing-systems-hero.webp",
    hvac: "/images/site/service-hvac.webp",
    electrical:
      "/images/site/service-electrical.webp",
    solar:
      "/images/site/service-solar.webp",
    evCharging:
      "/images/site/service-ev-charging.webp",
    outdoorLighting:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    securityCameras:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
    smartAutomation:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
  },

  gallery: [
    {
      url: "/images/projects/joana-mini-split-replacement.webp",
      title: "Ductless Mini-Split Replacement",
      category: "HVAC",
    },
    {
      url: "/images/projects/newton-air-handler-installation.webp",
      title: "High-Efficiency Air Handler Installation",
      category: "HVAC",
    },
    {
      url: "/images/projects/saugus-furnace-ductwork-replacement.webp",
      title: "Furnace & Ductwork Replacement",
      category: "HVAC",
    },
    {
      url: "/images/projects/saugus-heat-pump-replacement.webp",
      title: "Outdoor Heat Pump Replacement",
      category: "HVAC",
    },
    {
      url: "/images/projects/exterior-electrical-service-upgrade.webp",
      title: "Exterior Electrical Service & Meter Upgrade",
      category: "ELECTRICAL",
    },
    {
      url: "/images/projects/residential-panel-replacement.webp",
      title: "Residential Electrical Panel Replacement",
      category: "ELECTRICAL",
    },
    {
      url: "/images/projects/orga-new-construction-rough-in.webp",
      title: "New Construction Framing & Systems Rough-In",
      category: "CONSTRUCTION",
    },
    {
      url: "/images/projects/orga-interior-panel-installation.webp",
      title: "Finished Interior Build-Out & Electrical Integration",
      category: "INTERIORS",
    },
    {
      url: "/images/projects/orga-finished-electrical-panel.webp",
      title: "Complete Interior Fit-Out & Systems Finish",
      category: "INTERIORS",
    },
    {
      url: "/images/projects/jack-cove-lighting-upgrade.webp",
      title: "Living Room Remodel & Integrated Cove Lighting",
      category: "INTERIORS",
    },
    {
      url: "/images/projects/jhonny-media-wall-lighting.webp",
      title: "Custom Media Wall & Integrated Lighting",
      category: "LIGHTING",
    },
    {
      url: "/images/projects/joseph-garage-ev-charger.webp",
      title: "Garage EV Charger Installation",
      category: "EV CHARGING",
    },
    {
      url: "/images/projects/joseph-exterior-ev-charger.webp",
      title: "Exterior EV Charger Installation",
      category: "EV CHARGING",
    },
    {
      url: "/images/projects/joseph-commercial-ev-charging.webp",
      title: "Commercial EV Charging Station Installation",
      category: "EV CHARGING",
    },
    {
      url: "/images/projects/peny-whole-home-electrification.webp",
      title: "Whole-Home Energy Efficiency & Electrification",
      category: "ENERGY EFFICIENCY",
    },
    {
      url: "/images/projects/commercial-energy-site-assessment.webp",
      title: "Commercial Energy Site Assessment",
      category: "COMMERCIAL ENERGY",
    },
    {
      url: "/images/projects/commercial-power-distribution-installation.webp",
      title: "Commercial Power Distribution Installation",
      category: "COMMERCIAL ENERGY",
    },
    {
      url: "/images/projects/commercial-solar-energy-upgrade.webp",
      title: "Commercial Solar & Energy Infrastructure Upgrade",
      category: "COMMERCIAL ENERGY",
    },
  ],

  team: "/images/site/team.webp",
};

export const SERVICE_AREAS = [
  {
    slug: "massachusetts",
    city: "Massachusetts",
    state: "MA",
    fullName: "Massachusetts",
    heroImage: IMAGES.services.outdoorLighting,
    galleryImages: [
      IMAGES.services.outdoorLighting,
      IMAGES.services.securityCameras,
      IMAGES.services.electrical,
    ],
    shortDesc:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across Massachusetts.",
    longDesc:
      "VIX General Services supports residential and commercial properties throughout Massachusetts with coordinated construction, remodeling, essential building systems, and smart-energy solutions from concept through completion.",
    neighborhoods: ["Massachusetts"],
    zipCodes: [],
    metaTitle: "Construction & Smart Energy Services Massachusetts | VIX",
    metaDescription:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across Massachusetts.",
    reviewName: "Michael R.",
    reviewText:
      "VIX designed and installed our complete landscape lighting and outdoor security cameras. The transformation at night is stunning, and the app control is effortless!",
  },
  {
    slug: "maine",
    city: "Maine",
    state: "ME",
    fullName: "Maine",
    heroImage: IMAGES.services.solar,
    galleryImages: [
      IMAGES.services.solar,
      IMAGES.services.hvac,
      IMAGES.services.electrical,
    ],
    shortDesc:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across Maine.",
    longDesc:
      "VIX General Services serves residential and commercial customers throughout Maine with coordinated construction, remodeling, essential building systems, and smart-energy solutions planned for New England conditions.",
    neighborhoods: ["Maine"],
    zipCodes: [],
    metaTitle: "Construction & Smart Energy Services Maine | VIX",
    metaDescription:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across Maine.",
    reviewName: "Michael R.",
    reviewText:
      "VIX delivered a clean, well-planned installation and kept us informed throughout the project. The finished system performs exactly as promised.",
  },
  {
    slug: "new-hampshire",
    city: "New Hampshire",
    state: "NH",
    fullName: "New Hampshire",
    heroImage: IMAGES.services.hvac,
    galleryImages: [
      IMAGES.services.hvac,
      IMAGES.services.electrical,
      IMAGES.services.evCharging,
    ],
    shortDesc:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across New Hampshire.",
    longDesc:
      "VIX General Services serves residential and commercial customers throughout New Hampshire with coordinated construction, remodeling, essential building systems, and smart-energy solutions focused on reliable long-term performance.",
    neighborhoods: ["New Hampshire"],
    zipCodes: [],
    metaTitle: "Construction & Smart Energy Services New Hampshire | VIX",
    metaDescription:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across New Hampshire.",
    reviewName: "Michael R.",
    reviewText:
      "VIX delivered a clean, well-planned installation and kept us informed throughout the project. The finished system performs exactly as promised.",
  },
  {
    slug: "rhode-island",
    city: "Rhode Island",
    state: "RI",
    fullName: "Rhode Island",
    heroImage: IMAGES.services.evCharging,
    galleryImages: [
      IMAGES.services.evCharging,
      IMAGES.services.electrical,
      IMAGES.services.smartAutomation,
    ],
    shortDesc:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across Rhode Island.",
    longDesc:
      "VIX General Services serves residential and commercial customers throughout Rhode Island with coordinated construction, remodeling, essential building systems, and smart-energy solutions from first scope through final handover.",
    neighborhoods: ["Rhode Island"],
    zipCodes: [],
    metaTitle: "Construction & Smart Energy Services Rhode Island | VIX",
    metaDescription:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems across Rhode Island.",
    reviewName: "Jessica T.",
    reviewText:
      "The VIX team communicated clearly, worked carefully, and left us with a dependable system that is easy to use.",
  },
  {
    slug: "vermont",
    city: "Vermont",
    state: "VT",
    fullName: "Vermont",
    heroImage: IMAGES.services.securityCameras,
    galleryImages: [
      IMAGES.services.securityCameras,
      IMAGES.services.outdoorLighting,
      IMAGES.services.electrical,
    ],
    shortDesc:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems for residential and commercial customers in Vermont.",
    longDesc:
      "VIX General Services serves residential and commercial customers in Vermont with coordinated construction, remodeling, essential building systems, and smart-energy solutions designed for dependable long-term performance.",
    neighborhoods: ["Vermont"],
    zipCodes: [],
    metaTitle: "Construction & Smart Energy Services Vermont | VIX",
    metaDescription:
      "Construction, remodeling, plumbing, HVAC, electrical, solar, EV charging, and smart systems for residential and commercial customers in Vermont.",
    reviewName: "Jessica T.",
    reviewText:
      "They installed our 4K security camera system and outdoor lighting. Excellent communication, clean installation, and no monthly cloud fees!",
  },
];

export const COMPANY_INFO = {
  name: "VIX General Services",
  legalName: "VIX CONSTRUCTION AND LANDSCAPE INC",
  ownerName: "Kristyan Martins",
  tagline: "End-to-End Construction, Smart Systems & Energy Solutions",
  phone: "+1 978-705-5562",
  email: "vixgeneralservices@gmail.com",
  licensing: "Licensed & Insured",
  location:
    "Massachusetts, Maine, New Hampshire, Rhode Island & Vermont",
  stats: {
    rating: "5.0",
    reviewsCount: "150+",
    experienceYears: "9+",
    projectsCompleted: "1,200+",
  },
};
