import React from 'react';

const SummaryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const dummyExpenses = [
    { id: 1, name: "Food & Snacks", amount: "₹150" },
    { id: 2, name: "Travel", amount: "₹200" },
    { id: 3, name: "Equipment", amount: "₹100" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Total Expenses Summary</h2>
        
        <div className="my-6 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Total Amount</p>
          <p className="text-4xl font-extrabold text-blue-600">₹450</p>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">Breakdown</h3>
          <ul className="flex flex-col gap-3">
            {dummyExpenses.map((expense) => (
              <li key={expense.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{expense.name}</span>
                <span className="font-semibold text-gray-900">{expense.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;
