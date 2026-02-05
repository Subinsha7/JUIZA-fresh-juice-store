import { motion } from 'framer-motion';

const products = [
    {
        id: 5,
        name: 'Orangefruit Grove',
        price: 500.00,
        bgColor: '#FFF9E6',
        juiceColor: 'from-yellow-400 to-orange-400',
        image: '/juiza-bottle.png'
    },
    {
        id: 6,
        name: 'Pitaya Delight',
        price: 400.00,
        bgColor: '#FFE6F0',
        juiceColor: 'from-pink-400 to-pink-500',
        image: '/juiza-pitaya.png'
    },
    {
        id: 7,
        name: 'Lime Punch',
        price: 400.00,
        bgColor: '#E6FFF0',
        juiceColor: 'from-green-400 to-teal-500',
        image: '/juiza-lime.png'
    },
    {
        id: 8,
        name: 'Strawberry Bonanza',
        price: 400.00,
        bgColor: '#FFE6E6',
        juiceColor: 'from-red-400 to-red-500',
        image: '/juiza-strawberry.png'
    },
];

const ProductList = () => {
    return (
        <section id="popular" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Popular Products</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Risus sed vulputate odio ut enim. Sit amet dictum sit amet justo.
                        Massa eget egestas purus viverra accumsan in nisl.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            {/* Bottle Image */}
                            <div
                                className="rounded-2xl h-80 flex items-center justify-center mb-6 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2"
                                style={{ backgroundColor: product.bgColor }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-3/4 w-auto object-contain drop-shadow-lg"
                                />

                                {/* Hover Actions */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                    <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-black hover:text-white transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    </button>
                                    <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-black hover:text-white transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">Rs. {product.price.toFixed(2)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
