import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Organization from './Organization';
import Event from './Event';
import Faq from './Faq';
import Error from './Error';
import Layout from './component/Layout';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Layout>
        
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Organization" element = {<Organization/>}/>
        <Route path="/Events" element = {<Event/>}/>
        <Route path="/Faqs" element = {<Faq/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Layout>
      <Footer/>
    
    </Router>


  );
}

export default App;
