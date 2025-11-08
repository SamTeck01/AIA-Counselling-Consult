import relationshipIcon from '@/assets/relationship.png';
import lifeIcon from '@/assets/life-and-councelling.png';
import esteemIcon from '@/assets/Esteem.png';
import anxietyIcon from '@/assets/self-esteem-issue.png';
import chocolateWomanSmiling from '@/assets/chocolate-woman-smiling.jpg';
import blackWomanSmiling from '@/assets/black-woman-smiling.jpg';

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  whatToExpect: string[];
  whoItsFor: string[];
  isFeatured: boolean;
}

export const servicesData: Service[] = [
  {
    id: "relationship-marital-counselling",
    icon: relationshipIcon,
    title: "Relationship & Marital Counselling",
    shortDescription:
      "Expert guidance for couples navigating relationship and marital challenges. Strengthen your bond and build a more fulfilling partnership.",
    fullDescription:
      "Our Relationship & Marital Counselling service provides a safe, confidential space for couples to address challenges, improve communication, and strengthen their emotional connection. Whether you're dealing with conflict, trust issues, or simply want to enhance your relationship, our experienced therapists use evidence-based approaches tailored to your unique situation. We help couples develop healthy communication patterns, resolve conflicts constructively, and rebuild intimacy and trust.",
    image: blackWomanSmiling,
    benefits: [
      "Improved communication and understanding",
      "Conflict resolution strategies",
      "Rebuilding trust and intimacy",
      "Strengthened emotional connection",
      "Tools for long-term relationship success"
    ],
    whatToExpect: [
      "Initial assessment of relationship dynamics",
      "Personalized treatment plan",
      "Weekly or bi-weekly sessions",
      "Homework assignments to practice new skills",
      "Progress reviews and adjustments"
    ],
    whoItsFor: [
      "Couples experiencing communication difficulties",
      "Partners dealing with trust issues",
      "Married couples seeking to strengthen their bond",
      "Couples preparing for marriage",
      "Partners navigating major life transitions"
    ],
    isFeatured: true
  },
  {
    id: "career-academic-guidance",
    icon: lifeIcon,
    title: "Career & Academic Guidance",
    shortDescription:
      "Professional support for adolescents and youths facing academic, behaviour, and career-related challenges.",
    fullDescription:
      "Our Career & Academic Guidance service is designed to help students and young professionals navigate the complexities of academic life and career planning. We provide personalized support to help you identify your strengths, overcome academic challenges, develop effective study habits, and make informed career decisions. Our counselors work with you to set realistic goals, manage stress, and build the confidence needed to succeed in your educational and professional journey.",
    image: chocolateWomanSmiling,
    benefits: [
      "Clarity in career direction and goals",
      "Improved academic performance",
      "Better time management and study skills",
      "Reduced academic stress and anxiety",
      "Confidence in decision-making"
    ],
    whatToExpect: [
      "Comprehensive assessment of strengths and interests",
      "Goal-setting and action planning",
      "Study skills and time management training",
      "Career exploration and planning",
      "Ongoing support and accountability"
    ],
    whoItsFor: [
      "Students struggling with academic performance",
      "Young adults uncertain about career paths",
      "Individuals facing academic stress",
      "Those preparing for career transitions",
      "Students needing motivation and direction"
    ],
    isFeatured: true
  },
  {
    id: "behaviour-modification",
    icon: esteemIcon,
    title: "Behaviour Modification",
    shortDescription:
      "Specialized therapy for behaviour modification and mental health support with evidence-based approaches.",
    fullDescription:
      "Our Behaviour Modification service utilizes scientifically-proven techniques to help individuals change unwanted behaviors and develop healthier patterns. We work with clients to identify triggers, understand the root causes of problematic behaviors, and implement practical strategies for lasting change. Our approach combines cognitive-behavioral therapy (CBT), positive reinforcement, and personalized interventions to help you achieve your behavioral goals and improve your overall quality of life.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    benefits: [
      "Elimination or reduction of unwanted behaviors",
      "Development of healthy coping mechanisms",
      "Improved self-control and emotional regulation",
      "Enhanced quality of life",
      "Long-lasting behavioral change"
    ],
    whatToExpect: [
      "Detailed behavioral assessment",
      "Identification of triggers and patterns",
      "Customized intervention plan",
      "Regular monitoring and adjustments",
      "Skills training and practice"
    ],
    whoItsFor: [
      "Individuals with habit disorders",
      "Those struggling with anger management",
      "People with addictive behaviors",
      "Individuals seeking to break negative patterns",
      "Anyone wanting to develop healthier behaviors"
    ],
    isFeatured: true
  },
  {
    id: "individual-group-therapy",
    icon: anxietyIcon,
    title: "Individual & Group Therapy",
    shortDescription:
      "Personalized counselling sessions for individuals, couples, families, and corporate clients both online and in-person.",
    fullDescription:
      "Our Individual & Group Therapy services offer flexible, comprehensive mental health support tailored to your needs. Whether you prefer one-on-one sessions or the shared experience of group therapy, we provide a safe, non-judgmental environment for healing and growth. Our licensed therapists address a wide range of mental health concerns including anxiety, depression, trauma, and life transitions. We offer both online and in-person sessions to accommodate your schedule and preferences.",
    image: blackWomanSmiling,
    benefits: [
      "Personalized treatment approach",
      "Safe, confidential environment",
      "Flexible scheduling (online or in-person)",
      "Evidence-based therapeutic techniques",
      "Ongoing support and follow-up"
    ],
    whatToExpect: [
      "Initial consultation and assessment",
      "Collaborative treatment planning",
      "Regular therapy sessions",
      "Progress tracking and evaluation",
      "Referrals to specialists if needed"
    ],
    whoItsFor: [
      "Individuals dealing with anxiety or depression",
      "Those experiencing life transitions",
      "People seeking personal growth",
      "Individuals recovering from trauma",
      "Anyone needing mental health support"
    ],
    isFeatured: true
  },
  {
    id: "stress-management",
    icon: anxietyIcon,
    title: "Stress Management",
    shortDescription:
      "Learn effective techniques to manage stress and maintain mental wellness in your daily life.",
    fullDescription:
      "Our Stress Management program teaches you practical, evidence-based techniques to identify, manage, and reduce stress in your life. We help you understand the sources of your stress, recognize your body's stress responses, and develop personalized coping strategies. Through a combination of relaxation techniques, cognitive restructuring, and lifestyle modifications, you'll learn to maintain balance and resilience even in challenging situations.",
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
      "Professionals experiencing work-related stress",
      "Individuals with chronic stress",
      "Those seeking better work-life balance",
      "People with stress-related health issues",
      "Anyone wanting to improve stress management"
    ],
    isFeatured: false
  },
  {
    id: "grief-loss-counselling",
    icon: esteemIcon,
    title: "Grief & Loss Counselling",
    shortDescription:
      "Compassionate support to help you navigate the grieving process and find healing after loss.",
    fullDescription:
      "Our Grief & Loss Counselling provides compassionate, specialized support for individuals coping with the death of a loved one or other significant losses. We understand that grief is a unique and personal experience, and we offer a safe space to process your emotions, honor your loss, and gradually move toward healing. Our therapists use evidence-based approaches to help you navigate the stages of grief while maintaining your emotional well-being.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    benefits: [
      "Healthy processing of grief emotions",
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
      "Individuals who have lost a loved one",
      "Those experiencing anticipatory grief",
      "People dealing with multiple losses",
      "Individuals struggling with complicated grief",
      "Anyone needing support through bereavement"
    ],
    isFeatured: false
  }
];

// Get featured services (for home page)
export const getFeaturedServices = () => servicesData.filter(service => service.isFeatured);

// Get service by ID
export const getServiceById = (id: string) => servicesData.find(service => service.id === id);

// Get all services
export const getAllServices = () => servicesData;
