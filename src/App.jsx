import './styles/globals.scss';
import Navbar from './components/Navbar/Navbar';
import Hero3D from './components/Hero3D/Hero3D';
import About from './components/About/About';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Pricing from './components/Pricing/Pricing';
import Promotions from './components/Promotions/Promotions';
import Tracking from './components/Tracking/Tracking';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import Guidelines from './components/Guidelines/Guidelines';
import Locations from './components/Locations/Locations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Services />
        <Process />
        <Pricing />
        <Promotions />
        <Tracking />
        <WhyUs />
        <Testimonials />
        <Guidelines />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
