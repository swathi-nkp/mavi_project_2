import React from 'react';

const GroupCard = ({ name, icon, summary }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 gap-4">
      <div className="flex items-center justify-center w-14 h-14 text-2xl bg-gray-50 rounded-full shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-gray-900 font-bold text-lg leading-tight">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mt-0.5">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default GroupCard;
