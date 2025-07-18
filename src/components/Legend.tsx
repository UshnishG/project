import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-lg shadow-2xl p-4 border border-gray-700">
      <h3 className="text-lg font-bold text-yellow-300 mb-4 text-center">Legend</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-200">
          <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-600 border border-emerald-400 rounded shadow-lg"></div>
          <span className="text-xs text-gray-200 font-medium">Theory Classes</span>
        </div>
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-200">
          <div className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-400 rounded shadow-lg"></div>
          <span className="text-xs text-gray-200 font-medium">Practical Classes</span>
        </div>
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-200">
          <div className="w-4 h-4 bg-gradient-to-br from-violet-500 to-purple-600 border border-violet-400 rounded shadow-lg"></div>
          <span className="text-xs text-gray-200 font-medium">Lab Sessions</span>
        </div>
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-200">
          <div className="w-4 h-4 bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-500 rounded shadow-lg"></div>
          <span className="text-xs text-gray-200 font-medium">Free Periods</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;