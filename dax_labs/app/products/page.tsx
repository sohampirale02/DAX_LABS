import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import ProductsCatalog from '../components/ProductsCatalog';
import Partners from '../components/Partners';
import ForensicHardware from '../components/ForensicHardware';
import ForensicSoftware from '../components/ForensicSoftware';
import ProductsCTA from '../components/ProductsCTA';

export const metadata = {
  title: 'Products | DAK Security',
  description: 'Comprehensive security products and solutions for your digital protection. Enterprise-grade IT security products, forensic tools, and partner solutions.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <ProductsCatalog />
        <Partners />
        <ForensicHardware />
        <ForensicSoftware />
        <ProductsCTA />
      </main>
      <Footer />
    </>
  );
}
