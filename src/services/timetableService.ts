import { TimeSlot, TimetableEntry, Course } from '../types/timetable';

export interface TimetableConfig {
  timeSlots: TimeSlot[];
  courses: Course[];
  timetable: TimetableEntry[];
}

let cachedConfig: TimetableConfig | null = null;

export const loadTimetableConfig = async (): Promise<TimetableConfig> => {
  if (cachedConfig) {
    return cachedConfig;
  }

  try {
    const response = await fetch('/timetable-config.json');
    if (!response.ok) {
      throw new Error('Failed to load timetable configuration');
    }
    
    const config: TimetableConfig = await response.json();
    cachedConfig = config;
    return config;
  } catch (error) {
    console.error('Error loading timetable config:', error);
    // Fallback to default data if JSON loading fails
    return getDefaultConfig();
  }
};

const getDefaultConfig = (): TimetableConfig => {
  return {
    timeSlots: [
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
    ],
    courses: [],
    timetable: []
  };
};

export const refreshTimetableConfig = async (): Promise<TimetableConfig> => {
  cachedConfig = null;
  return loadTimetableConfig();
}; 