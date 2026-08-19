import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CtaBanner from './components/CtaBanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <WhyChooseUs />
      <CtaBanner />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
