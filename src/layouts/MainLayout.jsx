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
      <aside className="w-[284px] h-[calc(100vh-32px)] bg-[#000000] flex flex-col shrink-0 transition-all duration-300 ml-[17px] my-[16px] rounded-[24px] overflow-hidden shadow-2xl relative">
        {/* Logo */}
        <div className="pt-[34px] pl-[34px] flex items-center gap-[12px]">
          <div className="w-[52px] h-[52px] bg-[#FFFFFF] rounded-[12px] flex items-center justify-center shrink-0">
            {/* Simple logo placeholder instead of fourfiloi icon */}
            <span className="text-black font-bold text-2xl -scale-y-100">S</span>
          </div>
          <h1 
            className="text-[#FFFFFF] font-semibold tracking-[0.06em]" 
            style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '32px', lineHeight: '38px' }}
          >
            Smansys
          </h1>
        </div>
        
        {/* Body / Nav Items */}
        <nav className="flex-1 mt-[35px] px-[15px] flex flex-col gap-[10px] overflow-y-auto">
          {allowedNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`w-[253px] h-[44px] flex items-center pl-[12px] gap-[14px] rounded-[7px] transition-all shrink-0 ${
                  isActive 
                    ? 'bg-[#FFFFFF] text-[#000000]' 
                    : 'bg-transparent text-[#FFFFFF] hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '18px' }}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* LogOut Btn */}
        <div className="mt-auto mb-[4px] px-[15px] shrink-0">
          <button 
            onClick={logout}
            className="w-[253px] h-[44px] flex items-center justify-between pl-[16px] pr-[10px] bg-[#FFFFFF] rounded-[7px] hover:bg-slate-100 transition-colors"
          >
            <span 
              className="text-[#000000]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '18px' }}
            >
              Log Out
            </span>
            <LogOut size={24} className="text-[#000000]" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="w-full max-w-[1254px] h-[70px] px-[5px] py-[10px] mx-auto mt-[24px] flex justify-between items-start shrink-0">
          
          {/* Left: Collapse & Search */}
          <div className="flex gap-[10px] w-full max-w-[406px] h-[50px]">
            {/* Collapse Button */}
            <button className="w-[50px] h-[50px] bg-[#FFFFFF] rounded-[12px] shadow-[2px_4px_4px_rgba(0,0,0,0.1)] flex items-center justify-center shrink-0">
               {/* Arrow Right rotated 180 */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-180 text-black">
                 <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </button>
            
            {/* Search Bar */}
            <div className="w-[346px] h-[50px] bg-[#EBEAEF] rounded-[34px] flex items-center px-[14px] gap-[10px]">
               <Search size={24} className="text-[#8E8D93] shrink-0" />
               <input 
                 type="text"
                 placeholder="Placeholder"
                 className="bg-transparent border-none outline-none w-full text-[20px] font-normal text-[#8E8D93] placeholder-[#8E8D93]"
                 style={{ fontFamily: 'Poppins, sans-serif' }}
               />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex gap-[12px] w-[236px] h-[50px] shrink-0">
            <button className="w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] flex items-center justify-center text-[#6E6D71] shrink-0">
              <Bell size={24} strokeWidth={1.5} />
            </button>
            <button className="w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] flex items-center justify-center text-[#6E6D71] shrink-0">
              <MessageSquare size={24} strokeWidth={1.5} />
            </button>
            <button className="w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] flex items-center justify-center text-[#6E6D71] shrink-0">
              <Settings size={24} strokeWidth={1.5} />
            </button>
            <div className="w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] flex items-center justify-center shrink-0 overflow-hidden">
               {/* Profile Mock Image */}
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-full h-full object-cover" />
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
