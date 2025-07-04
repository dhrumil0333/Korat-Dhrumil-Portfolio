import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="bg-dark-bg text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;