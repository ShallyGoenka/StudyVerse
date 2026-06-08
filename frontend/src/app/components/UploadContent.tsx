import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Plus, Trash2, GripVertical, Video, FileText, HelpCircle } from 'lucide-react';
import { courses } from '../data/mockData';

export function UploadContent() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === courseId);

  const [lessons, setLessons] = useState(course?.lessons || []);

  const handleAddLesson = () => {
    const newLesson = {
      id: `l${lessons.length + 1}`,
      title: `New Lesson ${lessons.length + 1}`,
      duration: '0 min',
      type: 'video' as const,
    };
    setLessons([...lessons, newLesson]);
  };

  const handleDeleteLesson = (id: string) => {
    setLessons(lessons.filter(l => l.id !== id));
  };

  if (!course) {
    return (
      <div className="p-8">
        <h1>Course not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate('/instructor')}
        className="flex items-center gap-2 text-primary hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <div className="mb-8">
        <h1 className="mb-2">Upload Course Content</h1>
        <h3 className="text-muted-foreground">{course.title}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Course Curriculum */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2>Course Curriculum</h2>
              <button
                onClick={handleAddLesson}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Lesson
              </button>
            </div>

            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div key={lesson.id} className="bg-secondary border border-border rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <GripVertical className="w-5 h-5 text-muted-foreground mt-3 cursor-move" />

                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-1">
                          <input
                            type="text"
                            defaultValue={lesson.title}
                            className="w-full px-3 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring mb-2"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <select className="px-3 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                              <option value="video">Video</option>
                              <option value="quiz">Quiz</option>
                              <option value="reading">Reading</option>
                            </select>
                            <input
                              type="text"
                              defaultValue={lesson.duration}
                              className="px-3 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                              placeholder="Duration"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteLesson(lesson.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Upload lesson content</p>
                        <p className="text-xs text-muted-foreground">Video, PDF, or other files</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {lessons.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No lessons yet. Click "Add Lesson" to get started.</p>
                </div>
              )}
            </div>
          </div>

          {/* Save Actions */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Save Changes
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
              Preview Course
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Content Guidelines</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Video Lessons</p>
                  <p className="text-muted-foreground">MP4 format, max 2GB per file</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Reading Materials</p>
                  <p className="text-muted-foreground">PDF or text documents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Quizzes</p>
                  <p className="text-muted-foreground">Use the quiz builder tool</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Course Statistics</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Lessons</span>
                <span>{lessons.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Duration</span>
                <span>~{lessons.length * 60} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="px-2 py-1 bg-accent text-accent-foreground rounded">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
