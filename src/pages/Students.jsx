import { useState } from 'react';
import { Search, Filter, Eye, X, FileText } from 'lucide-react';

const mockStudents = [
  { id: 'LRN-101', name: 'Jose Rizal', grade: 'Grade 10', section: 'Luna', status: 'Enrolled', balance: 5000 },
  { id: 'LRN-102', name: 'Andres Bonifacio', grade: 'Grade 10', section: 'Luna', status: 'Enrolled', balance: 2500 },
  { id: 'LRN-103', name: 'Emilio Aguinaldo', grade: 'Grade 9', section: 'Mabini', status: 'Pending', balance: 10000 },
  { id: 'LRN-104', name: 'Apolinario Mabini', grade: 'Grade 12', section: 'Rizal', status: 'Enrolled', balance: 0 },
  { id: 'LRN-105', name: 'Gabriela Silang', grade: 'Grade 11', section: 'Bonifacio', status: 'Dropped', balance: 0 },
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = mockStudents.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'All' || s.grade === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Enrolled': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Dropped': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Students (SIS)</h2>
          <p className="text-slate-500 text-sm">Manage student records and profiles</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-wrap items-center gap-4 bg-slate-50/50">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or LRN..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-slate-400" />
            <select 
              value={gradeFilter} 
              onChange={(e) => setGradeFilter(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            >
              <option value="All">All Grades</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">LRN</th>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4">Grade & Section</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer" onClick={() => setSelectedStudent(student)}>
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">{student.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{student.name}</td>
                  <td className="px-6 py-4 text-slate-600">{student.grade} - {student.section}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(student.status)}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 transition-colors rounded-md" onClick={(e) => { e.stopPropagation(); setSelectedStudent(student); }}>
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{selectedStudent.name}</h3>
                  <p className="text-sm font-mono text-slate-500">{selectedStudent.id}</p>
                </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2 border-b pb-2">
                  <FileText size={16} /> Academic Info
                </h4>
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <span className="text-slate-500">Grade Level:</span>
                  <span className="font-medium text-slate-800">{selectedStudent.grade}</span>
                  <span className="text-slate-500">Section:</span>
                  <span className="font-medium text-slate-800">{selectedStudent.section}</span>
                  <span className="text-slate-500">Enrollment Status:</span>
                  <span className={`font-medium ${selectedStudent.status === 'Enrolled' ? 'text-green-600' : 'text-orange-600'}`}>
                    {selectedStudent.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2 border-b pb-2">
                  <FileText size={16} /> Personal & Financial
                </h4>
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <span className="text-slate-500">Guardian:</span>
                  <span className="font-medium text-slate-800">Mrs. Rizal</span>
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-medium text-slate-800">0917 123 4567</span>
                  <span className="text-slate-500">Outstanding Bal:</span>
                  <span className="font-bold text-red-600">₱{selectedStudent.balance.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button className="px-4 py-2 text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                Print Profile
              </button>
              <button onClick={() => setSelectedStudent(null)} className="px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
