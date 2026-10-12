import { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export type ServiceRequest = { key: string; nonce: number };

function App() {
  // "Enquire" on a service card pre-selects that service in the contact form.
  const [serviceRequest, setServiceRequest] = useState<ServiceRequest | null>(null);

  const requestService = useCallback((key: string) => {
    setServiceRequest({ key, nonce: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <About />
        <Services onEnquire={requestService} />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact serviceRequest={serviceRequest} />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
