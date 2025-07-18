import React, { useState, useEffect } from 'react';
import TimeTableHeader from './components/TimeTableHeader';
import TimeTableGrid from './components/TimeTableGrid';
import CourseDetails from './components/CourseDetails';
import Legend from './components/Legend';
import { Calendar, BookOpen, Menu, X, RefreshCw } from 'lucide-react';
import { loadTimetableConfig, refreshTimetableConfig, TimetableConfig } from './services/timetableService';

function App() {
  const [activeTab, setActiveTab] = useState<'timetable' | 'courses'>('timetable');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timetableConfig, setTimetableConfig] = useState<TimetableConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadConfig = async () => {
    try {
      setLoading(true);
      setError(null);
      const config = await loadTimetableConfig();
      setTimetableConfig(config);
    } catch (err) {
      setError('Failed to load timetable configuration');
      console.error('Failed to load config:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);
      const config = await refreshTimetableConfig();
      setTimetableConfig(config);
    } catch (err) {
      setError('Failed to refresh timetable configuration');
      console.error('Failed to refresh config:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-300">Loading timetable...</p>
        </div>
      </div>
    );
  }

  if (error || !timetableConfig) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error || 'Failed to load timetable'}</p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile Navigation */}
      <div className="lg:hidden bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-blue-400" />
            <span className="font-semibold text-white">Timetable</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg hover:bg-gray-700 text-white"
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 text-white"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {sidebarOpen && (
          <div className="border-t border-gray-700 bg-gray-800">
            <button
              onClick={() => {
                setActiveTab('timetable');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 ${
                activeTab === 'timetable' ? 'bg-blue-900 text-blue-400' : 'text-gray-300'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span>Timetable</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('courses');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 ${
                activeTab === 'courses' ? 'bg-blue-900 text-blue-400' : 'text-gray-300'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Course Details</span>
            </button>
          </div>
        )}
      </div>

      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-gray-800 shadow-lg min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Calendar className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Academic</h1>
                <p className="text-sm text-gray-400">Timetable System</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('timetable')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'timetable' 
                    ? 'bg-blue-900 text-blue-400' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Timetable</span>
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'courses' 
                    ? 'bg-blue-900 text-blue-400' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <BookOpen className="h-5 w-5" />
                <span>Course Details</span>
              </button>
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <button
                onClick={handleRefresh}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-300 hover:bg-gray-700"
                disabled={loading}
              >
                <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-4 lg:p-6">
            {activeTab === 'timetable' ? (
              <div className="space-y-6">
                <TimeTableHeader />
                <TimeTableGrid 
                  timeSlots={timetableConfig.timeSlots}
                  timetableData={timetableConfig.timetable}
                  courses={timetableConfig.courses}
                />
                <Legend />
              </div>
            ) : (
              <CourseDetails courses={timetableConfig.courses} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;