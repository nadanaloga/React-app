import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Class from './pages/Class';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Navbar from './components/Navbar';
import Reviews from './pages/Reviews';
import Team from './pages/Team';
import Footer from './components/Footer';
import Course from './pages/Course';
import Crm from './pages/Crm';
import Vocal from './pages/inner/Vocal';
import Bharatanatyam from './pages/inner/Bharatanatyam';
import SemiClassical from './pages/inner/SemiClassical';
import Drawing from './pages/inner/Drawing';


/* import { useTheme } from './ThemeContext'; */


function App() {
  /* const { darkMode } = useTheme(); */
  
  return (
    <div className="w-full" >
      <div className='h-screen'>
      <Navbar />
      <div className=' bg-white py-6 sm:py-8 lg:py-12'>
   {/* <Ssbi/>
   <Visondq/> */}
   <Routes>
    <Route path='/' element = {<Home/>}></Route> 
    <Route path='/Class' element = {<Class />}></Route> 
    <Route path='/About' element = {<About />}></Route>     
    <Route path='/Reviews' element = {<Reviews/>}></Route> 
    <Route path='/Gallery' element = {<Gallery/>}></Route>               
    <Route path='/Contact' element = {<Contact/>}></Route>
    <Route path='/Team' element = {<Team/>}></Route>

          <Route path='/Course' element={<Course />}>
          <Route path="" element={<Navigate to="Vocal" />} />  {/* Default route */}          
          <Route exact path='Bharatanatyam' element={<Bharatanatyam />}></Route>
          <Route exact path='Vocal' element={<Vocal />}></Route>
          <Route exact path='SemiClassical' element={<SemiClassical />}></Route>
          <Route exact path='Drawing' element={<Drawing/>}></Route>
          </Route>


  </Routes>
   <Footer/>
   </div>
   </div>
    </div>
   
  );
}

export default App;
