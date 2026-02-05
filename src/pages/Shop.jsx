import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductDetailsModal from '../components/ProductDetailsModal';
import SEO from '../components/SEO';

const allProducts = [
    {
        id: 1,
        name: 'Orangefruit Grove',
        price: 500.00,
        bgColor: '#FDE047', // Pastel Yellow
        image: '/juiza-bottle.png',
        category: 'Citrus'
    },
    {
        id: 2,
        name: 'Pitaya Delight',
        price: 400.00,
        bgColor: '#F9A8D4', // Pastel Pink
        image: '/juiza-pitaya.png',
        category: 'Exotic'
    },
    {
        id: 3,
        name: 'Lime Punch',
        price: 400.00,
        bgColor: '#D1FAE5', // Pastel Mint
        image: '/juiza-lime.png',
        category: 'Citrus'
    },
    {
        id: 4,
        name: 'Strawberry Bonanza',
        price: 400.00,
        bgColor: '#FFCDD2', // Soft Red/Pink
        image: '/juiza-strawberry.png',
        category: 'Berry'
    },
    {
        id: 5,
        name: 'Mango Magic',
        price: 450.00,
        bgColor: '#FFF7ED', // Very Light Orange
        image: '/juiza-bottle.png',
        category: 'Tropical'
    },
    {
        id: 6,
        name: 'Green Glow',
        price: 380.00,
        bgColor: '#ECFDF5', // Very Light Mint
        image: '/juiza-lime.png',
        category: 'Green'
    }
];

const Shop = () => {
    const [filter, setFilter] = useState('All');
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = filter === 'All'
        ? allProducts
        : allProducts.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
            <SEO
                title="Shop Premium Juices"
                description="Browse our collection of cold-pressed, organic juices. From citrus bursts to green detox blends."
            />
            <ProductDetailsModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Our Collection</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900">Fresh Pressed Daily</h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                        Explore our range of premium cold-pressed juices, designed to give you
                        the ultimate refreshment and nutrition.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {['All', 'Citrus', 'Exotic', 'Berry', 'Tropical', 'Green'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-wide border ${filter === cat
                                ? 'bg-black text-white border-black shadow-lg transform scale-105'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className="rounded-[2.5rem] p-10 h-[500px] flex flex-col items-center justify-between relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                                style={{ backgroundColor: product.bgColor }}
                            >
                                {/* Background Decor */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Category Badge and View Button */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900">
                                        {product.category}
                                    </div>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-sm hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"
                                        title="View Details"
                                    >
                                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-8.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Bottle Image */}
                                <motion.div
                                    onClick={() => setSelectedProduct(product)}
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative h-64 z-10 mt-8"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-auto object-contain drop-shadow-2xl"
                                    />
                                </motion.div>

                                {/* Product Info */}
                                <div className="text-center z-10 w-full mt-auto">
                                    <h3
                                        onClick={() => setSelectedProduct(product)}
                                        className="text-2xl font-bold text-gray-900 mb-2 font-serif hover:underline decoration-2 underline-offset-4"
                                    >
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 font-medium text-xl mb-6">Rs. {product.price.toFixed(2)}</p>

                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full py-4 bg-white/90 backdrop-blur text-black font-bold rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-black hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
