import React from 'react'
import Carousel from './Carousel';
import Reviews from './Reviews';
import CardGrid from '../components/CardGrid';
import Thendral from '../assets/img/staff/TamilThendral.png'; // Adjust the path as needed
import image1 from '../assets/img/edited/01.jpg'; 
import image2 from '../assets/img/edited/02.jpg'; 
import image3 from '../assets/img/edited/01.jpg'; 
import image4 from '../assets/img/edited/01.jpg'; 



/* import { useTheme } from '../ThemeContext'; */


function Home() {
 /*  const { darkMode } = useTheme(); */
  return (
<section className="w-full bg-white">

<Carousel />
{/* <Reviews/> */}
<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
          A School of Classical Reform <br className="hidden lg:block" />
          A Great Fine Arts Educational Institution for your beloved children
          </h1>
          <p className=" mx-auto mt-8 text-base  text-gray-500">
          At Nadanaloga, we are dedicated to preserving and promoting the rich tradition of Carnatic music. Our Carnatic Vocal classes are designed to provide a comprehensive learning experience in this classical South Indian music genre. Located in Chennai, Tamil Nadu, we cater to students of all ages and levels, from beginners to advanced musicians.
          </p> 
       {/*    <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button className="items-center block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Get bundle
              </button>
            </div>
            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                See features
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto p-4 flex flex-col md:flex-row items-start md:items-center bg-pinkcolor">
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl text-white font-bold mb-4">About Guru</h1>
        <p className="text-white mb-4">
          <span className="font-bold">Smt. B. Tamil Thendral</span>, Dancer, choreographer and instructor is known for her eminent skill in both classical and filmic dance. She was initiated into Bharatanatyam by <span className="font-bold">Mrs. Bala Vaiduryum</span> and <span className="font-bold">Smt. Latha Balu</span>. In 2007 she completed her graduation in music with Bharatanatyam under the tutelage of <span className="font-bold">Dr. Mrs. Bala Nandhikumar</span> in Sri Sathguru Sangeetha Vidyalayam Music College, Madurai. And learnt basic nattuvangam techniques from <span className="font-bold">Smt. Supriya Ravi kumar</span> (Supriya's Academy).
        </p>
        <p className="text-white mb-4">
          Apart from classical dance, she is an eminent performer in folk dance, classical vocal and filmic dance, which she learnt from her father <span className="font-bold">Mr. P. Balakrishnan</span>. Her folk art guru is <span className="font-bold">Dr. Vijayalakshmi Navaneethakrishnan</span>. Apart from being performing artist, she has been an RJ in HelloFm and VJ in Doordarshan & other channels.
        </p>
        <p className="text-white mb-4">
          Nadanaloga was started in 2001 by <span className="font-bold">Mrs. Lakshmi priya</span> and Yuvakalabharathi, <span className="font-bold">Smt. B. Tamil thendral</span> started Nadanaloga Natyalaya at Chennai in 2017.
        </p>
        <p className="text-white">
          To us, preserving the unique beauty of dance and expanding its repertoire through innovation and experimentation has become a mission, a passion and a way of life.
        </p>
      </div>
      <div className="md:w-1/2 p-4 flex justify-end items-start md:items-center">
        <img src={Thendral} alt="Lady" className="h-full object-cover rounded-lg " />
      </div>
    </div>
<CardGrid/>





  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div className="flex items-center gap-12">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
          Gallery
        </h2>
        {/* <p className="hidden max-w-screen-sm text-gray-500 md:block">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p> */}
      </div>
      <a
        href="/gallery"
        className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
      >
        More
      </a>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {/* image - start */}
      <a
        href="/gallery"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src={image1}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          VR
        </span>
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="/gallery"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <img
         src={image2}
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          Tech
        </span>
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="/gallery"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <img
          src={image3}
          loading="lazy"
          alt="Photo by Martin Sanchez"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          Dev
        </span>
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="/gallery"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
         src={image4}
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          Retro
        </span>
      </a>
      {/* image - end */}
    </div>
  </div>
</div>

</section>


  );
}

export default Home