import { useParams, Link } from 'react-router';
import { Star, Users, Clock, Award, BookOpen, PlayCircle } from 'lucide-react';
import { courses } from '../data/mockData';

export function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="p-8">
        <h1>Course not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-100 to-cyan-200 border border-border rounded-lg p-8 mb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-card text-accent-foreground rounded-full text-sm border border-border">
              {course.category}
            </span>
            <span className="px-3 py-1 bg-card text-secondary-foreground rounded-full text-sm border border-border">
              {course.level}
            </span>
          </div>

          <h1 className="mb-4">{course.title}</h1>
          <p className="text-lg mb-6">{course.description}</p>

          <div className="flex items-center gap-6 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>{course.rating} rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{course.enrolledCount.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Instructor: {course.instructor}
          </p>

          <Link
            to={`/courses/${course.id}/learn`}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="mb-4">What You'll Learn</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Master the fundamental concepts and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Build real-world projects from scratch</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Gain practical skills for professional development</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Earn a certificate of completion</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Course Content</h2>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => (
                <div key={lesson.id} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1">{lesson.title}</h4>
                    <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                  </div>
                  <PlayCircle className="w-6 h-6 text-primary" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
            <h3 className="mb-4">Course Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Lessons</p>
                  <p>{course.lessons.length} lectures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p>{course.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Certificate</p>
                  <p>Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
