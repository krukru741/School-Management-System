import { useState, useRef } from 'react';
import { Save, Download, Upload, Search, Check, AlertCircle } from 'lucide-react';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const mockStudents = [
  { id: '1', name: 'Jose Rizal', ww1: 20, ww2: 25, pt1: 45, pt2: 48, qe: 45 },
  { id: '2', name: 'Andres Bonifacio', ww1: 18, ww2: 22, pt1: 40, pt2: 42, qe: 38 },
  { id: '3', name: 'Emilio Aguinaldo', ww1: 22, ww2: 20, pt1: 35, pt2: 40, qe: 41 },
];

const MAX_SCORES = {
  ww: 50, // Total Written Works
  pt: 100, // Total Performance Task
  qe: 50, // Total Quarterly Assessment
};

const Grades = () => {
  const [students, setStudents] = useState(mockStudents);
  const [selectedSubject, setSelectedSubject] = useState('Science 10');
  const [selectedQuarter, setSelectedQuarter] = useState('Q1');
  const fileInputRef = useRef(null);

  const calculateDepEdGrade = (student) => {
    // DepEd Component Weights (e.g., Science/Math: WW 20%, PT 60%, QE 20%) 
    // Wait, requirement said WW 25%, PT 50%, QE 25% for a standard subject. Let's use that.
    const wwTotal = student.ww1 + student.ww2;
    const ptTotal = student.pt1 + student.pt2;
    const qeTotal = student.qe;

    const wwPS = (wwTotal / MAX_SCORES.ww) * 100;
    const ptPS = (ptTotal / MAX_SCORES.pt) * 100;
    const qePS = (qeTotal / MAX_SCORES.qe) * 100;

    const initialGrade = (wwPS * 0.25) + (ptPS * 0.50) + (qePS * 0.25);
    
    // Simple transmutation table mockup
    let transmuted = initialGrade;
    if (initialGrade === 100) transmuted = 100;
    else if (initialGrade >= 98.4) transmuted = 99;
    else if (initialGrade >= 96.8) transmuted = 98;
    else if (initialGrade >= 95.2) transmuted = 97;
    else if (initialGrade >= 93.6) transmuted = 96;
    else transmuted = Math.round(initialGrade + 2); // simplified formula

    return transmuted > 100 ? 100 : transmuted < 60 ? 60 : Math.round(transmuted);
  };

  const handleScoreChange = (id, field, value) => {
    const num = parseInt(value) || 0;
    setStudents(students.map(s => s.id === id ? { ...s, [field]: num } : s));
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(`DepEd Class Register (SF1) - ${selectedSubject} - ${selectedQuarter}`, 14, 15);
    
    const tableColumn = ["Student Name", "WW (25%)", "PT (50%)", "QA (25%)", "Initial", "Transmuted (Final)"];
    const tableRows = [];

    students.forEach(student => {
      const ww = student.ww1 + student.ww2;
      const pt = student.pt1 + student.pt2;
      const qa = student.qe;
      const final = calculateDepEdGrade(student);
      
      tableRows.push([
        student.name,
        `${ww}/${MAX_SCORES.ww}`,
        `${pt}/${MAX_SCORES.pt}`,
        `${qa}/${MAX_SCORES.qe}`,
        ((ww/MAX_SCORES.ww*25) + (pt/MAX_SCORES.pt*50) + (qa/MAX_SCORES.qe*25)).toFixed(2),
        final
      ]);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });
    
    doc.save(`SF1_${selectedSubject}_${selectedQuarter}.pdf`);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const importedData = results.data
            .filter(row => row.id && row.name)
            .map(row => ({
              id: row.id,
              name: row.name,
              ww1: parseInt(row.ww1) || 0,
              ww2: parseInt(row.ww2) || 0,
              pt1: parseInt(row.pt1) || 0,
              pt2: parseInt(row.pt2) || 0,
              qe: parseInt(row.qe) || 0
            }));
          if (importedData.length > 0) {
            setStudents(importedData);
            alert("Grades successfully imported!");
          }
        },
        error: (error) => {
          console.error("Error parsing CSV", error);
          alert("Error parsing CSV file.");
        }
      });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">DepEd E-Class Record</h2>
          <p className="text-slate-500 text-sm">Compute grades based on WW 25%, PT 50%, QE 25%</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
          />
          <button onClick={() => fileInputRef.current?.click()} className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
            <Upload size={18} />
            <span>Import CSV</span>
          </button>
          <button onClick={exportPDF} className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
            <Download size={18} />
            <span>Export SF1 (PDF)</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
            <Save size={18} />
            <span>Save Draft</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-wrap gap-4 bg-slate-50/50">
          <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
            <option>Science 10</option>
            <option>Mathematics 10</option>
            <option>English 10</option>
          </select>
          <select value={selectedQuarter} onChange={e => setSelectedQuarter(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
            <option>Q1</option>
            <option>Q2</option>
            <option>Q3</option>
            <option>Q4</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th rowSpan="2" className="px-4 py-3 border-r border-slate-700">Learner's Name</th>
                <th colSpan="3" className="px-4 py-2 text-center border-b border-r border-slate-700 bg-blue-900">Written Works (25%)</th>
                <th colSpan="3" className="px-4 py-2 text-center border-b border-r border-slate-700 bg-purple-900">Performance Tasks (50%)</th>
                <th colSpan="2" className="px-4 py-2 text-center border-b border-r border-slate-700 bg-green-900">Quarterly (25%)</th>
                <th rowSpan="2" className="px-4 py-3 text-center">Final Grade</th>
                <th rowSpan="2" className="px-4 py-3 text-center">Remarks</th>
              </tr>
              <tr className="bg-slate-700 text-slate-200 text-xs">
                <th className="px-3 py-2 text-center border-r border-slate-600 bg-blue-800">1 (25)</th>
                <th className="px-3 py-2 text-center border-r border-slate-600 bg-blue-800">2 (25)</th>
                <th className="px-3 py-2 text-center font-bold border-r border-slate-600 bg-blue-950">Total</th>
                
                <th className="px-3 py-2 text-center border-r border-slate-600 bg-purple-800">1 (50)</th>
                <th className="px-3 py-2 text-center border-r border-slate-600 bg-purple-800">2 (50)</th>
                <th className="px-3 py-2 text-center font-bold border-r border-slate-600 bg-purple-950">Total</th>
                
                <th className="px-3 py-2 text-center border-r border-slate-600 bg-green-800">Score (50)</th>
                <th className="px-3 py-2 text-center font-bold border-r border-slate-600 bg-green-950">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {students.map(student => {
                const wwTotal = student.ww1 + student.ww2;
                const ptTotal = student.pt1 + student.pt2;
                const finalGrade = calculateDepEdGrade(student);
                const passed = finalGrade >= 75;

                return (
                  <tr key={student.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-200">{student.name}</td>
                    
                    {/* Written Works */}
                    <td className="px-2 py-2 border-r border-slate-200 text-center bg-blue-50/30">
                      <input type="number" min="0" max="25" value={student.ww1} onChange={(e) => handleScoreChange(student.id, 'ww1', e.target.value)} className="w-12 text-center border border-slate-300 rounded p-1 focus:ring-1 focus:ring-blue-500" />
                    </td>
                    <td className="px-2 py-2 border-r border-slate-200 text-center bg-blue-50/30">
                      <input type="number" min="0" max="25" value={student.ww2} onChange={(e) => handleScoreChange(student.id, 'ww2', e.target.value)} className="w-12 text-center border border-slate-300 rounded p-1 focus:ring-1 focus:ring-blue-500" />
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-slate-700 border-r border-slate-200 bg-blue-100/50">{wwTotal}</td>
                    
                    {/* Performance Tasks */}
                    <td className="px-2 py-2 border-r border-slate-200 text-center bg-purple-50/30">
                      <input type="number" min="0" max="50" value={student.pt1} onChange={(e) => handleScoreChange(student.id, 'pt1', e.target.value)} className="w-12 text-center border border-slate-300 rounded p-1 focus:ring-1 focus:ring-purple-500" />
                    </td>
                    <td className="px-2 py-2 border-r border-slate-200 text-center bg-purple-50/30">
                      <input type="number" min="0" max="50" value={student.pt2} onChange={(e) => handleScoreChange(student.id, 'pt2', e.target.value)} className="w-12 text-center border border-slate-300 rounded p-1 focus:ring-1 focus:ring-purple-500" />
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-slate-700 border-r border-slate-200 bg-purple-100/50">{ptTotal}</td>
                    
                    {/* Quarterly */}
                    <td className="px-2 py-2 border-r border-slate-200 text-center bg-green-50/30">
                      <input type="number" min="0" max="50" value={student.qe} onChange={(e) => handleScoreChange(student.id, 'qe', e.target.value)} className="w-12 text-center border border-slate-300 rounded p-1 focus:ring-1 focus:ring-green-500" />
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-slate-700 border-r border-slate-200 bg-green-100/50">{student.qe}</td>

                    {/* Final */}
                    <td className="px-4 py-3 text-center font-bold text-lg text-slate-800">{finalGrade}</td>
                    <td className="px-4 py-3 text-center">
                      {passed ? (
                        <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded text-xs">PASSED</span>
                      ) : (
                        <span className="text-red-600 font-bold bg-red-100 px-2 py-1 rounded text-xs">FAILED</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Grades;
