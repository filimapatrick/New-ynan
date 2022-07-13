
// import NavBar from './component/Navbar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import MentorshipPage from './Pages/MentorshipPage';
import {Routes,Route} from 'react-router-dom'
import InvolvePage from './Pages/InvolvePage';
import GalleryPage from './Pages/GalleryPage';
import EventPage from './Pages/EventPage';
// import Navbar from './component/Navbar/Navbar';
import BlogCard from './component/BlogCard';
import Navbarmenu from './component/Navbar2.jsx/Navbar';
// import Navbar from './component/Navbar2.jsx/Navbar';

function App() {
  return (
    <div className="App">
         <Navbarmenu/>
      {/* <NavBar/> */}
      {/* <Navbar/> */}
      {/* <Navbar/> */}
   
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/mentorship" element={<MentorshipPage/>}/>
      <Route path="/involved" element={<InvolvePage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path='/events' element={<EventPage/>}/>
      <Route path='/blogCard' element={<BlogCard/>}/>
    </Routes>
    </div>
  );
}

export default App;
