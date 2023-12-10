import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Organization from './Organization';
import Event from './Event';
import Faq from './Faq';
import Error from './Error';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import NavCheck from './component/NavCheck';

function App() {

  

  return (
    <>
    <Router>
      <NavCheck>
        <Navbar />
      </NavCheck>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Organization" element = {<Organization/>}/>
        <Route path="/Events" element = {<Event/>}/>
        <Route path="/Faqs" element = {<Faq/>}/>
        <Route path="/Login" element = {<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    
    </Router>
</>

  );
}

export default App;
