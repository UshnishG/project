import React, { useState } from 'react';
import { TimetableEntry, TimeSlot, Course } from '../types/timetable';
import { Download } from 'lucide-react';

interface TimeTableGridProps {
  timeSlots: TimeSlot[];
  timetableData: TimetableEntry[];
  courses: Course[];
}

const TimeTableGrid: React.FC<TimeTableGridProps> = ({ timeSlots, timetableData, courses }) => {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];

  const getCellEntry = (day: string, period: number): TimetableEntry | undefined => {
    return timetableData.find(entry => entry.day === day && entry.period === period);
  };

  const getCellColor = (type: string, isEmpty: boolean = false): string => {
    if (isEmpty) return 'bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border-slate-500 shadow-md';
    switch (type) {
      case 'theory':
        return 'bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 border-emerald-400 shadow-lg text-white';
      case 'practical':
        return 'bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-cyan-400 shadow-lg text-white';
      case 'lab':
        return 'bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 border-violet-400 shadow-lg text-white';
      default:
        return 'bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border-slate-500 shadow-md';
    }
  };

  const getCourseDetails = (courseCode: string) => {
    return courses.find(course => course.title === courseCode);
  };

  const formatTime = (time: string): string => {
    // Simply return the time as is (24-hour format without AM/PM)
    return time;
  };

  const downloadAsImage = () => {
    const table = document.getElementById('timetable-grid');
    if (!table) return;

    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = table.getBoundingClientRect();
    canvas.width = rect.width * 2; // Higher resolution
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Convert table to image using html2canvas-like approach
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(table, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      }).then((canvas) => {
        // Create download link
        const link = document.createElement('a');
        link.download = 'timetable.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.9);
        link.click();
      });
    }).catch(() => {
      // Fallback: open print dialog
      window.print();
    });
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-b-lg shadow-2xl overflow-hidden border border-gray-700">
      <div className="flex justify-end p-2 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-slate-800">
        <button
          onClick={downloadAsImage}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg transform hover:scale-105 text-sm"
        >
          <Download className="h-3 w-3" />
          <span>Download</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table id="timetable-grid" className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-gray-800 to-slate-800">
              <th className="border border-gray-600 p-2 text-left font-bold text-gray-100 min-w-[80px] bg-gradient-to-br from-gray-700 to-slate-700 text-sm">
                Time / Day
              </th>
              {timeSlots.map((slot) => (
                <th key={slot.period} className="border border-gray-600 p-1.5 text-center font-medium text-gray-100 min-w-[70px] bg-gradient-to-b from-gray-750 to-gray-800">
                  <div className="text-xs">
                    <div className="font-bold text-yellow-300">{slot.period}</div>
                    <div className="text-gray-300 mt-0.5 font-medium text-xs">
                      {formatTime(slot.from)}-{formatTime(slot.to)}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day} className="hover:bg-gray-750 transition-all duration-200">
                <td className="border border-gray-600 p-2 font-bold text-gray-100 bg-gradient-to-r from-gray-700 to-slate-700 text-center">
                  <div className="text-yellow-300 font-bold text-sm">{day}</div>
                </td>
                {timeSlots.map((slot) => {
                  const entry = getCellEntry(day, slot.period);
                  const cellId = `${day}-${slot.period}`;
                  const isSelected = selectedCell === cellId;
                  const courseDetails = entry ? getCourseDetails(entry.courseCode) : null;
                  
                  // Check if it's a free period
                  const isEmpty = !entry || !entry.courseCode;

                  return (
                    <td
                      key={slot.period}
                      className={`border border-gray-600 p-1.5 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        isEmpty ? getCellColor('', true) : getCellColor(entry!.type)
                      } ${isSelected ? 'ring-2 ring-yellow-400 ring-opacity-60 scale-105' : ''}`}
                      onClick={() => setSelectedCell(isSelected ? null : cellId)}
                    >
                      {!isEmpty && entry && (
                        <div className="text-xs">
                          <div className="font-bold text-white text-xs leading-tight drop-shadow-md">
                            {entry.courseCode}
                          </div>
                          {courseDetails && (
                            <div className="text-xs text-gray-100 mt-0.5 leading-tight opacity-90 font-medium">
                              {courseDetails.faculty.split(' (')[0]}
                            </div>
                          )}
                        </div>
                      )}
                      {isEmpty && (
                        <div className="text-xs text-gray-400 font-medium">
                          Free
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTableGrid;