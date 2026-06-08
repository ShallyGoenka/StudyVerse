export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorId: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrolledCount: number;
  rating: number;
  thumbnail?: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'reading';
  completed?: boolean;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  enrolledDate: string;
  lastAccessed: string;
}

// You can change the role here to 'student', 'instructor', or 'admin' to see different dashboards
export const currentUser: User = {
  id: '1',
  name: 'Shally Goyanka',
  email: 'shally.goyanka@example.com',
  role: 'student', // Try: 'student' | 'instructor' | 'admin'
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',
    instructor: 'Dr. Michael Chen',
    instructorId: 'inst-1',
    category: 'Web Development',
    duration: '8 weeks',
    level: 'Beginner',
    enrolledCount: 1247,
    rating: 4.8,
    lessons: [
      { id: 'l1', title: 'HTML Basics', duration: '45 min', type: 'video', completed: true },
      { id: 'l2', title: 'CSS Fundamentals', duration: '60 min', type: 'video', completed: true },
      { id: 'l3', title: 'JavaScript Introduction', duration: '75 min', type: 'video', completed: false },
      { id: 'l4', title: 'Building Your First Website', duration: '90 min', type: 'video', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Advanced React & TypeScript',
    description: 'Master modern React development with TypeScript, hooks, and advanced patterns.',
    instructor: 'Emily Rodriguez',
    instructorId: 'inst-2',
    category: 'Web Development',
    duration: '12 weeks',
    level: 'Advanced',
    enrolledCount: 892,
    rating: 4.9,
    lessons: [
      { id: 'l1', title: 'TypeScript Fundamentals', duration: '60 min', type: 'video' },
      { id: 'l2', title: 'Advanced Hooks', duration: '75 min', type: 'video' },
      { id: 'l3', title: 'State Management', duration: '90 min', type: 'video' },
      { id: 'l4', title: 'Performance Optimization', duration: '80 min', type: 'video' },
    ],
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Explore data analysis, visualization, and machine learning using Python.',
    instructor: 'Dr. James Wilson',
    instructorId: 'inst-3',
    category: 'Data Science',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolledCount: 2156,
    rating: 4.7,
    lessons: [
      { id: 'l1', title: 'Python Basics for Data Science', duration: '50 min', type: 'video' },
      { id: 'l2', title: 'Pandas & NumPy', duration: '70 min', type: 'video' },
      { id: 'l3', title: 'Data Visualization', duration: '65 min', type: 'video' },
      { id: 'l4', title: 'Machine Learning Intro', duration: '85 min', type: 'video' },
    ],
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Learn the core principles of user interface and user experience design.',
    instructor: 'Amanda Lee',
    instructorId: 'inst-4',
    category: 'Design',
    duration: '6 weeks',
    level: 'Beginner',
    enrolledCount: 1543,
    rating: 4.6,
    lessons: [
      { id: 'l1', title: 'Design Thinking', duration: '40 min', type: 'video' },
      { id: 'l2', title: 'User Research', duration: '55 min', type: 'video' },
      { id: 'l3', title: 'Wireframing', duration: '60 min', type: 'video' },
      { id: 'l4', title: 'Prototyping', duration: '70 min', type: 'video' },
    ],
  },
  {
    id: '5',
    title: 'Digital Marketing Fundamentals',
    description: 'Master SEO, social media marketing, and content strategy for the digital age.',
    instructor: 'Robert Taylor',
    instructorId: 'inst-5',
    category: 'Marketing',
    duration: '8 weeks',
    level: 'Beginner',
    enrolledCount: 1876,
    rating: 4.5,
    lessons: [
      { id: 'l1', title: 'Marketing Strategy', duration: '45 min', type: 'video' },
      { id: 'l2', title: 'SEO Basics', duration: '60 min', type: 'video' },
      { id: 'l3', title: 'Social Media Marketing', duration: '55 min', type: 'video' },
      { id: 'l4', title: 'Content Creation', duration: '65 min', type: 'video' },
    ],
  },
  {
    id: '6',
    title: 'Cloud Computing with AWS',
    description: 'Get hands-on experience with Amazon Web Services and cloud infrastructure.',
    instructor: 'Dr. Michael Chen',
    instructorId: 'inst-1',
    category: 'Cloud Computing',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolledCount: 1234,
    rating: 4.8,
    lessons: [
      { id: 'l1', title: 'AWS Fundamentals', duration: '60 min', type: 'video' },
      { id: 'l2', title: 'EC2 & S3', duration: '75 min', type: 'video' },
      { id: 'l3', title: 'Database Services', duration: '70 min', type: 'video' },
      { id: 'l4', title: 'Security Best Practices', duration: '65 min', type: 'video' },
    ],
  },
];

export const enrollments: Enrollment[] = [
  {
    id: 'e1',
    userId: '1',
    courseId: '1',
    progress: 50,
    enrolledDate: '2026-04-15',
    lastAccessed: '2026-05-28',
  },
  {
    id: 'e2',
    userId: '1',
    courseId: '3',
    progress: 25,
    enrolledDate: '2026-05-01',
    lastAccessed: '2026-05-30',
  },
];

export const recommendations: Course[] = [courses[1], courses[5], courses[3]];
