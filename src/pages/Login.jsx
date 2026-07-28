import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserCog, UserCheck, Banknote, BookOpen, GraduationCap, Users } from 'lucide-react';

const Login = () => {
  const { loginAsRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    loginAsRole(role);
    navigate('/dashboard'); // redirect to dashboard or appropriate portal
  };

  const roles = [
    { name: 'Super Admin', icon: <UserCog size={32} />, color: 'bg-red-500', desc: 'Full System Access' },
    { name: 'Registrar', icon: <UserCheck size={32} />, color: 'bg-blue-500', desc: 'Enrollment & Records' },
    { name: 'Cashier', icon: <Banknote size={32} />, color: 'bg-green-500', desc: 'Finance & Payments' },
    { name: 'Teacher', icon: <BookOpen size={32} />, color: 'bg-purple-500', desc: 'Classes & Grades' },
    { name: 'Student', icon: <GraduationCap size={32} />, color: 'bg-orange-500', desc: 'Grades & Schedule' },
    { name: 'Parent', icon: <Users size={32} />, color: 'bg-teal-500', desc: 'Student Monitoring' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">School Management System</h1>
        <p className="text-slate-500 text-lg">Demo Environment - Select a role to continue</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {roles.map((role) => (
          <button
            key={role.name}
            onClick={() => handleLogin(role.name)}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center transition-all duration-200 hover:shadow-md hover:-translate-y-1 group"
          >
            <div className={`${role.color} text-white p-4 rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
              {role.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">{role.name}</h3>
            <p className="text-slate-500 text-sm text-center">{role.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Login;
