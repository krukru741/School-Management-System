import { useState } from 'react';
import { Search, Mail, Phone, BookOpen, X } from 'lucide-react';

const mockTeachers = [
  { id: 'EMP-001', name: 'Mr. Juan Dela Cruz', subjects: ['Mathematics 9', 'Mathematics 10'], sections: ['Luna', 'Mabini'], status: 'Active', email: 'juan.delacruz@school.edu', phone: '0917 111 2222' },
  { id: 'EMP-002', name: 'Ms. Maria Clara', subjects: ['Science 10', 'Biology 11'], sections: ['Luna', 'Rizal'], status: 'Active', email: 'maria.clara@school.edu', phone: '0917 333 4444' },
  { id: 'EMP-003', name: 'Mrs. Gabriela Silang', subjects: ['Araling Panlipunan 9'], sections: ['Mabini'], status: 'On Leave', email: 'gabriela.silang@school.edu', phone: '0917 555 6666' },
  { id: 'EMP-004', name: 'Mr. Antonio Luna', subjects: ['Physical Education 10'], sections: ['Luna', 'Mabini', 'Rizal'], status: 'Active', email: 'antonio.luna@school.edu', phone: '0917 777 8888' },
];

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const filteredTeachers = mockTeachers.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.subjects.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Teachers & Staff</h2>
          <p className="text-slate-500 text-sm">Employee directory and subject assignments</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map(teacher => (
            <div 
              key={teacher.id} 
              onClick={() => setSelectedTeacher(teacher)}
              className="group border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                  {teacher.name.split(' ').slice(1).join(' ').charAt(0) || teacher.name.charAt(0)}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${teacher.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-orange-100 text-orange-700 border-orange-200'}`}>
                  {teacher.status}
                </span>
              </div>
              
              <h3 className="font-bold text-slate-800 text-lg mb-1">{teacher.name}</h3>
              <p className="text-slate-500 text-sm font-mono mb-4">{teacher.id}</p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <BookOpen size={16} className="mt-0.5 text-slate-400 shrink-0" />
                  <span className="line-clamp-2">{teacher.subjects.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail size={16} className="text-slate-400 shrink-0" />
                  <span className="truncate">{teacher.email}</span>
                </div>
              </div>
            </div>
          ))}
          {filteredTeachers.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500">
              No teachers found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Employee Profile</h3>
              <button onClick={() => setSelectedTeacher(null)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-2xl border-2 border-purple-200">
                  {selectedTeacher.name.split(' ').slice(1).join(' ').charAt(0) || selectedTeacher.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{selectedTeacher.name}</h3>
                  <p className="text-slate-500 font-mono text-sm">{selectedTeacher.id}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-500 text-sm font-medium">Status</span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${selectedTeacher.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {selectedTeacher.status}
                  </span>
                </div>
                
                <div className="space-y-3 p-4 border border-slate-100 rounded-lg">
                  <h4 className="font-semibold text-slate-800 border-b pb-2">Contact Information</h4>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-slate-400" />
                    <span className="text-slate-700">{selectedTeacher.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-slate-400" />
                    <span className="text-slate-700">{selectedTeacher.phone}</span>
                  </div>
                </div>

                <div className="space-y-3 p-4 border border-slate-100 rounded-lg">
                  <h4 className="font-semibold text-slate-800 border-b pb-2">Academic Assignments</h4>
                  <div>
                    <span className="block text-xs font-medium text-slate-500 mb-1">Subjects Handled:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.subjects.map(sub => (
                        <span key={sub} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs border border-blue-100">{sub}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="block text-xs font-medium text-slate-500 mb-1">Advisory / Sections:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.sections.map(sec => (
                        <span key={sec} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">{sec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
