import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EducationExperience from './components/EducationExperience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main id="home">
        <Hero />
        <About />
         <EducationExperience />
        <Skills />
        <Projects />
        <Contact />
       
      </main>
      <Footer />
    </div>
  );
}

export default App;