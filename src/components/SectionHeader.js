// components/SectionHeader.js
import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
