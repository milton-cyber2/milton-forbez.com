export const brand = {
  name: "Martin Sei",
  initials: "MS",
  tagline: "Hybrid • Strength • Functional • HYROX Coach",
  location: "Dubai Silicon Oasis, Dubai, UAE",
  whatsapp: "+971561825188",
  whatsappDisplay: "+971 56 182 5188",
  email: "Seimartins27@gmail.com",
  instagram: "https://www.instagram.com/seimartins",
  instagramHandle: "@seimartins",
};

export const heroImage =
  "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/16e02ffb-dbb2-49c5-9755-9f0fb7bbdd74_compressed_WhatsApp-Image-2026-06-25-at-20.49.53-3.webp";

// Real photos of Martin
export const martinPhotos = {
  running: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/67b14c93-93d3-4f3c-83a1-e4ad6e32cbb3_compressed_WhatsApp-Image-2026-06-25-at-20.49.52-1.webp",
  sandbags: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/35a136e4-d02a-4c16-8141-079096b97207_compressed_WhatsApp-Image-2026-06-25-at-20.49.52.webp",
  tireFlip: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/01477fc8-2515-447d-b7c9-b5085f4ff51b_compressed_WhatsApp-Image-2026-06-25-at-20.49.53-1.webp",
  dumbbellCurl: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/c1e659b5-e8c1-4510-affd-00472b19ea63_compressed_WhatsApp-Image-2026-06-25-at-20.49.53-2.webp",
  hyroxRun: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/16e02ffb-dbb2-49c5-9755-9f0fb7bbdd74_compressed_WhatsApp-Image-2026-06-25-at-20.49.53-3.webp",
  portrait: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/2a6b5a6a-eaa7-466d-8af8-6d4a6d36c1d6_compressed_WhatsApp-Image-2026-06-25-at-20.49.53-4.webp",
  battleRopes: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/c017eb69-f879-40e3-b49d-0bee253fe5a3_compressed_WhatsApp-Image-2026-06-25-at-20.49.53.webp",
  hyroxWall: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/ca891654-22f1-4c45-8e88-c3c8adbb7b4e_compressed_WhatsApp-Image-2026-06-25-at-20.49.54.webp",
  blogHero: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/66672bbf-84a6-4f00-8876-af9589afe945_compressed_WhatsApp-Image-2026-10-08-at-00.54.05.webp",
  worldChampTeam: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/699cc71f-5352-4599-a3fb-08935d02e05f_compressed_WhatsApp-Image-2026-08-10-at-21.58.16-3.webp",
  worldChampTrophy: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/c4ddd6e9-03dc-4915-8d98-dd56379d301b_compressed_WhatsApp-Image-2026-08-10-at-21.58.16-4.webp",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services/personal-training",
    children: [
      { label: "Personal Training", to: "/services/personal-training" },
      { label: "HYROX Coaching", to: "/services/hyrox" },
      { label: "Strength & Functional", to: "/services/strength-functional" },
      { label: "Nutrition Coaching", to: "/services/nutrition" },
      { label: "Online Coaching", to: "/services/online-coaching" },
      { label: "Corporate Wellness", to: "/services/corporate-wellness" },
      { label: "Football Performance Coaching", to: "/services/football-performance" },
      { label: "Family Coaching", to: "/services/family-coaching" },
      { label: "Children's Coaching", to: "/services/childrens-coaching" },
    ],
  },
  { label: "Classes", to: "/classes" },
  { label: "Memberships", to: "/memberships" },
  { label: "Transformations", to: "/transformations" },
  { label: "Blog", to: "/blog" },
  { label: "Brand Collaborations", to: "/brand-collaborations" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { label: "World Champion", value: "1x" },
  { label: "Clients Coached", value: "480+" },
  { label: "Sessions Delivered", value: "12,000+" },
  { label: "Group Classes Led", value: "1,600+" },
];

export const services = [
  {
    id: "personal-training",
    title: "1-on-1 Personal Training",
    icon: "ri-user-star-line",
    excerpt:
      "Fully personalized in-person coaching in Dubai. Structured programming, technique refinement, and full accountability.",
    to: "/services/personal-training",
  },
  {
    id: "hyrox",
    title: "HYROX Race Preparation",
    icon: "ri-flag-line",
    excerpt:
      "Race-specific programming for HYROX athletes — sled push/pull, wall balls, ski erg, rowing, running economy.",
    to: "/services/hyrox",
  },
  {
    id: "strength-functional",
    title: "Strength & Functional Training",
    icon: "ri-fire-line",
    excerpt:
      "Compound strength blocks paired with functional conditioning to build real-world, athletic, injury-resistant capacity.",
    to: "/services/strength-functional",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    icon: "ri-global-line",
    excerpt:
      "Coached remotely from anywhere. Weekly programming, video technique reviews, and 24/7 messaging support.",
    to: "/services/online-coaching",
  },
  {
    id: "nutrition",
    title: "Nutrition Guidance",
    icon: "ri-restaurant-2-line",
    excerpt:
      "Evidence-based nutrition strategy for fat loss, muscle gain, and sustained energy — no fad diets, no gimmicks.",
    to: "/services/nutrition",
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness",
    icon: "ri-building-4-line",
    excerpt:
      "On-site & remote wellness programs for Dubai teams. Movement, mobility, workshops, and executive coaching.",
    to: "/services/corporate-wellness",
  },
];

export const testimonials = [
  {
    name: "Amira K.",
    role: "Executive — Downtown Dubai",
    goal: "Fat loss & confidence",
    quote:
      "Martin restructured my week around 4 focused sessions. I dropped 11 kg in 5 months and finally feel strong in my own body. Best decision I've made this year.",
    rating: 5,
  },
  {
    name: "Rashid M.",
    role: "Entrepreneur — DIFC",
    goal: "HYROX Doubles",
    quote:
      "We placed top 10 in our division after only 14 weeks of Martin's HYROX block. The programming is savage but insanely intelligent.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Doctor — Dubai Healthcare City",
    goal: "Strength & mobility",
    quote:
      "First coach who actually respected my medical history. Squat back to 90 kg after two years of chronic back pain. Life-changing.",
    rating: 5,
  },
  {
    name: "Jonas E.",
    role: "Corporate Team Lead",
    goal: "Corporate wellness",
    quote:
      "Martin ran a 12-week program for 30 of our team members. Energy at the office is different — people are moving, sleeping, performing better.",
    rating: 5,
  },
];

export const transformations = [
  {
    name: "Client K.",
    weeks: 16,
    loss: "-14 kg",
    gain: "+3 kg lean mass",
    note: "Sustainable fat loss on a hybrid strength + conditioning plan.",
    before: "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20anonymous%20male%20client%20standing%20in%20dim%20studio%20light%20wearing%20plain%20dark%20athletic%20shorts%2C%20soft%20directional%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-01&orientation=portrait",
    after: "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20anonymous%20lean%20defined%20male%20athlete%20in%20dark%20athletic%20shorts%20standing%20confidently%20in%20dim%20studio%20light%2C%20soft%20rim%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-01&orientation=portrait",
  },
  {
    name: "Client A.",
    weeks: 20,
    loss: "-9 kg",
    gain: "+5 kg lean mass",
    note: "Strength doubled on squat, deadlift, and press across five months.",
    before: "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20anonymous%20female%20client%20standing%20in%20dim%20studio%20light%20wearing%20plain%20black%20sports%20outfit%2C%20soft%20directional%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-02&orientation=portrait",
    after: "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20anonymous%20toned%20athletic%20female%20in%20black%20sports%20outfit%20standing%20confidently%20in%20dim%20studio%20light%2C%20soft%20rim%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-02&orientation=portrait",
  },
  {
    name: "Client R.",
    weeks: 14,
    loss: "-6 kg",
    gain: "HYROX Top 10",
    note: "Race-specific block that unlocked a sub-70-minute HYROX finish.",
    before: "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20anonymous%20male%20athlete%20in%20dark%20training%20gear%20standing%20in%20dim%20studio%20light%20before%20training%20block%2C%20soft%20directional%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-03&orientation=portrait",
    after: "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20anonymous%20lean%20conditioned%20male%20athlete%20in%20dark%20training%20gear%20standing%20confident%20in%20dim%20studio%20light%2C%20soft%20rim%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-03&orientation=portrait",
  },
];

export const scheduleHighlights = [
  { day: "MON", time: "06:30", title: "HYROX Endurance", level: "Advanced" },
  { day: "TUE", time: "18:00", title: "Strength Power", level: "Intermediate" },
  { day: "WED", time: "06:30", title: "Full Body HIIT", level: "All Levels" },
  { day: "THU", time: "19:00", title: "Functional Core", level: "Beginner" },
  { day: "FRI", time: "06:30", title: "Mobility & Recovery", level: "All Levels" },
  { day: "SAT", time: "09:00", title: "HYROX Race Sim", level: "Advanced" },
];

export const featuredBlogPosts = [
  {
    slug: "hyrox-training-guide-dubai",
    title: "The Ultimate HYROX Training Guide for Dubai Athletes",
    excerpt:
      "Build the exact strength, engine, and race-day pacing you need to smash your first HYROX in Dubai.",
    category: "HYROX",
    read: "8 min read",
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20dumbbells%20medicine%20ball%20and%20sled%20on%20a%20black%20rubber%20gym%20floor%20lit%20by%20a%20single%20warm%20spotlight%2C%20luxury%20fitness%20magazine%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail%20photography%2C%20clean%20minimal%20composition&width=1200&height=800&seq=blog-hyrox-guide-01&orientation=landscape",
  },
  {
    slug: "strength-mistakes-to-avoid",
    title: "5 Strength Training Mistakes Costing You Real Results",
    excerpt:
      "Why chasing PRs isn't enough — and the framework I use with every one of my Dubai clients.",
    category: "Strength",
    read: "6 min read",
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20a%20loaded%20barbell%20resting%20on%20a%20black%20rubber%20platform%20under%20warm%20directional%20spotlight%2C%20luxury%20fitness%20magazine%20aesthetic%2C%20moody%20charcoal%20tones%2C%20high%20detail%20photography%2C%20clean%20minimal%20composition&width=1200&height=800&seq=blog-strength-01&orientation=landscape",
  },
  {
    slug: "fat-loss-that-lasts",
    title: "Fat Loss That Actually Lasts — A Coach's Playbook",
    excerpt:
      "The three habits every successful Dubai client masters before they touch a diet plan.",
    category: "Nutrition",
    read: "7 min read",
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cinematic%20editorial%20photo%20of%20a%20balanced%20high%20protein%20plate%20with%20grilled%20chicken%20vegetables%20and%20rice%20on%20a%20matte%20black%20table%20under%20soft%20warm%20spotlight%2C%20luxury%20food%20magazine%20aesthetic%2C%20moody%20tones%2C%20clean%20minimal%20composition&width=1200&height=800&seq=blog-fatloss-01&orientation=landscape",
  },
];

export const brandCollabVideos = {
  nikePro1: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/e4753870-7aa0-49e1-937e-d430df686e87_WhatsApp-Video-2026-08-13-at-21.42.07-1.mp4",
  nikePro2: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/8e2060e5-88fa-4c00-b9f9-3dd2820d97f6_WhatsApp-Video-2026-08-13-at-21.45.24-1.mp4",
  martinPower: "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/c3eec69e-28b7-4ca0-99db-e1a5ba862993_MARTIN-POWER.mp4",
};