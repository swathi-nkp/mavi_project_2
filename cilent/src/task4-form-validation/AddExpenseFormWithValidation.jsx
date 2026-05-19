import React, { useState } from 'react';

const AddExpenseFormWithValidation = () => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: ''
  });

  const [errors, setErrors] = useState({
    amount: '',
    description: '',
    date: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error and success messages when user starts typing
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { amount: '', description: '', date: '' };

    // Validate amount (cannot be empty, negative, or zero)
    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
      isValid = false;
    } else if (Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount cannot be negative or zero';
      isValid = false;
    }

    // Validate description (cannot be empty or blank spaces)
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required and cannot be blank';
      isValid = false;
    }

    // Validate date (cannot be empty)
    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccessMessage('Expense added successfully!');
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Add Expense</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Amount Input */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₹)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${
              errors.amount 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }`}
            placeholder="Enter amount"
          />
          {errors.amount && (
            <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${
              errors.description 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }`}
            placeholder="Enter description"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        {/* Date Input */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${
              errors.date 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Expense
        </button>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 text-sm font-medium mt-2 text-center bg-green-50 py-2 rounded-lg border border-green-100">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddExpenseFormWithValidation;
