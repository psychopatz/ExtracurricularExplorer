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
import Logout from './Logout';
import Signup from './Signup';
import Account from './Account';

function App() {

  

  return (
    <>
    <Router>
      <NavCheck>
        <Navbar />
      </NavCheck>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/account" element = {<Account/>}/>
        <Route path="/organization" element = {<Organization/>}/>
        <Route path="/events" element = {<Event/>}/>
        <Route path="/faqs" element = {<Faq/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/logout" element = {<Logout/>}/>
        <Route path="/signUp" element = {<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    
    </Router>
</>

  );
}

export default App;
