import { useState } from 'react';
import { Search, Printer, DollarSign, CheckCircle, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Finance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock Data
  const student = {
    id: 'LRN-101',
    name: 'Jose Rizal',
    grade: 'Grade 10 - Luna',
    totalFees: 15000,
    paid: 10000,
    balance: 5000,
  };

  const paymentHistory = [
    { orNumber: 'OR-5501', date: '2026-06-01', amount: 5000, particular: 'Downpayment', status: 'Cleared' },
    { orNumber: 'OR-6102', date: '2026-07-15', amount: 5000, particular: 'First Quarter Installment', status: 'Cleared' },
  ];

  const feeBreakdown = [
    { name: 'Tuition Fee', amount: 10000 },
    { name: 'Miscellaneous', amount: 2500 },
    { name: 'Laboratory', amount: 1500 },
    { name: 'Library', amount: 1000 },
  ];

  const [paymentAmount, setPaymentAmount] = useState('');
  const [particular, setParticular] = useState('Second Quarter Installment');

  const generateReceipt = () => {
    if (!paymentAmount) return alert("Please enter payment amount");

    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("OFFICIAL RECEIPT", 105, 20, null, null, "center");
    
    doc.setFontSize(12);
    doc.text("School Management System", 105, 30, null, null, "center");
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
    doc.text(`OR No: OR-${Math.floor(Math.random() * 9000) + 1000}`, 140, 50);
    
    doc.text(`Received from: ${student.name}`, 20, 70);
    doc.text(`The sum of: PHP ${parseFloat(paymentAmount).toLocaleString()}`, 20, 80);
    doc.text(`In payment of: ${particular}`, 20, 90);
    
    doc.text("Cashier Signature: ___________________", 20, 130);
    
    doc.save(`OR_${student.name}_${new Date().getTime()}.pdf`);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Finance & Cashiering</h2>
          <p className="text-slate-500 text-sm">Process student payments, view ledgers, and issue receipts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Search & Student Ledger */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Search size={18} /> Lookup Student Ledger
            </h3>
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Enter Student LRN or Name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg transition-colors">
                Search
              </button>
            </div>

            <div className="mt-8 p-5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-800">{student.name}</h4>
                  <p className="text-sm font-mono text-slate-500">{student.id} • {student.grade}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Outstanding Balance</p>
                  <p className="text-2xl font-bold text-red-600">₱{student.balance.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-3 rounded shadow-sm border border-slate-100">
                  <p className="text-xs text-slate-500">Total Fees</p>
                  <p className="font-semibold">₱{student.totalFees.toLocaleString()}</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm border border-slate-100">
                  <p className="text-xs text-slate-500">Amount Paid</p>
                  <p className="font-semibold text-green-600">₱{student.paid.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-800">Payment History</h3>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">OR Number</th>
                  <th className="px-6 py-3">Particular</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paymentHistory.map((pmt, i) => (
                  <tr key={i}>
                    <td className="px-6 py-3 text-slate-600">{pmt.date}</td>
                    <td className="px-6 py-3 font-mono text-slate-500">{pmt.orNumber}</td>
                    <td className="px-6 py-3 font-medium text-slate-800">{pmt.particular}</td>
                    <td className="px-6 py-3 font-semibold">₱{pmt.amount.toLocaleString()}</td>
                    <td className="px-6 py-3 text-right">
                      <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                        <CheckCircle size={12} /> {pmt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Payment Form & Fee Breakdown */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-blue-600">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <DollarSign size={18} className="text-blue-600" /> Record Payment
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Particular</label>
                <select 
                  value={particular}
                  onChange={(e) => setParticular(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                >
                  <option>Second Quarter Installment</option>
                  <option>Third Quarter Installment</option>
                  <option>Full Payment</option>
                  <option>Field Trip Fee</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Amount (PHP)</label>
                <input 
                  type="number" 
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="e.g. 5000" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
              </div>
              
              <button 
                onClick={generateReceipt}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Printer size={18} /> Print Official Receipt
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FileText size={18} /> Fee Breakdown
            </h3>
            <ul className="space-y-3">
              {feeBreakdown.map((fee, i) => (
                <li key={i} className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">{fee.name}</span>
                  <span className="font-medium text-slate-800">₱{fee.amount.toLocaleString()}</span>
                </li>
              ))}
              <li className="flex justify-between items-center pt-3 border-t border-slate-200 font-bold">
                <span>Total Assessment</span>
                <span>₱15,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
