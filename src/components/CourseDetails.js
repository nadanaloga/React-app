// components/CourseDetails.js
import React from 'react';

const CourseDetails = ({ courseName, duration, eligibility, ageLimit, price, imageUrl, features }) => {
  return (

    
    <div className="container mx-auto flex flex-wrap items-center justify-center my-8">
      {/* Image on the left */}
      <div className="w-full md:w-1/3 p-4">
        <img src={imageUrl} alt={courseName} className="object-cover rounded-lg shadow-lg h-auto md:h-full w-full" />
      </div>

      {/* Course details and features on the right */}

      
      <div className="w-full md:w-2/3 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{courseName}</h2>
            <div className="mb-4">
              <p><span className="font-bold">Duration:</span> {duration}</p>
              <p><span className="font-bold">Eligibility:</span> {eligibility}</p>
              <p><span className="font-bold">Age Limit:</span> {ageLimit}</p>
              <p><span className="font-bold">Price:</span> {price}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Join Now
            </button>
          </div>
          <div className="bg-gray-100 p-6">
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
