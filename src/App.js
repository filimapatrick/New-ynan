
import NavBar from './component/Navbar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import MentorshipPage from './Pages/MentorshipPage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/mentorship" element={<MentorshipPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
