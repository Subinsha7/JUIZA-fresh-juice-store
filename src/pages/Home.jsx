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
                title="Home"
                description="Welcome to JUIZA BURST. Experience the freshest organic cold-pressed juices delivered to your doorstep."
                keywords="juiza, fresh juice, organic, cold pressed, home delivery"
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
