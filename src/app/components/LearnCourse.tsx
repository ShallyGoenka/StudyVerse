import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ChevronLeft, ChevronRight, CheckCircle, Circle, PlayCircle } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';
import { courses } from '../data/mockData';

export function LearnCourse() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  if (!course) {
    return (
      <div className="p-8">
        <h1>Course not found</h1>
      </div>
    );
  }

  const currentLesson = course.lessons[currentLessonIndex];
  const progress = ((currentLessonIndex + 1) / course.lessons.length) * 100;

  const handleNext = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/courses/${courseId}`} className="text-primary hover:underline flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Course
          </Link>
          <span className="text-sm text-muted-foreground">
            Lesson {currentLessonIndex + 1} of {course.lessons.length}
          </span>
        </div>
        <h3 className="mb-2">{course.title}</h3>
        <Progress.Root className="relative overflow-hidden bg-secondary rounded-full w-full h-2">
          <Progress.Indicator
            className="bg-primary w-full h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Video Player Area */}
        <div className="flex-1 bg-black flex items-center justify-center">
          <div className="text-center text-white">
            <PlayCircle className="w-24 h-24 mx-auto mb-4 opacity-50" />
            <h2 className="mb-2">{currentLesson.title}</h2>
            <p className="text-gray-400">{currentLesson.duration}</p>
            <p className="text-gray-500 mt-4">Video player would be here</p>
          </div>
        </div>

        {/* Lesson Sidebar */}
        <div className="w-96 bg-card border-l border-border overflow-auto">
          <div className="p-6">
            <h3 className="mb-4">Course Content</h3>
            <div className="space-y-2">
              {course.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => setCurrentLessonIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    index === currentLessonIndex
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-secondary border-border hover:bg-accent'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="truncate mb-1">{lesson.title}</p>
                      <p className={`text-sm ${index === currentLessonIndex ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {lesson.duration}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentLessonIndex === 0}
            className="flex items-center gap-2 px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors">
            Mark as Complete
          </button>

          <button
            onClick={handleNext}
            disabled={currentLessonIndex === course.lessons.length - 1}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
