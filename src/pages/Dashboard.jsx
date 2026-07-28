import { useAuth } from '../context/AuthContext';
import { MOCK_DASHBOARD_STATS } from '../data/mockData';
import { Users, GraduationCap, Banknote, LineChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const gradeDistribution = [
  { name: 'Grade 7', students: 250 },
  { name: 'Grade 8', students: 220 },
  { name: 'Grade 9', students: 280 },
  { name: 'Grade 10', students: 240 },
  { name: 'Grade 11', students: 150 },
  { name: 'Grade 12', students: 110 },
];

const recentTransactions = [
  { id: 'TXN-1001', student: 'Jose Rizal', amount: 5000, date: '2026-07-28', status: 'Completed' },
  { id: 'TXN-1002', student: 'Andres Bonifacio', amount: 2500, date: '2026-07-28', status: 'Completed' },
  { id: 'TXN-1003', student: 'Emilio Aguinaldo', amount: 10000, date: '2026-07-27', status: 'Pending' },
];

const AdminDashboard = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard icon={<GraduationCap />} title="Total Students" value={MOCK_DASHBOARD_STATS.totalStudents} color="text-blue-600" bg="bg-blue-100" />
      <StatCard icon={<Users />} title="Active Teachers" value={MOCK_DASHBOARD_STATS.activeTeachers} color="text-purple-600" bg="bg-purple-100" />
      <StatCard icon={<Banknote />} title="Today's Collection" value={`₱${MOCK_DASHBOARD_STATS.todayCollection.toLocaleString()}`} color="text-green-600" bg="bg-green-100" />
      <StatCard icon={<LineChart />} title="Enrollment Rate" value={`${MOCK_DASHBOARD_STATS.enrollmentRate}%`} color="text-orange-600" bg="bg-orange-100" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Grade Level Distribution</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gradeDistribution}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
              <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Transactions</h3>
        <div className="flex-1 overflow-auto">
          <ul className="space-y-4">
            {recentTransactions.map(txn => (
              <li key={txn.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
                <div>
                  <p className="font-semibold text-slate-800">{txn.student}</p>
                  <p className="text-xs text-slate-500">{txn.date} • {txn.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">₱{txn.amount.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${txn.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {txn.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const StudentDashboard = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Welcome back, Jose Rizal!</h2>
      <p className="text-blue-100 mb-6">Grade 10 - Section Luna</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-blue-100 text-sm mb-1">Current GPA</p>
          <p className="text-3xl font-bold">92.5</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-blue-100 text-sm mb-1">Attendance</p>
          <p className="text-3xl font-bold">98%</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-blue-100 text-sm mb-1">Outstanding Balance</p>
          <p className="text-3xl font-bold">₱5,000</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-blue-100 text-sm mb-1">Next Class</p>
          <p className="text-xl font-bold truncate">Mathematics</p>
          <p className="text-xs text-blue-200">10:00 AM</p>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Today's Schedule</h3>
        <ul className="space-y-3">
          {['08:00 AM - Science', '10:00 AM - Mathematics', '01:00 PM - English', '03:00 PM - History'].map((cls, i) => (
            <li key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
              <p className="font-medium text-slate-700">{cls}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Announcements</h3>
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
            <h4 className="font-bold text-orange-800">No Classes Tomorrow</h4>
            <p className="text-sm text-orange-700 mt-1">Due to the upcoming national holiday, all classes are suspended.</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <h4 className="font-bold text-blue-800">Quarterly Exams Schedule</h4>
            <p className="text-sm text-blue-700 mt-1">Exams will begin next Monday. Check your detailed schedule in the portal.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, title, value, color, bg }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bg} ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();
  
  const isStudentOrParent = user?.role === 'Student' || user?.role === 'Parent';

  return isStudentOrParent ? <StudentDashboard /> : <AdminDashboard />;
};

export default Dashboard;
