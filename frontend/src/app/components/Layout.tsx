import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import {
  BookOpen,
  BarChart3,
  Upload,
  TrendingUp,
  Users,
  FileText,
  LogOut,
  User
} from 'lucide-react';
import { currentUser, UserRole } from '../data/mockData';
import { RoleSwitcher } from './RoleSwitcher';
import logoImage from '../../imports/image.png';

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<UserRole>(currentUser.role);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole);
    // Navigate to the appropriate default page for the role
    if (newRole === 'student') {
      navigate('/');
    } else if (newRole === 'instructor') {
      navigate('/instructor');
    } else if (newRole === 'admin') {
      navigate('/admin');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const studentLinks = [
    { path: '/courses', icon: BookOpen, label: 'My Courses' },
    { path: '/progress', icon: BarChart3, label: 'Progress' },
    { path: '/', icon: TrendingUp, label: 'Recommended Courses' },
  ];

  const instructorLinks = [
    { path: '/instructor/create', icon: Upload, label: 'Create Course' },
    { path: '/instructor/upload/1', icon: Upload, label: 'Upload Content' },
    { path: '/instructor', icon: TrendingUp, label: 'Analytics' },
  ];

  const adminLinks = [
    { path: '/admin', icon: Users, label: 'Users' },
    { path: '/admin', icon: BookOpen, label: 'Courses' },
    { path: '/admin', icon: FileText, label: 'Reports' },
  ];

  let navigation = studentLinks;
  let sidebarTitle = 'Student Dashboard';

  if (userRole === 'instructor') {
    navigation = instructorLinks;
    sidebarTitle = 'Instructor Dashboard';
  } else if (userRole === 'admin') {
    navigation = adminLinks;
    sidebarTitle = 'Admin Dashboard';
  }

  return (
    <div className="flex h-screen" style={{ background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 25%, #bae6fd 75%, #a5f3fc 100%)' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border flex items-center justify-center">
          <img src={logoImage} alt="StudyVerse Logo" className="w-32 h-auto" />
        </div>

        <nav className="flex-1 p-4">
          <div className="mb-6">
            <h3 className="px-4 py-2 text-sm text-muted-foreground uppercase tracking-wide">Sidebar</h3>
          </div>
          <div className="space-y-1">
            {navigation.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path + index}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-sidebar-border">
          <RoleSwitcher currentRole={userRole} onRoleChange={handleRoleChange} />

          <div className="p-4">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate">{currentUser.name}</p>
                <p className="text-sm text-muted-foreground capitalize">{userRole}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
