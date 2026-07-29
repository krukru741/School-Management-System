import { useAuth } from '../context/AuthContext';
import { Users, GraduationCap, ArrowUpRight, ArrowDownRight, Clock, AlertCircle, MoreHorizontal } from 'lucide-react';
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
        <div className="lg:col-span-2 bg-white rounded-[24px] p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between border border-slate-100">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome, {user?.name}!</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place.
            </p>
          </div>
          {/* Abstract Illustration */}
          <div className="hidden sm:flex w-32 h-32 bg-slate-50 rounded-full items-center justify-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
              <GraduationCap size={40} className="text-blue-300" />
            </div>
          </div>
        </div>

        {/* Stats Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#FDF4D6] rounded-[24px] p-5 shadow-sm flex justify-between items-center flex-1">
            <div>
              <p className="text-[#A1883F] font-medium text-[13px] mb-1">Students</p>
              <h3 className="text-2xl font-bold text-[#5A4810]">5,909</h3>
            </div>
            <MoreHorizontal size={20} className="text-[#A1883F] self-start" />
          </div>
          <div className="bg-[#F0E6FF] rounded-[24px] p-5 shadow-sm flex justify-between items-center flex-1">
            <div>
              <p className="text-[#7C5CA5] font-medium text-[13px] mb-1">Teachers</p>
              <h3 className="text-2xl font-bold text-[#4B3073]">60</h3>
            </div>
            <MoreHorizontal size={20} className="text-[#7C5CA5] self-start" />
          </div>
          <div className="bg-[#FDF4D6] rounded-[24px] p-5 shadow-sm flex justify-between items-center flex-1">
            <div>
              <p className="text-[#A1883F] font-medium text-[13px] mb-1">Employee</p>
              <h3 className="text-2xl font-bold text-[#5A4810]">100</h3>
            </div>
            <MoreHorizontal size={20} className="text-[#A1883F] self-start" />
          </div>
        </div>

        {/* Calendar Widget */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col border border-slate-100 h-full">
          <div className="flex justify-between items-center text-sm font-bold text-slate-700 mb-6 px-1">
            <span className="cursor-pointer text-slate-300 hover:text-slate-500 font-medium text-xs">&lt;</span>
            <span className="text-sm">September 2021</span>
            <span className="cursor-pointer text-slate-300 hover:text-slate-500 font-medium text-xs">&gt;</span>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 text-center text-[9px] font-bold text-slate-300 mb-4">
            <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 text-center text-[12px] font-bold text-slate-700 flex-1 content-start">
            <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
            
            <div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
            
            <div>15</div><div>16</div><div>17</div><div>18</div>
            <div className="relative z-10"><span className="bg-[#EA580C] text-white w-6 h-6 rounded-full flex items-center justify-center mx-auto shadow-sm shadow-orange-200">19</span></div>
            <div>20</div><div>21</div>
            
            <div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div>
            
            <div>29</div><div>30</div><div>31</div>
          </div>
          
          <div className="mt-4 flex">
            <span className="text-[10px] text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors">Manage Calendar</span>
          </div>
        </div>

      </div>

      {/* Second Row: Demographics, Notice Board, Finance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Students Donut */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-slate-800">Students</h3>
            <MoreHorizontal size={20} className="text-slate-400" />
          </div>
          
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-full h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={[{value: 53}, {value: 47}]} cx="25%" cy="50%" innerRadius={35} outerRadius={50} paddingAngle={0} dataKey="value" stroke="none">
                    <Cell fill="#A78BFA" />
                    <Cell fill="#F1F5F9" />
                  </Pie>
                  <Pie data={[{value: 47}, {value: 53}]} cx="75%" cy="50%" innerRadius={35} outerRadius={50} paddingAngle={0} dataKey="value" stroke="none">
                    <Cell fill="#FCD34D" />
                    <Cell fill="#F1F5F9" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="absolute inset-0 flex justify-between px-12 items-center pointer-events-none">
               <span className="font-bold text-lg text-slate-700">53%</span>
               <span className="font-bold text-lg text-slate-700">47%</span>
            </div>
          </div>
          
          <div className="flex justify-between px-10 text-xs text-slate-500 font-medium pb-2">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#A78BFA]"></div>3,178 (Boys)</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#FCD34D]"></div>2,731 (Girls)</div>
          </div>
        </div>

        {/* Notice Board */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Notice Board</h3>
            <button className="text-xs text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">View All</button>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex gap-4 items-start border border-slate-100 p-4 rounded-2xl hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <AlertCircle size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Sports Day Announcement</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-tight">The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-slate-100 p-4 rounded-2xl hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Summer Break Start Date</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-tight">Summer break begins on May 25, 2024. Have a wonderful holiday!</p>
              </div>
            </div>
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
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} dx={-10} tickFormatter={(val) => `${val}K`} />
                <Tooltip cursor={{stroke: '#e2e8f0', strokeWidth: 1}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Line type="monotone" dataKey="income" stroke="#60A5FA" strokeWidth={3} dot={{r:4, strokeWidth:2, fill:'#fff'}} activeDot={{r: 6}} />
                <Line type="monotone" dataKey="expense" stroke="#C084FC" strokeWidth={3} dot={{r:4, strokeWidth:2, fill:'#fff'}} activeDot={{r: 6}} />
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
