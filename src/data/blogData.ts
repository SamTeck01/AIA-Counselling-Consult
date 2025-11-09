export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Resilience: Coping Strategies for Life's Challenges",
    slug: "building-resilience-coping-strategies",
    excerpt: "Learn practical strategies to develop emotional resilience and navigate life's challenges with confidence and strength.",
    content: `Resilience is the ability to bounce back from adversity. This comprehensive guide explores seven evidence-based strategies to build mental and emotional strength, including developing support networks, practicing self-compassion, maintaining perspective, and focusing on what you can control. Learn when to seek professional help and discover actionable steps to strengthen your resilience today.`,
    author: "Dr. Adebayo Ibrahim",
    authorRole: "Clinical Psychologist",
    publishDate: "2025-01-15",
    readTime: "8 min read",
    category: "Mental Wellness",
    tags: ["Resilience", "Coping Strategies", "Mental Health", "Self-Care"],
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=800&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Understanding Anxiety: Signs, Symptoms, and When to Seek Help",
    slug: "understanding-anxiety-signs-symptoms",
    excerpt: "Anxiety affects millions of people. Learn to recognize the signs and discover when professional help can make a difference.",
    content: `Anxiety is one of the most common mental health challenges worldwide. This article helps you understand different types of anxiety disorders, recognize physical and emotional symptoms, and learn effective management strategies. Discover when it's time to seek professional help and explore treatment options including CBT, exposure therapy, and mindfulness-based approaches.`,
    author: "Mrs. Chioma Okafor",
    authorRole: "Licensed Therapist",
    publishDate: "2025-01-10",
    readTime: "10 min read",
    category: "Mental Health",
    tags: ["Anxiety", "Mental Health", "Therapy", "Coping Skills"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "The Importance of Self-Care: Practical Tips for Busy Professionals",
    slug: "importance-of-self-care-busy-professionals",
    excerpt: "Discover why self-care isn't selfish and learn practical strategies to prioritize your wellbeing even with a demanding schedule.",
    content: `Self-care is essential for maintaining physical, emotional, and mental health. This guide debunks common myths, explores the four dimensions of self-care, and provides actionable strategies for busy professionals. Learn to create a personalized self-care plan, overcome common obstacles, and recognize when you need additional support beyond self-care practices.`,
    author: "Dr. Adebayo Ibrahim",
    authorRole: "Clinical Psychologist",
    publishDate: "2025-01-05",
    readTime: "12 min read",
    category: "Self-Care",
    tags: ["Self-Care", "Work-Life Balance", "Stress Management", "Wellness"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop",
    featured: true,
  },
  {
    id: "4",
    title: "Navigating Relationship Challenges: Communication Tips for Couples",
    slug: "navigating-relationship-challenges-communication",
    excerpt: "Strong relationships require effective communication. Learn practical techniques to improve connection and resolve conflicts with your partner.",
    content: `Effective communication is the foundation of healthy relationships. This comprehensive guide covers essential skills like active listening, using "I" statements, and conflict resolution strategies. Learn about the "Four Horsemen" that predict relationship failure, discover repair techniques, and understand when couples counselling can help strengthen your partnership.`,
    author: "Mrs. Chioma Okafor",
    authorRole: "Licensed Therapist & Relationship Counsellor",
    publishDate: "2024-12-28",
    readTime: "15 min read",
    category: "Relationships",
    tags: ["Relationships", "Communication", "Couples Therapy", "Conflict Resolution"],
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=800&fit=crop",
    featured: false,
  },
  {
    id: "5",
    title: "Managing Stress in the Workplace: A Guide for Nigerian Professionals",
    slug: "managing-workplace-stress-nigerian-professionals",
    excerpt: "Work-related stress is common in Nigeria's fast-paced professional environment. Learn effective strategies to maintain your wellbeing at work.",
    content: `Nigerian professionals face unique workplace stressors including long commutes, economic pressures, and cultural expectations. This guide offers practical strategies tailored to the Nigerian context: managing traffic stress, setting boundaries, optimizing your workspace, and navigating office politics. Learn when work stress requires professional intervention and how to create sustainable change.`,
    author: "Mr. Adeyemi Oluwaseun",
    authorRole: "Organizational Psychologist",
    publishDate: "2024-12-20",
    readTime: "11 min read",
    category: "Career & Work",
    tags: ["Workplace Stress", "Career", "Work-Life Balance", "Nigerian Professionals"],
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&h=800&fit=crop",
    featured: false,
  },
  {
    id: "6",
    title: "Parenting Through Difficult Times: Supporting Your Child's Mental Health",
    slug: "parenting-supporting-child-mental-health",
    excerpt: "Learn how to recognize signs of emotional distress in children and discover strategies to support their mental wellbeing.",
    content: `Children's mental health is as important as their physical health. This guide helps parents recognize warning signs of emotional distress, create safe spaces for communication, and teach emotional regulation skills. Learn age-appropriate strategies, understand when to seek professional help, and discover how family counselling can strengthen your parent-child relationship.`,
    author: "Mrs. Chioma Okafor",
    authorRole: "Licensed Therapist & Family Counsellor",
    publishDate: "2024-12-15",
    readTime: "9 min read",
    category: "Parenting",
    tags: ["Parenting", "Child Psychology", "Family", "Mental Health"],
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&h=800&fit=crop",
    featured: false,
  },
];

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured).slice(0, 3);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};
