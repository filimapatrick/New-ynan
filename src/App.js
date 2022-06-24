
import NavBar from './component/Navbar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import MentorshipPage from './Pages/MentorshipPage';
import {Routes,Route} from 'react-router-dom'
import InvolvePage from './Pages/InvolvePage';
import GalleryPage from './Pages/GalleryPage';
import EventPage from './Pages/EventPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/mentorship" element={<MentorshipPage/>}/>
      <Route path="/involved" element={<InvolvePage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path='/events' element={<EventPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
