import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    nextArrow: (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
        onClick={() => sliderRef.current.slickNext()}
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.707 4.293a1 1 0 0 1 0 1.414L8.414 9l-2.707 2.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 0-1.414l-3-3a1 1 0 1 1 1.414-1.414L8.414 7 5.707 4.293z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.707 4.293a1 1 0 0 1 0 1.414L15.414 9l-2.707 2.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 0-1.414l-3-3a1 1 0 1 1 1.414-1.414L15.414 7l-2.707-2.707z" clipRule="evenodd" />
        </svg>
      </button>
    ),
    prevArrow: (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
        onClick={() => sliderRef.current.slickPrev()}
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L12.414 9l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M8.707 4.293a1 1 0 0 1 0 1.414L5.414 9l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      imageUrl: '../assets/img/slides/01.jpg',
      caption: 'Caption for Image 1',

    },
    {
      id: 2,
      imageUrl: '../assets/img/slides/02.jpg',
      caption: 'Caption for Image 2',
    },
    {
      id: 3,
      imageUrl: '../assets/img/slides/03.jpg',
      caption: 'Caption for Image 3',
    },
    {
      id: 4,
      imageUrl: '../assets/img/slides/04.jpg',
      caption: 'Caption for Image 4',
    },
    {
      id: 5,
      imageUrl: '../assets/img/slides/05.jpg',
      caption: 'Caption for Image 5',
    },
    {
      id: 6,
      imageUrl: '../assets/img/slides/06.jpg',
      caption: 'Caption for Image 6',
    },
  ];

  return (
    <div className="relative w-full-lg mx-auto px-4 sm:px-6 lg:px-8 mt-14">
       <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2 relative">
            <img src={slide.imageUrl} alt={`Image ${slide.id}`} className="rounded-lg shadow-lg" />
            <div className="absolute top-0 left-0  bg-opacity-75 px-2 py-1 rounded-tr-lg">
              {/* <p className="text-white text-sm">{slide.caption}</p> */}
            </div>
        {/*     <div className="absolute bottom-0 right-0  bg-opacity-75 px-2 py-1 rounded-bl-lg">
              <button
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 text-md rounded focus:outline-none focus:shadow-outline text-xs"
                onClick={() => alert(`Register for Image ${slide.id}`)}
              >
                Register
              </button>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
