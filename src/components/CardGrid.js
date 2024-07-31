// components/CardGrid.js
import React from 'react';
import Card from './Card';
import SectionHeader from '../components/SectionHeader';
import image1 from '../assets/img/category/baratham.png';
import image2 from '../assets/img/category/vocal.png';
import image3 from '../assets/img/category/semi-classical.png';
import image4 from '../assets/img/category/painting.png';

const CardGrid = () => {
  return (
    <div className="container mx-auto p-6">
       <SectionHeader
        title="Our Courses"
        description="Explore our Feautured Courses"
      />
      
      <div className="flex flex-wrap">
        <Card
          imageUrl={image1}
          title="Barathanatyam"
          content=" Learn Bharatanatyam from highly experienced instructors who provide a deep understanding of this classical dance form. Experience the rich heritage and cultural significance of Bharatanatyam through dedicated instruction and immersive experiences"
          link="/course/bharatanatyam"
        />
        <Card
          imageUrl={image2}
          title="Carnatic Vocal"
          content="Learn the fundamentals of Carnatic music, including raga, tala, and basic compositions.Our instructors are accomplished Carnatic musicians with extensive performance and teaching experience"
          link="/course/vocal"
        />
        <Card
          imageUrl={image3}
          title="Semi Classical Dance"
          content="We aim to bring the beauty of semi-classical dance to enthusiasts of all ages. Our classes combine classical techniques with contemporary styles to create a dynamic and expressive dance experience."
          link="/course/semiclassical"
        />
         <Card
          imageUrl={image4}
          title="Drawing"
          content="We believe in nurturing creativity and artistic expression through our Drawing classes. Whether you're a beginner or looking to refine your technique, our expert instructors provide personalized guidance to help you develop your drawing skills."
          link="/course/drawing"
        />
     
        
      </div>
    </div>
  );
};

export default CardGrid;
