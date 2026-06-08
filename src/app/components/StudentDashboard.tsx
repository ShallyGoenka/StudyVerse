import { Link } from 'react-router';
import { Clock, BookOpen, Award, TrendingUp } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';
import { courses, enrollments, recommendations } from '../data/mockData';

export function StudentDashboard() {
  const enrolledCourses = enrollments.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    return { ...course, ...enrollment };
  });

  const stats = [
    { label: 'Courses Enrolled', value: enrolledCourses.length, icon: BookOpen, color: 'bg-cyan-500' },
    { label: 'Hours Learned', value: '24', icon: Clock, color: 'bg-blue-500' },
    { label: 'Certificates', value: '2', icon: Award, color: 'bg-indigo-500' },
    { label: 'Current Streak', value: '7 days', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2">My Learning Dashboard</h1>
        <p className="text-muted-foreground">Continue your learning journey</p>
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

      {/* Continue Learning */}
      <section className="mb-8">
        <h2 className="mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm">{course.instructor}</p>
                </div>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {course.progress}%
                </span>
              </div>

              <div className="mb-4">
                <Progress.Root className="relative overflow-hidden bg-secondary rounded-full w-full h-2">
                  <Progress.Indicator
                    className="bg-primary w-full h-full transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${100 - (course.progress || 0)}%)` }}
                  />
                </Progress.Root>
              </div>

              <Link
                to={`/courses/${course.id}/learn`}
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Continue Course
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Courses */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2>Recommended for You</h2>
          <Link to="/courses" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((course) => (
            <div key={course.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-purple-100 to-cyan-200 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-cyan-600" />
              </div>
              <div className="p-6">
                <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-sm">
                  {course.category}
                </span>
                <h3 className="mt-3 mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{course.instructor}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <Link
                  to={`/courses/${course.id}`}
                  className="block w-full text-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
