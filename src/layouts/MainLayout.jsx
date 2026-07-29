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
    { name: 'Message', path: '/messages', icon: <MessageSquare size={20} />, roles: ['Super Admin', 'Registrar', 'Teacher', 'Student', 'Parent'] },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} />, roles: ['Super Admin', 'Registrar', 'Cashier', 'Teacher', 'Student', 'Parent'] },
  ];

  const allowedNavItems = navItems.filter(item => item.roles.includes(user?.role));

  return (
    <div className="flex h-screen bg-[#F5F4F9] font-sans">
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
        <nav className="absolute left-[32px] top-[121px] bottom-[80px] w-[245px] flex flex-col gap-[10px] overflow-y-auto overflow-x-hidden">
          {allowedNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative w-[253px] h-[44px] rounded-[7px] transition-all shrink-0 ${isActive
                  ? 'bg-[#FFFFFF] text-[#000000]'
                  : 'bg-transparent text-[#FFFFFF] hover:bg-white/10'
                  }`}
              >
                <div className="absolute left-[12px] top-[10px] w-[24px] h-[24px] flex items-center justify-center">
                  {item.icon}
                </div>
                <span
                  className="absolute left-[48px] top-[11px] h-[22px] leading-[22px]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '18px' }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* LogOut Btn */}
        <div className="mt-auto mb-[4px] ml-[15px] shrink-0">
          <button
            onClick={logout}
            className="relative w-[253px] h-[44px] bg-[#FFFFFF] rounded-[7px] hover:bg-slate-100 transition-colors"
          >
            <span
              className="absolute w-[69px] h-[22px] left-[16px] top-[11px] text-[#000000] leading-[22px]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '18px' }}
            >
              Log Out
            </span>
            {/* arrow-right-circle */}
            <div className="absolute w-[24px] h-[24px] left-[219px] top-[10px] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16l4-4-4-4" />
                <path d="M8 12h8" />
              </svg>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="w-full max-w-[1430px] h-[70px] px-[5px] py-[10px] mx-auto mt-[24px] flex justify-between items-start shrink-0">

          {/* Left: Collapse & Search */}
          <div className="relative w-[406px] h-[50px] shrink-0 mx-auto ml-0">
            {/* Collapse Button */}
            <button className="absolute left-0 top-0 w-[50px] h-[50px] bg-[#FFFFFF] rounded-[12px] shadow-[2px_4px_4px_rgba(0,0,0,0.1)] flex items-center justify-center p-[12px]">
              {/* Arrow Right rotated 180 */}
              <svg width="26" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Search Bar */}
            <div className="absolute left-[60px] top-0 w-[346px] h-[50px] bg-[#EBEAEF] rounded-[34px] flex items-center px-[14px] py-[13px] gap-[10px]">
              <Search size={24} strokeWidth={2} className="text-[#8E8D93] shrink-0 w-[24px] h-[24px]" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none w-[71px] h-[30px] text-[20px] font-normal text-[#8E8D93] placeholder-[#8E8D93] leading-[30px]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center p-0 gap-[12px] mx-auto mr-0 w-[236px] h-[50px] shrink-0">
            <button className="flex items-center justify-center p-[12px] gap-[10px] w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] text-[#6E6D71] shrink-0">
              <Bell size={24} strokeWidth={1.5} />
            </button>
            <button className="flex items-center justify-center p-[12px] gap-[10px] w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] text-[#6E6D71] shrink-0">
              <MessageSquare size={24} strokeWidth={1.5} />
            </button>
            <button className="flex items-center justify-center p-[12px] gap-[10px] w-[50px] h-[50px] bg-[#ECEBF1] rounded-[35px] text-[#6E6D71] shrink-0">
              <Settings size={24} strokeWidth={1.5} />
            </button>
            <div
              className="flex items-center justify-center p-[12px] gap-[10px] w-[50px] h-[50px] rounded-[35px] shrink-0"
              style={{ background: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80') center / cover no-repeat" }}
            >
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
