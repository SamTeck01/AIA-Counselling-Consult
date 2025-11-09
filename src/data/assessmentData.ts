export interface Assessment {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  questions: Question[];
  relatedService: string; // Service ID from expandedServicesData
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  score: number;
}

export const assessmentCategories = [
  "Mental Health",
  "Relationships",
  "Work & Career",
  "Personal Growth",
  "Family & Parenting",
  "Trauma & Recovery",
];

export const allAssessments: Assessment[] = [
  // 1. Stress Assessment
  {
    id: "stress-assessment",
    title: "Stress Level Check",
    description: "Evaluate your current stress levels and identify sources of stress in your life.",
    category: "Mental Health",
    icon: "Wind",
    relatedService: "stress-management-counselling",
    questions: [
      {
        id: "q1",
        question: "How often do you feel overwhelmed by your responsibilities?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "How well do you sleep at night?",
        options: [
          { text: "Very well", score: 0 },
          { text: "Well", score: 1 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 3 },
          { text: "Very poorly", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "Do you experience physical symptoms like headaches or muscle tension?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "How often do you feel irritable or short-tempered?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "Do you find it difficult to concentrate or make decisions?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
    ],
  },

  // 2. Anxiety Assessment
  {
    id: "anxiety-assessment",
    title: "Anxiety Level Check",
    description: "Assess your anxiety symptoms and understand if you need professional support.",
    category: "Mental Health",
    icon: "Sparkles",
    relatedService: "anxiety-phobia-management",
    questions: [
      {
        id: "q1",
        question: "How often do you feel nervous, anxious, or on edge?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q2",
        question: "How often do you worry excessively about different things?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q3",
        question: "Do you experience physical symptoms like rapid heartbeat or sweating?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q4",
        question: "How often do you avoid situations that make you anxious?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q5",
        question: "Does anxiety interfere with your daily activities?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Severely", score: 3 },
        ],
      },
    ],
  },

  // 3. Relationship Health
  {
    id: "relationship-health",
    title: "Relationship Health Check",
    description: "Evaluate the health of your romantic relationship and identify areas for improvement.",
    category: "Relationships",
    icon: "HeartHandshake",
    relatedService: "relationship-premarital",
    questions: [
      {
        id: "q1",
        question: "How satisfied are you with communication in your relationship?",
        options: [
          { text: "Very satisfied", score: 0 },
          { text: "Satisfied", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Dissatisfied", score: 3 },
          { text: "Very dissatisfied", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "How often do you and your partner have conflicts?",
        options: [
          { text: "Rarely", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Frequently", score: 3 },
          { text: "Constantly", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "Do you feel emotionally connected to your partner?",
        options: [
          { text: "Very much", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not really", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "How well do you resolve disagreements together?",
        options: [
          { text: "Very well", score: 0 },
          { text: "Well", score: 1 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 3 },
          { text: "Very poorly", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "Do you trust your partner completely?",
        options: [
          { text: "Completely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not much", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
    ],
  },

  // 4. Burnout Assessment
  {
    id: "burnout-assessment",
    title: "Burnout Risk Check",
    description: "Identify signs of burnout and assess your risk level for work-related exhaustion.",
    category: "Work & Career",
    icon: "Flame",
    relatedService: "burnout-prevention-management",
    questions: [
      {
        id: "q1",
        question: "How often do you feel emotionally drained from your work?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "Do you feel cynical or negative about your job?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "How difficult is it to get started with work tasks?",
        options: [
          { text: "Very easy", score: 0 },
          { text: "Easy", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Difficult", score: 3 },
          { text: "Very difficult", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "Do you feel a sense of accomplishment from your work?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "How often do you think about quitting your job?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
    ],
  },

  // 5. Emotional Intelligence
  {
    id: "emotional-intelligence",
    title: "Emotional Intelligence Check",
    description: "Assess your emotional awareness and ability to manage emotions effectively.",
    category: "Personal Growth",
    icon: "Brain",
    relatedService: "emotional-intelligence-counselling",
    questions: [
      {
        id: "q1",
        question: "How well do you recognize your own emotions?",
        options: [
          { text: "Very well", score: 4 },
          { text: "Well", score: 3 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 1 },
          { text: "Very poorly", score: 0 },
        ],
      },
      {
        id: "q2",
        question: "Can you understand how others are feeling?",
        options: [
          { text: "Always", score: 4 },
          { text: "Often", score: 3 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 1 },
          { text: "Never", score: 0 },
        ],
      },
      {
        id: "q3",
        question: "How well do you manage your emotions in stressful situations?",
        options: [
          { text: "Very well", score: 4 },
          { text: "Well", score: 3 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 1 },
          { text: "Very poorly", score: 0 },
        ],
      },
      {
        id: "q4",
        question: "Do you consider others' feelings when making decisions?",
        options: [
          { text: "Always", score: 4 },
          { text: "Often", score: 3 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 1 },
          { text: "Never", score: 0 },
        ],
      },
      {
        id: "q5",
        question: "How effectively do you communicate your feelings to others?",
        options: [
          { text: "Very effectively", score: 4 },
          { text: "Effectively", score: 3 },
          { text: "Moderately", score: 2 },
          { text: "Poorly", score: 1 },
          { text: "Very poorly", score: 0 },
        ],
      },
    ],
  },

  // 6. Parenting Stress
  {
    id: "parenting-stress",
    title: "Parenting Stress Check",
    description: "Evaluate your parenting stress levels and identify areas where you need support.",
    category: "Family & Parenting",
    icon: "Baby",
    relatedService: "parenting-counselling",
    questions: [
      {
        id: "q1",
        question: "How often do you feel overwhelmed by parenting responsibilities?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "Do you feel confident in your parenting decisions?",
        options: [
          { text: "Very confident", score: 0 },
          { text: "Confident", score: 1 },
          { text: "Somewhat confident", score: 2 },
          { text: "Not confident", score: 3 },
          { text: "Not at all confident", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "How often do you lose your temper with your child?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Very often", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "Do you have adequate support in your parenting journey?",
        options: [
          { text: "Yes, plenty", score: 0 },
          { text: "Yes, some", score: 1 },
          { text: "A little", score: 2 },
          { text: "Very little", score: 3 },
          { text: "None at all", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "How satisfied are you with your relationship with your child?",
        options: [
          { text: "Very satisfied", score: 0 },
          { text: "Satisfied", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Dissatisfied", score: 3 },
          { text: "Very dissatisfied", score: 4 },
        ],
      },
    ],
  },

  // 7. Depression Assessment
  {
    id: "depression-assessment",
    title: "Depression Screening",
    description: "Assess symptoms of depression and understand if you need professional help.",
    category: "Mental Health",
    icon: "Heart",
    relatedService: "trauma-counselling",
    questions: [
      {
        id: "q1",
        question: "How often do you feel sad or down?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q2",
        question: "Have you lost interest in activities you used to enjoy?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q3",
        question: "Do you have trouble sleeping or sleep too much?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q4",
        question: "Do you feel tired or have little energy?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
      {
        id: "q5",
        question: "Do you have thoughts that you'd be better off dead?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 },
        ],
      },
    ],
  },

  // 8. Trauma Assessment
  {
    id: "trauma-assessment",
    title: "Trauma Impact Check",
    description: "Evaluate how past traumatic experiences may be affecting your current well-being.",
    category: "Trauma & Recovery",
    icon: "HeartCrack",
    relatedService: "trauma-counselling",
    questions: [
      {
        id: "q1",
        question: "Do you have recurring, unwanted memories of a traumatic event?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "Do you avoid places, people, or activities that remind you of the trauma?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "Do you feel constantly on guard or easily startled?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "Do you have difficulty experiencing positive emotions?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "Do you have nightmares about the traumatic event?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
    ],
  },

  // 9. Work-Life Balance
  {
    id: "work-life-balance",
    title: "Work-Life Balance Check",
    description: "Assess how well you're balancing your professional and personal life.",
    category: "Work & Career",
    icon: "Scale",
    relatedService: "work-life-integration",
    questions: [
      {
        id: "q1",
        question: "Do you have enough time for personal activities and hobbies?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "How often do you think about work during personal time?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "Do you feel guilty when taking time off work?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "Are you satisfied with the time you spend with family/friends?",
        options: [
          { text: "Very satisfied", score: 0 },
          { text: "Satisfied", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Dissatisfied", score: 3 },
          { text: "Very dissatisfied", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "Do you feel your work negatively impacts your health?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
    ],
  },

  // 10. Self-Esteem Assessment
  {
    id: "self-esteem-assessment",
    title: "Self-Esteem Check",
    description: "Evaluate your self-worth and confidence levels.",
    category: "Personal Growth",
    icon: "Lightbulb",
    relatedService: "mindset-counselling",
    questions: [
      {
        id: "q1",
        question: "I feel good about myself",
        options: [
          { text: "Strongly agree", score: 4 },
          { text: "Agree", score: 3 },
          { text: "Neutral", score: 2 },
          { text: "Disagree", score: 1 },
          { text: "Strongly disagree", score: 0 },
        ],
      },
      {
        id: "q2",
        question: "I am confident in my abilities",
        options: [
          { text: "Strongly agree", score: 4 },
          { text: "Agree", score: 3 },
          { text: "Neutral", score: 2 },
          { text: "Disagree", score: 1 },
          { text: "Strongly disagree", score: 0 },
        ],
      },
      {
        id: "q3",
        question: "I often compare myself negatively to others",
        options: [
          { text: "Never", score: 4 },
          { text: "Rarely", score: 3 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 1 },
          { text: "Always", score: 0 },
        ],
      },
      {
        id: "q4",
        question: "I accept compliments easily",
        options: [
          { text: "Always", score: 4 },
          { text: "Often", score: 3 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 1 },
          { text: "Never", score: 0 },
        ],
      },
      {
        id: "q5",
        question: "I believe I deserve happiness and success",
        options: [
          { text: "Strongly agree", score: 4 },
          { text: "Agree", score: 3 },
          { text: "Neutral", score: 2 },
          { text: "Disagree", score: 1 },
          { text: "Strongly disagree", score: 0 },
        ],
      },
    ],
  },

  // 11. Grief Assessment
  {
    id: "grief-assessment",
    title: "Grief & Loss Check",
    description: "Assess how you're coping with loss and grief in your life.",
    category: "Trauma & Recovery",
    icon: "Heart",
    relatedService: "grief-bereavement-counselling",
    questions: [
      {
        id: "q1",
        question: "How often do you think about your loss?",
        options: [
          { text: "Rarely", score: 0 },
          { text: "Sometimes", score: 1 },
          { text: "Often", score: 2 },
          { text: "Constantly", score: 3 },
        ],
      },
      {
        id: "q2",
        question: "Do you feel unable to accept the loss?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Very much", score: 3 },
        ],
      },
      {
        id: "q3",
        question: "Has grief interfered with your daily activities?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Severely", score: 3 },
        ],
      },
      {
        id: "q4",
        question: "Do you feel emotionally numb or detached?",
        options: [
          { text: "Never", score: 0 },
          { text: "Sometimes", score: 1 },
          { text: "Often", score: 2 },
          { text: "Always", score: 3 },
        ],
      },
      {
        id: "q5",
        question: "Do you avoid reminders of your loss?",
        options: [
          { text: "Never", score: 0 },
          { text: "Sometimes", score: 1 },
          { text: "Often", score: 2 },
          { text: "Always", score: 3 },
        ],
      },
    ],
  },

  // 12. Career Satisfaction
  {
    id: "career-satisfaction",
    title: "Career Satisfaction Check",
    description: "Evaluate your satisfaction with your current career path and professional life.",
    category: "Work & Career",
    icon: "Briefcase",
    relatedService: "academic-career-counselling",
    questions: [
      {
        id: "q1",
        question: "How satisfied are you with your current job?",
        options: [
          { text: "Very satisfied", score: 0 },
          { text: "Satisfied", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Dissatisfied", score: 3 },
          { text: "Very dissatisfied", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "Do you feel your skills are being utilized?",
        options: [
          { text: "Completely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Barely", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "Do you see opportunities for growth in your career?",
        options: [
          { text: "Many opportunities", score: 0 },
          { text: "Some opportunities", score: 1 },
          { text: "Few opportunities", score: 2 },
          { text: "Very few", score: 3 },
          { text: "None", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "How often do you dread going to work?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Often", score: 3 },
          { text: "Always", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "Does your work align with your values and goals?",
        options: [
          { text: "Completely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Barely", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
    ],
  },
];

// Get assessment by ID
export const getAssessmentById = (id: string) => 
  allAssessments.find(assessment => assessment.id === id);

// Get assessments by category
export const getAssessmentsByCategory = (category: string) =>
  allAssessments.filter(assessment => assessment.category === category);

// Get all assessments
export const getAllAssessments = () => allAssessments;

// Calculate result level based on score
export const calculateResultLevel = (score: number, maxScore: number): {
  level: string;
  color: string;
  message: string;
} => {
  const percentage = (score / maxScore) * 100;

  if (percentage <= 25) {
    return {
      level: "Low",
      color: "text-green-600",
      message: "You're doing well! Keep maintaining healthy habits.",
    };
  } else if (percentage <= 50) {
    return {
      level: "Moderate",
      color: "text-yellow-600",
      message: "Some areas need attention. Consider seeking support.",
    };
  } else if (percentage <= 75) {
    return {
      level: "High",
      color: "text-orange-600",
      message: "Professional support is recommended to help you cope better.",
    };
  } else {
    return {
      level: "Very High",
      color: "text-red-600",
      message: "We strongly recommend seeking professional counselling support.",
    };
  }
};
