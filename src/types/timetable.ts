export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  registrationType: string;
  category: string;
  courseType: string;
  faculty: string;
  slot: string;
  roomNumber: string;
  academicYear: string;
}

export interface TimeSlot {
  from: string;
  to: string;
  period: number;
}

export interface TimetableEntry {
  day: string;
  period: number;
  courseCode: string;
  type: 'theory' | 'practical' | 'lab';
}