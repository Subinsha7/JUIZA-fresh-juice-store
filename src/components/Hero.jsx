import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        headline: "Purest Energy",
        subheadline: "Sip Nature's",
        description: "Cold-pressed daily from 100% organic fruits. Experience the raw power of real ingredients.",
        image: "/juiza-bottle.png",
        gradient: "from-orange-500 to-red-500",
        bgBlur1: "bg-yellow-200/30",
        bgBlur2: "bg-pink-200/20",
        badge: "Vitamin C",
        badgeValue: "120%",
        badgeIcon: "🍊",
        marquee: "FRESH • ORGANIC • PURE •"
    },
    {
        id: 2,
        headline: "Exotic Bliss",
        subheadline: "Taste of",
        description: "A vibrant blend of dragon fruit and berries. Rich in antioxidants and bursting with flavor.",
        image: "/juiza-pitaya.png",
        gradient: "from-pink-500 to-purple-500",
        bgBlur1: "bg-pink-200/30",
        bgBlur2: "bg-purple-200/20",
        badge: "Antioxidants",
        badgeValue: "High",
        badgeIcon: "🍇",
        marquee: "EXOTIC • VIBRANT • WILD •"
    },
    {
        id: 3,
        headline: "Natural Detox",
        subheadline: "Ultimate",
        description: "Refresh and rejuvenate with our zesty lime blend. The perfect way to cleanse your body.",
        image: "/juiza-lime.png",
        gradient: "from-green-400 to-teal-500",
        bgBlur1: "bg-green-200/30",
        bgBlur2: "bg-teal-200/20",
        badge: "Detox",
        badgeValue: "100%",
        badgeIcon: "🍋",
        marquee: "CLEAN • GREEN • FRESH •"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    const slide = slides[currentSlide];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">

            <AnimatePresence mode="wait">
                {/* Background Elements (Changing per slide) */}
                <motion.div
                    key={`bg-${slide.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    {/* Marquee */}
                    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden opacity-[0.03] select-none z-0">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="whitespace-nowrap flex text-[12rem] font-black leading-none text-black"
                        >
                            {Array(4).fill(slide.marquee).join(' ')}
                        </motion.div>
                    </div>

                    {/* Gradient Blobs */}
                    <div className={`absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] ${slide.bgBlur1}`} />
                    <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] ${slide.bgBlur2}`} />
                </motion.div>
            </AnimatePresence>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <div className="text-gray-900 text-center lg:text-left order-2 lg:order-1 h-[500px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-6 inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                                <span className={`w-2 h-2 rounded-full animate-pulse bg-gradient-to-r ${slide.gradient}`} />
                                <span className="text-sm font-bold tracking-wide uppercase text-gray-500">New Collection 2026</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
                                {slide.subheadline} <br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient}`}>
                                    {slide.headline}
                                </span>
                            </h1>

                            <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                {slide.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                                <Link to="/shop" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-gray-300/50 transition-all uppercase tracking-widest relative overflow-hidden group">
                                        <span className="relative z-10">Shop Now</span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side - Bottle & Navigation */}
                <div className="relative flex items-center justify-center order-1 lg:order-2 h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-20"
                        >
                            {/* Glowing Backdrop */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr ${slide.gradient} rounded-full blur-[80px] opacity-40 animate-pulse`} />

                            <img
                                src={slide.image}
                                alt={slide.headline}
                                className="w-full h-auto max-w-[280px] lg:max-w-[380px] drop-shadow-2xl"
                            />

                            {/* Floating Nutrient Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl flex items-center gap-4 animate-bounce bg-white/30 backdrop-blur-md border border-white/40"
                            >
                                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-2xl">
                                    {slide.badgeIcon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{slide.badge}</p>
                                    <p className="text-lg font-black text-gray-900">{slide.badgeValue}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Arrow Navigation */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4">
                        <button onClick={prevSlide} className="pointer-events-auto w-12 h-12 rounded-full border border-gray-100 bg-white/50 backdrop-blur hover:bg-white flex items-center justify-center transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={nextSlide} className="pointer-events-auto w-12 h-12 rounded-full border border-gray-100 bg-white/50 backdrop-blur hover:bg-white flex items-center justify-center transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
