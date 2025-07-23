import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy data for course lessons
const courseLessons = {
  'web-dev-101': [
    {
      id: 'lesson-1',
      title: 'Introduction to Web Development',
      videoUrl: 'https://www.youtube.com/embed/pQN-pnXPaVg',
      duration: '15:30',
      isCompleted: true,
      resources: [
        { name: 'Lesson Slides', url: '#', type: 'pdf' },
        { name: 'Exercise Files', url: '#', type: 'zip' },
      ],
    },
    {
      id: 'lesson-2',
      title: 'HTML Basics',
      videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
      duration: '20:00',
      isCompleted: false,
      resources: [
        { name: 'HTML Cheat Sheet', url: '#', type: 'pdf' },
      ],
    },
    {
      id: 'lesson-3',
      title: 'CSS Styling',
      videoUrl: 'https://www.youtube.com/embed/1PnVor36_40',
      duration: '25:10',
      isCompleted: false,
      resources: [],
    },
  ],
  'javascript-basics': [
    {
      id: 'js-lesson-1',
      title: 'JavaScript Introduction',
      videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      duration: '18:45',
      isCompleted: false,
      resources: [
        { name: 'JavaScript Cheatsheet', url: '#', type: 'pdf' },
      ],
    },
    {
      id: 'js-lesson-2',
      title: 'Variables and Data Types',
      videoUrl: 'https://www.youtube.com/embed/hdI2bqOjy3c',
      duration: '22:15',
      isCompleted: false,
      resources: [],
    },
  ],
};

const CoursePlayer = () => {
  const { courseId, lessonId } = useParams();
  const lessons = courseLessons[courseId] || [];
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' or 'comments'
  const [notes, setNotes] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Set initial active lesson based on URL or first lesson
    const initialLesson = lessonId
      ? lessons.find(lesson => lesson.id === lessonId)
      : lessons[0];
    setActiveLesson(initialLesson);
  }, [courseId, lessonId, lessons]);

  if (!courseId || !courseLessons[courseId]) {
    return (
      <div className="flex flex-col justify-center items-center h-full text-text-muted">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-4">The course you're looking for doesn't exist or is not available.</p>
        <Link to="/dashboard" className="btn btn-primary">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  if (!activeLesson) {
    return (
      <div className="flex flex-col justify-center items-center h-full text-text-muted">
        <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
        <p className="mb-4">The lesson you're looking for doesn't exist or is not available.</p>
        <Link to={`/dashboard/course-player/${courseId}`} className="btn btn-primary">
          View Available Lessons
        </Link>
      </div>
    );
  }

  const handleLessonComplete = () => {
    // In a real app, you would update the backend here
    setActiveLesson(prev => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  const handleSaveNotes = () => {
    console.log('Notes saved:', notes);
    // In a real app, save notes to backend
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now().toString(),
          user: 'Current User', // Replace with actual user name
          timestamp: new Date().toISOString(),
          text: newComment.trim(),
        },
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Video Player */}
        <div className="relative aspect-video bg-background-tertiary">
          {activeLesson.videoUrl ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={activeLesson.videoUrl}
              title={activeLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex justify-center items-center h-full text-text-muted">
              Video not available for this lesson.
            </div>
          )}
        </div>

        {/* Lesson Info and Tabs */}
        <div className="p-6 bg-surface flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold text-text-primary">{activeLesson.title}</h2>
          <div className="flex items-center justify-between mb-6">
            <p className="text-text-secondary">{activeLesson.duration}</p>
            <button
              onClick={handleLessonComplete}
              className={`btn ${activeLesson.isCompleted
                ? 'bg-success hover:bg-success/90 text-text-inverted'
                : 'btn-primary'
                }`}
            >
              {activeLesson.isCompleted ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>

          {/* Resources */}
          {activeLesson.resources && activeLesson.resources.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-text-primary">Resources</h3>
              <div className="flex flex-wrap gap-3">
                {activeLesson.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="px-4 py-2 bg-background-secondary rounded-md hover:bg-background-tertiary transition-colors"
                    download
                  >
                    {resource.name} ({resource.type})
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="border-b border-border-primary mb-6">
            <div className="flex gap-4">
              <button
                className={`pb-2 px-1 ${activeTab === 'notes'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-text-secondary'
                  }`}
                onClick={() => setActiveTab('notes')}
              >
                Notes
              </button>
              <button
                className={`pb-2 px-1 ${activeTab === 'comments'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-text-secondary'
                  }`}
                onClick={() => setActiveTab('comments')}
              >
                Comments
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'notes' && (
              <div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes for this lesson..."
                  className="w-full h-48 p-4 rounded-md bg-background-secondary resize-none text-text-primary border border-border-primary"
                />
                <button
                  onClick={handleSaveNotes}
                  className="btn btn-primary mt-4"
                >
                  Save Notes
                </button>
              </div>
            )}
            {activeTab === 'comments' && (
              <div>
                <form onSubmit={handlePostComment} className="mb-6">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment or question..."
                    className="w-full h-24 p-4 rounded-md bg-background-secondary resize-none text-text-primary border border-border-primary"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-4"
                  >
                    Post Comment
                  </button>
                </form>
                <div className="space-y-4">
                  {comments.length === 0 ? (
                    <p className="text-text-muted">No comments yet. Be the first to comment!</p>
                  ) : (
                    comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-background-secondary rounded-md p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{comment.user}</span>
                          <span className="text-sm text-text-secondary">
                            {new Date(comment.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-text-primary">{comment.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar - Lesson List */}
      <div className="w-80 bg-surface border-l border-border-primary overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Course Content</h3>
            <Link to="/dashboard" className="text-sm text-primary hover:underline">
              Back to Dashboard
            </Link>
          </div>
          
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/dashboard/course-player/${courseId}/${lesson.id}`}
              className={
                activeLesson && activeLesson.id === lesson.id
                  ? 'block w-full text-left p-3 rounded-md bg-primary text-text-inverted mb-2'
                  : 'block w-full text-left p-3 rounded-md hover:bg-background-tertiary mb-2'
              }
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{lesson.title}</span>
                <span className="text-sm">
                  {lesson.duration}
                </span>
                {lesson.isCompleted && (
                  <span className="text-sm text-success">
                    ✓
                  </span>
                )}
              </div>
            </Link>
          ))}
          
          {courseId === 'web-dev-101' && (
            <div className="mt-6 pt-4 border-t border-border-primary">
              <Link 
                to="/dashboard/course-player/javascript-basics"
                className="block w-full text-left p-3 rounded-md bg-background-secondary hover:bg-background-tertiary"
              >
                <div className="flex items-center">
                  <span className="mr-2">➡️</span>
                  <span>Next Course: JavaScript Basics</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;