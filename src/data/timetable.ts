import { TimeSlot, TimetableEntry } from '../types/timetable';

export const timeSlots: TimeSlot[] = [
  { from: '08:00', to: '08:50', period: 1 },
  { from: '08:50', to: '09:40', period: 2 },
  { from: '09:45', to: '10:35', period: 3 },
  { from: '10:40', to: '11:30', period: 4 },
  { from: '11:35', to: '12:25', period: 5 },
  { from: '12:30', to: '01:20', period: 6 },
  { from: '01:25', to: '02:15', period: 7 },
  { from: '02:20', to: '03:10', period: 8 },
  { from: '03:10', to: '04:00', period: 9 },
  { from: '04:00', to: '04:50', period: 10 },
  { from: '04:50', to: '05:30', period: 11 },
  { from: '05:30', to: '06:10', period: 12 }
];

export const timetableData: TimetableEntry[] = [
  // Day 1
  { day: 'Day 1', period: 1, courseCode: 'Computer Networks', type: 'theory' },
  { day: 'Day 1', period: 2, courseCode: 'Computer Networks', type: 'theory' },
  { day: 'Day 1', period: 3, courseCode: 'Machine Learning', type: 'theory' },
  { day: 'Day 1', period: 4, courseCode: 'Machine Learning', type: 'theory' },
  { day: 'Day 1', period: 5, courseCode: 'Environmental Nanotechnology', type: 'theory' },
  { day: 'Day 1', period: 6, courseCode: '', type: 'theory' },
  { day: 'Day 1', period: 7, courseCode: '', type: 'theory' },
  { day: 'Day 1', period: 8, courseCode: '', type: 'theory' },
  { day: 'Day 1', period: 9, courseCode: '', type: 'theory' },
  { day: 'Day 1', period: 10, courseCode: '', type: 'theory' },
  { day: 'Day 1', period: 11, courseCode: 'Community Connect', type: 'lab' },
  { day: 'Day 1', period: 12, courseCode: 'Community Connect', type: 'lab' },

  // Day 2
  { day: 'Day 2', period: 1, courseCode: '', type: 'theory' },
  { day: 'Day 2', period: 2, courseCode: '', type: 'theory' },
  { day: 'Day 2', period: 3, courseCode: '', type: 'theory' },
  { day: 'Day 2', period: 4, courseCode: '', type: 'theory' },
  { day: 'Day 2', period: 5, courseCode: '', type: 'theory' },
  { day: 'Day 2', period: 6, courseCode: 'GPU Computing', type: 'theory' },
  { day: 'Day 2', period: 7, courseCode: 'GPU Computing', type: 'theory' },
  { day: 'Day 2', period: 8, courseCode: 'Environmental Nanotechnology', type: 'theory' },
  { day: 'Day 2', period: 9, courseCode: 'Environmental Nanotechnology', type: 'theory' },
  { day: 'Day 2', period: 10, courseCode: 'Computer Networks', type: 'theory' },
  { day: 'Day 2', period: 11, courseCode: 'Indian Art Form', type: 'lab' },
  { day: 'Day 2', period: 12, courseCode: 'Indian Art Form', type: 'lab' },

  // Day 3
  { day: 'Day 3', period: 1, courseCode: 'Discrete Mathematics', type: 'theory' },
  { day: 'Day 3', period: 2, courseCode: 'Discrete Mathematics', type: 'theory' },
  { day: 'Day 3', period: 3, courseCode: 'Computer Networks', type: 'theory' },
  { day: 'Day 3', period: 4, courseCode: 'Formal Language and Automata', type: 'theory' },
  { day: 'Day 3', period: 5, courseCode: 'GPU Computing', type: 'theory' },
  { day: 'Day 3', period: 6, courseCode: '', type: 'theory' },
  { day: 'Day 3', period: 7, courseCode: 'Computer Networks', type: 'lab' },
  { day: 'Day 3', period: 8, courseCode: 'Computer Networks', type: 'practical' },
  { day: 'Day 3', period: 9, courseCode: '', type: 'theory' },
  { day: 'Day 3', period: 10, courseCode: '', type: 'theory' },
  { day: 'Day 3', period: 11, courseCode: '', type: 'theory' },
  { day: 'Day 3', period: 12, courseCode: '', type: 'theory' },

  // Day 4
  { day: 'Day 4', period: 1, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 2, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 3, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 4, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 5, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 6, courseCode: 'Formal Language and Automata', type: 'theory' },
  { day: 'Day 4', period: 7, courseCode: 'Formal Language and Automata', type: 'theory' },
  { day: 'Day 4', period: 8, courseCode: 'GPU Computing', type: 'theory' },
  { day: 'Day 4', period: 9, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 10, courseCode: 'Discrete Mathematics', type: 'theory' },
  { day: 'Day 4', period: 11, courseCode: '', type: 'theory' },
  { day: 'Day 4', period: 12, courseCode: '', type: 'theory' },

  // Day 5
  { day: 'Day 5', period: 1, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 2, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 3, courseCode: 'Discrete Mathematics', type: 'theory' },
  { day: 'Day 5', period: 4, courseCode: 'Machine Learning', type: 'theory' },
  { day: 'Day 5', period: 5, courseCode: 'Formal Language and Automata', type: 'theory' },
  { day: 'Day 5', period: 6, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 7, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 8, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 9, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 10, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 11, courseCode: '', type: 'theory' },
  { day: 'Day 5', period: 12, courseCode: '', type: 'theory' }
];