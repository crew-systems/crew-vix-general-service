import {
  Snowflake,
  Zap,
  Sun,
  PlugZap,
  Lightbulb,
  Camera,
  Smartphone,
  LucideIcon,
  ShieldCheck,
  Clock,
  Award,
  DollarSign,
} from "lucide-react";
import { IMAGES } from "./landscapingData";

export interface ServiceOffering {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export type EstimateServiceKey =
  | "hvac"
  | "electrical"
  | "solar"
  | "ev-charging"
  | "outdoor-lighting"
  | "security-cameras"
  | "smart-automation";

export interface ServiceItem {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  shortDesc: string;
  longDesc: string;
  whyChooseText: string;
  heroImage: string;
  icon: LucideIcon;
  iconBg: string;
  badgeColor: string;
  featured?: boolean;
  estimateServiceKey: EstimateServiceKey;
  metaTitle: string;
  metaDescription: string;
  schemaServiceType: string;
  keywords: string[];
  galleryCategories: string[];
  offerings: ServiceOffering[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "outdoor-lighting",
    name: "Outdoor & Landscape Lighting",
    shortName: "Outdoor Lighting",
    tagline: "Lighting that enhances your lifestyle",
    headline: "ARCHITECTURAL OUTDOOR & LANDSCAPE LIGHTING IN SOUTH FLORIDA",
    subheadline:
      "Transform your home into a nighttime showpiece with commercial-grade brass LED spotlights, double-head pole fixtures, multi-zone control, and durable low-voltage infrastructure.",
    shortDesc:
      "Custom outdoor, pathway, facade, pool, and landscape lighting systems engineered with weatherproof brass fixtures, dusk-to-dawn sensors, and smart zone controls.",
    longDesc:
      "A professionally engineered outdoor lighting system elevates your home curb appeal, increases evening safety, and extends luxury outdoor living into the night. VIX General Services specializes in turn-key low-voltage architectural and landscape illumination across Boca Raton, Coral Springs, Parkland, and surrounding communities. From illuminating mature palms and garden features to poolside lounges, pergolas, and boundary pole lights, we design balanced lighting schemes that blend warmth, drama, and energy efficiency.",
    whyChooseText:
      "South Florida coastal salt air, extreme summer downpours, and high humidity destroy cheap aluminum fixtures within months. We exclusively install heavy-duty solid brass and marine-grade IP65 fixtures, sealed silicone gel wire connectors, Schedule 40 PVC conduit sleeves, and stainless-steel 12V transformers built to perform reliably year after year.",
    heroImage: IMAGES.services.outdoorLighting,
    icon: Lightbulb,
    iconBg: "bg-[#D98E3E]",
    badgeColor: "bg-[#D98E3E]/10 text-[#B86F21] border-[#D98E3E]/30",
    featured: true,
    estimateServiceKey: "outdoor-lighting",
    metaTitle:
      "Landscape & Outdoor Lighting Installation South Florida | VIX",
    metaDescription:
      "Custom architectural outdoor lighting and landscape lighting in South Florida. Solid brass spotlights, double-head pole lights, multi-zone control. Free estimate.",
    schemaServiceType: "Landscape Lighting and Outdoor Illumination Services",
    keywords: [
      "landscape lighting South Florida",
      "outdoor lighting installation Boca Raton",
      "landscape spotlights Coral Springs",
      "low voltage outdoor lighting Parkland FL",
      "architectural lighting Broward County",
      "pole light installation South Florida",
    ],
    galleryCategories: ["OUTDOOR LIGHTING", "ELECTRICAL CONTROLS"],
    offerings: [
      {
        title: "Commercial-Grade Brass Landscape Spotlights",
        description:
          "High-performance 6W 3000K warm-white LED brass fixtures with adjustable knuckles, ideal for palm tree uplighting, facade washing, and garden focal points.",
        features: [
          "Solid cast-brass corrosion-resistant bodies",
          "IP65 waterproof rating with double O-rings",
          "High-CRI warm 3000K color temperature",
          "5-year manufacturer LED light warranty",
        ],
      },
      {
        title: "Architectural Double-Head Pole Lighting",
        description:
          "Durable estate pole lights equipped with dual LED heads and dusk-to-dawn photocell sensors for comprehensive driveway, patio, and perimeter illumination.",
        features: [
          "Double-head wide-beam LED illumination",
          "Dusk-to-dawn automated photocell operation",
          "Heavy-duty mounting base & deep anchoring",
          "Sleek matte-black architectural finish",
        ],
      },
      {
        title: "6-Zone Precision Lighting Distribution",
        description:
          "Tailored multi-zone layouts allowing independent control over Driveway, Pool/Lounge, Pergola/Deck, Facade, Garden/Backyard, and Fence lines.",
        features: [
          "Zone mapping matching your estate layout",
          "Independent brightness and scheduling",
          "No voltage drop on distant light runs",
          "Balanced lumens for subtle luxury elegance",
        ],
      },
      {
        title: "Weatherproof 12V Transformers & Power Distribution",
        description:
          "Premium low-voltage magnetic transformers (100W–300W+) engineered for outdoor exposure, featuring multi-tap outputs and secondary breaker protection.",
        features: [
          "Outdoor-rated 300W and 100W 12V transformers",
          "Secondary circuit protection & thermal cutoff",
          "Stainless steel weatherproof housings",
          "3-year manufacturer transformer warranty",
        ],
      },
      {
        title: "Deep Trenching & Schedule 40 PVC Conduits",
        description:
          "Clean underground wiring installation using direct-burial 12/2 low-voltage cables, Schedule 40 PVC conduits under hardscapes, and 3M waterproof gel wire nuts.",
        features: [
          "Manual and machine precision trenching",
          "Conduit sleeves protecting under sidewalks & pavers",
          "3M DBR/Y-6 waterproof marine-grade connectors",
          "Meticulous turf restoration after burial",
        ],
      },
      {
        title: "Annual System Maintenance Plan ($780/Year)",
        description:
          "Comprehensive annual care including full system inspection, bulb cleaning, fixture re-aiming, wire check, timer recalibration, and priority support.",
        features: [
          "Multi-point fixture and transformer check",
          "Lens cleaning and mineral deposit removal",
          "Landscape growth trimming around fixtures",
          "Small repairs and controller software updates",
        ],
      },
    ],
    benefits: [
      {
        icon: Award,
        title: "Solid Brass & Marine Grade",
        description:
          "Fixtures forged from solid brass that develop an attractive natural patina and never rust or crack in Florida salt air.",
      },
      {
        icon: ShieldCheck,
        title: "1-Year Labor & 5-Year Fixture Warranty",
        description:
          "Full 1-year warranty on installation labor paired with up to 5 years manufacturer coverage on fixtures and LED lamps.",
      },
      {
        icon: Clock,
        title: "Turn-Key Design & Installation",
        description:
          "We handle night demonstration tests, underground trenching, electrical connections, and automated programming.",
      },
      {
        icon: DollarSign,
        title: "Low-Voltage Energy Efficiency",
        description:
          "6W high-efficiency LEDs deliver 85% energy savings compared to legacy halogen landscape fixtures.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Nighttime Landscape Assessment",
        description:
          "We review your property layout, trees, architecture, and lighting goals to map out functional and aesthetic zones.",
      },
      {
        step: "02",
        title: "Zone Design & Itemized Proposal",
        description:
          "You receive a clear breakdown of fixtures, wattage, transformer sizes, conduit runs, and zone control options.",
      },
      {
        step: "03",
        title: "Underground Trenching & Fixture Mount",
        description:
          "Our crew trenches cable lines, sleeves conduits, installs solid brass fixtures, and wires transformers cleanly.",
      },
      {
        step: "04",
        title: "Nighttime Aiming & Client Walkthrough",
        description:
          "We fine-tune beam angles after dark, configure app scheduling, and ensure your property looks breathtaking.",
      },
    ],
    faqs: [
      {
        question: "Why should I choose low-voltage 12V landscape lighting over 120V line voltage?",
        answer:
          "Low-voltage 12V landscape lighting is vastly safer around children, pets, pool areas, and wet garden soil. It poses zero electric shock hazard if a wire is accidentally nicked by lawn equipment, consumes a fraction of the electricity, and allows flexible repositioning as your palms and landscape plants grow over time.",
      },
      {
        question: "How do your brass fixtures hold up against South Florida weather and irrigation?",
        answer:
          "Standard aluminum landscape lights corrode and peel when exposed to sprinkler water, fertilizers, and salty Florida air. Our cast brass fixtures feature IP65 watertight silicone O-ring seals and non-corrosive brass construction that will never rust, pit, or disintegrate.",
      },
      {
        question: "What areas of my yard can be illuminated?",
        answer:
          "Our typical 6-zone layout covers: 1) Driveways & Entrances (pole lights and path lighting), 2) Pool & Patio areas, 3) Pergolas & Decks, 4) House Facade & architectural columns, 5) Palm trees & garden beds, and 6) Perimeter fence lines and side walkways.",
      },
      {
        question: "What is included in the $780 Annual Maintenance Plan?",
        answer:
          "Our $780/year maintenance plan provides complete peace of mind. It includes full system electrical inspections, cleaning water spots and mineral deposits from lenses, adjusting beam angles as foliage grows, checking voltage at all terminals, firmware updates on smart controllers, and prompt repair of minor cable or fixture issues.",
      },
      {
        question: "Will trenching damage my lawn or existing landscaping?",
        answer:
          "Not at all. We use specialized narrow trenching techniques that slice cleanly beneath sod. Once the low-voltage cables and Schedule 40 conduits are laid, the sod is carefully pressed back into place. Within days, the lawn looks completely untouched.",
      },
      {
        question: "Can I control the lights from my smartphone?",
        answer:
          "Yes! We integrate smart controllers with Wi-Fi gateways that allow you to turn zones on and off, dim brightness, set astronomical dusk-to-dawn schedules, and create custom scenes directly from your iPhone or Android smartphone.",
      },
    ],
  },
  {
    slug: "security-cameras",
    name: "Security Camera & Surveillance Systems",
    shortName: "Security Cameras",
    tagline: "24/7 High-Definition Property Protection",
    headline: "ADVANCED 360° PTZ & 4K CCTV SECURITY CAMERA SYSTEMS IN SOUTH FLORIDA",
    subheadline:
      "Protect your estate with commercial-grade 360° pan-tilt-zoom cameras, 4K network video recorders, smart AI human detection, and private local storage with remote smartphone viewing.",
    shortDesc:
      "Professional wired 4K security camera installations with 360° PTZ coverage, continuous local NVR recording, infrared night vision, and mobile app monitoring.",
    longDesc:
      "True perimeter security requires dependable, high-resolution surveillance that never misses a detail—day or night. VIX General Services designs and installs commercial-grade residential and business security camera systems across Boca Raton, Coral Springs, Parkland, and neighboring regions. Unlike fragile battery-powered Wi-Fi cameras that suffer from delayed alerts and monthly cloud fees, our hardwired PoE (Power over Ethernet) systems deliver 24/7 continuous 4K recording, optical zoom, and 360° pan-tilt-zoom motorization.",
    whyChooseText:
      "South Florida intense sun, driving rains, and lightning storms challenge exterior electronics. We use IP66 outdoor-rated aluminum-alloy dome cameras, direct-burial UV-shielded Cat6 cabling, Gigabit PoE distribution switches, and main-panel surge protection to ensure your surveillance system stays online when you need it most.",
    heroImage: IMAGES.services.securityCameras,
    icon: Camera,
    iconBg: "bg-[#C0392B]",
    badgeColor: "bg-[#C0392B]/10 text-[#C0392B] border-[#C0392B]/30",
    estimateServiceKey: "security-cameras",
    metaTitle:
      "Security Camera Installation South Florida | 4K PTZ & CCTV | VIX",
    metaDescription:
      "Professional security camera installation in South Florida. 360° PTZ 4MP/4K cameras, NVR with 2TB storage, PoE wiring, 24/7 mobile access. Free consultation.",
    schemaServiceType: "Security Camera Installation and Video Surveillance Services",
    keywords: [
      "security camera installation South Florida",
      "PTZ camera installer Boca Raton",
      "CCTV installation Coral Springs FL",
      "wired security cameras Parkland FL",
      "4K NVR security system Broward",
      "commercial security camera contractor",
    ],
    galleryCategories: ["SECURITY", "ELECTRICAL CONTROLS"],
    offerings: [
      {
        title: "360° Pan-Tilt-Zoom (PTZ) 4MP/4K Cameras",
        description:
          "High-resolution motorized cameras offering full 360° panoramic rotation, vertical tilt, and powerful optical zoom to capture crisp facial details and license plates.",
        features: [
          "IP66 weatherproof metal housing",
          "Continuous 360° pan and 90° tilt rotation",
          "Starlight color night vision & infrared LEDs",
          "3-year manufacturer hardware warranty",
        ],
      },
      {
        title: "4K Network Video Recorders (NVR) with 2TB+ HDD",
        description:
          "Centralized 8-channel or 16-channel recording hub with enterprise-grade hard drives for weeks of continuous 24/7 recording with zero mandatory subscription fees.",
        features: [
          "4K Ultra HD video processing",
          "2TB to 8TB surveillance-grade hard drives",
          "HDMI / VGA direct monitor outputs",
          "Encrypted local video storage",
        ],
      },
      {
        title: "High-Speed Gigabit PoE Switch & Cat6 Infrastructure",
        description:
          "Single-cable Power over Ethernet (PoE) architecture delivering both electric power and high-bandwidth gigabit data through heavy-duty outdoor Cat6 lines.",
        features: [
          "Industrial 8-port Gigabit PoE switches",
          "UV-rated direct-burial outdoor Cat6 cabling",
          "Zero video lag or wireless interference",
          "Surge-isolated RJ45 ports",
        ],
      },
      {
        title: "Instant Mobile App & Remote Surveillance Access",
        description:
          "View live camera feeds, review recorded incident history, pan cameras remotely, and receive instant AI human/vehicle alerts on iOS and Android.",
        features: [
          "Real-time live multi-camera viewing",
          "Instant push notifications on motion trigger",
          "Quick export of video clips to smartphone",
          "Multi-user family and management permissions",
        ],
      },
      {
        title: "Perimeter, Entryway & Driveway Coverage",
        description:
          "Strategic camera placement that eliminates blind spots across front driveways, pool gates, side walkways, boat docks, and rear patio access points.",
        features: [
          "Comprehensive blind spot site analysis",
          "Concealed wiring for clean aesthetics",
          "Tamper-resistant high-angle mounting",
          "Overlapping camera sightlines",
        ],
      },
      {
        title: "Camera Lens Calibration & Annual Maintenance",
        description:
          "Routine cleaning of camera dome lenses, IR sensor testing, firmware security updates, and storage drive health checks included in our service plans.",
        features: [
          "Spiderweb, dust, and water spot cleaning",
          "NVR hard drive diagnostic health scan",
          "Recalibration of PTZ preset guard tours",
          "Cybersecurity firmware update patching",
        ],
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "100% Private Local Storage",
        description:
          "Your video footage is stored locally on your own NVR. No monthly cloud subscriptions and complete privacy protection.",
      },
      {
        icon: Award,
        title: "Wired PoE Reliability",
        description:
          "Direct hardwired Cat6 lines guarantee uninterrupted recording even when household Wi-Fi drops or is jammed.",
      },
      {
        icon: Clock,
        title: "24/7 Continuous Recording",
        description:
          "Record every second around the clock—not just short 10-second clips triggered after motion has already passed.",
      },
      {
        icon: DollarSign,
        title: "Zero Monthly Subscription Fees",
        description:
          "Own your equipment and software outright. Access your cameras forever without paying monthly cloud rental fees.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Property Security Audit",
        description:
          "We inspect your perimeter, identify entry vectors and blind spots, and determine optimal camera locations.",
      },
      {
        step: "02",
        title: "System Design & NVR Sizing",
        description:
          "We specify PTZ camera models, field-of-view lenses, NVR channels, storage capacity, and cable pathways.",
      },
      {
        step: "03",
        title: "Clean Cat6 Pulling & Camera Mounting",
        description:
          "Our technicians pull concealed Cat6 lines, secure IP66 brackets, mount cameras, and connect the central PoE switch.",
      },
      {
        step: "04",
        title: "App Setup & Motion Zone Configuration",
        description:
          "We connect the system to your smartphone app, set up smart motion detection zones, and demonstrate full PTZ control.",
      },
    ],
    faqs: [
      {
        question: "Why is a wired PoE system better than battery-powered Wi-Fi cameras (Ring/Arlo)?",
        answer:
          "Battery-operated Wi-Fi cameras often miss events due to sleep mode delays, suffer from weak Wi-Fi signals through concrete block walls, and are susceptible to wireless deauthentication jammers. A wired PoE system is powered continuously through Cat6 cable, records 24/7 at full 4K resolution, and never requires changing batteries or paying monthly cloud subscriptions.",
      },
      {
        question: "Can I view my cameras on my phone when I am away from home?",
        answer:
          "Yes. Our systems include a dedicated mobile app for iOS and Android that allows you to stream live video, control 360° PTZ camera movement, review past recordings, and receive immediate motion notifications from anywhere in the world.",
      },
      {
        question: "How long does a 2TB hard drive store video recordings?",
        answer:
          "With efficient H.265+ video compression, a 2TB to 4TB hard drive typically retains 2 to 4 weeks of continuous 24/7 recording across multiple cameras. Once full, the NVR automatically overwrites the oldest footage unless specific incident clips have been locked or exported.",
      },
      {
        question: "Are these cameras weatherproof against Florida rain and hurricanes?",
        answer:
          "Yes. All external cameras feature heavy-duty IP66 or IP67 weatherproof aluminum housings engineered to withstand tropical downpours, hurricane-force winds, and direct high-temperature sunlight.",
      },
      {
        question: "What does PTZ mean and why is it useful?",
        answer:
          "PTZ stands for Pan, Tilt, and Zoom. A PTZ camera has internal motorized gears allowing you to remotely rotate the camera 360° horizontally, tilt up and down, and optically zoom in on distant areas—such as gates, driveways, or pool areas—without losing image sharpness.",
      },
      {
        question: "Do you provide training on how to use the system?",
        answer:
          "Yes! After installation, our technicians install the app on your devices, walk you through viewing, searching, and downloading footage, and ensure you are 100% comfortable operating the system.",
      },
    ],
  },
  {
    slug: "smart-automation",
    name: "Smart Control Hub & Automation Systems",
    shortName: "Smart Automation",
    tagline: "Centralized Smart Control for Lighting, Power & Security",
    headline: "CENTRALIZED SMART HOME AUTOMATION & CONTROL HUBS IN SOUTH FLORIDA",
    subheadline:
      "Control your outdoor lighting zones, security cameras, pool illumination, and power distribution from a single intuitive smartphone app with automated scheduling.",
    shortDesc:
      "Centralized smart controllers, Wi-Fi gateways, and NEMA 3R distribution panels offering seamless smartphone control, dimming, and automation.",
    longDesc:
      "Modern luxury properties require sophisticated control systems that bring together lighting, security, and electrical management into one harmonious experience. VIX General Services designs and installs centralized smart control hubs, smart Wi-Fi gateways, and automated power distribution systems throughout South Florida. Whether you want your outdoor lights to turn on automatically at sunset, dim to 50% at midnight, or sync with your security cameras, our smart automation makes your home intuitive, secure, and energy-efficient.",
    whyChooseText:
      "Consumer smart plugs and Wi-Fi light bulbs frequently drop offline in outdoor Florida environments. We install commercial-grade AquaLink and centralized smart controllers inside weatherproof NEMA 3R enclosures, paired with external high-gain Wi-Fi gateways and main-panel surge protection for rock-solid reliability.",
    heroImage: IMAGES.services.smartAutomation,
    icon: Smartphone,
    iconBg: "bg-[#17A2B8]",
    badgeColor: "bg-[#17A2B8]/10 text-[#17A2B8] border-[#17A2B8]/30",
    estimateServiceKey: "smart-automation",
    metaTitle:
      "Smart Home Automation & Control Hub Installation South Florida | VIX",
    metaDescription:
      "Centralized smart home automation and lighting control hubs in South Florida. Multi-zone Wi-Fi app control, dimming, surge protection. Free consultation.",
    schemaServiceType: "Home Automation and Smart Control Installation Services",
    keywords: [
      "smart home automation South Florida",
      "smart lighting control hub Boca Raton",
      "home automation contractor Coral Springs",
      "smart control system Parkland FL",
      "NEMA 3R outdoor distribution panel",
      "AquaLink smart controller installer",
    ],
    galleryCategories: ["SMART AUTOMATION", "ELECTRICAL CONTROLS"],
    offerings: [
      {
        title: "Centralized Smart Lighting Controllers",
        description:
          "Installation of advanced AquaLink RS and commercial-grade automation controllers that consolidate multi-zone power delivery into an intelligent command center.",
        features: [
          "Multi-circuit high & low voltage control",
          "Automated astronomical sunrise/sunset clock",
          "App-controlled zone switching & dimming",
          "3-year manufacturer controller warranty",
        ],
      },
      {
        title: "Long-Range Wi-Fi Gateway & Mobile App Interface",
        description:
          "High-power external Wi-Fi transceivers and antennas that ensure dependable wireless communication between your outdoor control panel and home network.",
        features: [
          "High-gain external antenna for estate coverage",
          "iOS and Android smartphone integration",
          "Cloud connectivity for global remote control",
          "Secure encrypted local communication",
        ],
      },
      {
        title: "NEMA 3R Outdoor Distribution Panels",
        description:
          "Commercial-grade weatherproof electrical enclosures housing main disconnect breakers, individual 15A branch circuits, and low-voltage control hardware.",
        features: [
          "Heavy-duty galvanized NEMA 3R steel enclosure",
          "6-zone independent circuit breaker protection",
          "Waterproof door seals and padlock latch",
          "5-year manufacturer panel warranty",
        ],
      },
      {
        title: "Main-Panel Surge Protective Devices (SPD)",
        description:
          "Eaton and Square D Type 2 surge protectors installed directly at the distribution hub to shield sensitive microprocessors from lightning spikes.",
        features: [
          "Eaton CHSPT2ULTRA or equivalent heavy-duty SPD",
          "Up to 108kA surge current rating",
          "LED status diagnostic indicators",
          "Connected equipment protection warranty",
        ],
      },
      {
        title: "Multi-Zone Scheduling & Custom Scene Programming",
        description:
          "Personalized programming allowing you to create custom scenes like Evening Entertaining, Late Night Security, Vacation Away Mode, and energy-saving schedules.",
        features: [
          "One-tap scene activation from phone or tablet",
          "Astronomical clock automatically tracking sunset",
          "Integration with security cameras and sensors",
          "Voice assistant compatibility options",
        ],
      },
      {
        title: "Annual Smart System Software & Diagnostic Care",
        description:
          "Controller firmware updates, Wi-Fi signal strength optimization, breaker torque testing, and scene adjustments included in our $780/yr maintenance plan.",
        features: [
          "Firmware updates and security patches",
          "Wi-Fi gateway signal calibration",
          "Panel terminal and breaker inspection",
          "Seasonal scene adjustment support",
        ],
      },
    ],
    benefits: [
      {
        icon: Clock,
        title: "Effortless Automation",
        description:
          "Your estate lights, pool accents, and security circuits turn on and off automatically based on sunset, sunrise, and your custom schedule.",
      },
      {
        icon: ShieldCheck,
        title: "Surge & Weather Shielded",
        description:
          "Commercial NEMA 3R enclosures and Eaton surge suppressors keep your investment safe from extreme Florida lightning and tropical storms.",
      },
      {
        icon: Award,
        title: "Single Unified App",
        description:
          "Control all outdoor zones, dimming, schedules, and power circuits from one clean interface on your phone.",
      },
      {
        icon: DollarSign,
        title: "Energy & Cost Savings",
        description:
          "Automated dimming and scheduled shutoffs prevent lights and transformers from running unnecessarily during daylight hours.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Automation Needs & Wi-Fi Survey",
        description:
          "We survey your electrical distribution location, test exterior Wi-Fi signal strength, and discuss your control goals.",
      },
      {
        step: "02",
        title: "Hub & Panel Engineering",
        description:
          "We specify the NEMA 3R enclosure, number of controlled circuits, transformer integration, and surge protection device.",
      },
      {
        step: "03",
        title: "Panel Mounting & Circuit Wiring",
        description:
          "Our licensed electricians mount the hub, land branch circuits with dedicated breakers, install the SPD, and wire the Wi-Fi gateway.",
      },
      {
        step: "04",
        title: "App Programming & Handover",
        description:
          "We configure the app on your smartphone, program your custom schedules and scenes, and test every zone thoroughly.",
      },
    ],
    faqs: [
      {
        question: "What happens to my smart automation schedules if the power goes out?",
        answer:
          "Our controllers feature internal non-volatile memory and battery-backed real-time clocks. When power is restored following a storm or grid blackout, all your zone settings, schedules, and astronomical timers resume automatically without needing reconfiguration.",
      },
      {
        question: "Can I control the system if my home internet goes down temporarily?",
        answer:
          "Yes. While remote access outside your home requires an active internet connection, local automation schedules continue running on the hardware clock, and local smartphone control remains operational through your local home network.",
      },
      {
        question: "Is surge protection really included with the automation panel?",
        answer:
          "Yes! We install heavy-duty Type 2 Surge Protective Devices (such as Eaton CHSPT2ULTRA) directly inside or adjacent to the distribution panel. This prevents South Florida lightning strikes from destroying sensitive controller boards, Wi-Fi gateways, and low-voltage transformers.",
      },
      {
        question: "Can I add more zones or lights to the controller in the future?",
        answer:
          "Absolutely. We select modular distribution panels and controllers with expansion capacity, allowing you to easily add new landscape zones, patio fans, pool lights, or water features down the road.",
      },
      {
        question: "Can multiple family members have the app on their phones?",
        answer:
          "Yes. The mobile app interface supports multiple authenticated user accounts, so everyone in your household can control lighting zones, trigger scenes, or view system status from their own phone.",
      },
      {
        question: "Does the system adjust for daylight saving time automatically?",
        answer:
          "Yes. With astronomical clock synchronization, the system automatically adjusts for seasonal shifts in sunset and sunrise times, as well as daylight saving time transitions.",
      },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC & Air Conditioning Services",
    shortName: "HVAC",
    tagline: "High-Efficiency Cooling & Heating Solutions",
    headline: "PREMIER HVAC & AIR CONDITIONING SERVICES IN SOUTH FLORIDA",
    subheadline:
      "Keep your home cool, energy-efficient, and comfortable year-round with licensed technicians, rapid response times, and premium equipment engineered for Florida heat and humidity.",
    shortDesc:
      "Cooling, heating, and indoor air quality solutions engineered for year-round South Florida comfort and maximum energy efficiency.",
    longDesc:
      "In South Florida relentless heat and humidity, a reliable air conditioning system is not a luxury—it is essential. VIX General Services provides full-spectrum residential and commercial HVAC services across Boca Raton, Coral Springs, Parkland, and neighboring communities. Whether your system needs emergency troubleshooting, routine seasonal maintenance, or a complete high-efficiency replacement, our licensed and insured technicians diagnose the root cause and deliver lasting solutions backed by comprehensive warranties.",
    whyChooseText:
      "With over 9 years of hands-on experience handling South Florida coastal salt air, extreme humidity, and peak-summer demand, our HVAC specialists specify equipment with high SEER2 ratings, anti-corrosion coil treatments, and variable-speed compressors designed to slash monthly electric bills.",
    heroImage: IMAGES.services.hvac,
    icon: Snowflake,
    iconBg: "bg-[#2F6FED]",
    badgeColor: "bg-[#2F6FED]/10 text-[#2F6FED] border-[#2F6FED]/30",
    featured: true,
    estimateServiceKey: "hvac",
    metaTitle:
      "HVAC & Air Conditioning Services South Florida | VIX General Services",
    metaDescription:
      "Licensed HVAC repair, AC replacement, ductwork, and maintenance in South Florida. Fast diagnostics, energy-efficient systems, and upfront transparent pricing.",
    schemaServiceType: "HVAC Repair and Installation Services",
    keywords: [
      "HVAC South Florida",
      "AC repair Boca Raton",
      "air conditioning replacement Coral Springs",
      "HVAC contractor Parkland FL",
      "emergency AC service Broward County",
      "high efficiency AC installation",
    ],
    galleryCategories: ["HVAC", "COMMERCIAL HVAC"],
    offerings: [
      {
        title: "AC Repair & Accurate Diagnostics",
        description:
          "Fast, precise troubleshooting of refrigerant leaks, failing compressors, frozen coils, blown capacitors, and faulty thermostats.",
        features: [
          "Rapid emergency dispatch",
          "Digital refrigerant pressure testing",
          "Electrical component diagnostics",
          "Upfront quotes before work starts",
        ],
      },
      {
        title: "High-Efficiency AC Installation",
        description:
          "Complete system sizing and installation of modern heat pumps and central AC units with SEER2 ratings up to 20+ for maximum power savings.",
        features: [
          "Manual J load calculations",
          "Top brands with manufacturer warranty",
          "FPL energy rebate assistance",
          "Clean, code-compliant install",
        ],
      },
      {
        title: "Preventative Maintenance & Tune-Ups",
        description:
          "Comprehensive multi-point inspections and tune-ups that extend equipment life, prevent costly breakdowns, and lower utility bills.",
        features: [
          "Coil cleaning & chemical sanitation",
          "Condensate drain line flush & clearing",
          "Electrical voltage & amperage checks",
          "Airflow & static pressure optimization",
        ],
      },
      {
        title: "Ductwork Repair & Airflow Balancing",
        description:
          "Inspection, sealing, and replacement of leaky or undersized flexible and rigid duct systems to eliminate hot spots and dust.",
        features: [
          "Duct leakage testing & mastic sealing",
          "Return air plenum redesign",
          "Damper adjustments & balancing",
          "R-8 insulation wraps for attic ducts",
        ],
      },
      {
        title: "Indoor Air Quality & Filtration",
        description:
          "Advanced whole-home air purification, germicidal UV lights, and HEPA filtration to eliminate allergens, mold spores, and odors.",
        features: [
          "Whole-house germicidal UV lamps",
          "MERV 13+ filtration upgrades",
          "Dehumidification solutions",
          "Odor and VOC mitigation",
        ],
      },
      {
        title: "Smart Thermostats & Zoning Control",
        description:
          "Installation of programmable Wi-Fi thermostats and motorized zone dampers for personalized room-by-room climate management.",
        features: [
          "Ecobee & Nest integration",
          "Multi-zone damper systems",
          "Mobile smartphone remote access",
          "Automated energy-saving schedules",
        ],
      },
    ],
    benefits: [
      {
        icon: Clock,
        title: "Fast Response Times",
        description:
          "Quick dispatch across Boca Raton, Coral Springs, and Parkland when your cooling goes down.",
      },
      {
        icon: Award,
        title: "Licensed & Insured Experts",
        description:
          "Certified technicians with 9+ years of proven South Florida experience and 1,200+ completed projects.",
      },
      {
        icon: DollarSign,
        title: "Transparent, Upfront Pricing",
        description:
          "No hidden surprises or pushy upsells. Detailed written estimates provided before any tool touches your system.",
      },
      {
        icon: ShieldCheck,
        title: "100% Satisfaction Guarantee",
        description:
          "We stand behind all craftsmanship with robust workmanship guarantees and manufacturer warranty backing.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consultation & On-Site Evaluation",
        description:
          "We inspect your home, measure duct pressure and square footage, and listen to your comfort requirements.",
      },
      {
        step: "02",
        title: "Clear, Itemized Estimate",
        description:
          "You receive a transparent quote outlining equipment options, SEER2 ratings, timelines, and warranty terms.",
      },
      {
        step: "03",
        title: "Precision Installation or Repair",
        description:
          "Our technicians arrive on time in fully equipped vehicles and execute clean, code-compliant mechanical work.",
      },
      {
        step: "04",
        title: "Quality Testing & Walkthrough",
        description:
          "We test temperature differentials, calibrate controls, clean the workspace, and verify your complete satisfaction.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my AC needs a repair or full replacement?",
        answer:
          "As a general rule, if your cooling system is over 10 to 12 years old, uses phased-out R-22 Freon, or requires frequent costly repairs approaching half the cost of a new unit, replacement is usually more cost-effective. Modern high-efficiency systems also cut monthly cooling bills by 25% to 40%. We always give an honest assessment so you can choose what fits your budget.",
      },
      {
        question: "How often should HVAC systems in South Florida be serviced?",
        answer:
          "Because air conditioning systems in South Florida run almost 10 months out of the year, we strongly recommend professional preventative maintenance at least twice a year—ideally in spring before peak summer heat and in autumn. Regular maintenance cleans coils, flushes algae from condensate drain lines, and prevents sudden mid-summer compressor failure.",
      },
      {
        question: "What SEER2 rating should I choose for my South Florida home?",
        answer:
          "In Florida, the legal minimum requirement is 14.3 SEER2 for split systems. However, for optimum efficiency and humidity reduction in our tropical climate, we typically recommend 15.2 to 18+ SEER2 two-stage or variable-speed systems. These units run at lower speeds longer, keeping indoor humidity comfortably below 50% while consuming substantially less electricity.",
      },
      {
        question: "Are your technicians licensed and insured in Florida?",
        answer:
          "Yes. VIX General Services is fully licensed and carries comprehensive liability insurance and workers compensation. All work complies strictly with Florida Building Code standards and local municipal permit guidelines.",
      },
      {
        question: "How long does a new air conditioning installation take?",
        answer:
          "A standard residential AC replacement (air handler and outdoor condensing unit) is typically completed in 4 to 8 hours on a single day. We ensure your cooling is restored before our crew leaves your property.",
      },
      {
        question: "Do you offer free estimates on HVAC services?",
        answer:
          "Yes! We provide complimentary, no-obligation estimates on new system installations, equipment replacements, and major ductwork projects.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Licensed Electrical Services",
    shortName: "Electrical",
    tagline: "Safe, Code-Compliant Residential & Commercial Power",
    headline: "EXPERT LICENSED ELECTRICAL SERVICES IN SOUTH FLORIDA",
    subheadline:
      "Protect your property and power modern appliances with professional electrical panel upgrades, rewiring, surge protection, and custom lighting executed to strict NEC code.",
    shortDesc:
      "Safe, reliable electrical solutions including 200A panel upgrades, rewiring, lighting, and surge protection for ultimate peace of mind.",
    longDesc:
      "Modern households run high-draw appliances, heat pumps, EV chargers, and smart home technology that outdated electrical panels were never designed to handle. VIX General Services provides end-to-end electrical solutions throughout South Florida, from resolving hazardous legacy panels (such as Federal Pacific or Zinsco) to complete home rewiring, dedicated circuits, and decorative architectural lighting. Safety, precision, and longevity guide every wire we run.",
    whyChooseText:
      "Electrical systems leave zero room for error. Our electricians hold deep expertise in Florida electrical codes, hurricane surge mitigation, and modern high-load panel distribution, ensuring your home remains completely safe and insurer-compliant.",
    heroImage: IMAGES.services.electrical,
    icon: Zap,
    iconBg: "bg-[#F2B705]",
    badgeColor: "bg-[#F2B705]/10 text-[#B38300] border-[#F2B705]/30",
    estimateServiceKey: "electrical",
    metaTitle:
      "Licensed Electrical Contractor South Florida | VIX General Services",
    metaDescription:
      "Expert electrical services in South Florida. 200A panel upgrades, rewiring, surge protection, lighting installation, and troubleshooting. Licensed & insured.",
    schemaServiceType: "Electrical Services and Panel Upgrades",
    keywords: [
      "electrician South Florida",
      "electrical panel upgrade Boca Raton",
      "licensed electrician Coral Springs",
      "breaker panel replacement Parkland FL",
      "home surge protection Broward",
      "recessed lighting installation",
    ],
    galleryCategories: ["ELECTRICAL", "ELECTRICAL CONTROLS"],
    offerings: [
      {
        title: "200-Amp Electrical Panel Upgrades",
        description:
          "Replace antiquated 100A or hazardous fuse panels with modern 200A or 400A breaker panels capable of supporting today high electrical demands.",
        features: [
          "Permit filing & FPL coordination",
          "Brand-new copper busbar panels",
          "Whole-panel arc-fault & GFCI breakers",
          "Dedicated labeling & clean wire management",
        ],
      },
      {
        title: "Whole-Home & Dedicated Rewiring",
        description:
          "Full house rewiring, aluminum wiring mitigation with Copalum/AlumiConn connectors, and new dedicated lines for heavy appliances.",
        features: [
          "Aluminum wire remediation",
          "Kitchen appliance dedicated circuits",
          "Subpanel installation for additions",
          "Tamper-resistant code-compliant outlets",
        ],
      },
      {
        title: "Whole-Home Surge Protection",
        description:
          "Heavy-duty Type 1 and Type 2 surge protectors installed directly at your main panel to safeguard expensive electronics from lightning and power spikes.",
        features: [
          "Multi-stage surge suppression",
          "Covers all AC, refrigeration & tech circuits",
          "Manufacturer appliance warranties",
          "Status LED diagnostics",
        ],
      },
      {
        title: "Indoor, Accent & Recessed Lighting",
        description:
          "Transform your living spaces with energy-efficient ultra-slim LED wafer downlights, dimmers, under-cabinet lighting, and statement fixtures.",
        features: [
          "Recessed canless LED lighting layout",
          "Lutron smart dimmer switches",
          "Pendant & chandelier mounting",
          "Color temperature tuning (2700K–5000K)",
        ],
      },
      {
        title: "Landscape & Outdoor Lighting Subsystems",
        description:
          "Low-voltage path and perimeter lighting integration directly wired into dedicated outdoor subpanels with photocell automation.",
        features: [
          "Direct integration with our Outdoor Lighting service",
          "Dedicated low-voltage circuit breakers",
          "Surge-protected transformer feeds",
          "Code-compliant GFCI outdoor outlets",
        ],
      },
      {
        title: "Electrical Inspections & Code Corrections",
        description:
          "Comprehensive safety audits for home buyers, insurance renewals (4-Point inspections), and prompt correction of code violations.",
        features: [
          "Insurance 4-Point inspection compliance",
          "Grounding & bonding verification",
          "GFCI/AFCI safety testing",
          "Permit closure assistance",
        ],
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "Safety First Standards",
        description:
          "Strict adherence to National Electrical Code (NEC) and South Florida municipal building guidelines.",
      },
      {
        icon: Award,
        title: "Insurance-Approved Solutions",
        description:
          "Eliminate red flags on 4-Point insurance inspections by replacing obsolete breaker panels.",
      },
      {
        icon: Clock,
        title: "Punctual & Clean Service",
        description:
          "We respect your home with drop cloths, boot covers, and meticulous post-work cleanup.",
      },
      {
        icon: DollarSign,
        title: "Upfront Fixed Quotes",
        description:
          "Transparent pricing with no unexpected hourly overages on your final invoice.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Detailed Load Assessment",
        description:
          "We inspect your current service entrance, panel load capacity, grounding, and wiring infrastructure.",
      },
      {
        step: "02",
        title: "Permit Preparation & Engineering",
        description:
          "We engineer the scope of work, submit required municipal permits, and schedule utility coordination.",
      },
      {
        step: "03",
        title: "Expert Execution & Wiring",
        description:
          "Our licensed electricians perform tidy, code-compliant installations using top-tier copper conductors and components.",
      },
      {
        step: "04",
        title: "Final Inspection & Testing",
        description:
          "We test all circuits under load, label the breaker schedule cleanly, and handle the city building inspection.",
      },
    ],
    faqs: [
      {
        question: "Why do insurance companies require replacing Federal Pacific or Zinsco panels?",
        answer:
          "Federal Pacific Electric (Stab-Lok) and Zinsco panels have documented failure rates where circuit breakers fail to trip during an overload or short circuit, causing extreme fire hazards. Many Florida homeowners insurance providers will either deny coverage or drastically increase premiums until the panel is upgraded to a modern Square D or Siemens panel.",
      },
      {
        question: "When should I upgrade to a 200-amp electrical panel?",
        answer:
          "If your home currently has a 100-amp or 150-amp service and you are adding an EV charger, modern heat pump HVAC system, pool heater, or solar system, a 200-amp upgrade is virtually required to provide sufficient capacity and prevent tripped main breakers.",
      },
      {
        question: "How long does an electrical panel upgrade take?",
        answer:
          "Most residential panel replacements take between 4 to 8 hours. We coordinate closely with the local utility provider (such as FPL) so that power is shut off, the new panel is installed and grounded, and power is restored the very same afternoon.",
      },
      {
        question: "Is surge protection really necessary in South Florida?",
        answer:
          "Absolutely. South Florida has some of the highest lightning strike densities in North America. In addition, utility grid switching during storms causes power spikes that can instantly ruin inverter AC compressors, smart refrigerators, computers, and EV chargers. A whole-home surge protector installed at the main panel stops these surges before they reach internal wiring.",
      },
      {
        question: "Do you handle city permits for electrical work?",
        answer:
          "Yes. All panel upgrades, rewires, and major circuit installations are permitted through your local municipality (such as City of Boca Raton, Coral Springs, Parkland) to protect your property value and ensure compliance.",
      },
      {
        question: "Can you install recessed lighting in rooms without existing fixtures?",
        answer:
          "Yes. Our electricians specialize in fishing wires through drywall and ceilings with minimal invasiveness, installing ultra-thin canless LED wafer lights that fit cleanly between ceiling joists.",
      },
    ],
  },
  {
    slug: "solar",
    name: "Custom Solar Energy Systems",
    shortName: "Solar",
    tagline: "Harness South Florida Sunshine for Clean, Low-Cost Power",
    headline: "PREMIUM SOLAR ENERGY & BATTERY STORAGE IN SOUTH FLORIDA",
    subheadline:
      "Slash or eliminate rising electric bills, secure hurricane backup power, and invest in sustainable energy with custom-engineered Tier-1 solar systems.",
    shortDesc:
      "Custom residential and commercial solar solutions with battery backup to save money, hedge against utility inflation, and power your home sustainably.",
    longDesc:
      "With over 240 days of brilliant sunshine each year, South Florida is the premier location to invest in solar energy. VIX General Services engineers custom solar panel systems and battery backup configurations tailored to your roof geometry, energy consumption, and long-term financial goals. We manage the entire lifecycle—from drone roof analysis and structural engineering to utility net-metering approval with FPL and high-wind-rated installation.",
    whyChooseText:
      "Unlike high-pressure solar marketing brokerages, VIX General Services is a licensed local contractor with proven building and electrical expertise. We use only Tier-1 monocrystalline panels with 25-year performance warranties and hurricane-rated racking tested up to Category 5 wind speeds.",
    heroImage: IMAGES.services.solar,
    icon: Sun,
    iconBg: "bg-[#3FA65B]",
    badgeColor: "bg-[#3FA65B]/10 text-[#2C7A43] border-[#3FA65B]/30",
    estimateServiceKey: "solar",
    metaTitle:
      "Solar Panel Installation & Battery Backup South Florida | VIX",
    metaDescription:
      "Turnkey solar panel installation and battery storage in South Florida. Lower your FPL electric bills with hurricane-rated Tier 1 solar systems. Free quote.",
    schemaServiceType: "Solar Panel Installation and Renewable Energy Services",
    keywords: [
      "solar panel installation South Florida",
      "residential solar Boca Raton",
      "solar battery storage Coral Springs",
      "solar power contractor Parkland FL",
      "FPL net metering solar",
      "hurricane rated solar panels",
    ],
    galleryCategories: ["SOLAR", "COMMERCIAL HVAC"],
    offerings: [
      {
        title: "Residential Rooftop Solar Systems",
        description:
          "Custom-designed grid-tied solar panel arrays built with high-efficiency Tier-1 monocrystalline black-on-black panels for sleek aesthetics and peak production.",
        features: [
          "Tier-1 all-black high-output panels",
          "Enphase microinverters or SolarEdge optimizers",
          "Zero-penetration or leak-proof flashing mounts",
          "25-year manufacturer equipment warranty",
        ],
      },
      {
        title: "Solar Battery Backup & Energy Storage",
        description:
          "Keep essential circuits, lights, refrigeration, and air conditioning running seamlessly during grid blackouts and hurricane power outages.",
        features: [
          "Tesla Powerwall / Enphase IQ battery options",
          "Instantaneous automatic transfer switch",
          "Whole-home or critical-load backup configuration",
          "Real-time battery management smartphone app",
        ],
      },
      {
        title: "FPL Net Metering & Utility Interconnection",
        description:
          "Full management of Florida Power & Light (FPL) net metering applications, bi-directional meter installation, and Tier 1 / Tier 2 utility interconnection.",
        features: [
          "FPL bi-directional net-meter setup",
          "Credits earned for excess power sent to grid",
          "All utility engineering paperwork handled",
          "Quick PTO (Permission to Operate) timeline",
        ],
      },
      {
        title: "Commercial & Business Solar Installations",
        description:
          "Scalable commercial solar solutions for retail properties, office buildings, warehouses, and HOAs to reduce overhead and qualify for tax incentives.",
        features: [
          "Commercial rooftop and carport solar structures",
          "Accelerated MACRS depreciation benefits",
          "Federal 30% Solar Investment Tax Credit (ITC)",
          "Substantial reduction in demand charges",
        ],
      },
      {
        title: "Solar System Monitoring & Diagnostics",
        description:
          "24/7 panel-level production monitoring via mobile app, performance troubleshooting, and rapid warranty replacement for inverters or modules.",
        features: [
          "Real-time panel-by-panel app tracking",
          "Automated fault and shading alerts",
          "Thermal drone inspection diagnostics",
          "Annual production performance verification",
        ],
      },
      {
        title: "Hurricane-Resistant Structural Racking",
        description:
          "Engineered racking and mounting systems certified to withstand South Florida High-Velocity Hurricane Zone (HVHZ) wind ratings up to 175+ MPH.",
        features: [
          "HVHZ compliant structural attachments",
          "Tile, shingle, and standing-seam metal roofs",
          "High-tensile aluminum & stainless hardware",
          "Engineered stamped structural plans",
        ],
      },
    ],
    benefits: [
      {
        icon: DollarSign,
        title: "30% Federal Tax Credit",
        description:
          "Claim the 30% Federal Residential Clean Energy Credit (Section 25D) on your entire system and battery installation.",
      },
      {
        icon: ShieldCheck,
        title: "Category 5 Wind Rated",
        description:
          "Engineered with heavy-duty flashing and mounts designed to withstand extreme South Florida hurricane winds.",
      },
      {
        icon: Award,
        title: "25-Year Protection",
        description:
          "Rest easy with 25-year performance warranties on solar panels and 10 to 12 year warranties on inverters.",
      },
      {
        icon: Clock,
        title: "Turnkey Project Handling",
        description:
          "We handle engineering, HOA approvals, municipal permits, utility interconnection, and final sign-off.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Solar Feasibility & Shading Analysis",
        description:
          "We evaluate your historical FPL utility bills, roof orientation, pitch, and satellite solar irradiance data.",
      },
      {
        step: "02",
        title: "Custom Engineering & HOA Approvals",
        description:
          "Our licensed engineers draft CAD layouts, calculate structural wind loads, and prepare HOA and city permit packages.",
      },
      {
        step: "03",
        title: "Professional Installation",
        description:
          "Our certified solar installers mount flashings, panels, inverters, and battery systems with strict weatherproofing.",
      },
      {
        step: "04",
        title: "Inspection & Utility PTO",
        description:
          "We pass city building/electrical inspections, coordinate FPL net-meter swap, and turn on your clean power.",
      },
    ],
    faqs: [
      {
        question: "How does net metering work with FPL in Florida?",
        answer:
          "Under Florida net metering rules, your solar system sends any excess electricity you generate during peak sunny hours back into the FPL grid. Your electric meter spins backward, banking kWh credits on your account that offset the electricity you pull from the grid at night or during overcast days.",
      },
      {
        question: "Will solar panels damage my roof or cause leaks?",
        answer:
          "Not when installed by licensed professionals. We use specialized engineered mounting brackets with waterproof flashing systems and lag-seal compounds specifically designed for Florida tile, shingle, and metal roofs. In fact, solar panels actually protect the shaded portion of your roof from harsh UV degradation and direct rainfall.",
      },
      {
        question: "Can I still have power during a hurricane blackout?",
        answer:
          "Standard grid-tied solar systems without a battery will automatically shut down during a grid outage for utility worker safety. However, when you pair your solar array with a battery storage system (such as Tesla Powerwall or Enphase IQ Battery), the system forms a microgrid, powering your refrigerators, lights, medical devices, and air conditioning automatically without any interruption.",
      },
      {
        question: "What financial incentives exist for solar in Florida?",
        answer:
          "Homeowners benefit from the 30% Federal Clean Energy Tax Credit, Florida 100% property tax exemption on the added home value of renewable energy equipment, and 100% state sales tax exemption on solar purchases.",
      },
      {
        question: "Can my HOA prohibit me from installing solar panels?",
        answer:
          "No. Under Florida Statute 163.04 (the Florida Energy Fair Defense Act), Homeowners Associations (HOAs) are legally prohibited from forbidding the installation of solar collectors or renewable energy devices on your property.",
      },
      {
        question: "How long do solar panels last?",
        answer:
          "Modern Tier-1 monocrystalline solar panels are built to last 30+ years. Most premium manufacturers guarantee that panels will produce at least 85% to 90% of their original rated output even after 25 years in service.",
      },
    ],
  },
  {
    slug: "ev-charging",
    name: "EV Charging Station Installation",
    shortName: "EV Charging",
    tagline: "Fast, Convenient Level 2 Charging at Your Home or Business",
    headline: "CERTIFIED EV CHARGING STATION INSTALLATION IN SOUTH FLORIDA",
    subheadline:
      "Charge your electric vehicle up to 7x faster than standard wall outlets. We provide turnkey Level 2 EV charger installation for Tesla, Rivian, Ford, and all universal electric vehicles.",
    shortDesc:
      "Home and commercial Level 2 EV charging stations installed safely for convenience, rapid charging speeds, and long-term reliability.",
    longDesc:
      "Plugging an electric vehicle into a standard 120V household wall outlet can take over 24 hours to replenish a low battery. With a dedicated 240V Level 2 EV charging station installed by VIX General Services, your vehicle fully recharges overnight in just 4 to 8 hours. Our licensed electricians assess your existing electrical panel, run dedicated heavy-gauge copper conduits, install appropriate breaker protection, and configure your smart charger for peak energy savings.",
    whyChooseText:
      "EV chargers pull continuous electrical current for hours at a time, making proper wire gauge sizing, breaker selection, and torque specifications critical to prevent thermal overload and fire risk. We follow strict NEC Article 625 standards and manufacturer guidelines on every install.",
    heroImage: IMAGES.services.evCharging,
    icon: PlugZap,
    iconBg: "bg-[#7C5CFC]",
    badgeColor: "bg-[#7C5CFC]/10 text-[#7C5CFC] border-[#7C5CFC]/30",
    estimateServiceKey: "ev-charging",
    metaTitle:
      "Home & Commercial EV Charger Installation South Florida | VIX",
    metaDescription:
      "Certified Level 2 EV charger installation in South Florida. Tesla Wall Connector, universal chargers, 240V dedicated circuits. Fast, licensed & insured.",
    schemaServiceType: "Electric Vehicle Charging Station Installation Services",
    keywords: [
      "EV charger installation South Florida",
      "Tesla Wall Connector installer Boca Raton",
      "Level 2 EV charging Coral Springs",
      "electric car charger electrician Parkland FL",
      "home EV charger 240V Broward",
      "commercial EV charging station",
    ],
    galleryCategories: ["ELECTRICAL", "ELECTRICAL CONTROLS"],
    offerings: [
      {
        title: "Tesla Wall Connector Installation",
        description:
          "Certified installation of the Tesla Universal Wall Connector and Gen 3 Wall Connector, delivering up to 48A (11.5 kW) of charging power.",
        features: [
          "Tesla NACS and J1772 universal compatibility",
          "Up to 44 miles of range added per hour",
          "Wi-Fi connected firmware and scheduling",
          "Sleek indoor or outdoor weather-resistant install",
        ],
      },
      {
        title: "Universal Level 2 Home Chargers",
        description:
          "Installation of top-rated universal EV charging stations including ChargePoint Home Flex, JuiceBox, Emporia, and Autel for all non-Tesla EVs.",
        features: [
          "Compatible with Ford, Hyundai, BMW, Chevy, Rivian, etc.",
          "Hardwired or NEMA 14-50 plug configurations",
          "Smartphone app tracking for energy usage",
          "32A to 48A charging capacities",
        ],
      },
      {
        title: "240V NEMA 14-50 Dedicated Receptacles",
        description:
          "Heavy-duty industrial-grade 50-amp 240V receptacle installations in garages or carports for mobile charging bundles.",
        features: [
          "Bryant or Hubbell industrial grade outlets",
          "Dedicated 50A GFCI circuit breaker",
          "Heavy 6 AWG copper wire gauge",
          "Weatherproof outdoor covers available",
        ],
      },
      {
        title: "Panel Load Calculations & Capacity Upgrades",
        description:
          "Comprehensive electrical panel load testing to ensure your home can safely accommodate an extra 40A–60A continuous draw without overloading.",
        features: [
          "NEC load calculation audit",
          "Smart energy management & load shedding systems",
          "Panel upgrades if service capacity is insufficient",
          "Subpanel installation for detached garages",
        ],
      },
      {
        title: "Commercial & Multi-Family EV Stations",
        description:
          "Turnkey EV charging solutions for offices, commercial parking lots, condo associations, and multifamily developments with billing integration.",
        features: [
          "Commercial dual-port pedestal chargers",
          "RFID card and mobile payment processing",
          "Power-sharing network management",
          "ADA-compliant parking space layouts",
        ],
      },
      {
        title: "Smart Scheduling & Utility Rebate Assistance",
        description:
          "Setup of smart charging timers to take advantage of off-peak electric utility rates, plus assistance with FPL EVolution rebate programs.",
        features: [
          "Time-of-Use (TOU) off-peak charging schedules",
          "FPL EV program documentation support",
          "Federal Alternative Fuel Vehicle Refueling Property credit",
          "Wi-Fi signal extension to garages if needed",
        ],
      },
    ],
    benefits: [
      {
        icon: Clock,
        title: "Charge 7x Faster",
        description:
          "Get a full charge overnight (4 to 8 hours) compared to multiple days using standard trickle wall outlets.",
      },
      {
        icon: ShieldCheck,
        title: "Certified Code Compliance",
        description:
          "Strict adherence to NEC Article 625 with proper industrial-grade terminals and torque calibration.",
      },
      {
        icon: Award,
        title: "All EV Makes Supported",
        description:
          "Tesla, Rivian, Ford Lightning, Lucid, Porsche, Mercedes, Hyundai, Kia, and Chevy-ready.",
      },
      {
        icon: DollarSign,
        title: "Federal & Utility Rebates",
        description:
          "Qualify for federal tax credits and potential local electric utility rebates on charging equipment.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Panel & Garage Assessment",
        description:
          "We inspect your main breaker panel capacity, distance to parking area, and preferred mounting location.",
      },
      {
        step: "02",
        title: "Custom Proposal & Wire Sizing",
        description:
          "We specify the ideal charger wattage, wire gauge, breaker amperage, and route for the cleanest visual finish.",
      },
      {
        step: "03",
        title: "Dedicated Circuit Installation",
        description:
          "Our licensed electricians run conduit, land the breaker, secure the station, and torque connections to exact spec.",
      },
      {
        step: "04",
        title: "Commissioning & Vehicle Test",
        description:
          "We configure the charger firmware, connect to Wi-Fi, test full charge rate on a vehicle, and walk you through the app.",
      },
    ],
    faqs: [
      {
        question: "Can my electrical panel handle an EV charger?",
        answer:
          "Most 200-amp electrical panels have sufficient room for a 40A to 60A dedicated EV charger circuit. If your home has an older 100-amp or 150-amp panel, we perform an official NEC load calculation. If capacity is tight, we can either install an intelligent EV energy management system (load shedder) or upgrade your main panel to 200A.",
      },
      {
        question: "What is the difference between hardwired and plug-in EV chargers?",
        answer:
          "A plug-in charger connects into a 240V NEMA 14-50 outlet and is capped at 40A charging (using a 50A breaker). A hardwired charger is wired directly into the electrical box without a plug, enabling higher charging speeds up to 48A (on a 60A breaker) and providing a weather-sealed connection ideal for outdoor installations.",
      },
      {
        question: "How fast will a Level 2 EV charger charge my car?",
        answer:
          "A Level 2 (240V) charger adds roughly 30 to 45 miles of range per hour of charging, depending on your vehicle onboard charger capacity. This means an empty battery is completely replenished in 4 to 8 hours while you sleep.",
      },
      {
        question: "Can you install an EV charger outdoors if I do not have a garage?",
        answer:
          "Yes! High-quality chargers like the Tesla Universal Wall Connector and ChargePoint Home Flex carry NEMA 3R or NEMA 4 weather-resistant ratings designed to endure direct Florida rain, humidity, and sunshine. We use UV-resistant conduit and weatherproof seals for outdoor installs.",
      },
      {
        question: "Is there a tax credit for installing a home EV charger?",
        answer:
          "Yes. Under the Inflation Reduction Act, the Section 30C Alternative Fuel Vehicle Refueling Property Credit offers eligible homeowners a federal tax credit of up to 30% of the hardware and installation cost (up to $1,000 max for residential properties).",
      },
      {
        question: "Do I need a city permit to install an EV charger in Florida?",
        answer:
          "Yes. Installing a new 240V high-amperage dedicated circuit requires an electrical permit from your city or county building department. VIX General Services handles the permit application, plans, and final city inspection.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return SERVICES.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
};

export const getAllServiceSlugs = (): string[] => {
  return SERVICES.map((s) => s.slug);
};
