import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const sidebarLinks = [
    { path: '/dashboard', label: 'My Dashboard', icon: '📊' },
    { path: '/dashboard/certificates', label: 'Certificates', icon: '🎓' },
    { path: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
  ];

  const courseLinks = [
    { path: '/dashboard/course-player/web-dev-101', label: 'Web Development 101', icon: '🌐' },
    { path: '/dashboard/course-player/javascript-basics', label: 'JavaScript Basics', icon: 'JS' },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Top Bar */}
      <div className={`fixed top-0 right-0 left-64 h-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b z-10 flex items-center justify-between px-8`}>
        <h1 className="text-xl font-semibold">Student Dashboard</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>John Doe</span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r`}>
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">LearnHub</Link>
        </div>
        <nav className="mt-6">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-6 py-3 text-lg hover:bg-primary/10 hover:text-primary transition-colors`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          
          <div className="mt-6 px-6">
            <h3 className="text-sm font-semibold uppercase text-text-secondary mb-2">My Courses</h3>
            {courseLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-2 text-base hover:bg-primary/10 hover:text-primary transition-colors rounded-md mb-1`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          
          <Link
            to="/courses"
            className={`flex items-center gap-3 px-6 py-3 text-lg hover:bg-primary/10 hover:text-primary transition-colors mt-4`}
          >
            <span>📚</span>
            <span>Browse Courses</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="ml-64 pt-16 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;