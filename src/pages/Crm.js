import React from 'react'
import CourseDetails from '../components/CourseDetails';

const Crm = () => {
  // Example data for a course
  const course = {
    courseName: 'Sample Course',
    duration: '3 months',
    eligibility: 'Bachelor’s degree',
    ageLimit: '18-35 years',
    price: '$1000',
    schedule: 'Weekly 2 days',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    imageUrl: 'https://via.placeholder.com/400',
  };

  return (
    <div className="bg-gray-100">
      <CourseDetails {...course} />
    </div>
  );
};


export default Crm