import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductDetailsModal from './ProductDetailsModal';

const products = [
    {
        id: 1,
        name: 'Orangefruit Grove',
        price: 500.00,
        bgColor: '#FDE047', // Pastel Yellow
        image: '/juiza-bottle.png'
    },
    {
        id: 2,
        name: 'Pitaya Delight',
        price: 400.00,
        bgColor: '#F9A8D4', // Pastel Pink
        image: '/juiza-pitaya.png'
    },
    {
        id: 3,
        name: 'Lime Punch',
        price: 400.00,
        bgColor: '#D1FAE5', // Pastel Mint
        image: '/juiza-lime.png'
    },
    {
        id: 4,
        name: 'Strawberry Bonanza',
        price: 400.00,
        bgColor: '#FFCDD2', // Soft Red/Pink
        image: '/juiza-strawberry.png'
    },
];

const ProductShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="py-20 px-6 bg-white">
            <ProductDetailsModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Organic Raw Juice</p>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                        Premium Juice Collection
                    </h2>
                </motion.div>

                {/* Product Carousel/Grid */}
                <div className="relative">
                    {/* Navigation Buttons (Desktop) */}
                    <div className="hidden md:flex justify-end gap-4 mb-4">
                        <button
                            onClick={prevSlide}
                            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group cursor-pointer"
                            >
                                {/* Product Card */}
                                <div
                                    className="rounded-[2.5rem] p-8 pt-12 pb-8 h-[450px] flex flex-col items-center justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                                    style={{ backgroundColor: product.bgColor }}
                                >
                                    {/* Background Decor */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Action Header */}
                                    <div className="w-full flex justify-between items-start z-10  transition-opacity duration-300">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100">NEW</span>
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="bg-white p-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm opacity-0 group-hover:opacity-100 hover:scale-110 transform"
                                            title="View Details"
                                        >
                                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-8.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Bottle Image */}
                                    <motion.div
                                        onClick={() => setSelectedProduct(product)}
                                        whileHover={{ rotate: 3, scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="relative h-60 z-10"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-auto object-contain drop-shadow-2xl"
                                        />
                                    </motion.div>

                                    {/* Product Info */}
                                    <div className="text-center z-10 w-full">
                                        <h3
                                            onClick={() => setSelectedProduct(product)}
                                            className="text-xl font-bold text-gray-900 mb-1 font-serif hover:underline decoration-2 underline-offset-4"
                                        >
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-lg font-medium text-gray-600">Rs. {product.price.toFixed(2)}</span>
                                        </div>

                                        <button
                                            onClick={() => addToCart(product)}
                                            className="mt-4 w-full py-3 bg-white/90 backdrop-blur text-black font-bold rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-black hover:text-white"
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
        </section>
    );
};

export default ProductShowcase;
