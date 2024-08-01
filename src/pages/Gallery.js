import React from 'react';
import PhotoGallery from '../PhotoGallery';
import SectionHeader from '../components/SectionHeader';
import { Helmet } from 'react-helmet';

function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Nadanaloga Fine Arts - Bharatanatyam, Vocal, Semi Classical, Drawing, Our Contact</title>
        <meta name="description" content="Explore the vibrant gallery of Nadanaloga Dance Class in Chennai Sembakkam and Mambakkam. View stunning photos of our Bharatanatyam, Vocal, and Semiclassical Dance performances and classes. We offer online classes for Indians in the US, UK, France, and Canada with well-trained teachers and staff." />
        <meta name="keywords" content="Nadanaloga, Dance Class Gallery, Bharatanatyam Gallery, Vocal Class Photos, Semiclassical Dance Photos, Dance Performances, Online Dance Classes, Chennai, Sembakkam, Mambakkam, US, UK, France, Canada, Indians, Malaysia, Singapore" />
      </Helmet>

      <SectionHeader
        title="Our"
        description="Photo Gallery"
      />

      <PhotoGallery />
    </div>
  );
}

export default Gallery;
