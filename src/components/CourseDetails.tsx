import React, { useState } from 'react';
import { Course } from '../types/timetable';
import { Search, Book, User, MapPin, Calendar, Award } from 'lucide-react';

interface CourseDetailsProps {
  courses: Course[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.faculty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(courses.map(course => course.category))];

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Professional Core':
        return 'bg-blue-100 text-blue-800';
      case 'Professional Elective':
        return 'bg-green-100 text-green-800';
      case 'Open Elective':
        return 'bg-purple-100 text-purple-800';
      case 'Project Course':
        return 'bg-orange-100 text-orange-800';
      case 'Mandatory':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (courseType: string) => {
    switch (courseType) {
      case 'Lab Based Theory':
        return <Book className="h-4 w-4 text-blue-600" />;
      case 'Project Based Theory':
        return <Award className="h-4 w-4 text-green-600" />;
      case 'Practical':
        return <MapPin className="h-4 w-4 text-orange-600" />;
      default:
        return <Book className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Course Details</h2>
        <div className="text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
          Semester 5
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses, codes, or faculty..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filteredCourses.map((course: Course) => (
          <div key={course.id} className="border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 bg-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {getTypeIcon(course.courseType)}
                  <h3 className="font-semibold text-lg text-white">{course.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    <span className="font-medium">{course.code}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{course.faculty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{course.roomNumber}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Slot {course.slot}
                </div>
                <div className="text-xs text-gray-400">
                  {course.courseType}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">
          </div>
          <div className="text-gray-500 mb-2">
          </div>
          <p className="text-gray-400">No courses found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;