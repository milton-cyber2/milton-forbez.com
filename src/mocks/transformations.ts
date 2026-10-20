export interface TransformationStory {
  id: string;
  name: string;
  meta: string;
  goal: string;
  duration: string;
  loss?: string;
  gain?: string;
  achievement: string;
  testimonial: string;
  journey: string;
  before: string;
  after: string;
}

export const featuredTransformation: TransformationStory = {
  id: "featured",
  name: "Ahmed R.",
  meta: "Entrepreneur · Jumeirah",
  goal: "Full body recomposition",
  duration: "26 weeks",
  loss: "-24 kg",
  gain: "+7 kg lean mass",
  achievement: "Lost a quarter of his body weight while building the strongest version of himself — squat 190 kg, first HYROX finish.",
  testimonial:
    "I showed up doubting myself every single week. Martin never let me settle. Twenty-six weeks later I'm a different man — physically, mentally, every way.",
  journey:
    "Ahmed came to me with a history of failed gym memberships and a genuine belief that his body 'just didn't change.' He was 40, running a demanding business, and burned out on crash diets. We rebuilt him from the ground up — no gimmicks, no starvation, just a sustainable hybrid program of strength, conditioning, and a nutrition plan that fit his real life. Week by week, the doubt faded. By month six he'd dropped 24 kg, hit a 190 kg squat, and crossed his first HYROX finish line with tears in his eyes.",
  before:
    "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20mid-forties%20Middle%20Eastern%20man%20standing%20in%20a%20dim%20moody%20gym%20studio%20wearing%20plain%20dark%20athletic%20shorts%2C%20softer%20flat%20directional%20lighting%2C%20slightly%20heavier%20unconfident%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop%2C%20dramatic%20cinematic%20lighting&width=1000&height=1300&seq=transform-before-featured&orientation=portrait",
  after:
    "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20lean%20defined%20confident%20Middle%20Eastern%20athlete%20in%20his%20forties%20standing%20tall%20in%20a%20dark%20gym%20studio%20wearing%20dark%20athletic%20shorts%2C%20sculpted%20muscular%20physique%2C%20dramatic%20rim%20lighting%2C%20moody%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=1000&height=1300&seq=transform-after-featured&orientation=portrait",
};

export const transformationStories: TransformationStory[] = [
  {
    id: "omar",
    name: "Omar K.",
    meta: "Consultant · DIFC",
    goal: "Fat loss & recomp",
    duration: "20 weeks",
    loss: "-16 kg",
    gain: "+4 kg lean mass",
    achievement: "Dropped 16 kg with zero cardio addiction — pure programming and discipline.",
    testimonial:
      "I've tried every diet app on the market. Martin's approach was different — it worked with my life, not against it.",
    journey:
      "Omar was a high-performing consultant whose career had quietly eaten his health. We built a structured strength-first plan around his unpredictable schedule, with nutrition coaching that removed the guesswork entirely.",
    before:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20an%20anonymous%20Middle%20Eastern%20male%20client%20standing%20in%20a%20dim%20moody%20studio%20in%20plain%20dark%20athletic%20shorts%2C%20soft%20flat%20lighting%2C%20neutral%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-01&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20lean%20defined%20anonymous%20Middle%20Eastern%20male%20athlete%20in%20dark%20athletic%20shorts%20standing%20confidently%20in%20a%20dim%20moody%20studio%2C%20sculpted%20physique%2C%20soft%20rim%20lighting%2C%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-01&orientation=portrait",
  },
  {
    id: "sara",
    name: "Sara L.",
    meta: "Architect · Downtown Dubai",
    goal: "Fat loss & confidence",
    duration: "16 weeks",
    loss: "-11 kg",
    gain: "First pull-up",
    achievement: "Lost 11 kg and achieved her first-ever unassisted pull-up.",
    testimonial:
      "I used to hide in oversized shirts. Now I walk into every meeting with a strength I can feel.",
    journey:
      "Sara wanted results that lasted, not quick fixes. A progressive strength block paired with sustainable nutrition rebuilt both her body and her belief in what she's capable of.",
    before:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20an%20anonymous%20female%20client%20standing%20in%20a%20dim%20moody%20studio%20wearing%20plain%20black%20sports%20top%20and%20leggings%2C%20soft%20flat%20lighting%2C%20neutral%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-02&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20toned%20confident%20anonymous%20athletic%20woman%20in%20black%20sports%20top%20and%20leggings%20standing%20tall%20in%20a%20dim%20moody%20studio%2C%20lean%20defined%20physique%2C%20soft%20rim%20lighting%2C%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-02&orientation=portrait",
  },
  {
    id: "daniel",
    name: "Daniel M.",
    meta: "Engineer · Abu Dhabi",
    goal: "HYROX race performance",
    duration: "18 weeks",
    loss: "-8 kg",
    gain: "Sub-70 min HYROX",
    achievement: "Took 22 minutes off his first HYROX time in a single block.",
    testimonial:
      "The programming is brutal and brilliant in equal measure. I'm a completely different athlete.",
    journey:
      "Daniel was stuck in an endless cycle of generic cardio. A race-specific HYROX block — sled, wall balls, ski erg, running economy — transformed him from casual jogger to podium-ready athlete.",
    before:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20an%20anonymous%20male%20athlete%20in%20dark%20training%20gear%20standing%20in%20a%20dim%20moody%20studio%20before%20his%20training%20block%2C%20soft%20flat%20lighting%2C%20neutral%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-03&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20lean%20conditioned%20anonymous%20male%20athlete%20in%20dark%20training%20gear%20standing%20confident%20in%20a%20dim%20moody%20studio%2C%20defined%20athletic%20build%2C%20soft%20rim%20lighting%2C%20charcoal%20background%2C%20editorial%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-03&orientation=portrait",
  },
  {
    id: "layla",
    name: "Layla H.",
    meta: "Surgeon · Healthcare City",
    goal: "Strength & mobility",
    duration: "24 weeks",
    loss: "-7 kg",
    gain: "+6 kg lean mass",
    achievement: "Squat 100 kg for the first time after two years of chronic back pain.",
    testimonial:
      "The first coach who actually respected my medical history. He rebuilt my strength safely — and permanently.",
    journey:
      "After years of guarding a bad back, Layla needed intelligent, progressive loading. Mobility-first strength work rebuilt her confidence under the bar and took her to a 100 kg squat, pain-free.",
    before:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20an%20anonymous%20female%20client%20standing%20in%20a%20dim%20moody%20studio%20wearing%20plain%20black%20athletic%20wear%2C%20soft%20flat%20lighting%2C%20neutral%20guarded%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-04&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20strong%20confident%20anonymous%20athletic%20woman%20in%20black%20athletic%20wear%20standing%20tall%20in%20a%20dim%20moody%20studio%2C%20defined%20muscular%20physique%2C%20soft%20rim%20lighting%2C%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-04&orientation=portrait",
  },
  {
    id: "marco",
    name: "Marco V.",
    meta: "Chef · Business Bay",
    goal: "Lean muscle gain",
    duration: "28 weeks",
    loss: "+8 kg lean mass",
    gain: "2x strength on press",
    achievement: "Gained 8 kg of lean mass and doubled his overhead press in 7 months.",
    testimonial:
      "As a chef my days are long and chaotic. Martin built my plan around that chaos — and I still grew.",
    journey:
      "Marco's lifestyle made consistency hard, so we engineered it to be simple. A focused hypertrophy block with flexible nutrition added serious, quality muscle to a frame that had never been trained properly.",
    before:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20an%20anonymous%20male%20client%20standing%20in%20a%20dim%20moody%20studio%20in%20dark%20athletic%20shorts%2C%20slim%20untrained%20frame%2C%20soft%20flat%20lighting%2C%20neutral%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-05&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20muscular%20confident%20anonymous%20male%20athlete%20in%20dark%20athletic%20shorts%20standing%20tall%20in%20a%20dim%20moody%20studio%2C%20broad%20defined%20physique%2C%20soft%20rim%20lighting%2C%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-05&orientation=portrait",
  },
  {
    id: "priya",
    name: "Priya N.",
    meta: "Marketing Lead · Media City",
    goal: "Fat loss & energy",
    duration: "14 weeks",
    loss: "-9 kg",
    gain: "Doubled energy levels",
    achievement: "Lost 9 kg and ended her mid-afternoon energy crash for good.",
    testimonial:
      "I finally have energy for my kids at the end of the day. That's the real win — not just the scale.",
    journey:
      "Priya was surviving on caffeine and willpower. Sustainable nutrition and smart conditioning rebuilt her metabolism and gave her the energy to show up as a mother, leader, and athlete.",
    before:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20an%20anonymous%20female%20client%20standing%20in%20a%20dim%20moody%20studio%20wearing%20plain%20black%20sports%20outfit%2C%20soft%20flat%20lighting%2C%20neutral%20tired%20posture%2C%20muted%20charcoal%20background%2C%20editorial%20before%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-before-06&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Cinematic%20luxury%20fitness%20portrait%20of%20a%20fit%20radiant%20confident%20anonymous%20woman%20in%20black%20sports%20outfit%20standing%20tall%20in%20a%20dim%20moody%20studio%2C%20toned%20energetic%20physique%2C%20soft%20rim%20lighting%2C%20charcoal%20background%2C%20editorial%20after%20progress%20photo%2C%20premium%20magazine%20quality%2C%20clean%20simple%20backdrop&width=800&height=1000&seq=transform-after-06&orientation=portrait",
  },
];

export interface ClientVoice {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const clientVoices: ClientVoice[] = [
  {
    name: "Amira K.",
    role: "Executive · Downtown Dubai",
    quote:
      "I dropped 11 kg in five months and finally feel strong in my own body. Best decision I've made this year.",
    image:
      "https://readdy.ai/api/search-image?query=Editorial%20luxury%20headshot%20portrait%20of%20a%20confident%20professional%20Middle%20Eastern%20woman%20in%20her%20thirties%20in%20a%20dark%20studio%2C%20soft%20cinematic%20lighting%2C%20charcoal%20background%2C%20premium%20magazine%20quality%2C%20clean%20minimal%20backdrop&width=600&height=600&seq=voice-01&orientation=squarish",
  },
  {
    name: "Rashid M.",
    role: "Entrepreneur · DIFC",
    quote:
      "We placed top ten in our division after just fourteen weeks of the HYROX block. The programming is savage but insanely intelligent.",
    image:
      "https://readdy.ai/api/search-image?query=Editorial%20luxury%20headshot%20portrait%20of%20a%20confident%20successful%20Middle%20Eastern%20man%20in%20his%20forties%20in%20a%20dark%20studio%2C%20soft%20cinematic%20lighting%2C%20charcoal%20background%2C%20premium%20magazine%20quality%2C%20clean%20minimal%20backdrop&width=600&height=600&seq=voice-02&orientation=squarish",
  },
  {
    name: "Priya S.",
    role: "Doctor · Healthcare City",
    quote:
      "First coach who actually respected my medical history. Squat back to 90 kg after two years of chronic pain. Life-changing.",
    image:
      "https://readdy.ai/api/search-image?query=Editorial%20luxury%20headshot%20portrait%20of%20a%20confident%20professional%20South%20Asian%20woman%20in%20her%20late%20thirties%20in%20a%20dark%20studio%2C%20soft%20cinematic%20lighting%2C%20charcoal%20background%2C%20premium%20magazine%20quality%2C%20clean%20minimal%20backdrop&width=600&height=600&seq=voice-03&orientation=squarish",
  },
  {
    name: "Jonas E.",
    role: "Corporate Team Lead",
    quote:
      "Martin ran a twelve-week program for thirty of our team. The energy at the office is different — people are performing better.",
    image:
      "https://readdy.ai/api/search-image?query=Editorial%20luxury%20headshot%20portrait%20of%20a%20confident%20European%20man%20in%20his%20forties%20in%20a%20dark%20studio%2C%20soft%20cinematic%20lighting%2C%20charcoal%20background%2C%20premium%20magazine%20quality%2C%20clean%20minimal%20backdrop&width=600&height=600&seq=voice-04&orientation=squarish",
  },
];

export const resultStats = [
  { value: 100, suffix: "+", label: "CLIENTS", note: "Transformed" },
  { value: 1000, suffix: "+", label: "SESSIONS", note: "Delivered" },
  { value: 97, suffix: "%", label: "REAL CONSISTENCY", note: "Show-up rate" },
  { value: 100, suffix: "%", label: "REAL RESULTS", note: "Goal-driven" },
];

export const heroBackground =
  "https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/14f50685-e73e-40aa-bd64-ef088cb924e8_compressed_martin.webp";