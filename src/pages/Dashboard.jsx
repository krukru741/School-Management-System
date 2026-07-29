import { useAuth } from '../context/AuthContext';
import { Users, GraduationCap, ArrowUpRight, ArrowDownRight, Clock, AlertCircle, MoreHorizontal, User, Bell, Edit, Trash2 } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const CustomEarningsTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const income = payload.find(p => p.dataKey === 'income')?.value || 0;
    const expense = payload.find(p => p.dataKey === 'expense')?.value || 0;

    return (
      <div className="w-[136px] h-[94px] bg-[#FEFEFE] border border-[#F4F6FB] rounded-[9px] flex flex-col justify-center items-center shadow-sm">
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', lineHeight: '15px', color: '#CCCDCE', marginBottom: '6px' }}>
          {label} 14,2030
        </span>
        <div className="w-[100px] h-[3px] bg-[#F4F6FB] mb-[8px]"></div>
        
        <div className="flex flex-col gap-[6px] w-[90px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#60A5FA]"></div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', color: '#989898' }}>${income}.000</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#C084FC]"></div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', color: '#9D9D9D' }}>${expense}.000</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

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
    { name: 'Aug', income: 400, expense: 300 },
    { name: 'Sep', income: 550, expense: 450 },
    { name: 'Oct', income: 700, expense: 500 },
    { name: 'Nov', income: 837, expense: 500 },
    { name: 'Dec', income: 900, expense: 600 },
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
    <div className="w-full flex flex-col xl:flex-row gap-[24px] animate-in fade-in duration-500 pb-10">

      {/* LEFT COLUMN (Flexible) */}
      <div className="flex-1 flex flex-col gap-[24px]">

        {/* Greetings */}
        <div className="w-full h-[248px] bg-[#FFFFFF] rounded-[24px] shadow-sm relative overflow-hidden flex items-center p-8">
          <div className="w-3/5 z-10">
            <h2 className="font-medium text-[#000000] tracking-tight mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', lineHeight: '36px' }}>
              Welcome, Laurel Higher Secondary School Team!
            </h2>
            <p className="font-light text-[#8F8F8F]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
              Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[299px]" style={{ background: "url('/humaaans-research.png') center / contain no-repeat", transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}></div>
        </div>

        {/* Row: Students & Notice Board */}
        <div className="w-full flex flex-row gap-[24px]">
          {/* Students */}
          <div className="w-[415px] shrink-0 h-[280px] bg-[#FFFFFF] rounded-[24px] shadow-sm relative">
            <div className="absolute left-[21px] top-[18px] w-[365px] h-[24px]">
              <div className="absolute left-0 top-0 h-[24px] flex items-center">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px', color: '#000000' }}>Students</span>
              </div>
              <div className="absolute left-[349px] top-[10px] w-[16px] h-[4px] flex justify-between">
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              </div>
            </div>
            <div className="absolute left-[30px] top-[60px] w-[356px] h-[200px]">
              <div className="absolute left-0 top-0 w-[159px] h-[159px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#EDEDED" strokeWidth="12" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#CFCEFF" strokeWidth="12" strokeDasharray="263.89" strokeDashoffset="124.0" strokeLinecap="round" />
                </svg>
                <div className="absolute left-[33px] top-[59px] w-[42px] h-[42px] flex justify-center items-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#CFCEFF">
                    <circle cx="12" cy="5" r="2.5" />
                    <path d="M15 9H9a1 1 0 00-1 1v6h2v6h4v-6h2v-6a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <div className="absolute left-[70px] top-[69px] flex items-center">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '36px', color: '#000000' }}>53%</span>
                </div>
              </div>
              <div className="absolute left-[197px] top-0 w-[159px] h-[159px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#EDEDED" strokeWidth="12" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#FFED9F" strokeWidth="12" strokeDasharray="263.89" strokeDashoffset="139.8" strokeLinecap="round" />
                </svg>
                <div className="absolute left-[33px] top-[59px] w-[42px] h-[42px] flex justify-center items-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFED9F">
                    <circle cx="12" cy="5" r="2.5" />
                    <path d="M15 9H9a1 1 0 00-1 1v5.5l1.5 5.5h3l1.5-5.5V10a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <div className="absolute left-[70px] top-[68px] flex items-center">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '36px', color: '#000000' }}>47%</span>
                </div>
              </div>
              <div className="absolute left-[26px] top-[181px] w-[304px] h-[19px]">
                <div className="absolute left-0 top-0 w-[108px] h-[19px] flex items-center">
                  <div className="w-[9px] h-[9px] bg-[#CFCEFF] rounded-full absolute left-0"></div>
                  <span className="absolute left-[13px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '19px', color: '#474747' }}>3,178</span>
                </div>
                <div className="absolute left-[197px] top-0 w-[107px] h-[19px] flex items-center">
                  <div className="w-[9px] h-[9px] bg-[#FFED9F] rounded-full absolute left-0"></div>
                  <span className="absolute left-[13px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '19px', color: '#474747' }}>2,731</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notice Board */}
          <div className="flex-1 min-w-[333px] h-[280px] bg-[#FFFFFF] rounded-[24px] shadow-sm relative">
            <div className="absolute left-[16px] top-[19px] right-[16px] h-[26px] flex justify-between items-center">
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px', color: '#000000' }}>Notice Board</span>
              <button className="text-[10px] text-[#969696] underline hover:text-slate-600">view all</button>
            </div>
            <div className="absolute left-[16px] top-[62px] right-[16px] h-[153px] flex flex-col gap-[14px] overflow-y-auto custom-scrollbar">
              <div className="w-full h-[70px] border border-[#C9C9C9] rounded-[10px] relative shrink-0">
                <div className="absolute left-[11px] top-[10px] w-[42px] h-[48px] bg-[#FFED9F] rounded-[5px] flex items-center justify-center text-[#FCA52B]">
                  <Bell size={24} />
                </div>
                <div className="absolute left-[64px] top-[9px] font-normal text-[14px] leading-[17px] text-[#000000]">Sports Day Announcement</div>
                <div className="absolute left-[64px] top-[33px] right-[10px] font-normal text-[10px] leading-[12px] text-[#969696]">
                  The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!
                </div>
              </div>
              <div className="w-full h-[69px] border border-[#C9C9C9] rounded-[10px] relative shrink-0">
                <div className="absolute left-[11px] top-[10px] w-[42px] h-[47px] bg-[#D6DAFF] rounded-[5px] flex items-center justify-center text-[#696FC1]">
                  <Bell size={24} />
                </div>
                <div className="absolute left-[64px] top-[9px] font-normal text-[14px] leading-[17px] text-[#000000]">Summer Break Start Date</div>
                <div className="absolute left-[64px] top-[32px] right-[10px] font-normal text-[10px] leading-[12px] text-[#969696]">
                  Summer break begins on May 25, 2024. Have a wonderful holiday!
                </div>
              </div>
            </div>
            <div className="absolute left-[16px] top-[233px] flex gap-[10px]">
              <div className="w-[61px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '10px', color: '#777777' }}>Type@25</span>
              </div>
              <div className="w-[25px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center justify-center cursor-pointer text-[#777777] hover:bg-slate-200 transition-colors">
                <Edit size={14} />
              </div>
              <div className="w-[25px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center justify-center cursor-pointer text-[#777777] hover:bg-slate-200 transition-colors">
                <Trash2 size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Chart */}
        <div className="w-full h-[448px] bg-[#FFFFFF] rounded-[24px] shadow-sm relative pt-[24px] px-[24px] pb-[16px] flex flex-col">
          
          <div className="relative w-full h-[40px] mb-[15px] flex items-center">
            {/* Title */}
            <div className="absolute left-0">
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', color: '#000000' }}>Earnings</span>
            </div>
            
            {/* Legends (Centered) */}
            <div className="w-full flex justify-center items-center gap-[40px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[14px] h-[14px] bg-[#60A5FA] rounded-full"></div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14.8px', color: '#484848' }}>Income</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[14px] h-[14px] bg-[#C084FC] rounded-full"></div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14.1px', color: '#484848' }}>Expense</span>
              </div>
            </div>

            {/* Menu dots */}
            <div className="absolute right-0">
              <div className="w-[16px] h-[4px] flex justify-between items-center cursor-pointer">
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} style={{ outline: 'none' }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F4F6FB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#3C3C3C', fontSize: 14.5, fontWeight: 600, fontFamily: 'Inter, sans-serif' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#3C3C3C', fontSize: 14.8, fontWeight: 600, fontFamily: 'Inter, sans-serif' }} dx={-10} tickFormatter={(val) => val === 0 ? '0' : `${val}K`} ticks={[0, 250, 500, 750, 1000]} domain={[0, 1000]} />
                <Tooltip cursor={false} content={<CustomEarningsTooltip />} />
                <Line type="monotone" dataKey="income" stroke="#60A5FA" strokeWidth={3} dot={false} activeDot={{ r: 6, strokeWidth: 0, outline: 'none' }} />
                <Line type="monotone" dataKey="expense" stroke="#C084FC" strokeWidth={3} dot={false} activeDot={{ r: 6, strokeWidth: 0, outline: 'none' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (Fixed Width) */}
      <div className="w-full xl:w-[505px] shrink-0 flex flex-col gap-[24px]">

        {/* Row: Head Count & Calendar */}
        <div className="flex flex-row gap-[14px]">
          {/* Head Count */}
          <div className="w-[185px] flex flex-col gap-[11px]">
            <div className="bg-[#F8E38D] rounded-[20px] w-full h-[108px] relative">
              <span className="absolute left-[17px] top-[17px] font-light text-[20px] text-[#000000] leading-[24px]">Students</span>
              <div className="absolute right-[18px] top-[25px] w-[16px] h-[4px] flex justify-between">
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              </div>
              <div className="absolute left-[17px] top-[53px] font-medium text-[34px] text-[#000000] leading-[41px]">5,909</div>
            </div>
            <div className="bg-[#E2D8FC] rounded-[20px] w-full h-[108px] relative">
              <span className="absolute left-[13px] top-[18px] font-light text-[20px] text-[#000000] leading-[24px]">Teachers</span>
              <div className="absolute right-[12px] top-[25px] w-[16px] h-[4px] flex justify-between">
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              </div>
              <div className="absolute left-[13px] top-[54px] font-medium text-[34px] text-[#000000] leading-[41px]">60</div>
            </div>
            <div className="bg-[#F8E38D] rounded-[20px] w-full h-[108px] relative">
              <span className="absolute left-[17px] top-[17px] font-light text-[20px] text-[#000000] leading-[24px]">Employee</span>
              <div className="absolute right-[18px] top-[25px] w-[16px] h-[4px] flex justify-between">
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#121212] rounded-full"></div>
              </div>
              <div className="absolute left-[17px] top-[54px] font-medium text-[34px] text-[#000000] leading-[41px]">100</div>
            </div>
          </div>

          {/* Calendar Widget */}
          <div className="flex-1 bg-[#FFFFFF] rounded-[24px] relative p-6 flex flex-col">
            <div className="w-full flex justify-between items-start mb-4">
              <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0 cursor-pointer">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="#B5BEC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 1L2 6l5 5" /></svg>
              </div>
              <div className="text-center" style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '14px', lineHeight: '14px', color: '#4A5660' }}>
                September 2021
              </div>
              <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0 cursor-pointer">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="#B5BEC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l5 5-5 5" /></svg>
              </div>
            </div>
            <div className="w-full flex justify-between mb-4">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => (
                <div key={i} className="flex-1 flex justify-center">
                  <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#B5BEC6' }}>{day}</span>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-[8px] flex-1">
              <div className="w-full flex justify-between">
                {['29', '30', '31', '1', '2', '3', '4'].map((date, i) => (
                  <div key={i} className="w-[30px] h-[30px] flex items-center justify-center"><span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: i < 3 ? '#B5BEC6' : '#4A5660' }}>{date}</span></div>
                ))}
              </div>
              <div className="w-full flex justify-between">
                {['5', '6', '7', '8', '9', '10', '11'].map((date, i) => (
                  <div key={i} className="w-[30px] h-[30px] flex items-center justify-center"><span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: '#4A5660' }}>{date}</span></div>
                ))}
              </div>
              <div className="w-full flex justify-between">
                {['12', '13', '14', '15', '16', '17', '18'].map((date, i) => (
                  <div key={i} className="w-[30px] h-[30px] flex items-center justify-center"><span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: '#4A5660' }}>{date}</span></div>
                ))}
              </div>
              <div className="w-full flex justify-between">
                {['19', '20', '21', '22', '23', '24', '25'].map((date, i) => {
                  const isActive = date === '19';
                  return (
                    <div key={i} className={`w-[30px] h-[30px] flex items-center justify-center ${isActive ? 'bg-[#F04D23] rounded-[29px]' : ''}`}>
                      <span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: isActive ? '#FFFFFF' : '#4A5660' }}>{date}</span>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-between">
                {['26', '27', '28', '29', '30', '1', '2'].map((date, i) => (
                  <div key={i} className="w-[30px] h-[30px] flex items-center justify-center"><span style={{ fontFamily: 'Avenir Next LT Pro, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '18px', color: i >= 5 ? '#B5BEC6' : '#4A5660' }}>{date}</span></div>
                ))}
              </div>
            </div>
            <div className="w-[120px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center justify-center mt-auto cursor-pointer hover:bg-slate-200 transition-colors">
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '14px', color: '#777777' }}>Manage Calendar</span>
            </div>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="w-full h-[179px] bg-[#FFFFFF] rounded-[24px] shadow-sm relative">

          {/* Header */}
          <div className="absolute left-[19px] top-[18px] right-[19px] h-[28px] flex justify-between items-center">
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', color: '#000000' }}>
              Financial Overview
            </span>
            <div className="flex gap-[8px]">
              <div className="w-[96px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center justify-between px-[10px] cursor-pointer">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#777777' }}>2023-2024</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6E6D71" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
              <div className="w-[66px] h-[27px] bg-[#F5F4F9] rounded-[6px] flex items-center justify-between px-[10px] cursor-pointer">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#777777' }}>Annual</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6E6D71" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="absolute left-[19px] top-[55px] right-[19px] h-[106px] flex gap-[16px]">

            {/* Income Box */}
            <div className="w-[226px] h-[106px] bg-[#C3EBFA] rounded-[13px] relative flex-1">
              <div className="absolute left-[18px] top-[14px] right-[15px] h-[22px] flex justify-between items-center">
                {/* Sparkline chart SVG */}
                <svg width="49" height="22" viewBox="0 0 49 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 19.5C9.5 19.5 14.5 8.5 21.5 11.5C28.5 14.5 35.5 3.5 47.5 2.5" stroke="#00997E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="w-[43px] h-[16px] bg-[#FFFFFF] rounded-[32px] flex items-center justify-center gap-[2px]">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#00997E" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '8px', color: '#00997E' }}>12%</span>
                </div>
              </div>
              <div className="absolute left-0 top-[47px] w-full flex flex-col items-center">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '24px', lineHeight: '29px', color: '#000000' }}>
                  ₱29,545,000
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '19px', color: '#000000', marginTop: '3px' }}>
                  Total Income
                </span>
              </div>
            </div>

            {/* Expense Box */}
            <div className="w-[226px] h-[106px] bg-[#C3EBFA] rounded-[13px] relative flex-1">
              <div className="absolute left-[18px] top-[14px] right-[15px] h-[22px] flex justify-between items-center">
                {/* Sparkline chart SVG */}
                <svg width="49" height="22" viewBox="0 0 49 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 18.5C9.5 18.5 14.5 9.5 21.5 13.5C28.5 17.5 35.5 5.5 47.5 3.5" stroke="#00997E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="w-[43px] h-[16px] bg-[#FFFFFF] rounded-[32px] flex items-center justify-center gap-[2px]">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#00997E" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '8px', color: '#00997E' }}>3.5%</span>
                </div>
              </div>
              <div className="absolute left-0 top-[47px] w-full flex flex-col items-center">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '24px', lineHeight: '29px', color: '#000000' }}>
                  ₱19,291,266
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '19px', color: '#000000', marginTop: '3px' }}>
                  Total Expenses
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Fee Status */}
        <div className="w-full h-[216px] bg-[#FFFFFF] rounded-[24px] shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Fee Status</h3>
            <MoreHorizontal size={20} className="text-slate-400" />
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {feeStatus.map(fee => (
              <div key={fee.id} className="flex justify-between items-center border border-slate-100 rounded-xl p-2.5">
                <span className="text-base font-bold text-slate-800">{fee.amount}</span>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${fee.color}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  {fee.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="w-full h-[216px] bg-[#FFFFFF] rounded-[24px] shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-slate-800">Messages</h3>
            <MoreHorizontal size={20} className="text-slate-400" />
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {messages.map(msg => (
              <div key={msg.id} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${msg.color}`}>
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
