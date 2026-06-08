import { Users, BookOpen, DollarSign, Activity, MoreVertical } from 'lucide-react';
import { courses } from '../data/mockData';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '12,458', change: '+12%', icon: Users, color: 'bg-cyan-500' },
    { label: 'Total Courses', value: courses.length, change: '+8%', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Revenue', value: '$84,290', change: '+23%', icon: DollarSign, color: 'bg-indigo-500' },
    { label: 'Active Sessions', value: '1,847', change: '+5%', icon: Activity, color: 'bg-purple-500' },
  ];

  const recentUsers = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'student', status: 'active' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'instructor', status: 'active' },
    { id: '3', name: 'Carol Williams', email: 'carol@example.com', role: 'student', status: 'inactive' },
    { id: '4', name: 'David Brown', email: 'david@example.com', role: 'instructor', status: 'active' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage platform users, courses, and settings</p>
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
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-2xl">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2>Recent Users</h2>
            <button className="text-primary hover:underline text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="mb-1">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm capitalize">
                    {user.role}
                  </span>
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Management */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2>Popular Courses</h2>
            <button className="text-primary hover:underline text-sm">Manage</button>
          </div>
          <div className="space-y-4">
            {courses.slice(0, 4).map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex-1">
                  <p className="mb-1 truncate">{course.title}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{course.enrolledCount} enrolled</span>
                    <span>{course.rating} rating</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <h2 className="mb-6">Platform Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-foreground">Platform Name</label>
            <input
              type="text"
              defaultValue="StudyVerse"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block mb-2 text-foreground">Support Email</label>
            <input
              type="email"
              defaultValue="support@studyverse.com"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block mb-2 text-foreground">Default Currency</label>
            <select className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-foreground">Max Upload Size (MB)</label>
            <input
              type="number"
              defaultValue="100"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
