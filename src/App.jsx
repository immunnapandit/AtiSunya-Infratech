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
import PolicyPage from './components/PolicyPage';
import { policies, policyAliases } from './data/policies';

function App() {
  const pathname = window.location.pathname;
  const policyPath = policyAliases[pathname] || pathname;
  const isPolicyPage = Boolean(policies[policyPath]);

  if (policyAliases[pathname]) {
    window.history.replaceState(null, '', policyPath);
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {isPolicyPage ? (
          <PolicyPage path={policyPath} />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Services />
            <WhyChooseUs />
            <CtaBanner />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
      {!isPolicyPage && <FloatingButtons />}
    </>
  );
}

export default App;
