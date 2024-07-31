import React from 'react';
import PhotoGallery from '../PhotoGallery';
import SectionHeader from '../components/SectionHeader';


function Gallery() {
  return (
    <div>
       <SectionHeader
        title="Meet our Team"
        description="Explore our featured cards collection."
      />

<PhotoGallery/>
    </div>
  )
}

export default Gallery