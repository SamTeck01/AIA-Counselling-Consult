// All images are Black people from Unsplash - contextually appropriate and unique for each service
import trauma from '@/assets/trauma.jpg'

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  whatToExpect: string[];
  whoItsFor: string[];
  isFeatured: boolean;
}

export const allExpandedServices: Service[] = [
  // 1. Trauma Counselling
  {
    id: "trauma-counselling",
    icon: "HeartCrack",
    title: "Trauma Counselling",
    shortDescription: "Professional support for healing from traumatic experiences with evidence-based therapeutic approaches.",
    fullDescription: "Our Trauma Counselling service provides specialized support for individuals who have experienced traumatic events. We use evidence-based approaches including EMDR, CBT, and trauma-focused therapy to help you process traumatic memories, reduce symptoms of PTSD, and regain a sense of safety and control in your life.",
    image: trauma,
    benefits: [
      "Process traumatic memories safely",
      "Reduce PTSD symptoms",
      "Develop healthy coping mechanisms",
      "Regain sense of safety and control",
      "Improve overall quality of life"
    ],
    whatToExpect: [
      "Safe, confidential environment",
      "Trauma-informed assessment",
      "Personalized treatment plan",
      "Evidence-based therapeutic techniques",
      "Gradual processing at your pace"
    ],
    whoItsFor: [
      "Survivors of abuse or violence",
      "Individuals with PTSD",
      "Those who experienced traumatic events",
      "People struggling with traumatic memories",
      "Anyone seeking trauma recovery"
    ],
    isFeatured: true
  },

  // 2. Occupational Counselling
  {
    id: "occupational-counselling",
    icon: "Briefcase",
    title: "Occupational Counselling",
    shortDescription: "Career guidance and workplace support to help you thrive professionally and maintain work-life balance.",
    fullDescription: "Our Occupational Counselling service helps professionals navigate career challenges, workplace stress, and work-life balance issues. We provide guidance on career transitions, workplace conflicts, professional development, and maintaining mental wellness in demanding work environments.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    benefits: [
      "Career clarity and direction",
      "Improved workplace relationships",
      "Better work-life balance",
      "Stress management strategies",
      "Enhanced professional performance"
    ],
    whatToExpect: [
      "Career assessment and planning",
      "Workplace stress evaluation",
      "Conflict resolution strategies",
      "Professional development guidance",
      "Ongoing support and coaching"
    ],
    whoItsFor: [
      "Professionals facing career transitions",
      "Individuals with workplace stress",
      "Those experiencing burnout",
      "People with workplace conflicts",
      "Anyone seeking career guidance"
    ],
    isFeatured: false
  },

  // 3. Emotional Intelligence Counselling
  {
    id: "emotional-intelligence-counselling",
    icon: "Brain",
    title: "Emotional Intelligence Counselling and Decision Making",
    shortDescription: "Develop emotional awareness and decision-making skills for better personal and professional relationships.",
    fullDescription: "This service focuses on enhancing your emotional intelligence - the ability to recognize, understand, and manage your emotions and those of others. We help you develop better decision-making skills, improve relationships, and navigate complex emotional situations with confidence.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80",
    benefits: [
      "Enhanced self-awareness",
      "Better emotional regulation",
      "Improved decision-making skills",
      "Stronger relationships",
      "Increased empathy and social skills"
    ],
    whatToExpect: [
      "Emotional intelligence assessment",
      "Self-awareness exercises",
      "Decision-making frameworks",
      "Practical skill-building activities",
      "Real-world application practice"
    ],
    whoItsFor: [
      "Leaders and managers",
      "Individuals seeking personal growth",
      "Those with relationship challenges",
      "People making important life decisions",
      "Anyone wanting to improve EQ"
    ],
    isFeatured: true
  },

  // 4. Mindset Counselling
  {
    id: "mindset-counselling",
    icon: "Lightbulb",
    title: "Mindset Counselling",
    shortDescription: "Transform limiting beliefs and develop a growth mindset for personal and professional success.",
    fullDescription: "Our Mindset Counselling helps you identify and transform limiting beliefs, develop a growth mindset, and cultivate positive thinking patterns. We work with you to overcome mental barriers, build resilience, and create a mindset that supports your goals and aspirations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    benefits: [
      "Overcome limiting beliefs",
      "Develop growth mindset",
      "Increased confidence and self-belief",
      "Better problem-solving abilities",
      "Enhanced resilience"
    ],
    whatToExpect: [
      "Belief system assessment",
      "Cognitive restructuring techniques",
      "Mindset shift exercises",
      "Goal-setting and achievement strategies",
      "Ongoing mindset coaching"
    ],
    whoItsFor: [
      "Individuals feeling stuck",
      "Those with self-limiting beliefs",
      "People seeking personal transformation",
      "Anyone wanting to achieve more",
      "Individuals facing major life changes"
    ],
    isFeatured: false
  },

  // 5. Stress Management Counselling
  {
    id: "stress-management-counselling",
    icon: "Wind",
    title: "Stress Management Counselling",
    shortDescription: "Learn effective techniques to manage stress and maintain mental wellness in your daily life.",
    fullDescription: "Our Stress Management program teaches you practical, evidence-based techniques to identify, manage, and reduce stress. We help you understand stress sources, recognize your body's responses, and develop personalized coping strategies for maintaining balance and resilience.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    benefits: [
      "Reduced stress and anxiety levels",
      "Improved physical and mental health",
      "Better work-life balance",
      "Enhanced coping skills",
      "Increased resilience and well-being"
    ],
    whatToExpect: [
      "Stress assessment and identification",
      "Relaxation and mindfulness training",
      "Cognitive-behavioral techniques",
      "Lifestyle and time management coaching",
      "Ongoing practice and support"
    ],
    whoItsFor: [
      "Professionals with work stress",
      "Individuals with chronic stress",
      "Those seeking better balance",
      "People with stress-related health issues",
      "Anyone wanting stress management skills"
    ],
    isFeatured: true
  },

  // 6. Addiction Recovery Counselling
  {
    id: "addiction-recovery-counselling",
    icon: "Shield",
    title: "Addiction Recovery Counselling",
    shortDescription: "Compassionate support for overcoming addiction and building a healthier, substance-free life.",
    fullDescription: "Our Addiction Recovery Counselling provides comprehensive support for individuals struggling with substance abuse or behavioral addictions. We offer evidence-based treatment, relapse prevention strategies, and ongoing support to help you achieve and maintain recovery.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    benefits: [
      "Break free from addiction",
      "Develop healthy coping mechanisms",
      "Rebuild relationships and trust",
      "Prevent relapse",
      "Achieve long-term recovery"
    ],
    whatToExpect: [
      "Comprehensive addiction assessment",
      "Personalized recovery plan",
      "Individual and group therapy",
      "Relapse prevention strategies",
      "Family support and education"
    ],
    whoItsFor: [
      "Individuals with substance abuse issues",
      "Those with behavioral addictions",
      "People in early recovery",
      "Individuals seeking to prevent relapse",
      "Family members of addicts"
    ],
    isFeatured: false
  },

  // 7. Infidelity Management Coping
  {
    id: "infidelity-management-coping",
    icon: "HeartHandshake",
    title: "Infidelity Management Coping",
    shortDescription: "Navigate the pain of infidelity and rebuild trust in your relationship with professional guidance.",
    fullDescription: "This specialized service helps couples and individuals cope with the aftermath of infidelity. We provide a safe space to process emotions, understand what happened, and decide whether to rebuild the relationship or move forward separately.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    benefits: [
      "Process complex emotions safely",
      "Understand root causes",
      "Rebuild trust (if desired)",
      "Make informed decisions",
      "Heal from betrayal trauma"
    ],
    whatToExpect: [
      "Individual and couples sessions",
      "Emotional processing support",
      "Communication skill building",
      "Trust rebuilding strategies",
      "Decision-making guidance"
    ],
    whoItsFor: [
      "Couples dealing with infidelity",
      "Individuals betrayed by partners",
      "Those who committed infidelity",
      "Couples considering reconciliation",
      "Anyone healing from betrayal"
    ],
    isFeatured: false
  },

  // 8. Work-Life Integration
  {
    id: "work-life-integration",
    icon: "Scale",
    title: "Work-Life Integration",
    shortDescription: "Achieve harmony between professional ambitions and personal well-being for a fulfilling life.",
    fullDescription: "Our Work-Life Integration counselling helps you create sustainable balance between career demands and personal life. We focus on integration rather than balance, helping you align your work with your values and maintain well-being while pursuing professional goals.",
    image: "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?w=800&q=80",
    benefits: [
      "Better time management",
      "Reduced burnout risk",
      "Improved relationships",
      "Enhanced productivity",
      "Greater life satisfaction"
    ],
    whatToExpect: [
      "Life and work assessment",
      "Priority identification",
      "Boundary-setting strategies",
      "Time management techniques",
      "Ongoing integration coaching"
    ],
    whoItsFor: [
      "Busy professionals",
      "Working parents",
      "Entrepreneurs and business owners",
      "Those feeling overwhelmed",
      "Anyone seeking better integration"
    ],
    isFeatured: false
  },

  // 9. Burnout Prevention and Management Counselling
  {
    id: "burnout-prevention-management",
    icon: "Flame",
    title: "Burnout Prevention and Management Counselling",
    shortDescription: "Prevent and recover from burnout with strategies for sustainable energy and well-being.",
    fullDescription: "This service addresses burnout prevention and recovery through comprehensive assessment, stress management, and lifestyle modifications. We help you recognize burnout signs early, implement preventive strategies, and recover if you're already experiencing burnout.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    benefits: [
      "Prevent burnout before it starts",
      "Recover from existing burnout",
      "Sustainable energy management",
      "Improved work satisfaction",
      "Better overall health"
    ],
    whatToExpect: [
      "Burnout risk assessment",
      "Energy management strategies",
      "Stress reduction techniques",
      "Lifestyle modification guidance",
      "Long-term prevention planning"
    ],
    whoItsFor: [
      "High-achieving professionals",
      "Healthcare workers",
      "Caregivers",
      "Those experiencing exhaustion",
      "Anyone at risk of burnout"
    ],
    isFeatured: false
  },

  // 10. Anxiety and Phobia Management Counselling
  {
    id: "anxiety-phobia-management",
    icon: "Sparkles",
    title: "Anxiety and Phobia Management Counselling",
    shortDescription: "Overcome anxiety disorders and phobias with evidence-based therapeutic interventions.",
    fullDescription: "Our Anxiety and Phobia Management service uses proven techniques including CBT, exposure therapy, and relaxation training to help you overcome anxiety disorders, panic attacks, and specific phobias. We provide tools to manage symptoms and regain control of your life.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    benefits: [
      "Reduce anxiety symptoms",
      "Overcome specific phobias",
      "Prevent panic attacks",
      "Develop coping strategies",
      "Regain confidence and freedom"
    ],
    whatToExpect: [
      "Comprehensive anxiety assessment",
      "CBT and exposure therapy",
      "Relaxation and breathing techniques",
      "Gradual desensitization",
      "Ongoing symptom management"
    ],
    whoItsFor: [
      "Individuals with anxiety disorders",
      "Those with specific phobias",
      "People experiencing panic attacks",
      "Anyone with excessive worry",
      "Individuals seeking anxiety relief"
    ],
    isFeatured: true
  },

  // 11. Grief and Bereavement Intervention Counselling
  {
    id: "grief-bereavement-intervention",
    icon: "Heart",
    title: "Grief and Bereavement Intervention Counselling",
    shortDescription: "Compassionate support to help you navigate the grieving process and find healing after loss.",
    fullDescription: "Our Grief and Bereavement Counselling provides specialized support for individuals coping with loss. We understand that grief is unique and personal, offering a safe space to process emotions, honor your loss, and gradually move toward healing while maintaining emotional well-being.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    benefits: [
      "Healthy grief processing",
      "Support through difficult transitions",
      "Tools for coping with loss",
      "Reduced feelings of isolation",
      "Path toward healing and acceptance"
    ],
    whatToExpect: [
      "Compassionate listening and validation",
      "Grief education and normalization",
      "Emotional processing techniques",
      "Coping strategy development",
      "Support for creating new meaning"
    ],
    whoItsFor: [
      "Individuals who lost loved ones",
      "Those with anticipatory grief",
      "People dealing with multiple losses",
      "Individuals with complicated grief",
      "Anyone needing bereavement support"
    ],
    isFeatured: false
  },

  // 12. Neurodiversity Confirmation Counselling
  {
    id: "neurodiversity-confirmation",
    icon: "Puzzle",
    title: "Neurodiversity Confirmation Counselling",
    shortDescription: "Support for understanding and embracing neurodivergent identities with professional assessment and guidance.",
    fullDescription: "This service provides assessment, confirmation, and support for individuals exploring neurodivergent identities (ADHD, Autism, etc.). We offer comprehensive evaluations, psychoeducation, and strategies for thriving with neurodivergent traits.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    benefits: [
      "Professional assessment and diagnosis",
      "Understanding your neurodivergence",
      "Tailored coping strategies",
      "Self-acceptance and advocacy",
      "Access to appropriate support"
    ],
    whatToExpect: [
      "Comprehensive assessment",
      "Diagnostic clarification",
      "Psychoeducation about neurodiversity",
      "Personalized support strategies",
      "Ongoing counselling and advocacy"
    ],
    whoItsFor: [
      "Individuals suspecting neurodivergence",
      "Those seeking formal diagnosis",
      "Parents of neurodivergent children",
      "Adults with late diagnosis",
      "Anyone seeking neurodiversity support"
    ],
    isFeatured: false
  },

  // 13. Children, Teens and Adolescent Sexuality Education Counselling
  {
    id: "adolescent-sexuality-education",
    icon: "Users",
    title: "Children, Teens and Adolescent Sexuality Education Counselling",
    shortDescription: "Age-appropriate sexuality education and counselling for young people and their families.",
    fullDescription: "We provide comprehensive, age-appropriate sexuality education and counselling for children, teens, and adolescents. Our approach is evidence-based, culturally sensitive, and focuses on healthy development, safety, and informed decision-making.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    benefits: [
      "Age-appropriate sex education",
      "Healthy relationship skills",
      "Body autonomy and safety",
      "Informed decision-making",
      "Open parent-child communication"
    ],
    whatToExpect: [
      "Developmentally appropriate education",
      "Safe space for questions",
      "Family involvement (as appropriate)",
      "Cultural sensitivity",
      "Ongoing support and guidance"
    ],
    whoItsFor: [
      "Children and adolescents",
      "Parents seeking guidance",
      "Teens with questions about sexuality",
      "Families wanting open communication",
      "Schools and youth organizations"
    ],
    isFeatured: false
  },

  // 14. Immunity Empowerment Counselling
  {
    id: "immunity-empowerment",
    icon: "Zap",
    title: "Immunity Empowerment Counselling",
    shortDescription: "Build psychological resilience and strengthen your mental immune system against life's challenges.",
    fullDescription: "This unique service focuses on building psychological immunity - your mental resilience and ability to bounce back from adversity. We help you develop protective factors, strengthen coping mechanisms, and build lasting emotional resilience.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    benefits: [
      "Enhanced psychological resilience",
      "Better stress resistance",
      "Improved coping abilities",
      "Faster recovery from setbacks",
      "Stronger mental health foundation"
    ],
    whatToExpect: [
      "Resilience assessment",
      "Protective factor development",
      "Coping skill enhancement",
      "Stress inoculation training",
      "Long-term resilience building"
    ],
    whoItsFor: [
      "Individuals facing chronic stress",
      "Those wanting to build resilience",
      "People in high-pressure careers",
      "Anyone seeking preventive mental health",
      "Individuals preparing for challenges"
    ],
    isFeatured: false
  },

  // 15. Gender-Based Violence
  {
    id: "gender-based-violence",
    icon: "ShieldAlert",
    title: "Gender-Based Violence Counselling",
    shortDescription: "Trauma-informed support for survivors of gender-based violence with safety planning and healing.",
    fullDescription: "Our Gender-Based Violence counselling provides trauma-informed, culturally sensitive support for survivors. We offer crisis intervention, safety planning, trauma processing, and long-term healing support in a confidential, non-judgmental environment.",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&q=80",
    benefits: [
      "Safe, confidential support",
      "Trauma processing and healing",
      "Safety planning assistance",
      "Empowerment and advocacy",
      "Connection to resources"
    ],
    whatToExpect: [
      "Trauma-informed approach",
      "Crisis intervention if needed",
      "Safety assessment and planning",
      "Emotional support and validation",
      "Referrals to additional services"
    ],
    whoItsFor: [
      "Survivors of domestic violence",
      "Victims of sexual assault",
      "Those experiencing abuse",
      "Individuals seeking safety",
      "Anyone affected by GBV"
    ],
    isFeatured: false
  },

  // 16. Nutrition and Safe Life-Style Counselling
  {
    id: "nutrition-lifestyle",
    icon: "Apple",
    title: "Nutrition and Safe Life-Style Counselling",
    shortDescription: "Holistic guidance for healthy eating, lifestyle choices, and overall wellness.",
    fullDescription: "This service integrates mental health support with nutrition and lifestyle guidance. We help you develop healthy eating habits, make safe lifestyle choices, and address the psychological aspects of wellness, including emotional eating and body image.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    benefits: [
      "Healthier eating habits",
      "Improved body image",
      "Better lifestyle choices",
      "Enhanced overall wellness",
      "Sustainable healthy behaviors"
    ],
    whatToExpect: [
      "Holistic wellness assessment",
      "Nutrition and lifestyle education",
      "Behavioral change strategies",
      "Emotional eating support",
      "Ongoing wellness coaching"
    ],
    whoItsFor: [
      "Individuals wanting healthier lifestyles",
      "Those with emotional eating",
      "People with body image concerns",
      "Anyone seeking holistic wellness",
      "Individuals making lifestyle changes"
    ],
    isFeatured: false
  },

  // 17. Relationship and Pre-Marital Counselling
  {
    id: "relationship-premarital",
    icon: "HeartHandshake",
    title: "Relationship and Pre-Marital Counselling",
    shortDescription: "Expert guidance for couples building strong foundations and preparing for marriage.",
    fullDescription: "Our Relationship and Pre-Marital Counselling helps couples strengthen their bond, improve communication, and prepare for marriage. We address potential challenges, build conflict resolution skills, and create a strong foundation for lasting partnership.",
    image: "https://images.unsplash.com/photo-1522621032211-ac0031dfbddc?w=800&q=80",
    benefits: [
      "Improved communication",
      "Conflict resolution skills",
      "Stronger emotional connection",
      "Marriage preparation",
      "Long-term relationship success"
    ],
    whatToExpect: [
      "Relationship assessment",
      "Communication training",
      "Conflict resolution practice",
      "Marriage preparation topics",
      "Ongoing couples support"
    ],
    whoItsFor: [
      "Couples preparing for marriage",
      "Partners wanting to strengthen bond",
      "Those with communication issues",
      "Couples facing challenges",
      "Anyone investing in relationship"
    ],
    isFeatured: true
  },

  // 18. Inter-Marriage and Conflict Resolution Counselling
  {
    id: "inter-marriage-conflict",
    icon: "Users2",
    title: "Inter-Marriage and Conflict Resolution Counselling",
    shortDescription: "Navigate cultural differences and resolve conflicts in intercultural and interfaith marriages.",
    fullDescription: "This specialized service supports couples in intercultural or interfaith marriages. We help navigate cultural differences, family expectations, and unique challenges while building understanding, respect, and effective conflict resolution strategies.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    benefits: [
      "Navigate cultural differences",
      "Resolve intercultural conflicts",
      "Build mutual understanding",
      "Manage family expectations",
      "Strengthen intercultural bond"
    ],
    whatToExpect: [
      "Cultural sensitivity assessment",
      "Conflict resolution strategies",
      "Family dynamics navigation",
      "Communication across cultures",
      "Ongoing intercultural support"
    ],
    whoItsFor: [
      "Intercultural couples",
      "Interfaith marriages",
      "Couples with cultural conflicts",
      "Those managing family expectations",
      "Anyone in cross-cultural relationships"
    ],
    isFeatured: false
  },

  // 19. Parenting Counselling
  {
    id: "parenting-counselling",
    icon: "Baby",
    title: "Parenting Counselling",
    shortDescription: "Support for parents navigating challenges and building strong, healthy family relationships.",
    fullDescription: "Our Parenting Counselling provides guidance for parents facing challenges at any stage. We offer evidence-based strategies for discipline, communication, developmental concerns, and building strong parent-child relationships.",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    benefits: [
      "Effective parenting strategies",
      "Improved parent-child communication",
      "Better behavior management",
      "Reduced parenting stress",
      "Stronger family relationships"
    ],
    whatToExpect: [
      "Parenting style assessment",
      "Age-appropriate strategies",
      "Communication skill building",
      "Behavior management techniques",
      "Ongoing parenting support"
    ],
    whoItsFor: [
      "New parents",
      "Parents of teenagers",
      "Those with behavioral challenges",
      "Single parents",
      "Anyone seeking parenting guidance"
    ],
    isFeatured: false
  },

  // 20. Academic and Career Belief and Wellness Counselling in Schools
  {
    id: "academic-career-wellness",
    icon: "GraduationCap",
    title: "Academic and Career Belief and Wellness Counselling in Schools",
    shortDescription: "Comprehensive support for students' academic success, career planning, and mental wellness.",
    fullDescription: "This school-based service provides holistic support for students, addressing academic performance, career planning, mental wellness, and personal development. We work with students, parents, and schools to create supportive environments for success.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    benefits: [
      "Improved academic performance",
      "Career clarity and planning",
      "Better mental wellness",
      "Enhanced self-confidence",
      "Successful school experience"
    ],
    whatToExpect: [
      "Academic and career assessment",
      "Study skills development",
      "Career exploration",
      "Mental wellness support",
      "School-family collaboration"
    ],
    whoItsFor: [
      "Students at all levels",
      "Those with academic struggles",
      "Students planning careers",
      "Individuals with school stress",
      "Parents and educators"
    ],
    isFeatured: false
  }
];

// Get featured services (for home page)
export const getFeaturedExpandedServices = () => allExpandedServices.filter(service => service.isFeatured);

// Get service by ID
export const getExpandedServiceById = (id: string) => allExpandedServices.find(service => service.id === id);

// Get all services
export const getAllExpandedServices = () => allExpandedServices;
