import React, { useState } from 'react';
import GroupCard from './task1-group-card/GroupCard';
import AddExpenseForm from './task2-expense-form/AddExpenseForm';
import SummaryModal from './task3-summary-modal/SummaryModal';
import AddExpenseFormWithValidation from './task4-form-validation/AddExpenseFormWithValidation';
import UserProfile from './task5-user-profile/UserProfile';

// Colourful badge for each task heading
const TaskBadge = ({ number, color }) => {
  const colors = {
    violet: 'from-violet-500 to-purple-600 shadow-violet-200',
    rose:   'from-rose-500 to-pink-600 shadow-rose-200',
    sky:    'from-sky-500 to-cyan-600 shadow-sky-200',
    amber:  'from-amber-500 to-orange-600 shadow-amber-200',
  };
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${colors[color]} text-white text-sm font-bold shadow-md`}>
      {number}
    </span>
  );
};

function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex flex-col items-center py-16 px-6 gap-10 relative">
      
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-violet-600 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* User Profile pill */}
      <UserProfile />

      {/* Page title */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent tracking-tight">
          MaVi Dashboard
        </h1>
        <p className="text-slate-400 mt-2 text-sm">Your expense management hub</p>
      </div>

      {/* Task 1 */}
      <section className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <TaskBadge number="1" color="violet" />
          <h2 className="text-lg font-bold text-violet-300">Group Card</h2>
        </div>
        <div className="rounded-2xl ring-1 ring-violet-500/20 bg-white/5 backdrop-blur-sm p-4">
          <GroupCard
            name="CSK Cricket Team"
            icon="🏏"
            summary="Ticket fees"
          />
        </div>
      </section>

      {/* Task 2 */}
      <section className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <TaskBadge number="2" color="rose" />
          <h2 className="text-lg font-bold text-rose-300">Add Expense</h2>
        </div>
        <div className="rounded-2xl ring-1 ring-rose-500/20 bg-white/5 backdrop-blur-sm p-4">
          <AddExpenseForm />
        </div>
      </section>

      {/* Task 3 */}
      <section className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <TaskBadge number="3" color="sky" />
          <h2 className="text-lg font-bold text-sky-300">Expense Summary</h2>
        </div>
        <div className="rounded-2xl ring-1 ring-sky-500/20 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center gap-4">
          <p className="text-slate-300 text-center text-sm">
            Click the button below to view the total expenses summary.
          </p>
          <button
            onClick={() => setIsSummaryOpen(true)}
            className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg shadow-sky-900/40 transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            📊 Expenses Summary
          </button>
        </div>
      </section>

      {/* Task 4 */}
      <section className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <TaskBadge number="4" color="amber" />
          <h2 className="text-lg font-bold text-amber-300">Validated Expense Form</h2>
        </div>
        <div className="rounded-2xl ring-1 ring-amber-500/20 bg-white/5 backdrop-blur-sm p-4">
          <AddExpenseFormWithValidation />
        </div>
      </section>

      {/* Modal */}
      <SummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
      />
    </div>
  );
}

export default App;
