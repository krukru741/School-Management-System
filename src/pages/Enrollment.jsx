import React, { useState } from 'react';
import { Search, Plus, FileText, CheckCircle, XCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const mockEnrollments = [
  { id: 'ENR-2026-001', studentName: 'Luna, Antonio', grade: 'Grade 10', type: 'New', date: '2026-07-28', status: 'Pending', documents: { birthCert: true, form137: false, goodMoral: true, pictures: true } },
  { id: 'ENR-2026-002', studentName: 'Silang, Gabriela', grade: 'Grade 11', type: 'Transferee', date: '2026-07-27', status: 'Complete', documents: { birthCert: true, form137: true, goodMoral: true, pictures: true } },
  { id: 'ENR-2026-003', studentName: 'Mabini, Apolinario', grade: 'Grade 12', type: 'Returning', date: '2026-07-26', status: 'Incomplete', documents: { birthCert: true, form137: true, goodMoral: false, pictures: false } },
];

const Enrollment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState(null);
  const [isNewEnrollmentModalOpen, setIsNewEnrollmentModalOpen] = useState(false);

  const filteredEnrollments = mockEnrollments.filter(e => 
    e.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    e.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const calculateProgress = (docs) => {
    const total = Object.keys(docs).length;
    const completed = Object.values(docs).filter(v => v).length;
    return (completed / total) * 100;
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Complete': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Incomplete': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Enrollment Management</h2>
          <p className="text-slate-500 text-sm">Process applications and track document requirements</p>
        </div>
        <button 
          onClick={() => setIsNewEnrollmentModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={18} />
          <span>New Enrollment</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center gap-4 bg-slate-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by applicant name or Reference ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Ref ID</th>
                <th className="px-6 py-4">Applicant Name</th>
                <th className="px-6 py-4">Level / Type</th>
                <th className="px-6 py-4">Date Applied</th>
                <th className="px-6 py-4">Document Progress</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEnrollments.map((enr) => {
                const isExpanded = expandedRow === enr.id;
                const progress = calculateProgress(enr.documents);
                return (
                  <React.Fragment key={enr.id}>
                    <tr 
                      className={`hover:bg-slate-50/50 transition-colors cursor-pointer ${isExpanded ? 'bg-blue-50/30' : ''}`}
                      onClick={() => toggleRow(enr.id)}
                    >
                      <td className="px-6 py-4 font-mono text-slate-500 text-xs">{enr.id}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{enr.studentName}</td>
                      <td className="px-6 py-4">
                        <div className="text-slate-800">{enr.grade}</div>
                        <div className="text-xs text-slate-500">{enr.type}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{enr.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-200 rounded-full h-2 max-w-[120px]">
                            <div 
                              className={`h-2 rounded-full ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`} 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-500">{progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(enr.status)}`}>
                          {enr.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-slate-400">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </td>
                    </tr>
                    
                    {/* Expandable Content */}
                    {isExpanded && (
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <td colSpan="7" className="px-6 py-4">
                          <div className="flex gap-8">
                            <div className="flex-1 bg-white p-4 rounded-lg border border-slate-200">
                              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                <FileText size={16} /> Document Checklist
                              </h4>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                  {enr.documents.birthCert ? <CheckCircle size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
                                  <span className={enr.documents.birthCert ? "text-slate-700" : "text-slate-400"}>PSA Birth Certificate</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {enr.documents.form137 ? <CheckCircle size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
                                  <span className={enr.documents.form137 ? "text-slate-700" : "text-slate-400"}>Form 137 / SF10</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {enr.documents.goodMoral ? <CheckCircle size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
                                  <span className={enr.documents.goodMoral ? "text-slate-700" : "text-slate-400"}>Certificate of Good Moral</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {enr.documents.pictures ? <CheckCircle size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
                                  <span className={enr.documents.pictures ? "text-slate-700" : "text-slate-400"}>2x2 ID Pictures (4pcs)</span>
                                </div>
                              </div>
                              <div className="mt-4 pt-3 border-t border-slate-100">
                                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Update Documents</button>
                              </div>
                            </div>
                            
                            <div className="flex-1 bg-white p-4 rounded-lg border border-slate-200">
                              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                <Clock size={16} /> Next Steps
                              </h4>
                              {progress === 100 ? (
                                <div className="space-y-3 text-sm">
                                  <p className="text-slate-600">All documents are complete. Proceed to assessment and payment.</p>
                                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-sm w-full transition-colors">
                                    Approve & Forward to Cashier
                                  </button>
                                </div>
                              ) : (
                                <div className="space-y-3 text-sm">
                                  <p className="text-slate-600">Missing <span className="font-bold text-red-600">{Object.values(enr.documents).filter(v => !v).length}</span> requirements.</p>
                                  <button className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-2 rounded border border-orange-200 w-full transition-colors font-medium">
                                    Send Reminder Email
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Enrollment Modal Placeholder */}
      {isNewEnrollmentModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
           <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
             <h3 className="text-lg font-bold mb-4">Initialize New Enrollment</h3>
             <p className="text-sm text-slate-500 mb-6">Select student type to begin the enrollment process.</p>
             <div className="space-y-3">
               <button className="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700">New Student / Transferee</button>
               <button className="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700">Old / Returning Student</button>
             </div>
             <div className="mt-6 text-right">
               <button onClick={() => setIsNewEnrollmentModalOpen(false)} className="text-slate-500 hover:text-slate-800 text-sm font-medium">Cancel</button>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
