import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Organization from './Organization';
import Event from './Event';
import Faq from './Faq';
import Error from './Error';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './Login';
import NavCheck from './component/NavCheck';
import Logout from './util/Logout';
import Signup from './Signup';
import Account from './Account';
import EventData from './EventData';
import LLMChatButton from './component/LLMChatButton';
import Settings from './Settings';
import OrgContentComponent from './component/OrgContentComponent';
import OrganizationNew from './OrganizationNew';

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
        <Route path="/account/settings" element = {<Settings/>}/>
        <Route path="/account" element = {<Account/>}/>
        <Route path="/organization" element = {<Organization/>}/>
        <Route path="/organization/add" element = {<OrganizationNew/>}/>
        <Route path="/organization/data/:id" element = {<OrgContentComponent/>}/>
        <Route path="/events" element = {<Event/>}/>
        <Route path="/faqs" element = {<Faq/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/logout" element = {<Logout/>}/>
        <Route path="/signUp" element = {<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <NavCheck>
          <LLMChatButton/>
      </NavCheck>
      <Footer/>
    
    </Router>
</>

  );
}

export default App;
