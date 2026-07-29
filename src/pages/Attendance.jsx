import { useState } from 'react';
import { CalendarDays, CheckCircle, XCircle, Clock, Save, Filter, FileText } from 'lucide-react';

const mockStudents = [
  { id: '1', name: 'Jose Rizal', status: 'Present' },
  { id: '2', name: 'Andres Bonifacio', status: 'Absent' },
  { id: '3', name: 'Emilio Aguinaldo', status: 'Late' },
  { id: '4', name: 'Apolinario Mabini', status: 'Excused' },
  { id: '5', name: 'Gabriela Silang', status: null }, // unrecorded
];

const Attendance = () => {
  const [students, setStudents] = useState(mockStudents);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);

  const handleStatusChange = (id, newStatus) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const markAll = (status) => {
    setStudents(students.map(s => ({ ...s, status })));
  };

  const getStatusColor = (status, selectedStatus) => {
    if (status !== selectedStatus) return 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50';
    
    switch(status) {
      case 'Present': return 'bg-green-100 border-green-500 text-green-700 font-semibold shadow-inner';
      case 'Absent': return 'bg-red-100 border-red-500 text-red-700 font-semibold shadow-inner';
      case 'Late': return 'bg-orange-100 border-orange-500 text-orange-700 font-semibold shadow-inner';
      case 'Excused': return 'bg-blue-100 border-blue-500 text-blue-700 font-semibold shadow-inner';
      default: return 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Class Attendance</h2>
          <p className="text-slate-500 text-sm">Record and monitor daily student attendance</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
          <Save size={18} />
          <span>Save Attendance</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-wrap items-center gap-4 bg-slate-50/50 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-3 py-2 border border-slate-300 rounded-lg shadow-sm">
              <CalendarDays size={18} className="text-slate-500" />
              <input 
                type="date" 
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="focus:outline-none text-sm text-slate-700 font-medium"
              />
            </div>
            <div className="flex items-center gap-2">
              <select className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white shadow-sm">
                <option>Grade 10 - Luna</option>
                <option>Grade 10 - Mabini</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500 mr-2">Mark All As:</span>
            <button onClick={() => markAll('Present')} className="px-3 py-1.5 rounded-md border border-slate-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors">Present</button>
            <button onClick={() => markAll('Absent')} className="px-3 py-1.5 rounded-md border border-slate-200 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors">Absent</button>
          </div>
        </div>
        
        <div className="p-0">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-12 text-center">#</th>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-center text-slate-400">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{student.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleStatusChange(student.id, 'Present')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${getStatusColor('Present', student.status)}`}
                      >
                        <CheckCircle size={16} /> Present
                      </button>
                      <button 
                        onClick={() => handleStatusChange(student.id, 'Absent')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${getStatusColor('Absent', student.status)}`}
                      >
                        <XCircle size={16} /> Absent
                      </button>
                      <button 
                        onClick={() => handleStatusChange(student.id, 'Late')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${getStatusColor('Late', student.status)}`}
                      >
                        <Clock size={16} /> Late
                      </button>
                      <button 
                        onClick={() => handleStatusChange(student.id, 'Excused')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${getStatusColor('Excused', student.status)}`}
                      >
                        <FileText size={16} /> Excused
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
