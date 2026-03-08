import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import ServicesOverview from './components/ServicesOverview';
import Statistics from './components/Statistics';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Commitment />
        <ServicesOverview />
        <Statistics />
        <Certifications />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
