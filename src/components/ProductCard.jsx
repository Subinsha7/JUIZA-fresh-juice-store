import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            <div
                className="rounded-[2.5rem] p-10 h-[450px] flex flex-col items-center justify-between relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white"
                style={{ backgroundColor: product.bgColor || '#F9FAFB' }}
            >
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge */}
                {product.badge && (
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-800 z-10">
                        {product.badge}
                    </div>
                )}

                {/* Product Image */}
                <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-60 z-10 mt-8"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Product Info */}
                <div className="text-center z-10 w-full mt-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif">{product.name}</h3>
                    <p className="text-gray-600 font-medium text-lg mb-4">Rs. {product.price}</p>

                    <button className="w-full py-3 bg-white/90 backdrop-blur text-black font-bold rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-black hover:text-white">
                        Add to Cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
