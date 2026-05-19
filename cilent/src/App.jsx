import React, { useState } from 'react';
import GroupCard from './task1-group-card/GroupCard';
import AddExpenseForm from './task2-expense-form/AddExpenseForm';
import SummaryModal from './task3-summary-modal/SummaryModal';
import AddExpenseFormWithValidation from './task4-form-validation/AddExpenseFormWithValidation';
import UserProfile from './task5-user-profile/UserProfile';

function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6 gap-8 relative">
      <UserProfile />
      
      {/* Task 1 */}
      <div className="w-full max-w-md mt-10">
        <h1 className="text-xl font-bold text-red-600 mb-6">Task 1</h1>
        <GroupCard 
          name="CSK Cricket Team" 
          icon="🏏" 
          summary="Ticket fees" 
        />
      </div>
        
      {/* Task 2 */}
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-red-600 mb-6">Task 2</h1>
        <AddExpenseForm />
      </div>

      {/* Task 3 */}
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-red-600 mb-6">Task 3</h1>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 text-center">Click the button below to view the total expenses summary.</p>
          <button 
            onClick={() => setIsSummaryOpen(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Expenses Summary
          </button>
        </div>
      </div>

      {/* Task 4 */}
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-red-600 mb-6">Task 4</h1>
        <AddExpenseFormWithValidation />
      </div>

      {/* Modal */}
      <SummaryModal 
        isOpen={isSummaryOpen} 
        onClose={() => setIsSummaryOpen(false)} 
      />
    </div>
  );
}

export default App;
