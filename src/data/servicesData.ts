import {
  Snowflake,
  Zap,
  Sun,
  PlugZap,
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
  estimateServiceKey: "hvac" | "electrical" | "solar" | "ev-charging";
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
        title: "Outdoor, Landscape & Security Lighting",
        description:
          "Enhance curb appeal and property security with low-voltage landscape lighting, soffit illumination, and motion-activated floodlights.",
        features: [
          "Commercial-grade brass fixtures",
          "Automated photocell & timer controls",
          "Architectural wall washing & tree uplights",
          "High-lumen security sensors",
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
