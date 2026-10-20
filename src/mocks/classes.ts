import { martinPhotos } from "./site";

export interface GymClass {
  id: string;
  name: string;
  desc: string;
  icon: string;
  level: string;
  duration: string;
  focus: string[];
  image: string;
  isNew?: boolean;
}

// Classes already offered on the weekly timetable
export const signatureClasses: GymClass[] = [
  {
    id: "full-body-hiit",
    name: "Full Body HIIT",
    desc: "High-intensity intervals that build fitness fast — full-body, coach-led and scaled to every level.",
    icon: "ri-flashlight-line",
    level: "All Levels",
    duration: "45 min",
    focus: ["Conditioning", "Fat Loss", "Full Body"],
    image: martinPhotos.battleRopes,
  },
  {
    id: "strength-power",
    name: "Strength Power",
    desc: "Compound strength and explosive power work to build a stronger, more athletic body.",
    icon: "ri-hammer-line",
    level: "Intermediate",
    duration: "60 min",
    focus: ["Strength", "Power", "Technique"],
    image: martinPhotos.dumbbellCurl,
  },
  {
    id: "hyrox-endurance",
    name: "HYROX Endurance",
    desc: "Engine-building running and station conditioning for HYROX athletes and hybrid racers.",
    icon: "ri-run-line",
    level: "Advanced",
    duration: "60 min",
    focus: ["Endurance", "Running", "HYROX"],
    image: martinPhotos.hyroxRun,
  },
  {
    id: "functional-core",
    name: "Functional Core",
    desc: "Core, stability and movement control that transfers to everything you do.",
    icon: "ri-body-scan-line",
    level: "Beginner",
    duration: "45 min",
    focus: ["Core", "Stability", "Control"],
    image: martinPhotos.tireFlip,
  },
  {
    id: "mobility-recovery",
    name: "Mobility & Recovery",
    desc: "Guided mobility, stretching and recovery to keep you moving well and training hard.",
    icon: "ri-leaf-line",
    level: "All Levels",
    duration: "45 min",
    focus: ["Mobility", "Recovery", "Flexibility"],
    image: martinPhotos.portrait,
  },
  {
    id: "hyrox-race-sim",
    name: "HYROX Race Sim",
    desc: "Full and half race simulations with competition pacing, transitions and equipment.",
    icon: "ri-flag-line",
    level: "Advanced",
    duration: "75 min",
    focus: ["Race Sim", "Pacing", "Transitions"],
    image: martinPhotos.sandbags,
  },
];

// New classes added to the lineup
export const newClasses: GymClass[] = [
  {
    id: "functional-workout",
    name: "Functional Workout",
    desc: "A performance-focused functional training class built to improve strength, movement, mobility, coordination, conditioning and overall physical performance.",
    icon: "ri-hammer-line",
    level: "All Levels",
    duration: "50 min",
    focus: ["Strength", "Mobility", "Coordination", "Conditioning"],
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20an%20athlete%20pushing%20a%20weighted%20sled%20across%20a%20black%20rubber%20gym%20floor%20under%20dramatic%20overhead%20spotlight%2C%20luxury%20fitness%20magazine%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail%2C%20clean%20minimal%20composition&width=1200&height=900&seq=class-functional-01&orientation=landscape",
    isNew: true,
  },
  {
    id: "hybrid-workout",
    name: "Hybrid Workout",
    desc: "A modern training format combining strength, conditioning, endurance, functional movements and athletic performance in one complete session.",
    icon: "ri-shuffle-line",
    level: "Intermediate",
    duration: "55 min",
    focus: ["Strength", "Conditioning", "Endurance", "Athleticism"],
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20an%20athlete%20mixing%20heavy%20barbell%20training%20with%20interval%20running%20in%20an%20industrial%20gym%2C%20hybrid%20training%2C%20dramatic%20moody%20lighting%2C%20luxury%20fitness%20brand%20aesthetic%2C%20charcoal%20tones%2C%20high%20detail&width=1200&height=900&seq=class-hybrid-01&orientation=landscape",
    isNew: true,
  },
  {
    id: "hyrox-fitness-classes",
    name: "HYROX Fitness Classes",
    desc: "Dedicated HYROX fitness classes for anyone developing the strength, endurance, conditioning and work capacity required for HYROX-style training and competition.",
    icon: "ri-flag-2-line",
    level: "All Levels",
    duration: "60 min",
    focus: ["Work Capacity", "Endurance", "Station Strength", "Race Prep"],
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20an%20athlete%20throwing%20a%20medicine%20ball%20to%20a%20high%20wall%20target%20during%20a%20HYROX%20wall%20balls%20workout%20in%20a%20dark%20gym%2C%20dramatic%20spotlight%2C%20luxury%20fitness%20magazine%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail&width=1200&height=900&seq=class-hyrox-01&orientation=landscape",
    isNew: true,
  },
  {
    id: "strength-conditioning",
    name: "Strength & Conditioning",
    desc: "A performance-focused strength and conditioning class designed to develop strength, power, conditioning, athletic ability and overall physical performance.",
    icon: "ri-fire-line",
    level: "All Levels",
    duration: "55 min",
    focus: ["Strength", "Power", "Conditioning", "Athletic Ability"],
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20an%20athlete%20performing%20a%20heavy%20barbell%20back%20squat%20in%20a%20dim%20gym%20with%20dramatic%20rim%20lighting%2C%20strength%20and%20conditioning%20training%2C%20luxury%20fitness%20magazine%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail&width=1200&height=900&seq=class-strength-01&orientation=landscape",
    isNew: true,
  },
];

export interface TimetableSession {
  time: string;
  name: string;
  level: string;
  isNew?: boolean;
}

export interface TimetableDay {
  day: string;
  short: string;
  sessions: TimetableSession[];
}

export const classTimetable: TimetableDay[] = [
  {
    day: "Monday",
    short: "MON",
    sessions: [
      { time: "06:30", name: "HYROX Fitness Classes", level: "All Levels", isNew: true },
      { time: "18:00", name: "Strength & Conditioning", level: "All Levels", isNew: true },
    ],
  },
  {
    day: "Tuesday",
    short: "TUE",
    sessions: [
      { time: "06:30", name: "Hybrid Workout", level: "Intermediate", isNew: true },
      { time: "18:00", name: "Functional Workout", level: "All Levels", isNew: true },
    ],
  },
  {
    day: "Wednesday",
    short: "WED",
    sessions: [
      { time: "06:30", name: "HYROX Endurance", level: "Advanced" },
      { time: "18:00", name: "Strength Power", level: "Intermediate" },
    ],
  },
  {
    day: "Thursday",
    short: "THU",
    sessions: [
      { time: "06:30", name: "Functional Core", level: "Beginner" },
      { time: "18:00", name: "Full Body HIIT", level: "All Levels" },
    ],
  },
  {
    day: "Friday",
    short: "FRI",
    sessions: [
      { time: "06:30", name: "Mobility & Recovery", level: "All Levels" },
      { time: "18:00", name: "Hybrid Workout", level: "Intermediate", isNew: true },
    ],
  },
  {
    day: "Saturday",
    short: "SAT",
    sessions: [
      { time: "09:00", name: "HYROX Race Sim", level: "Advanced" },
      { time: "10:30", name: "Strength & Conditioning", level: "All Levels", isNew: true },
    ],
  },
];