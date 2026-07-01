import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Flavors from './components/Flavors';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Branches from './components/Branches';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen selection:bg-pink-300 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Trust />
          <About />
          <MissionVision />
          <WhyUs />
          <Flavors />
          <Experience />
          <Testimonials />
          <Gallery />
          <Branches />
          <CTA />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
