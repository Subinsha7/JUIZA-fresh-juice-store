import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import PromotionalBanner from '../components/PromotionalBanner';
import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO 
                title="JUIZA - Fresh Cold-Pressed Juices | 100% Natural Fruit Drinks"
                description="Discover premium fresh cold-pressed juices at JUIZA. Shop 100% natural fruit juices with no preservatives, no added sugar. Fast home delivery available!"
                keywords="fresh juice, cold pressed juice, natural drinks, JUIZA, healthy beverages"
                ogImage="https://juiza.netlify.app/images/home-hero.jpg"
            />
            <Hero />
            <ProductShowcase />
            <PromotionalBanner />
            <ProductDetail />
            <ProductList />
        </>
    );
};

export default Home;
