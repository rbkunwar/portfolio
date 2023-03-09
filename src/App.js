import './App.css';
import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
        <>
      {/* <!-- Dark theme --> */}
    <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />
    <div className="wrapper">
    <label htmlFor="darkMode">
        <i className="fa-solid fa-toggle-on dark-mode-toggle"></i>
    </label>
  {/* <!--header--> */}
<Header />
        
  {/* <!--header end--> */}
  {/* <!--Hero section--> */}
  
  {/* <!--Hero section end--> */}
  {/* <!--banner section--> */}
  <Hero />
  {/* <!--banner section--> */}
  {/* <!--Skills section--> */}
  <Skills />
  {/* <!--Skills section--> */}
  {/* <!--Projects section--> */}
  <Projects />
  {/* <!--Projects section end--> */}
  {/* <!--About section--> */}
  <Aboutme />
  {/* <!--About section end--> */}
  {/* <!-- Get in Touch Section --> */}
  <Contact />
    {/* <!-- Get in Touch Section End --> */}
{/* <!-- Footer --> */}


    {/* <!-- Footer End --> */}
    <Footer />
    {/* <!----> */}
    </div>
    </>
  );
}

export default App;
