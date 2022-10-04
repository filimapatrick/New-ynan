
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
import AwardPage from './Pages/AwardPage';
import SignUp from './component/MemberShip/SignUp';
import LoginSection from './component/MemberShip/LoginSection'
// import Navbar from './component/Navbar2.jsx/Navbar';
// import Nav from './component/Nav';
import './App.css';
import MemberPage from './Pages/MemberPage';

function App() {
  return (
    <div className="App">
         <Navbarmenu/>
      {/* <NavBar/> */}
      {/* <Navbar/> */}
      {/* <Navbar/> */}
      {/* <Nav/> */}
   
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/mentorship" element={<MentorshipPage/>}/>
      <Route path ="/award" element={<AwardPage/>}/>
      <Route path="/involved" element={<InvolvePage/>}/>
      <Route path="/membership" element={<MemberPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path='/events' element={<EventPage/>}/>
      <Route path='/blogCard' element={<BlogCard/>}/>
      <Route path='/SignUp' element={<SignUp/> }/>
      <Route path='/LoginSection' element={<LoginSection/>}/>
    </Routes>
    </div>
  );
}

export default App;
