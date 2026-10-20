import { martinPhotos } from "./site";

export interface ServiceBenefit {
  icon: string;
  title: string;
  desc: string;
}

export interface ServicePricing {
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceProgram {
  phase: string;
  desc: string;
  focus: string[];
}

export interface ServiceContent {
  slug: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  intro: string;
  overview: string[];
  benefits: ServiceBenefit[];
  whoFor: string[];
  program: ServiceProgram[];
  pricing: ServicePricing[];
  faqs: ServiceFaq[];
  cta: string;
}

export const servicesContent: ServiceContent[] = [
  {
    slug: "personal-training",
    title: "Personal Training",
    eyebrow: "1-on-1 Coaching · Dubai",
    heroImage: martinPhotos.dumbbellCurl,
    intro:
      "Fully personalized, one-on-one personal training in Dubai with Martin Sei. Every session is designed around your body, your goals, and your schedule — with coaching that keeps you accountable and programming that keeps you progressing.",
    overview: [
      "Personal training with Martin is not a generic plan handed to you at a gym desk. It is a complete coaching relationship built around structured strength, conditioning, mobility, and recovery programming that adapts week to week based on your progress.",
      "You get dedicated attention, real-time form coaching, and a Dubai personal trainer who treats every rep, set, and session with intent. Whether you are an absolute beginner or an experienced lifter, your program is built from where you are today and engineered toward where you want to be.",
    ],
    benefits: [
      {
        icon: "ri-user-heart-line",
        title: "Fully Personalized Programming",
        desc: "Strength, conditioning, mobility and recovery blocks tailored to your body, goals, and injury history — not a copy-paste template.",
      },
      {
        icon: "ri-focus-3-line",
        title: "Real-Time Technique Coaching",
        desc: "Live form corrections on every lift so you build safe, efficient movement patterns and avoid the plateaus that come with bad habits.",
      },
      {
        icon: "ri-calendar-check-line",
        title: "Accountability That Works",
        desc: "Scheduled sessions, check-ins, and honest feedback keep you consistent — the single biggest predictor of lasting results.",
      },
      {
        icon: "ri-line-chart-line",
        title: "Measured, Visible Progress",
        desc: "Strength numbers, body composition, and performance markers tracked so you can see progress even on the hard weeks.",
      },
    ],
    whoFor: [
      "Absolute beginners who want a safe, guided start",
      "Intermediate lifters stuck on a plateau",
      "Busy professionals who need an efficient, structured plan",
      "Anyone serious about sustainable fat loss or muscle gain",
      "Athletes wanting a sport-specific strength foundation",
    ],
    program: [
      {
        phase: "Assessment",
        desc: "Every coaching relationship starts with a full movement, strength, and goal assessment so we build from your real starting point.",
        focus: ["Movement screening", "Strength baseline", "Goal setting", "Schedule design"],
      },
      {
        phase: "Foundations",
        desc: "We build a rock-solid base of technique, mobility, and training capacity before layering on intensity.",
        focus: ["Compound lift technique", "Mobility & stability", "Session consistency", "Nutrition habits"],
      },
      {
        phase: "Progression",
        desc: "Programmed overload, periodized blocks, and weekly adjustments keep the stimulus fresh and results compounding.",
        focus: ["Periodized strength blocks", "Conditioning intervals", "Progressive overload", "Recovery management"],
      },
      {
        phase: "Peak",
        desc: "Whether the goal is a stronger body, a faster race, or a competition, we refine, peak, and execute.",
        focus: ["Performance peaking", "Body composition", "Race / event prep", "Long-term sustainability"],
      },
    ],
    pricing: [
      {
        name: "Single Session",
        price: "From AED 250",
        note: "Try a session with Martin and experience the coaching firsthand.",
        features: ["60-minute 1-on-1 session", "Movement assessment", "Technique coaching", "Post-session summary"],
      },
      {
        name: "8 Sessions / Month",
        price: "From AED 1,800",
        note: "The most popular entry into structured 1-on-1 coaching.",
        features: [
          "2 sessions per week",
          "Personalized programming",
          "Nutrition guidance",
          "WhatsApp support between sessions",
        ],
        featured: true,
      },
      {
        name: "12 Sessions / Month",
        price: "From AED 2,600",
        note: "Maximum accountability and fastest, most consistent progress.",
        features: [
          "3 sessions per week",
          "Full coaching system",
          "Monthly progress review",
          "Priority scheduling",
        ],
      },
    ],
    faqs: [
      {
        q: "I'm a complete beginner — is this for me?",
        a: "Absolutely. Personal training is the best way to start because we build from a full movement assessment and coach every technique from day one. You'll never be left guessing.",
      },
      {
        q: "Where do the sessions take place?",
        a: "In-person sessions are based around Dubai Silicon Oasis and surrounding areas. We can also align on a suitable private gym or outdoor location that fits your schedule.",
      },
      {
        q: "How quickly will I see results?",
        a: "With consistent 1-on-1 coaching, most clients notice strength and energy changes within 3-4 weeks and visible body composition changes within 8-12 weeks.",
      },
      {
        q: "Can I combine personal training with nutrition coaching?",
        a: "Yes — it is the most effective combination. Many clients pair 1-on-1 training with nutrition guidance for faster, more sustainable results.",
      },
    ],
    cta: "Book a free 20-minute consultation to map out your personal training program.",
  },
  {
    slug: "hyrox",
    title: "HYROX Coaching",
    eyebrow: "Race Preparation · Dubai",
    heroImage: martinPhotos.hyroxRun,
    intro:
      "Race-specific HYROX coaching from a coach who has been in the arena. Martin Sei programs the exact strength, engine, and race-day strategy you need to hit your HYROX goal — whether it's your first finish or your fastest podium.",
    overview: [
      "HYROX is a brutal, beautiful test — 8 functional stations interleaved with 1km runs. It demands a hybrid engine that most programs don't build. Martin's HYROX coaching is engineered specifically for that: threshold running economy, station-specific strength, and transitions that shave minutes.",
      "You won't just train hard. You'll train smart — with race simulation, pacing strategy, and equipment-specific work (sled, wall balls, ski erg, rower, burpee broad jumps, farmers carry, sandbag, lunges) that transfers directly to the floor.",
    ],
    benefits: [
      {
        icon: "ri-flag-2-line",
        title: "Race-Specific Programming",
        desc: "Every block is built around the 8 HYROX stations and the runs between them — no wasted reps.",
      },
      {
        icon: "ri-timer-line",
        title: "Pacing & Strategy",
        desc: "Learn exactly how to pace the first lap, attack the sled, and hold your engine through the final run.",
      },
      {
        icon: "ri-run-line",
        title: "Running Economy",
        desc: "Structured threshold and interval running that keeps your legs fresh under a heavy load.",
      },
      {
        icon: "ri-goblet-line",
        title: "Station-Specific Strength",
        desc: "Targeted strength work for wall balls, sandbags, farmers carry, and sled push/pull.",
      },
    ],
    whoFor: [
      "First-time HYROX athletes looking for a plan",
      "Returning racers chasing a personal best",
      "HYROX doubles teams who want synchronized strategy",
      "CrossFitters and functional athletes adding HYROX",
      "Runners who need to build functional strength",
    ],
    program: [
      {
        phase: "Baseline Assessment",
        desc: "A HYROX-specific test of each station and your run pacing so we know exactly what to prioritize.",
        focus: ["Station strength test", "Run threshold test", "Weakness identification", "Goal time setting"],
      },
      {
        phase: "Hybrid Engine",
        desc: "Build the capacity to lift heavy and run fast in the same session — the core of HYROX fitness.",
        focus: ["Threshold running", "Couplets & triathlons", "Station skill work", "Aerobic base"],
      },
      {
        phase: "Race Simulation",
        desc: "Full and half HYROX simulations with competition pacing, transitions, and equipment setup.",
        focus: ["Full race sims", "Transition training", "Nutrition & pacing", "Mental toughness"],
      },
      {
        phase: "Peak & Race Day",
        desc: "Deload, sharpen, and execute. Race-week taper, warm-up protocol, and a precise plan for the floor.",
        focus: ["Peaking block", "Race-day strategy", "Warm-up protocol", "Post-race recovery"],
      },
    ],
    pricing: [
      {
        name: "HYROX Plan",
        price: "From AED 500/mo",
        note: "Structured race-prep programming delivered online or in person.",
        features: ["Weekly HYROX programming", "Station technique guidance", "Pacing strategy", "Check-in support"],
      },
      {
        name: "1-on-1 HYROX Coaching",
        price: "From AED 1,800/mo",
        note: "Personal coaching with race simulations and individual attention.",
        features: [
          "Personalized race prep",
          "Full race simulations",
          "Weekly reviews",
          "Direct coach access",
        ],
        featured: true,
      },
      {
        name: "HYROX Doubles",
        price: "Custom",
        note: "Synchronized programming and strategy for two-person teams.",
        features: ["Team-specific plan", "Shared strategy", "Simulation sessions", "Race-day prep"],
      },
    ],
    faqs: [
      {
        q: "I've never done a HYROX before — can I still train with you?",
        a: "Yes. HYROX is highly scalable. We build your engine and station strength from wherever you are, and by race day you'll be fully prepared for the format.",
      },
      {
        q: "How long is a typical HYROX prep block?",
        a: "Most athletes run a 12-16 week block. If you're already fit, a 8-10 week tune-up works well. We design it around your race date.",
      },
      {
        q: "Do I need access to specific equipment?",
        a: "For full race simulations yes, but your weekly programming is designed around the equipment you actually have access to.",
      },
      {
        q: "Do you coach online HYROX athletes outside Dubai?",
        a: "Yes. HYROX programming is delivered online to athletes worldwide with video reviews and messaging support.",
      },
    ],
    cta: "Ready to chase your HYROX goal? Book a free consultation to plan your race block.",
  },
  {
    slug: "strength-functional",
    title: "Strength & Functional Training",
    eyebrow: "Build Real Capacity · Dubai",
    heroImage: martinPhotos.battleRopes,
    intro:
      "Strength that shows up in the real world. Martin Sei's Strength & Functional Training blends heavy compound strength with athletic conditioning so you build muscle, power, and resilient capacity — not just gym numbers.",
    overview: [
      "Most programs make you strong on the bar and weak in real life. Functional training closes that gap. Martin programs compound strength blocks (squat, deadlift, press, carries) alongside functional conditioning (sled, sandbags, battle ropes, carries, and bodyweight gymnastics) that build movement capacity you actually use.",
      "The result is a body that looks strong, is strong, and moves like an athlete — injury-resistant, powerful, and capable in whatever life throws at it.",
    ],
    benefits: [
      {
        icon: "ri-fire-line",
        title: "Compound Strength First",
        desc: "Heavy, well-coached squat, hinge, press, and carry work builds the foundation every result depends on.",
      },
      {
        icon: "ri-battery-2-charge-line",
        title: "Conditioning That Transfers",
        desc: "Functional conditioning raises work capacity, burns fat, and builds an engine that matches your strength.",
      },
      {
        icon: "ri-shield-check-line",
        title: "Injury-Resistant Movement",
        desc: "Mobility and stability work woven into every block so you train hard and stay healthy long-term.",
      },
      {
        icon: "ri-body-scan-line",
        title: "Athletic Power & Control",
        desc: "Power, speed, and control trained through loaded carries, throws, and explosive patterns.",
      },
    ],
    whoFor: [
      "Lifters who want strength and real-world fitness",
      "Beginners building their first strong, athletic foundation",
      "Athletes adding functional power and conditioning",
      "Busy people who want efficient, high-impact training",
      "Anyone tired of one-dimensional gym training",
    ],
    program: [
      {
        phase: "Strength Foundation",
        desc: "Master the core compound patterns with solid technique before adding serious load.",
        focus: ["Squat & hinge patterns", "Press & pull", "Loaded carries", "Core stability"],
      },
      {
        phase: "Hybrid Strength",
        desc: "Pair heavy strength days with functional conditioning to build simultaneous power and engine.",
        focus: ["Periodized strength", "Sled & sandbag work", "Conditioning intervals", "Mobility sessions"],
      },
      {
        phase: "Power & Performance",
        desc: "Explosive and athletic work that converts raw strength into usable power.",
        focus: ["Explosive movements", "Battle ropes & throws", "Loaded carries", "Speed intervals"],
      },
      {
        phase: "Maintenance & Longevity",
        desc: "Sustainable programming that keeps you strong and healthy through the whole year.",
        focus: ["Injury prevention", "Recovery protocols", "Lifestyle integration", "Ongoing assessment"],
      },
    ],
    pricing: [
      {
        name: "Functional Classes",
        price: "From AED 300/mo",
        note: "Small-group functional training sessions on a weekly schedule.",
        features: ["2-3 classes per week", "Coached sessions", "All levels welcome", "Community support"],
      },
      {
        name: "1-on-1 Strength Coaching",
        price: "From AED 1,800/mo",
        note: "Personalized strength & functional programming.",
        features: [
          "Personalized programming",
          "Technique coaching",
          "Nutrition guidance",
          "Direct coach access",
        ],
        featured: true,
      },
      {
        name: "Online Strength Program",
        price: "From AED 400/mo",
        note: "Follow structured strength & functional blocks from anywhere.",
        features: ["Weekly programming", "Video reviews", "Messaging support", "Progress tracking"],
      },
    ],
    faqs: [
      {
        q: "What's the difference between functional training and regular gym work?",
        a: "Functional training builds strength that transfers to real movement and life — carries, pulls, pushes, rotational and loaded patterns — rather than isolating single muscles on machines.",
      },
      {
        q: "Is this too intense for a beginner?",
        a: "No. Everything is scaled to your level. Beginners progress through foundational movement patterns first and build intensity gradually.",
      },
      {
        q: "Can I build muscle with functional training?",
        a: "Yes. The compound strength work builds muscle effectively, and the conditioning keeps you lean and athletic.",
      },
    ],
    cta: "Want to build strength that actually transfers? Book a free consultation today.",
  },
  {
    slug: "nutrition",
    title: "Nutrition Guidance",
    eyebrow: "Evidence-Based Coaching · Dubai",
    heroImage:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20a%20balanced%20high%20protein%20meal%20with%20grilled%20chicken%20greens%20and%20brown%20rice%20on%20a%20matte%20black%20table%20under%20soft%20warm%20spotlight%2C%20luxury%20fitness%20food%20magazine%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail%2C%20clean%20minimal%20composition&width=1400&height=900&seq=service-nutrition-01&orientation=landscape",
    intro:
      "Nutrition that fits your real life. Martin Sei's Nutrition Guidance is evidence-based, flexible, and built around sustainability — so you lose fat, build muscle, and keep your energy without a fad diet in sight.",
    overview: [
      "The best nutrition plan is the one you can actually stick to. Martin's coaching strips away the gimmicks and builds a flexible eating structure around your habits, your food preferences, and your training — not a miserable one-size-fits-all meal plan.",
      "You'll learn exactly how to manage calories, protein, and energy around your goals, with practical tools for eating out, travel, and busy Dubai work schedules. The result: results that last long after the program ends.",
    ],
    benefits: [
      {
        icon: "ri-restaurant-line",
        title: "No Fad Diets",
        desc: "Flexible, evidence-based nutrition built around foods you actually enjoy — nothing banned, nothing miserable.",
      },
      {
        icon: "ri-leaf-line",
        title: "Sustainable Habits",
        desc: "Learn the skills to eat well for life, not just for a 12-week push.",
      },
      {
        icon: "ri-calculator-line",
        title: "Practical Macro Coaching",
        desc: "Clear calorie and protein targets matched to your goals and training volume.",
      },
      {
        icon: "ri-briefcase-line",
        title: "Real-Life Flexibility",
        desc: "Tools for eating out, travel, and busy work weeks so nutrition never derails your lifestyle.",
      },
    ],
    whoFor: [
      "Anyone who wants sustainable fat loss",
      "Athletes who need to fuel performance",
      "People who want to build lean muscle",
      "Busy professionals who eat out often",
      "Those tired of yo-yo dieting",
    ],
    program: [
      {
        phase: "Nutrition Assessment",
        desc: "We review your current eating, goals, and lifestyle to build a realistic starting point.",
        focus: ["Current habit review", "Goal setting", "Energy needs", "Food preferences"],
      },
      {
        phase: "Foundations",
        desc: "Establish the core habits: protein, calories, and consistent meal structure.",
        focus: ["Protein targets", "Calorie awareness", "Meal structure", "Hydration & sleep"],
      },
      {
        phase: "Fine-Tuning",
        desc: "Adjust macros and timing around training for performance and body composition.",
        focus: ["Macro adjustments", "Pre/post training fuel", "Eating out guide", "Travel strategies"],
      },
      {
        phase: "Self-Sufficiency",
        desc: "Equip you with the skills to maintain your results independently, long-term.",
        focus: ["Maintenance plan", "Habit automation", "Lapse recovery", "Lifelong framework"],
      },
    ],
    pricing: [
      {
        name: "Nutrition Starter",
        price: "AED 500",
        note: "A focused kickoff to dial in your nutrition in 4 weeks.",
        features: ["Initial assessment", "Macro targets", "Meal structure guide", "2 check-ins"],
      },
      {
        name: "Nutrition Coaching",
        price: "AED 700/mo",
        note: "Ongoing coaching for sustainable fat loss or muscle gain.",
        features: [
          "Personalized targets",
          "Weekly check-ins",
          "Eating out & travel guide",
          "Full support",
        ],
        featured: true,
      },
      {
        name: "Training + Nutrition",
        price: "From AED 1,800/mo",
        note: "Combine coaching and nutrition for the fastest, most durable results.",
        features: ["Full training program", "Nutrition coaching", "Priority support", "Progress reviews"],
      },
    ],
    faqs: [
      {
        q: "Do you provide meal plans?",
        a: "We provide a flexible nutrition structure with clear targets rather than rigid meal plans — so you eat what you enjoy while hitting the numbers that get results.",
      },
      {
        q: "I eat out a lot for work. Can I still see results?",
        a: "Yes. We specifically coach around eating out, travel, and busy schedules so your nutrition stays on track in the real world.",
      },
      {
        q: "Is this suitable for vegetarians or specific dietary needs?",
        a: "Absolutely. Programs are built around your preferences and any dietary requirements.",
      },
    ],
    cta: "Stop guessing about food. Book a free consultation to build your nutrition plan.",
  },
  {
    slug: "online-coaching",
    title: "Online Coaching",
    eyebrow: "Train Anywhere · Worldwide",
    heroImage: martinPhotos.portrait,
    intro:
      "World-class coaching, wherever you are. Martin Sei's Online Coaching delivers structured programming, video technique reviews, and daily messaging support — so you train like you're in Dubai with Martin, from anywhere on the planet.",
    overview: [
      "Location is no longer a barrier to elite coaching. Martin's online coaching gives you the same intelligent programming and accountability as in-person — delivered through a clear weekly structure, video check-ins, and unlimited messaging support.",
      "Whether you're building strength, leaning out, or preparing for a HYROX race, your online program is fully personalized and adjusted weekly based on your feedback, videos, and progress.",
    ],
    benefits: [
      {
        icon: "ri-global-line",
        title: "Train From Anywhere",
        desc: "Fully remote coaching for athletes in the UAE and worldwide — all you need is a phone and some effort.",
      },
      {
        icon: "ri-video-line",
        title: "Video Technique Reviews",
        desc: "Send your lifts and get detailed, personal technique feedback on every movement.",
      },
      {
        icon: "ri-chat-3-line",
        title: "Daily Messaging Support",
        desc: "Ask questions, share wins, and stay accountable with direct access to your coach.",
      },
      {
        icon: "ri-refresh-line",
        title: "Weekly Program Adjustments",
        desc: "Your training evolves every week based on your feedback and progress data.",
      },
    ],
    whoFor: [
      "Athletes outside Dubai who want elite coaching",
      "Busy professionals who need flexible scheduling",
      "Anyone who prefers training solo with expert guidance",
      "HYROX and strength athletes looking for structure",
      "People who've plateaued on DIY programs",
    ],
    program: [
      {
        phase: "Onboarding",
        desc: "Full goal, movement, and equipment assessment so your program is built around your real situation.",
        focus: ["Goal assessment", "Equipment audit", "Movement screening", "Schedule design"],
      },
      {
        phase: "Program Delivery",
        desc: "Weekly programming delivered with clear cues, videos, and session notes.",
        focus: ["Weekly blocks", "Video demonstrations", "Session tracking", "Progress logging"],
      },
      {
        phase: "Feedback Loop",
        desc: "Submit videos, log sessions, and get adjustments that keep you progressing.",
        focus: ["Video reviews", "Form corrections", "Weekly adjustments", "Check-ins"],
      },
      {
        phase: "Achievement",
        desc: "Reach your goal with structured peaks, testing, and a plan for maintaining results.",
        focus: ["Strength testing", "Goal achievement", "Maintenance plan", "Next block design"],
      },
    ],
    pricing: [
      {
        name: "Online Starter",
        price: "AED 400/mo",
        note: "Structured programming with weekly check-ins.",
        features: ["Weekly programming", "Video reviews", "Messaging support", "Progress tracking"],
      },
      {
        name: "Full Online Coaching",
        price: "AED 700/mo",
        note: "The complete remote coaching experience.",
        features: [
          "Personalized programming",
          "Daily messaging support",
          "Weekly video reviews",
          "Nutrition guidance",
        ],
        featured: true,
      },
      {
        name: "HYROX Online Prep",
        price: "AED 900/mo",
        note: "Race-specific online programming for HYROX athletes.",
        features: ["Race-prep programming", "Station technique", "Pacing strategy", "Race-week support"],
      },
    ],
    faqs: [
      {
        q: "I don't have much equipment — can you still coach me?",
        a: "Yes. We build your program around the equipment you actually have, from bodyweight-only to full gym setups.",
      },
      {
        q: "How do video reviews work?",
        a: "You film your lifts and send them through the app or WhatsApp. Martin reviews them and sends back specific technique feedback.",
      },
      {
        q: "What time zone is coaching based on?",
        a: "Programming and support work around your schedule and time zone. Communication is asynchronous with fast response times.",
      },
    ],
    cta: "Train with Martin from anywhere. Book a free consultation to start online coaching.",
  },
  {
    slug: "corporate-wellness",
    title: "Corporate Wellness",
    eyebrow: "Healthier Teams · Better Business",
    heroImage:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20a%20modern%20corporate%20office%20team%20doing%20a%20group%20fitness%20session%20in%20a%20stylish%20Dubai%20workspace%2C%20dramatic%20moody%20lighting%2C%20luxury%20professional%20wellness%20brand%20aesthetic%2C%20deep%20charcoal%20tones%2C%20high%20detail%20photography&width=1400&height=900&seq=service-corporate-01&orientation=landscape",
    intro:
      "High-performing teams run on healthy bodies and clear minds. Martin Sei's Corporate Wellness programs bring elite coaching to Dubai teams — movement sessions, workshops, and executive coaching that reduce burnout and lift performance.",
    overview: [
      "Corporate wellness isn't a perk — it's a performance investment. Martin designs on-site and remote wellness programs that get your team moving, sleeping, and managing stress better, which translates directly into energy, focus, and productivity at work.",
      "From group movement sessions to nutrition workshops and 1-on-1 executive coaching, every program is tailored to your team's culture, schedule, and goals.",
    ],
    benefits: [
      {
        icon: "ri-building-line",
        title: "On-Site & Remote Programs",
        desc: "Flexible delivery — in your office, at a partner gym, or fully virtual for distributed teams.",
      },
      {
        icon: "ri-team-line",
        title: "Team Energy & Morale",
        desc: "Group sessions build camaraderie and get everyone moving together.",
      },
      {
        icon: "ri-heart-pulse-line",
        title: "Reduced Burnout",
        desc: "Mobility, recovery, and stress-management education that protects your people long-term.",
      },
      {
        icon: "ri-line-chart-line",
        title: "Measurable Impact",
        desc: "Track attendance, engagement, and wellbeing scores to show real ROI.",
      },
    ],
    whoFor: [
      "Startups and SMEs building a healthy culture",
      "Corporate teams with high stress and burnout",
      "Leadership teams wanting executive coaching",
      "Companies investing in employee wellbeing",
      "Organizations with hybrid or distributed teams",
    ],
    program: [
      {
        phase: "Team Assessment",
        desc: "We understand your team's needs, schedules, and wellness goals before designing anything.",
        focus: ["Needs survey", "Culture review", "Schedule design", "Goal setting"],
      },
      {
        phase: "Group Movement",
        desc: "Structured group fitness, mobility, and functional training sessions for your team.",
        focus: ["Group workouts", "Mobility sessions", "Functional training", "Team challenges"],
      },
      {
        phase: "Wellness Education",
        desc: "Workshops on nutrition, sleep, stress, and sustainable habits for better daily performance.",
        focus: ["Nutrition workshops", "Sleep & recovery", "Stress management", "Habit building"],
      },
      {
        phase: "Executive Coaching",
        desc: "Private 1-on-1 coaching for leaders who need elite-level health and performance.",
        focus: ["Personal training", "Nutrition guidance", "Recovery protocols", "Performance tracking"],
      },
    ],
    pricing: [
      {
        name: "Wellness Workshop",
        price: "Custom",
        note: "One-off or quarterly workshops on movement, nutrition, and recovery.",
        features: ["1-2 hour sessions", "Team-size scalable", "Practical tools", "Follow-up notes"],
      },
      {
        name: "Ongoing Team Program",
        price: "Custom",
        note: "Recurring movement and wellness for your whole team.",
        features: [
          "Weekly sessions",
          "Group challenges",
          "Wellness education",
          "Impact tracking",
        ],
        featured: true,
      },
      {
        name: "Executive 1-on-1",
        price: "Custom",
        note: "Private coaching for leadership performance and longevity.",
        features: ["Personal training", "Nutrition coaching", "Priority scheduling", "Progress reviews"],
      },
    ],
    faqs: [
      {
        q: "How many employees can participate?",
        a: "Programs scale from small teams to 50+ employees. Group sessions are designed to keep everyone engaged regardless of fitness level.",
      },
      {
        q: "Do we need gym facilities?",
        a: "No. Sessions can run in your office, a partner gym, or outdoors, and remote programs need only a phone.",
      },
      {
        q: "Can it be delivered for hybrid or remote teams?",
        a: "Yes. Fully virtual programming works great for distributed teams across time zones.",
      },
    ],
    cta: "Invest in your team's performance. Book a free consultation to design your corporate wellness program.",
  },
  {
    slug: "football-performance",
    title: "Football Performance Coaching",
    eyebrow: "Athlete Coaching · Dubai",
    heroImage: martinPhotos.running,
    intro:
      "Train for the demands of the game. Develop the strength, speed, conditioning and physical performance needed to perform at your best on the pitch.",
    overview: [
      "Football rewards athletes who are strong, fast and durable across 90 minutes. Martin Sei's Football Performance Coaching builds the physical qualities the game actually demands — structured strength and power work combined with speed, agility, conditioning and injury-resilient movement.",
      "Every programme is built around the individual player: their position, their playing schedule and the attributes they need most. The goal is simple — a more athletic, more durable footballer who can compete at a higher level.",
    ],
    benefits: [
      {
        icon: "ri-speed-up-line",
        title: "Speed & Agility",
        desc: "Sprint mechanics, acceleration, change of direction and reactive agility that transfer directly to the pitch.",
      },
      {
        icon: "ri-hammer-line",
        title: "Strength & Power",
        desc: "Progressive strength and explosive power work that builds a faster, more physical, more dominant player.",
      },
      {
        icon: "ri-heart-pulse-line",
        title: "Conditioning & Endurance",
        desc: "Sport-specific conditioning that keeps you sharp, physical and effective late in the game.",
      },
      {
        icon: "ri-focus-3-line",
        title: "Physical Preparation",
        desc: "Mobility, stability and injury-prevention work that keeps you available, durable and consistent all season.",
      },
    ],
    whoFor: [
      "Footballers wanting to get faster and stronger",
      "Players returning from a break or the off-season",
      "Academy and semi-professional athletes",
      "Young players building an athletic foundation",
      "Anyone preparing for the physical demands of the game",
    ],
    program: [
      {
        phase: "Assessment",
        desc: "We test and review your movement, speed, strength and conditioning to find the biggest opportunities.",
        focus: ["Movement screen", "Speed & agility test", "Strength baseline", "Goal setting"],
      },
      {
        phase: "Foundation",
        desc: "Build robust movement quality, strength and work capacity before adding high-intensity speed work.",
        focus: ["Compound strength", "Mobility & stability", "Aerobic base", "Technique"],
      },
      {
        phase: "Development",
        desc: "Layer in speed, power and football-specific conditioning to raise your physical ceiling.",
        focus: ["Sprint & agility", "Plyometrics & power", "Position-specific conditioning", "Progressive overload"],
      },
      {
        phase: "Peak",
        desc: "Sharpen, taper and prepare so you arrive at your best — for pre-season, trials or competition.",
        focus: ["Speed peaking", "In-season maintenance", "Injury prevention", "Performance review"],
      },
    ],
    pricing: [
      {
        name: "1-on-1 Football Performance",
        price: "On Enquiry",
        note: "Private performance coaching built entirely around the individual player.",
        features: ["Personalised programming", "Speed, strength & conditioning", "Technique coaching", "Progress tracking"],
      },
      {
        name: "Small Group (2–4 Players)",
        price: "On Enquiry",
        note: "Train alongside teammates with individual attention.",
        features: ["Group programming", "Competitive sessions", "Shared accountability", "Flexible scheduling"],
        featured: true,
      },
      {
        name: "Team / Squad Sessions",
        price: "On Enquiry",
        note: "Performance sessions for clubs, teams and academies.",
        features: ["Squad conditioning", "Team-based training", "Scalable to group size", "Bespoke scheduling"],
      },
    ],
    faqs: [
      {
        q: "What age do you coach?",
        a: "Football performance coaching is tailored to the individual. Sessions are adapted to suit the player's age, stage of development and current level.",
      },
      {
        q: "Do I need to be a professional player?",
        a: "Not at all. Sessions are built around where you are now — from aspiring young players to experienced athletes who want to get stronger, faster and more durable.",
      },
      {
        q: "Will this fit around my team training?",
        a: "Yes. Programming is scheduled around your team sessions and matches so performance work complements, rather than competes with, your football.",
      },
      {
        q: "Where do sessions take place?",
        a: "In-person sessions are based around Dubai Silicon Oasis and surrounding areas, with online support available for remote athletes.",
      },
    ],
    cta: "Football Performance Enquiry — book a free consultation to train for the demands of the game.",
  },
  {
    slug: "family-coaching",
    title: "Family Coaching",
    eyebrow: "Train Together · Dubai",
    heroImage:
      "https://readdy.ai/api/search-image?query=Warm%20cinematic%20editorial%20photo%20of%20a%20mother%20father%20and%20child%20training%20together%20with%20kettlebells%20and%20bodyweight%20movements%20in%20a%20modern%20dark%20gym%2C%20soft%20directional%20lighting%2C%20premium%20fitness%20brand%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail&width=1400&height=900&seq=service-family-01&orientation=landscape",
    intro:
      "Train together. Get stronger together. Build healthier habits together.",
    overview: [
      "Health is easier to build when you do it as a team. Martin Sei's Family Coaching is structured, enjoyable and purposeful fitness for families who want to become more active, stronger and healthier together — whatever age or fitness level each member starts at.",
      "Sessions are designed for the whole family to take part, with movements adapted so every member is challenged appropriately and no one is left behind. The result is more than fitness: it's shared time, shared goals and healthier habits that last.",
    ],
    benefits: [
      {
        icon: "ri-group-line",
        title: "Train Together",
        desc: "Sessions designed for the whole family, with every movement scaled so all ages and abilities can join in.",
      },
      {
        icon: "ri-heart-2-line",
        title: "Strength For Every Age",
        desc: "Age-appropriate strength and movement work that builds real capacity for parents and children alike.",
      },
      {
        icon: "ri-leaf-line",
        title: "Healthier Habits",
        desc: "Practical guidance on movement, activity and lifestyle that the whole family can sustain long-term.",
      },
      {
        icon: "ri-emotion-happy-line",
        title: "Confidence & Fun",
        desc: "Energising, encouraging sessions that make staying active something the whole family looks forward to.",
      },
    ],
    whoFor: [
      "Families wanting to get active together",
      "Parents and children training side by side",
      "Families building healthier daily habits",
      "Busy households needing structured, purposeful sessions",
      "Anyone who wants fitness to be a shared family activity",
    ],
    program: [
      {
        phase: "Family Assessment",
        desc: "We understand each family member's starting point, goals and any limitations before we begin.",
        focus: ["Goal setting", "Movement review", "Ability mapping", "Session planning"],
      },
      {
        phase: "Movement Foundations",
        desc: "Core movement patterns, coordination and bodyweight strength for all ages.",
        focus: ["Bodyweight strength", "Coordination", "Mobility", "Technique"],
      },
      {
        phase: "Active Together",
        desc: "Fun, team-based conditioning that raises fitness while keeping everyone engaged.",
        focus: ["Team challenges", "Functional circuits", "Cardio & conditioning", "Games"],
      },
      {
        phase: "Healthy Habits",
        desc: "Turn sessions into lasting habits with simple lifestyle and activity guidance.",
        focus: ["Daily activity", "Habit building", "Recovery & sleep", "Progress reviews"],
      },
    ],
    pricing: [
      {
        name: "Family Session",
        price: "On Enquiry",
        note: "A single coached session for the whole family.",
        features: ["Whole-family participation", "All levels welcome", "Scaled movements", "Flexible location"],
      },
      {
        name: "Weekly Family Program",
        price: "On Enquiry",
        note: "Recurring coaching that builds lasting habits together.",
        features: ["Weekly sessions", "Progressive programming", "Habit guidance", "Progress tracking"],
        featured: true,
      },
      {
        name: "Family + Children's Combo",
        price: "On Enquiry",
        note: "Combine family sessions with dedicated children's coaching.",
        features: ["Family sessions", "Children's coaching", "Age-appropriate training", "Bespoke plan"],
      },
    ],
    faqs: [
      {
        q: "What ages can join?",
        a: "Family sessions are adapted for the whole household. Movements are scaled so children and adults of any age or ability can take part together.",
      },
      {
        q: "Do we need equipment or a gym?",
        a: "No. Sessions can run with bodyweight and simple equipment, at a suitable indoor or outdoor location around Dubai.",
      },
      {
        q: "What if family members are at very different fitness levels?",
        a: "That's exactly what we plan for. Everything is scaled individually, so beginners and more experienced members are all challenged appropriately.",
      },
      {
        q: "How do we get started?",
        a: "Book a free consultation and tell Martin about your family — he'll design a plan that fits your goals and schedule.",
      },
    ],
    cta: "Family Coaching Enquiry — book a free consultation to train together and get stronger together.",
  },
  {
    slug: "childrens-coaching",
    title: "Children's Coaching",
    eyebrow: "Youth Coaching · Jumeirah, Dubai",
    heroImage:
      "https://readdy.ai/api/search-image?query=Bright%20cinematic%20photo%20of%20a%20group%20of%20young%20children%20doing%20agility%20and%20coordination%20drills%20with%20cones%20in%20a%20modern%20school%20sports%20hall%2C%20energetic%20positive%20atmosphere%2C%20professional%20youth%20coaching%2C%20high%20detail&width=1400&height=900&seq=service-children-01&orientation=landscape",
    intro:
      "Helping young people build confidence, coordination, fitness and strong movement foundations through engaging, age-appropriate coaching.",
    overview: [
      "Currently providing children's coaching in schools in Jumeirah, Dubai.",
      "Martin Sei delivers structured, positive and age-appropriate coaching that helps children develop the movement skills that underpin lifelong activity — building coordination, agility, fitness and confidence in a supportive environment.",
      "Sessions are built around enjoyment as well as development. Children learn to move well, work as a team and grow their confidence, while building strong physical foundations at the stage when it matters most.",
    ],
    benefits: [
      {
        icon: "ri-run-line",
        title: "Movement Skills & Coordination",
        desc: "Fundamental movement patterns that build coordination, balance and body awareness.",
      },
      {
        icon: "ri-shield-star-line",
        title: "Age-Appropriate Strength & Conditioning",
        desc: "Safe, progressive strength and conditioning work scaled precisely to each child's stage of development.",
      },
      {
        icon: "ri-emotion-happy-line",
        title: "Confidence & Teamwork",
        desc: "Encouraging group sessions that build self-belief, communication and teamwork.",
      },
      {
        icon: "ri-football-line",
        title: "Fitness, Agility & Enjoyment",
        desc: "Fun, energetic sessions that develop fitness and agility while making movement something children love.",
      },
    ],
    whoFor: [
      "Schools looking for curriculum-friendly coaching",
      "Children building movement and coordination skills",
      "Young people developing fitness, agility and confidence",
      "Parents wanting structured, positive activity for their child",
      "Groups and after-school programmes",
    ],
    program: [
      {
        phase: "Fun Foundations",
        desc: "A playful introduction to movement, balance and coordination in a supportive setting.",
        focus: ["Movement skills", "Balance & coordination", "Confidence", "Enjoyment"],
      },
      {
        phase: "Skill Development",
        desc: "Build agility, speed, control and body awareness through progressive activities.",
        focus: ["Agility & speed", "Body awareness", "Teamwork", "Technique"],
      },
      {
        phase: "Strength & Fitness",
        desc: "Age-appropriate strength, conditioning and fitness that builds a resilient young athlete.",
        focus: ["Age-appropriate strength", "Fitness & conditioning", "Physical development", "Resilience"],
      },
      {
        phase: "Confidence & Growth",
        desc: "Consolidate skills and confidence so children carry healthy movement habits forward.",
        focus: ["Confidence", "Teamwork", "Healthy habits", "Progress review"],
      },
    ],
    pricing: [
      {
        name: "School Sessions",
        price: "On Enquiry",
        note: "Children's coaching delivered in schools, built around the school's schedule.",
        features: ["Curriculum-friendly", "Group-based", "Age-appropriate", "Scalable to year group"],
      },
      {
        name: "Group Sessions",
        price: "On Enquiry",
        note: "Structured coaching for children's groups and after-school programmes.",
        features: ["Small groups", "Skill development", "Teamwork focus", "Flexible scheduling"],
        featured: true,
      },
      {
        name: "1-on-1 Junior Coaching",
        price: "On Enquiry",
        note: "Private coaching to boost a child's confidence, coordination and fitness.",
        features: ["Personal attention", "Tailored sessions", "Confidence building", "Progress tracking"],
      },
    ],
    faqs: [
      {
        q: "Where is the children's coaching delivered?",
        a: "Martin currently provides children's coaching in schools in Jumeirah, Dubai, alongside group and one-to-one youth sessions.",
      },
      {
        q: "What ages do you coach?",
        a: "Sessions are adapted to the age and stage of each group, with activities chosen to be safe, engaging and appropriate for the children involved.",
      },
      {
        q: "Is it focused on competition or general development?",
        a: "The focus is development and enjoyment — building movement skills, fitness, coordination and confidence that benefit children in sport and in life.",
      },
      {
        q: "Can schools book ongoing sessions?",
        a: "Yes. Schools and groups can book recurring sessions. Book a free consultation to discuss your requirements and schedule.",
      },
    ],
    cta: "Children's Coaching Enquiry — book a free consultation to discuss coaching for your school, group or child.",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesContent.find((s) => s.slug === slug);
}