import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const flavorData = {
    'Lime': {
        name: 'Lime Punch Sensation',
        image: '/juiza-lime.png',
        bgColor: '#E6FFF0',
        price: '400.00'
    },
    'Orange': {
        name: 'Orangefruit Grove',
        image: '/juiza-bottle.png',
        bgColor: '#FFF9E6',
        price: '500.00'
    },
    'Pitaya': {
        name: 'Pitaya Delight',
        image: '/juiza-pitaya.png',
        bgColor: '#FFE6F0',
        price: '400.00'
    },
    'Strawberry': {
        name: 'Strawberry Bonanza',
        image: '/juiza-strawberry.png',
        bgColor: '#FFE6E6',
        price: '400.00'
    }
};

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [flavour, setFlavour] = useState('Lime');
    const [form, setForm] = useState('Liquid');
    const [volume, setVolume] = useState('500ml');

    const currentProduct = flavorData[flavour];

    return (
        <section className="py-20 px-6 bg-[#F3F4F6]/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-3xl p-12 h-[600px] flex items-center justify-center shadow-inner overflow-hidden transition-colors duration-500"
                    >
                        <div
                            className="absolute inset-0 opacity-50 transition-colors duration-500"
                            style={{ backgroundColor: currentProduct.bgColor }}
                        />

                        {/* Realistic Bottle Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={flavour}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 w-64 h-auto"
                            >
                                <motion.img
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    src={currentProduct.image}
                                    alt={currentProduct.name}
                                    className="w-full drop-shadow-2xl"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Fruits Backdrop */}
                        <div className="absolute top-10 left-10 text-6xl opacity-20 invisible md:visible">🍋</div>
                        <div className="absolute bottom-10 right-10 text-6xl opacity-20 invisible md:visible">🍃</div>
                    </motion.div>

                    {/* Right Side - Info & Selection */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-gray-900 mb-4 transition-all duration-300">
                            {currentProduct.name}
                        </h2>
                        <p className="text-2xl font-bold text-red-600 mb-6 transition-all duration-300">
                            Rs. {currentProduct.price}
                        </p>

                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            Experience the pure essence of {flavour.toLowerCase()} with our premium cold-pressed juice.
                            Handcrafted for maximum flavor and nutrition.
                        </p>

                        {/* Customization Dropdowns */}
                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-8">
                                <label className="w-24 text-gray-700 font-bold">Flavour</label>
                                <select
                                    value={flavour}
                                    onChange={(e) => setFlavour(e.target.value)}
                                    className="flex-1 max-w-xs bg-white border border-gray-200 rounded-lg p-3 text-gray-700 font-medium focus:ring-2 focus:ring-red-500 outline-none cursor-pointer"
                                >
                                    <option>Lime</option>
                                    <option>Orange</option>
                                    <option>Pitaya</option>
                                    <option>Strawberry</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-8">
                                <label className="w-24 text-gray-700 font-bold">Form</label>
                                <select
                                    value={form}
                                    onChange={(e) => setForm(e.target.value)}
                                    className="flex-1 max-w-xs bg-white border border-gray-200 rounded-lg p-3 text-gray-700 font-medium focus:ring-2 focus:ring-red-500 outline-none cursor-pointer"
                                >
                                    <option>Liquid</option>
                                    <option>Powder</option>
                                    <option>Concentrate</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-8">
                                <label className="w-24 text-gray-700 font-bold">Volume</label>
                                <select
                                    value={volume}
                                    onChange={(e) => setVolume(e.target.value)}
                                    className="flex-1 max-w-xs bg-white border border-gray-200 rounded-lg p-3 text-gray-700 font-medium focus:ring-2 focus:ring-red-500 outline-none cursor-pointer"
                                >
                                    <option>500ml</option>
                                    <option>750ml</option>
                                    <option>1000ml</option>
                                </select>
                            </div>
                        </div>

                        {/* Quantity & CTAs */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-3 hover:bg-gray-100 transition-colors text-xl"
                                >-</button>
                                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-3 hover:bg-gray-100 transition-colors text-xl"
                                >+</button>
                            </div>

                            <button className="flex-1 px-8 py-3 border-2 border-black rounded-lg font-bold hover:bg-black hover:text-white transition-all uppercase tracking-wider">
                                Add To Cart
                            </button>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-gray-900 transition-all mb-8 shadow-xl">
                            Buy It Now
                        </button>

                        <div className="flex items-center gap-12 text-gray-500 font-medium">
                            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684m0 2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Share
                            </button>
                            <button className="underline hover:text-red-500 transition-colors">
                                View full details
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
