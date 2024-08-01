import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="bg-gray-50 py-24 w-full">
      <Helmet>
      <title>Nadanaloga Fine Arts - Bharatanatyam, Vocal, Semi Classical, Drawing, Our History</title>
      <meta name="description" content="Discover Nadanaloga dance class, with branches in Chennai Sembakkam and Mambakkam. We offer Bharatanatyam, Vocal, and Semiclassical Dance classes for adults. Our experienced teachers provide online classes for Indians in the US, UK, France, Canada, Malaysia, Singapore and other Countries" />
      <meta name="keywords" content="Nadanaloga dance class, Chennai dance classes, Sembakkam dance class, Mambakkam dance class, Bharatanatyam, Vocal class, Semiclassical dance, online dance classes, international dance classes, experienced teachers, dance staff, dance for Indians, dance for adults, US dance classes, UK dance classes, France dance classes, Canada dance classes, Malaysia Dance Class, Singapore DAnce Class" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="relative lg:w-1/2 lg:order-first">
            <img
              src="https://via.placeholder.com/800x600" // Replace with your actual image URL
              alt="About Nadanaloga"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to Nadanaloga, a prestigious institution dedicated to preserving and promoting the rich cultural traditions of India through various artistic disciplines. Founded by the visionary G. Palaniswamy in 2008, our mission has always been to provide a platform where students of all ages can explore and excel in their chosen art forms.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              At Nadanaloga, we are led by TamilThendral, a guiding light in the world of performing arts, whose leadership has been instrumental in shaping the institute’s path towards excellence. With branches located in Chennai (Sembakkam and Mambakkam) and Hyderabad, we are committed to making quality education accessible to a broader audience.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Over the years, our students have participated in a multitude of programs and have achieved significant milestones, showcasing their talent and dedication. Our team comprises exceptionally talented staff and trainers who bring their expertise and passion to every class, ensuring that each student receives personalized attention and guidance.
            </p>
          </div>
        </div>

        {/* Our Courses Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            Our Courses
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of courses designed to cater to diverse interests and age groups. Our offerings include:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
            <li><strong>Bharatanatyam:</strong> Immerse yourself in the classical dance form known for its grace and expressiveness.</li>
            <li><strong>Carnatic Vocal:</strong> Explore the depths of South Indian classical music through rigorous vocal training.</li>
            <li><strong>Semi-Classical Dance:</strong> A blend of classical and contemporary dance forms that appeal to modern sensibilities.</li>
            <li><strong>Drawing Classes:</strong> Cultivate your artistic skills and creativity with structured drawing lessons.</li>
            <li><strong>Keyboard Classes:</strong> Learn the fundamentals of playing the keyboard and advance to more complex compositions.</li>
            <li><strong>Abacus:</strong> Enhance mental arithmetic skills with our engaging abacus training sessions.</li>
            <li><strong>Phoenix:</strong> A unique course aimed at developing creative thinking and problem-solving skills.</li>
            <li><strong>Yoga:</strong> Achieve physical and mental well-being through our holistic yoga programs.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-600">
            Our curriculum is designed to not only impart technical skills but also to foster a deep appreciation for the arts. Each course is taught by experienced instructors who are passionate about sharing their knowledge and expertise.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            Join Us
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Whether you are a beginner eager to learn or an experienced artist looking to refine your skills, Nadanaloga is the perfect place for you. Our inclusive and supportive environment ensures that every student has the opportunity to thrive and achieve their artistic goals.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            For more information on our courses, schedules, and admission process, feel free to contact us. We look forward to welcoming you to the Nadanaloga family!
          </p>
        </div>
      </div>
     
    </div>
    
  );
};

export default About;
