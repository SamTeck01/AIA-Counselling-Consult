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
  "Health & Wellness",
  "Rights & Advocacy",
];

export const allAssessments: Assessment[] = [
  // 1. Stress Assessment
  {
    id: "stress-assessment",
    title: "Stress Level Check",
    description:
      "Evaluate your current stress levels and identify sources of stress in your life.",
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
        question:
          "Do you experience physical symptoms like headaches or muscle tension?",
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
    description:
      "Assess your anxiety symptoms and understand if you need professional support.",
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
        question:
          "Do you experience physical symptoms like rapid heartbeat or sweating?",
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
    description:
      "Evaluate the health of your romantic relationship and identify areas for improvement.",
    category: "Relationships",
    icon: "HeartHandshake",
    relatedService: "relationship-premarital",
    questions: [
      {
        id: "q1",
        question:
          "How satisfied are you with communication in your relationship?",
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
    description:
      "Identify signs of burnout and assess your risk level for work-related exhaustion.",
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
    description:
      "Assess your emotional awareness and ability to manage emotions effectively.",
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
        question:
          "How well do you manage your emotions in stressful situations?",
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
    description:
      "Evaluate your parenting stress levels and identify areas where you need support.",
    category: "Family & Parenting",
    icon: "Baby",
    relatedService: "parenting-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How often do you feel overwhelmed by parenting responsibilities?",
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
        question:
          "How satisfied are you with your relationship with your child?",
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
    description:
      "Assess symptoms of depression and understand if you need professional help.",
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
    description:
      "Evaluate how past traumatic experiences may be affecting your current well-being.",
    category: "Trauma & Recovery",
    icon: "HeartCrack",
    relatedService: "trauma-counselling",
    questions: [
      {
        id: "q1",
        question:
          "Do you have recurring, unwanted memories of a traumatic event?",
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
        question:
          "Do you avoid places, people, or activities that remind you of the trauma?",
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
    description:
      "Assess how well you're balancing your professional and personal life.",
    category: "Work & Career",
    icon: "Scale",
    relatedService: "work-life-integration",
    questions: [
      {
        id: "q1",
        question:
          "Do you have enough time for personal activities and hobbies?",
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
        question:
          "Are you satisfied with the time you spend with family/friends?",
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
    relatedService: "grief-bereavement-intervention",
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
    description:
      "Evaluate your satisfaction with your current career path and professional life.",
    category: "Work & Career",
    icon: "Briefcase",
    relatedService: "academic-career-wellness",
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

  // 13. Occupational Stress Assessment
  {
    id: "occupational-stress",
    title: "Workplace Stress Assessment",
    description:
      "Measure the impact of workplace factors on your mental well-being.",
    category: "Work & Career",
    icon: "Briefcase",
    relatedService: "occupational-counselling",
    questions: [
      {
        id: "q1",
        question: "How often do you feel pressured by tight deadlines at work?",
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
        question: "Do you feel supported by your colleagues and supervisors?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "How often do you experience conflict with team members?",
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
        question:
          "Do you feel your workload is manageable within regular hours?",
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
        question: "How clear are your roles and responsibilities?",
        options: [
          { text: "Very clear", score: 0 },
          { text: "Clear", score: 1 },
          { text: "Somewhat clear", score: 2 },
          { text: "Unclear", score: 3 },
          { text: "Very unclear", score: 4 },
        ],
      },
    ],
  },

  // 14. Addiction Recovery Check
  {
    id: "addiction-check",
    title: "Addiction Awareness Check",
    description:
      "Reflect on your relationship with substances or behaviors and identify signs of concern.",
    category: "Personal Growth",
    icon: "Shield",
    relatedService: "addiction-recovery-counselling",
    questions: [
      {
        id: "q1",
        question: "Do you ever feel the need to hide your habits from others?",
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
        question:
          "Have you ever felt you should cut down on your substance use or behavior?",
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
        question:
          "Do you feel irritable or restless when you try to stop or cut back?",
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
        question:
          "Has your habit interfered with your work, family, or social life?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "Do you use the substance or behavior to cope with stress or difficult emotions?",
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

  // 15. Infidelity Coping Check
  {
    id: "infidelity-coping",
    title: "Betrayal Trauma Assessment",
    description:
      "Understand the emotional impact of infidelity and your path toward healing.",
    category: "Relationships",
    icon: "HeartHandshake",
    relatedService: "infidelity-management-coping",
    questions: [
      {
        id: "q1",
        question:
          "How often do you experience intrusive thoughts about the betrayal?",
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
        question:
          "Do you find it difficult to trust others in general since the incident?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Completely", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How often do you feel overwhelmed by anger, sadness, or shock?",
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
        question: "Do you feel isolated or alone in your experience?",
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
        question:
          "How much has this impacted your daily functioning or health?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
    ],
  },

  // 16. Neurodiversity Awareness
  {
    id: "neurodiversity-check",
    title: "Neurodiversity Exploration",
    description:
      "Reflect on your cognitive styles and sensory experiences to better understand yourself.",
    category: "Personal Growth",
    icon: "Puzzle",
    relatedService: "neurodiversity-confirmation",
    questions: [
      {
        id: "q1",
        question:
          "How often do you feel overwhelmed by sensory input (lights, sounds, textures)?",
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
        question:
          "Do you find it difficult to navigate social nuances or 'unspoken rules'?",
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
        question:
          "How often do you experience intense focus or 'hyperfocus' on specific interests?",
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
        question:
          "Do you feel you have to 'mask' or hide your natural traits to fit in?",
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
        question:
          "How often do you experience 'burnout' from trying to maintain social expectations?",
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

  // 17. Adolescent Sexuality Check
  {
    id: "adolescent-sexuality-check",
    title: "Healthy Development Awareness",
    description:
      "Reflect on your understanding of healthy relationships and body autonomy.",
    category: "Family & Parenting",
    icon: "Users",
    relatedService: "adolescent-sexuality-education",
    questions: [
      {
        id: "q1",
        question: "How confident do you feel in setting personal boundaries?",
        options: [
          { text: "Very confident", score: 0 },
          { text: "Confident", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not very", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "Do you have a safe space to ask questions about your body and relationships?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "How much do you know about body autonomy and consent?",
        options: [
          { text: "A great deal", score: 0 },
          { text: "Quite a lot", score: 1 },
          { text: "Moderate amount", score: 2 },
          { text: "A little", score: 3 },
          { text: "Nothing", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "Do you feel pressured by peers to engage in activities you're uncomfortable with?",
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
        question:
          "How satisfied are you with your communication with parents/guardians on these topics?",
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

  // 18. Immunity Empowerment Check
  {
    id: "immunity-check",
    title: "Mental Resilience Check",
    description:
      "Measure your 'psychological immunity' and ability to bounce back from life's challenges.",
    category: "Mental Health",
    icon: "Zap",
    relatedService: "immunity-empowerment",
    questions: [
      {
        id: "q1",
        question:
          "How quickly do you usually recover from a setback or disappointment?",
        options: [
          { text: "Very quickly", score: 0 },
          { text: "Fairly quickly", score: 1 },
          { text: "Average speed", score: 2 },
          { text: "Slowly", score: 3 },
          { text: "Very slowly", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "Do you have healthy coping mechanisms when you're stressed?",
        options: [
          { text: "Yes, many", score: 0 },
          { text: "Yes, some", score: 1 },
          { text: "A few", score: 2 },
          { text: "Hardly any", score: 3 },
          { text: "None", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "How often do you feel optimistic about your future?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "Do you believe you have the inner strength to handle difficult times?",
        options: [
          { text: "Strongly believe", score: 0 },
          { text: "Believe", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Doubt it", score: 3 },
          { text: "Strongly doubt it", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "How well do you adapt to unexpected changes?",
        options: [
          { text: "Very well", score: 0 },
          { text: "Well", score: 1 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 3 },
          { text: "Very poorly", score: 4 },
        ],
      },
    ],
  },

  // 19. GBV Support Check
  {
    id: "gbv-check",
    title: "Safety and Support Screening",
    description:
      "Reflect on your safety and well-being in your personal environment.",
    category: "Rights & Advocacy",
    icon: "ShieldAlert",
    relatedService: "gender-based-violence",
    questions: [
      {
        id: "q1",
        question:
          "How safe do you feel in your current environment or relationship?",
        options: [
          { text: "Completely safe", score: 0 },
          { text: "Mostly safe", score: 1 },
          { text: "Somewhat safe", score: 2 },
          { text: "Unsafe", score: 3 },
          { text: "Very unsafe", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "Do you feel controlled or intimidated by someone close to you?",
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
        question:
          "Have you experienced unwanted pressure or force in your personal life?",
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
        question:
          "Do you have access to a safe person or resource if you're in trouble?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Probably", score: 1 },
          { text: "Not sure", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "No", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "Do you find yourself constantly walking on eggshells around someone?",
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

  // 20. Nutrition & Lifestyle Check
  {
    id: "nutrition-lifestyle-check",
    title: "Holistic Health habits Check",
    description:
      "Assess the connection between your lifestyle choices and mental well-being.",
    category: "Health & Wellness",
    icon: "Apple",
    relatedService: "nutrition-lifestyle",
    questions: [
      {
        id: "q1",
        question:
          "How often do you make food choices based on emotions (stress, boredom)?",
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
        question:
          "Do you feel satisfied with your energy levels throughout the day?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How often do you engage in physical activity that you enjoy?",
        options: [
          { text: "Daily", score: 0 },
          { text: "3-4 times a week", score: 1 },
          { text: "1-2 times a week", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "How much does your body image impact your daily mood?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Completely", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "How consistent are you with your sleep routine?",
        options: [
          { text: "Very consistent", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
    ],
  },

  // 21. Inter-Marriage Conflict Check
  {
    id: "intercultural-marriage-check",
    title: "Intercultural Relationship Check",
    description:
      "Navigate cultural differences and build understanding in your partnership.",
    category: "Relationships",
    icon: "Users2",
    relatedService: "inter-marriage-conflict",
    questions: [
      {
        id: "q1",
        question:
          "How well do you and your partner discuss cultural differences?",
        options: [
          { text: "Very well", score: 0 },
          { text: "Well", score: 1 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 3 },
          { text: "Very poorly", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "How much impact do extended family expectations have on your marriage?",
        options: [
          { text: "None", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderate", score: 2 },
          { text: "Significant", score: 3 },
          { text: "Overwhelming", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "Do you feel your partner respects your cultural background?",
        options: [
          { text: "Always", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "How often do disagreements arise from differing traditions or values?",
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
        question:
          "How united do you feel in your approach to raising children (if applicable)?",
        options: [
          { text: "Completely united", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Disconnected", score: 3 },
          { text: "Very disconnected", score: 4 },
        ],
      },
    ],
  },

  // 22. Holistic Wellness Check
  {
    id: "holistic-wellness-check",
    title: "Mind-Body-Spirit Wellness Check",
    description:
      "Evaluate the balance across all dimensions of your well-being.",
    category: "Health & Wellness",
    icon: "Sparkles",
    relatedService: "mental-health-holistic-wellness",
    questions: [
      {
        id: "q1",
        question: "How connected do you feel to your sense of purpose?",
        options: [
          { text: "Very connected", score: 0 },
          { text: "Connected", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Disconnected", score: 3 },
          { text: "Very disconnected", score: 4 },
        ],
      },
      {
        id: "q2",
        question: "How often do you practice mindfulness or quiet reflection?",
        options: [
          { text: "Daily", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "Do you feel you have a healthy balance between activity and rest?",
        options: [
          { text: "Always", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "How satisfied are you with your emotional stability lately?",
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
        question: "Do you feel your daily life aligns with your deeper values?",
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

  // 23. Life Transition Check
  {
    id: "life-transition-check",
    title: "Navigating Change Assessment",
    description:
      "Assess your readiness and coping capacity for major life changes.",
    category: "Personal Growth",
    icon: "Compass",
    relatedService: "life-transition-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How much uncertainty are you currently feeling about your future?",
        options: [
          { text: "None at all", score: 0 },
          { text: "A little", score: 1 },
          { text: "A moderate amount", score: 2 },
          { text: "Quite a lot", score: 3 },
          { text: "An overwhelming amount", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "Do you feel you have the resources (emotional, financial, social) to handle this change?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How often do you feel stuck or unable to make a decision about your next steps?",
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
        question:
          "How much does the current change interfere with your daily peace of mind?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "Are you able to see positive possibilities in this new chapter?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
    ],
  },

  // 24. Fertility & Reproductive Health Check
  {
    id: "fertility-reproductive-check",
    title: "Reproductive Journey Support Check",
    description:
      "Reflect on the emotional impact of your fertility or reproductive health journey.",
    category: "Health & Wellness",
    icon: "Flower2",
    relatedService: "fertility-reproductive-health",
    questions: [
      {
        id: "q1",
        question:
          "How much does your reproductive health journey impact your daily emotional state?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Overwhelmingly", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "Do you feel supported by your partner or close ones in this process?",
        options: [
          { text: "Completely supported", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How often do you feel isolated or misunderstood by others who haven't had this experience?",
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
        question:
          "How satisfied are you with your ability to make informed decisions about your options?",
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
        question:
          "Does this journey cause significant strain on your other relationships or work?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
    ],
  },

  // 25. Retirement Readiness Check
  {
    id: "retirement-readiness-check",
    title: "Retirement Transition Assessment",
    description:
      "Evaluate your psychological and social readiness for the retirement phase.",
    category: "Work & Career",
    icon: "Coffee",
    relatedService: "retirement-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How much of your identity is currently tied to your professional role?",
        options: [
          { text: "Not much", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderate amount", score: 2 },
          { text: "A lot", score: 3 },
          { text: "Entirely", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "Do you have a clear plan for how you will spend your time in retirement?",
        options: [
          { text: "Yes, very clear", score: 0 },
          { text: "Mostly clear", score: 1 },
          { text: "Vague ideas", score: 2 },
          { text: "Hardly any", score: 3 },
          { text: "No plan at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question: "How often do you feel anxious about leaving your career?",
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
        question: "Do you have a strong social network outside of work?",
        options: [
          { text: "Yes, very strong", score: 0 },
          { text: "Yes, some", score: 1 },
          { text: "A few friends", score: 2 },
          { text: "Hardly any", score: 3 },
          { text: "None at all", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "How excited do you feel about this next chapter of your life?",
        options: [
          { text: "Very excited", score: 0 },
          { text: "Excited", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "A bit apprehensive", score: 3 },
          { text: "Very anxious", score: 4 },
        ],
      },
    ],
  },

  // 26. Human Rights Empowerment Check
  {
    id: "human-rights-check",
    title: "Advocacy and Rights Awareness",
    description:
      "Reflect on your experiences with justice, discrimination, and your path to empowerment.",
    category: "Rights & Advocacy",
    icon: "Globe",
    relatedService: "human-rights-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How often do you feel your rights are being respected in your daily life?",
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
        question:
          "Do you feel confident in your ability to advocate for yourself?",
        options: [
          { text: "Very confident", score: 0 },
          { text: "Confident", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not very", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How much has an experience of injustice impacted your mental health?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
      {
        id: "q4",
        question: "Do you feel supported by your community or legal systems?",
        options: [
          { text: "Yes, fully", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "How often do you feel empowered to make a change in your situation?",
        options: [
          { text: "Always", score: 0 },
          { text: "Often", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Never", score: 4 },
        ],
      },
    ],
  },

  // 27. Women Rights Support Check
  {
    id: "women-rights-check",
    title: "Women's Empowerment Assessment",
    description:
      "Assess your experiences with gender equality and self-agency.",
    category: "Rights & Advocacy",
    icon: "ShieldCheck",
    relatedService: "women-human-rights-counselling",
    questions: [
      {
        id: "q1",
        question:
          "Do you feel you have equal opportunities in your personal and professional life?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q2",
        question:
          "How much does gender-based discrimination impact your daily well-being?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "Do you feel confident in asserting your reproductive and personal rights?",
        options: [
          { text: "Very confident", score: 0 },
          { text: "Confident", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not very", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "How satisfied are you with your level of self-agency and independence?",
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
        question: "Do you have access to a supportive network of women?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "None at all", score: 4 },
        ],
      },
    ],
  },

  // 28. Special Needs Family Support Check
  {
    id: "special-needs-support-check",
    title: "Special Needs Family Resilience Check",
    description:
      "Evaluate the support and coping mechanisms for families living with special needs.",
    category: "Family & Parenting",
    icon: "Accessibility",
    relatedService: "special-needs-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How often do you feel overwhelmed by the caregiving responsibilities?",
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
        question:
          "Do you feel you have adequate access to specialized resources and information?",
        options: [
          { text: "Yes, fully", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How much does your situation impact your own personal health and well-being?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "Do you feel your family is well-integrated and included in your community?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Rarely", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "How confident do you feel in your ability to advocate for your family member's needs?",
        options: [
          { text: "Very confident", score: 0 },
          { text: "Confident", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not very", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
    ],
  },

  // 29. Behaviour Modification Check
  {
    id: "behaviour-modification-check",
    title: "Habit & Pattern Awareness",
    description:
      "Identify unwanted patterns and your readiness for positive behavioral change.",
    category: "Personal Growth",
    icon: "Activity",
    relatedService: "behaviour-modification-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How often do you find yourself repeating habits you want to break?",
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
        question:
          "Do you feel you have the self-discipline to make lasting changes?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How much do these habits interfere with your productivity or focus?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Slightly", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Severely", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "How motivated do you feel to adopt healthier routines right now?",
        options: [
          { text: "Very motivated", score: 0 },
          { text: "Motivated", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Not very", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "Have you tried to change these behaviors before without success?",
        options: [
          { text: "Never", score: 0 },
          { text: "Once or twice", score: 1 },
          { text: "A few times", score: 2 },
          { text: "Many times", score: 3 },
          { text: "Constantly", score: 4 },
        ],
      },
    ],
  },

  // 30. Single Parenting Stress Check
  {
    id: "single-parenting-check",
    title: "Solo-Parenting Resilience Check",
    description:
      "Assess the unique challenges and support needs of single-parent households.",
    category: "Family & Parenting",
    icon: "HeartPulse",
    relatedService: "single-parenting-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How often do you feel completely exhausted by solo-parenting?",
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
        question: "Do you feel you have a reliable support system to lean on?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "A little", score: 2 },
          { text: "Hardly any", score: 3 },
          { text: "None at all", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How well are you balancing work, parenting, and your own self-care?",
        options: [
          { text: "Very well", score: 0 },
          { text: "Well", score: 1 },
          { text: "Okay", score: 2 },
          { text: "Poorly", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "How confident do you feel in navigating co-parenting or solo-decision making?",
        options: [
          { text: "Very confident", score: 0 },
          { text: "Confident", score: 1 },
          { text: "Somewhat", score: 2 },
          { text: "Not very", score: 3 },
          { text: "Not at all", score: 4 },
        ],
      },
      {
        id: "q5",
        question:
          "How satisfied are you with the quality time you spend with your children?",
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

  // 31. Old Age Well-being Check
  {
    id: "old-age-check",
    title: "Later Life Well-being Assessment",
    description:
      "Compassionate reflection on emotional health and life satisfaction in later years.",
    category: "Mental Health",
    icon: "Heart",
    relatedService: "old-age-counselling",
    questions: [
      {
        id: "q1",
        question:
          "How often do you feel a sense of purpose and meaning in your daily life?",
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
        question:
          "How satisfied are you with your current level of social connection?",
        options: [
          { text: "Very satisfied", score: 0 },
          { text: "Satisfied", score: 1 },
          { text: "Neutral", score: 2 },
          { text: "Dissatisfied", score: 3 },
          { text: "Very dissatisfied", score: 4 },
        ],
      },
      {
        id: "q3",
        question:
          "How much does concern about health or independence impact your mood?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "A little", score: 1 },
          { text: "Moderately", score: 2 },
          { text: "Significantly", score: 3 },
          { text: "Overwhelmingly", score: 4 },
        ],
      },
      {
        id: "q4",
        question:
          "Do you feel you have a safe space to process loss or life transitions?",
        options: [
          { text: "Yes, definitely", score: 0 },
          { text: "Mostly", score: 1 },
          { text: "A little", score: 2 },
          { text: "Hardly", score: 3 },
          { text: "No", score: 4 },
        ],
      },
      {
        id: "q5",
        question: "How would you rate your overall peace of mind lately?",
        options: [
          { text: "Excellent", score: 0 },
          { text: "Good", score: 1 },
          { text: "Fair", score: 2 },
          { text: "Poor", score: 3 },
          { text: "Very poor", score: 4 },
        ],
      },
    ],
  },
];

// ... (rest of the code remains the same)
// Get assessment by ID
export const getAssessmentById = (id: string) =>
  allAssessments.find((assessment) => assessment.id === id);

// Get assessments by category
export const getAssessmentsByCategory = (category: string) =>
  allAssessments.filter((assessment) => assessment.category === category);

// Get all assessments
export const getAllAssessments = () => allAssessments;

// Calculate result level based on score
export const calculateResultLevel = (
  score: number,
  maxScore: number
): {
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
      message:
        "We strongly recommend seeking professional counselling support.",
    };
  }
};
