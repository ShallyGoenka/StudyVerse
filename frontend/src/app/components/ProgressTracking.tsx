import { Link } from 'react-router';
import { Award, TrendingUp, Target, BookOpen } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';
import { courses, enrollments } from '../data/mockData';

export function ProgressTracking() {
  const enrolledCourses = enrollments.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    return { ...course, ...enrollment };
  });

  const totalProgress = enrollments.reduce((sum, e) => sum + e.progress, 0) / enrollments.length;
  const completedCourses = enrollments.filter(e => e.progress === 100).length;
  const totalHours = 24;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2">My Progress</h1>
        <p className="text-muted-foreground">Track your learning achievements</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-1">Courses in Progress</p>
          <p className="text-3xl">{enrollments.length}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-1">Completed</p>
          <p className="text-3xl">{completedCourses}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-1">Learning Hours</p>
          <p className="text-3xl">{totalHours}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-1">Average Progress</p>
          <p className="text-3xl">{Math.round(totalProgress)}%</p>
        </div>
      </div>

      {/* Detailed Progress */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-6">Course Progress Details</h2>
        <div className="space-y-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground">
                    Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg mb-2">
                    {course.progress}% Complete
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <Progress.Root className="relative overflow-hidden bg-secondary rounded-full w-full h-3 mb-4">
                <Progress.Indicator
                  className="bg-primary w-full h-full transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${100 - (course.progress || 0)}%)` }}
                />
              </Progress.Root>

              <div className="flex items-center gap-4">
                <Link
                  to={`/courses/${course.id}/learn`}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Continue Learning
                </Link>
                <Link
                  to={`/courses/${course.id}`}
                  className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <h2 className="mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-100/50 to-cyan-200/50 rounded-lg border border-cyan-500/20">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="mb-2">First Course</h4>
            <p className="text-sm text-muted-foreground">Completed your first course</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-100/50 to-blue-200/50 rounded-lg border border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="mb-2">7 Day Streak</h4>
            <p className="text-sm text-muted-foreground">Learned for 7 days in a row</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-100/50 to-purple-200/50 rounded-lg border border-purple-500/20">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="mb-2">Fast Learner</h4>
            <p className="text-sm text-muted-foreground">Completed 3 lessons in one day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
