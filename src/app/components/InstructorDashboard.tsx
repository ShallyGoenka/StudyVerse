import { Link } from 'react-router';
import { Plus, Users, BookOpen, TrendingUp, Eye } from 'lucide-react';
import { courses } from '../data/mockData';

export function InstructorDashboard() {
  const instructorCourses = courses.slice(0, 3);

  const stats = [
    { label: 'Total Students', value: '4,523', icon: Users, color: 'bg-cyan-500' },
    { label: 'Active Courses', value: instructorCourses.length, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Total Revenue', value: '$12,450', icon: TrendingUp, color: 'bg-indigo-500' },
    { label: 'Course Views', value: '28,341', icon: Eye, color: 'bg-purple-500' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="mb-2">Instructor Dashboard</h1>
          <p className="text-muted-foreground">Manage your courses and track performance</p>
        </div>
        <Link
          to="/instructor/create"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create New Course
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-2xl">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* My Courses */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-6">My Courses</h2>
        <div className="space-y-4">
          {instructorCourses.map((course) => (
            <div key={course.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-200 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{course.category}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.enrolledCount} students
                    </span>
                    <span className="text-muted-foreground">{course.lessons.length} lessons</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/instructor/upload/${course.id}`}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Manage Content
                </Link>
                <Link
                  to={`/courses/${course.id}`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <h2 className="mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 pb-4 border-b border-border">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <div className="flex-1">
              <p>New student enrolled in <span className="font-medium">Introduction to Web Development</span></p>
              <p className="text-sm text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pb-4 border-b border-border">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p>New review received on <span className="font-medium">Advanced React & TypeScript</span></p>
              <p className="text-sm text-muted-foreground">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p>Course milestone: 1,000 students in <span className="font-medium">Cloud Computing with AWS</span></p>
              <p className="text-sm text-muted-foreground">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
