import { useAuth } from '../context/AuthContext';
import { Users, GraduationCap, ArrowUpRight, ArrowDownRight, Clock, AlertCircle, MoreHorizontal, User, Bell, Edit, Trash2 } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const AdminDashboard = ({ user }) => {
  // Mock Data
  const genderData = [
    { name: 'Boys', value: 53, color: '#A78BFA' }, // Purple
    { name: 'Girls', value: 47, color: '#FCD34D' }, // Yellow
  ];

  const earningsData = [
    { name: 'Jan', income: 400, expense: 240 },
    { name: 'Feb', income: 300, expense: 139 },
    { name: 'Mar', income: 200, expense: 980 },
    { name: 'Apr', income: 278, expense: 390 },
    { name: 'May', income: 189, expense: 480 },
    { name: 'Jun', income: 239, expense: 380 },
    { name: 'Jul', income: 349, expense: 430 },
  ];

  const feeStatus = [
    { id: 1, amount: '1,335', status: 'Paid', color: 'text-green-600 bg-green-100' },
    { id: 2, amount: '4,366', status: 'Pending', color: 'text-orange-600 bg-orange-100' },
    { id: 3, amount: '208', status: 'Overdue', color: 'text-red-600 bg-red-100' },
  ];

  const messages = [
    { id: 1, name: 'Jane Cooper', text: "Don't forget the lab rep...", time: '12:34 pm', img: 'J', color: 'bg-blue-100 text-blue-700' },
    { id: 2, name: 'Kristin Watson', text: "Do we have maths test...", time: '12:34 pm', img: 'K', color: 'bg-red-100 text-red-700' },
    { id: 3, name: 'Jenny Wilson', text: "What?", time: '12:34 pm', img: 'J', color: 'bg-green-100 text-green-700' },
    { id: 4, name: 'Brooklyn Sim', text: "Did Sachla gave any ki...", time: '12:34 pm', img: 'B', color: 'bg-purple-100 text-purple-700' },
    { id: 5, name: 'Darrell Steward', text: "Can we go for a movie...", time: '12:34 pm', img: 'D', color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1400px] mx-auto">

      {/* Top Row: Welcome Banner & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Welcome Banner */}
        <div className="lg:col-span-2 bg-[#FFFFFF] rounded-[24px] shadow-sm border border-slate-100 h-[248px] relative overflow-hidden shrink-0">
          {/* Inner Content Box (main) */}
          <div className="absolute left-[22px] top-[11px] w-[698px] h-[222px]">

            {/* Content Container */}
            <div className="absolute left-0 top-[10px] w-[401px] h-[179px]">
              <h2
                className="absolute left-[2px] top-0 w-[399px] h-[72px] font-medium text-[#000000] tracking-tight m-0"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', lineHeight: '36px' }}
              >
                Welcome, Laurel Higher Secondary School Team!
              </h2>
              <p
                className="absolute left-0 top-[83px] w-[399px] h-[96px] font-light text-[#8F8F8F] m-0"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', lineHeight: '24px' }}
              >
                Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!
              </p>
            </div>

            {/* Humaaans Research (Generated Mock Image) */}
            <div
              className="absolute"
              style={{
                width: '299px',
                height: '222px',
                left: '399px',
                top: '0px',
                background: "url('/humaaans-research.png') center / contain no-repeat",
                transform: 'matrix(-1, 0, 0, 1, 0, 0)'
              }}
            >
            </div>

          </div>
        </div>

        {/* Stats Column */}
        <div className="flex flex-col gap-[11px] w-full lg:w-[185px] h-[346px] shrink-0">
          <div className="bg-[#F8E38D] rounded-[20px] p-[17px] flex flex-col justify-between w-full h-[108px]">
            <div className="flex justify-between items-start">
              <span className="font-light text-[20px] text-black leading-none">Students</span>
              <MoreHorizontal size={20} className="text-[#121212] -mt-1" />
            </div>
            <div className="text-[34px] font-medium text-black leading-none">
              5,909
            </div>
          </div>

          <div className="bg-[#E2D4F0] rounded-[20px] p-[17px] flex flex-col justify-between w-full h-[108px]">
            <div className="flex justify-between items-start">
              <span className="font-light text-[20px] text-black leading-none">Teachers</span>
              <MoreHorizontal size={20} className="text-[#121212] -mt-1" />
            </div>
            <div className="text-[34px] font-medium text-black leading-none">
              60
            </div>
          </div>

          <div className="bg-[#F8E38D] rounded-[20px] p-[17px] flex flex-col justify-between w-full h-[108px]">
            <div className="flex justify-between items-start">
              <span className="font-light text-[20px] text-black leading-none">Employee</span>
              <MoreHorizontal size={20} className="text-[#121212] -mt-1" />
            </div>
            <div className="text-[34px] font-medium text-black leading-none">
              100
            </div>
          </div>
        </div>

        {/* Calendar Widget */}
        <div className="w-[306px] h-[346px] bg-[#FFFFFF] rounded-[24px] relative shrink-0">

          {/* Header (Month & Arrows) */}
          <div className="absolute left-[24px] top-[24px] w-[258px] h-[16px] flex justify-between items-start">
            <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="#B5BEC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 1L2 6l5 5" />
              </svg>
            </div>
            <div className="w-[110px] h-[14px] text-center" style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '14px', lineHeight: '14px', color: '#4A5660' }}>
              September 2021
            </div>
            <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="#B5BEC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1l5 5-5 5" />
              </svg>
            </div>
          </div>

          {/* Days */}
          <div className="absolute left-[24px] top-[62px] w-[258px] h-[20px] flex gap-[8px]">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => (
              <div key={i} className="flex-1 h-[20px] flex items-center justify-center">
                <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#B5BEC6' }}>
                  {day}
                </span>
              </div>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="absolute left-[24px] top-[104px] w-[258px] h-[182px] flex flex-col gap-[8px]">
            {/* Row 1 */}
            <div className="w-[258px] h-[30px] flex gap-[8px]">
              {['29', '30', '31', '1', '2', '3', '4'].map((date, i) => (
                <div key={i} className="w-[30px] h-[30px] flex items-center justify-center">
                  <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: i < 3 ? '#B5BEC6' : '#4A5660' }}>{date}</span>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="w-[258px] h-[30px] flex gap-[8px]">
              {['5', '6', '7', '8', '9', '10', '11'].map((date, i) => (
                <div key={i} className="w-[30px] h-[30px] flex items-center justify-center">
                  <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: '#4A5660' }}>{date}</span>
                </div>
              ))}
            </div>
            {/* Row 3 */}
            <div className="w-[258px] h-[30px] flex gap-[8px]">
              {['12', '13', '14', '15', '16', '17', '18'].map((date, i) => (
                <div key={i} className="w-[30px] h-[30px] flex items-center justify-center">
                  <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: '#4A5660' }}>{date}</span>
                </div>
              ))}
            </div>
            {/* Row 4 */}
            <div className="w-[258px] h-[30px] flex gap-[8px]">
              {['19', '20', '21', '22', '23', '24', '25'].map((date, i) => {
                const isActive = date === '19';
                return (
                  <div key={i} className={`w-[30px] h-[30px] flex items-center justify-center ${isActive ? 'bg-[#F04D23] rounded-[29px]' : ''}`}>
                    <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: isActive ? '#FFFFFF' : '#4A5660' }}>{date}</span>
                  </div>
                );
              })}
            </div>
            {/* Row 5 */}
            <div className="w-[258px] h-[30px] flex gap-[8px]">
              {['26', '27', '28', '29', '30', '1', '2'].map((date, i) => (
                <div key={i} className="w-[30px] h-[30px] flex items-center justify-center">
                  <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: i >= 5 ? '#B5BEC6' : '#4A5660' }}>{date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Btn */}
          <div className="absolute left-[29px] top-[299px] w-[120px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center px-[9px]">
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '14px', color: '#777777' }}>
              Manage Calendar
            </span>
          </div>

        </div>

      </div>

      {/* Second Row: Demographics, Notice Board, Finance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Students */}
        <div className="w-[415px] h-[280px] bg-[#FFFFFF] rounded-[24px] shadow-sm relative shrink-0">
          
          {/* header */}
          <div className="absolute left-[21px] top-[18px] w-[365px] h-[24px]">
            <div className="absolute left-0 top-0 h-[24px] flex items-center">
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
                Students
              </span>
            </div>
            {/* Group 59 (Menu dots) */}
            <div className="absolute left-[349px] top-[10px] w-[16px] h-[4px] flex justify-between">
              <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
            </div>
          </div>

          {/* body */}
          <div className="absolute left-[30px] top-[60px] w-[356px] h-[200px]">
            
            {/* Male Pie chart */}
            <div className="absolute left-0 top-0 w-[159px] h-[159px]">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ellipse 3 */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#EDEDED" strokeWidth="12" />
                {/* Foreground Ellipse 7 */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#CFCEFF" strokeWidth="12" strokeDasharray="263.89" strokeDashoffset="124.0" strokeLinecap="round" />
              </svg>
              {/* bx-male 1 */}
              <div className="absolute left-[33px] top-[59px] w-[42px] h-[42px] flex justify-center items-center">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="#CFCEFF">
                   <circle cx="12" cy="5" r="2.5" />
                   <path d="M15 9H9a1 1 0 00-1 1v6h2v6h4v-6h2v-6a1 1 0 00-1-1z" />
                 </svg>
              </div>
              {/* Type@25 */}
              <div className="absolute left-[70px] top-[69px] flex items-center">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '36px', color: '#000000' }}>
                  53%
                </span>
              </div>
            </div>

            {/* Female Pie chart */}
            <div className="absolute left-[197px] top-0 w-[159px] h-[159px]">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ellipse 3 */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#EDEDED" strokeWidth="12" />
                {/* Foreground Ellipse 7 */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#FFED9F" strokeWidth="12" strokeDasharray="263.89" strokeDashoffset="139.8" strokeLinecap="round" />
              </svg>
              {/* bx-female 1 */}
              <div className="absolute left-[33px] top-[59px] w-[42px] h-[42px] flex justify-center items-center">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFED9F">
                   <circle cx="12" cy="5" r="2.5" />
                   <path d="M15 9H9a1 1 0 00-1 1v5.5l1.5 5.5h3l1.5-5.5V10a1 1 0 00-1-1z" />
                 </svg>
              </div>
              {/* Type@25 */}
              <div className="absolute left-[70px] top-[68px] flex items-center">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '36px', color: '#000000' }}>
                  47%
                </span>
              </div>
            </div>

            {/* Group 71 (Legend) */}
            <div className="absolute left-[26px] top-[181px] w-[304px] h-[19px]">
              {/* Group 61 */}
              <div className="absolute left-0 top-0 w-[108px] h-[19px] flex items-center">
                <div className="w-[9px] h-[9px] bg-[#CFCEFF] rounded-full absolute left-0"></div>
                <span className="absolute left-[13px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '19px', color: '#474747' }}>
                  3,178
                </span>
              </div>
              {/* Group 62 */}
              <div className="absolute left-[197px] top-0 w-[107px] h-[19px] flex items-center">
                <div className="w-[9px] h-[9px] bg-[#FFED9F] rounded-full absolute left-0"></div>
                <span className="absolute left-[13px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '19px', color: '#474747' }}>
                  2,731
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Notice Board */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Notice Board</h3>
            <button className="text-[10px] text-slate-400 underline decoration-slate-300 hover:text-slate-600">view all</button>
          </div>
          <div className="space-y-4 flex-1 overflow-y-auto pr-3 custom-scrollbar">
            <div className="flex gap-4 items-start border border-slate-200 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
                <Bell size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-[13px]">Sports Day Announcement</h4>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-slate-200 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-400 flex items-center justify-center shrink-0">
                <Bell size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-[13px]">Summer Break Start Date</h4>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">Summer break begins on May 25, 2024. Have a wonderful holiday!</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center mt-4 pt-2">
            <button className="bg-slate-100 text-slate-500 hover:bg-slate-200 text-[10px] font-semibold px-4 py-1.5 rounded-lg transition-colors">Add New</button>
            <button className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"><Edit size={14} /></button>
            <button className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"><Trash2 size={14} /></button>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Financial Overview</h3>
            <div className="flex gap-2">
              <select className="text-xs font-bold bg-slate-50 border-none rounded-lg px-2 py-1 text-slate-600"><option>2023-2024</option></select>
            </div>
          </div>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="bg-[#E0F2FE] rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/60 text-blue-700 px-2 py-1 rounded-lg text-[10px] font-bold">
                <ArrowUpRight size={12} /> 12%
              </div>
              <h3 className="text-2xl font-bold text-[#0C4A6E] mt-2">₱29,545,000</h3>
              <p className="text-[#0369A1] text-xs font-semibold mt-1">Total Income</p>
            </div>
            <div className="bg-[#CCFBF1] rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/60 text-teal-700 px-2 py-1 rounded-lg text-[10px] font-bold">
                <ArrowDownRight size={12} /> 3.5%
              </div>
              <h3 className="text-2xl font-bold text-[#115E59] mt-2">₱19,291,266</h3>
              <p className="text-[#0F766E] text-xs font-semibold mt-1">Total Expenses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Chart, Fee Status, Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Earnings Chart */}
        <div className="lg:col-span-2 bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Earnings</h3>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]"></div>Income</div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#C084FC]"></div>Expense</div>
              <MoreHorizontal size={20} className="text-slate-400 ml-2" />
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} dx={-10} tickFormatter={(val) => `${val}K`} />
                <Tooltip cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="income" stroke="#60A5FA" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="expense" stroke="#C084FC" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fee Status */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Fee Status</h3>
            <MoreHorizontal size={20} className="text-slate-400" />
          </div>
          <div className="space-y-4 flex-1">
            {feeStatus.map(fee => (
              <div key={fee.id} className="flex justify-between items-center border border-slate-100 rounded-xl p-3">
                <span className="text-lg font-bold text-slate-800">{fee.amount}</span>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${fee.color}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  {fee.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Messages</h3>
            <MoreHorizontal size={20} className="text-slate-400" />
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {messages.map(msg => (
              <div key={msg.id} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${msg.color}`}>
                  {msg.img}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-800 truncate">{msg.name}</h4>
                  <p className="text-[11px] text-slate-500 truncate">{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">{msg.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  return <AdminDashboard user={user} />;
};

export default Dashboard;
