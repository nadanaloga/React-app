import React from 'react'
import SectionHeader from '../../components/SectionHeader'

function Bharatanatyam() {
  return (
    <div className="container mx-auto p-4 relative">
    {/* Apply Online Button */}
    <div className="absolute top-4 right-4">
      <a href="/apply" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apply Online
      </a>
    </div>

    {/* Course Title and Description */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4">Bharatanatyam Course</h1>
      <p className="text-lg text-gray-700">
        Experience the grace and elegance of Bharatanatyam with our expert instructors and comprehensive curriculum.
      </p>
      <p className="text-gray-700">
          Bharatanatyam is one of the oldest classical dance forms of India, known for its fixed upper torso, bent legs, intricate footwork, and expressive gestures.
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Course Details */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Course Details</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Stages:</strong> Beginner, Intermediate, Advanced</li>
          <li><strong>Grade Exams:</strong> Annual Exams, Certification, Bridge Academy Exams</li>
          <li><strong>Duration:</strong> 6 months per level</li>
          <li><strong>Eligibility:</strong> Open to all ages</li>
          <li><strong>Certificates:</strong> Completion Certificate, Distinction Certificate, Nadanaloga Certificate</li>
          
        </ul>
      </div>

      {/* Description */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-4">
        <img src="..//..//assets/img/03.png" alt="Bharatanatyam" className="w-full h-64 object-cover rounded-md mb-4" />
      
      </div>
    </div>

    <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Instructions</h2>
      <p className="text-gray-700">
        Please wear comfortable attire and bring a water bottle. Arrive 15 minutes early to prepare for the class.
      </p>
    </div>

    <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Trainers</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img src="/path/to/trainer1.jpg" alt="Trainer 1" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trainer Name 1</h3>
          <p className="text-gray-700">Expert in Bharatanatyam with over 15 years of experience in teaching and performing.</p>
        </div>
        <div className="flex-1">
          <img src="/path/to/trainer2.jpg" alt="Trainer 2" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trainer Name 2</h3>
          <p className="text-gray-700">Renowned dancer and choreographer with extensive experience in Bharatanatyam.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Bharatanatyam