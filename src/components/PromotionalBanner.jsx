import { motion } from 'framer-motion';

const PromotionalBanner = () => {
    return (
        <section className="py-20 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Banner - 30% Discount */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative min-h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden group"
                        style={{ backgroundColor: '#F9A8D4' }} // Pastel Pink
                    >
                        <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-center text-white">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl font-bold mb-4 tracking-wider uppercase opacity-90"
                            >
                                UPTO
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-7xl md:text-9xl font-black mb-4 leading-none"
                            >
                                30%
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl md:text-5xl font-bold mb-10"
                            >
                                Discount
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg max-w-xs mb-10 opacity-90 leading-relaxed font-medium"
                            >
                                Sip The Savings: Enjoy Up To 30% Off On Revitalizing Smoothies
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-black text-white w-fit px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                Shop Now
                            </motion.button>
                        </div>

                        {/* Animated Bottle */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, rotate: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute bottom-0 right-0 z-20 w-64 md:w-80 translate-y-10 translate-x-10"
                        >
                            <img src="/juiza-strawberry.png" alt="Juiza Bottle" className="w-full drop-shadow-2xl" />
                        </motion.div>

                        {/* Floating Fruits/Splash - Simplified for clean look */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute bottom-20 right-20 text-4xl opacity-50"
                        >
                            🍓
                        </motion.div>
                    </motion.div>

                    {/* Right Grid - 2x1 */}
                    <div className="grid md:grid-cols-2 gap-8 h-full">
                        {/* Orange Bottle Card - Pastel Yellow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="h-[400px] md:h-full rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden group"
                            style={{ backgroundColor: '#FDE047' }} // Pastel Yellow
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-24 md:w-32 z-10 relative"
                            >
                                <img src="/juiza-bottle.png" alt="Orange Zest" className="w-full h-auto drop-shadow-xl" />
                            </motion.div>

                            {/* Decorative Splash Behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl group-hover:bg-orange-400/30 transition-colors" />
                        </motion.div>

                        {/* Green Bottle Card - Pastel Mint */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-[400px] md:h-full rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden group"
                            style={{ backgroundColor: '#D1FAE5' }} // Pastel Mint
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="w-24 md:w-32 z-10 relative"
                            >
                                <img src="/juiza-bottle.png" alt="Green Glow" className="w-full h-auto drop-shadow-xl" />
                            </motion.div>

                            {/* Decorative Splash Behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-400/20 rounded-full blur-2xl group-hover:bg-green-400/30 transition-colors" />
                        </motion.div>

                        {/* Bottom Wide Card - Hot Pink Gradient */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-2 rounded-[2.5rem] overflow-hidden relative group h-[250px] md:h-[284px]"
                            style={{ background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)' }}
                        >
                            <div className="relative z-10 p-10 h-full flex flex-row items-center justify-between text-white">
                                <div>
                                    <h4 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Summer <br /> Special</h4>
                                    <button className="text-white border-b-2 border-white/50 pb-1 font-semibold hover:text-white hover:border-white transition-all text-sm uppercase tracking-wide">Shop Exclusive Collection</button>
                                </div>

                                {/* Pill Shape Decorations */}
                                <div className="flex gap-3 opacity-30">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: ['40px', '60px', '40px'] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            className="w-8 bg-white/40 rounded-full"
                                            style={{ height: '50px' }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionalBanner;
