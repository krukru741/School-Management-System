import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  GraduationCap, 
  BookOpen, 
  Banknote, 
  LogOut,
  CalendarDays,
  Search,
  Bell,
  MessageSquare,
  Settings
} from 'lucide-react';

const MainLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} />, roles: ['Super Admin', 'Registrar', 'Cashier', 'Teacher', 'Student', 'Parent'] },
    { name: 'User Management', path: '/users', icon: <UserCheck size={20} />, roles: ['Super Admin'] },
    { name: 'Students', path: '/students', icon: <GraduationCap size={20} />, roles: ['Super Admin', 'Registrar', 'Teacher', 'Cashier'] },
    { name: 'Teachers', path: '/teachers', icon: <Users size={20} />, roles: ['Super Admin', 'Registrar'] },
    { name: 'Enrollment', path: '/enrollment', icon: <BookOpen size={20} />, roles: ['Super Admin', 'Registrar'] },
    { name: 'Finance', path: '/finance', icon: <Banknote size={20} />, roles: ['Super Admin', 'Cashier'] },
    { name: 'Attendance', path: '/attendance', icon: <CalendarDays size={20} />, roles: ['Super Admin', 'Registrar', 'Teacher'] },
    { name: 'Grades', path: '/grades', icon: <BookOpen size={20} />, roles: ['Super Admin', 'Registrar', 'Teacher'] },
  ];

  const allowedNavItems = navItems.filter(item => item.roles.includes(user?.role));

  return (
    <div className="flex h-screen bg-[#F4F7FE] font-sans">
      {/* Sidebar - Dark Mode like Prototype */}
      <aside className="w-64 bg-[#111115] text-slate-400 flex flex-col transition-all duration-300 m-4 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#111115] font-bold text-xl leading-none">E</span>
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">EduManage</h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {allowedNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                    ? 'bg-white text-[#111115] shadow-sm' 
                    : 'hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={logout}
            className="flex items-center justify-between w-full px-4 py-3 bg-white text-[#111115] hover:bg-slate-100 rounded-xl transition-colors font-bold text-sm"
          >
            <span>Log Out</span>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-24 px-8 flex items-center justify-between shrink-0">
          {/* Search Bar */}
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm text-slate-700"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 shadow-sm transition-colors">
              <Bell size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 shadow-sm transition-colors">
              <MessageSquare size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 shadow-sm transition-colors">
              <Settings size={18} />
            </button>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-2 border-white">
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-transparent">
          <Outlet />
        </main>
      </main>
    </div>
  );
};

export default MainLayout;
