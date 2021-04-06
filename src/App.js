import './App.scss';
import Topnav from './components/Topnav';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skillset from './components/Skillset';
import Work from './components/Work';
import Skill from './components/Skill';
import Connect from './components/Connect';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="Happ">

  <Topnav/>
  <Header/>
  <About/>
<Experience/>
<Skillset/>
<Work/>
<Skill/>
<Connect/>

    </div>
    <Footer/>
    </Router>
  );
}

export default App;
