import React, { useState } from 'react';

export const ProblemSolving = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    bloodGroup: '',
  });

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    const formatted =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    setFormData({ ...formData, fullName: formatted });
  };

  const handleBloodGroupChange = (e) => {
    const value = e.target.value.toUpperCase();
    setFormData({ ...formData, bloodGroup: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-300 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form</h2>

        <form className="form-container space-y-5">
          <div className="form-group">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleFullNameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g., A+, B-, O+"
              value={formData.bloodGroup}
              onChange={handleBloodGroupChange}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-xl hover:bg-indigo-700 transition duration-200 shadow-md"
              onClick={(e) => {
                e.preventDefault();
                console.log(formData); // Submit logic
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
