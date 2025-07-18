import React from 'react';
import { Calendar, BookOpen, Clock } from 'lucide-react';

const TimeTableHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6 rounded-t-lg shadow-2xl border-b-4 border-yellow-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white bg-opacity-20 p-3 rounded-full">
            <Calendar className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
              Unified Time Table
            </h1>
            <p className="text-blue-100 font-medium text-lg">B.Tech / M.Tech - Batch 1</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
            <BookOpen className="h-5 w-5 text-yellow-300" />
            <span className="font-bold text-yellow-100">Semester 5</span>
          </div>
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
            <Clock className="h-5 w-5 text-yellow-300" />
            <span className="font-bold text-yellow-100">AY 2025-26 ODD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTableHeader;