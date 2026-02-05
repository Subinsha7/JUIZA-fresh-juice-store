import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductDetailsModal = ({ isOpen, onClose, product }) => {
    const { addToCart } = useCart();

    if (!isOpen || !product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl relative flex flex-col md:flex-row overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image Section */}
                            <div
                                className="w-full md:w-1/2 p-12 flex items-center justify-center relative"
                                style={{ backgroundColor: product.bgColor || '#f3f4f6' }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
                                <motion.img
                                    initial={{ y: 20, rotate: 0 }}
                                    animate={{ y: 0, rotate: -5 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full max-w-[300px] h-auto object-contain relative z-10 drop-shadow-2xl"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full bg-white">
                                <div className="mb-auto">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {product.category || 'Fresh'}
                                        </span>
                                        <span className="text-green-600 font-bold text-sm flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            100% Organic
                                        </span>
                                    </div>

                                    <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight">{product.name}</h2>
                                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                        Hand-picked ingredients, cold-pressed to perfection.
                                        Experience the raw energy of nature in every sip.
                                        No added sugar, preservatives, or artificial flavors.
                                    </p>

                                    {/* Nutritional Info (Mock) */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                            <p className="text-xs text-gray-400 font-bold uppercase">Calories</p>
                                            <p className="text-xl font-black text-gray-900">120</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                            <p className="text-xs text-gray-400 font-bold uppercase">Vit C</p>
                                            <p className="text-xl font-black text-gray-900">80%</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                            <p className="text-xs text-gray-400 font-bold uppercase">Sugar</p>
                                            <p className="text-xl font-black text-gray-900">0g*</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 mt-auto">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-gray-500 font-medium">Price</span>
                                        <span className="text-3xl font-black text-gray-900">Rs. {product.price.toFixed(2)}</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            addToCart(product);
                                            onClose();
                                        }}
                                        className="w-full py-5 bg-black text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductDetailsModal;
