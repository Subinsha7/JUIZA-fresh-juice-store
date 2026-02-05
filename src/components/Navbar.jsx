import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { toggleCart, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Orders', path: '/orders' },
        { name: 'Contact', path: '#' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/'
                ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="z-50 relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center"
                        >
                            <img
                                src="/LOGO.png"
                                alt="JUIZA"
                                className={`h-12 md:h-16 w-auto object-contain transition-all`}
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.path}
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className={`font-semibold tracking-wide transition-colors cursor-pointer ${isScrolled || location.pathname !== '/' ? 'text-gray-800 hover:text-orange-600' : 'text-gray-900 hover:text-orange-600'
                                        }`}
                                >
                                    {link.name}
                                </motion.span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4 md:gap-6 z-50 relative">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`transition-colors ${isScrolled || location.pathname !== '/' || isMobileMenuOpen ? 'text-gray-800 hover:text-orange-600' : 'text-gray-900 hover:text-orange-600'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </motion.button>

                        <motion.button
                            onClick={toggleCart}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`relative transition-colors ${isScrolled || location.pathname !== '/' || isMobileMenuOpen ? 'text-gray-800 hover:text-orange-600' : 'text-gray-900 hover:text-orange-600'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </motion.button>

                        <div className={`hidden md:flex items-center gap-2 text-sm font-medium ${isScrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-gray-900'}`}>
                            <span className="text-lg">🇮🇳</span>
                            <span>EN</span>
                        </div>

                        {/* Hamburger Menu Button */}
                        <button
                            className={`md:hidden p-2 transition-colors ${isScrolled || location.pathname !== '/' || isMobileMenuOpen ? 'text-gray-800' : 'text-gray-900'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? '0%' : '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                <div className="flex flex-col gap-6 text-center">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-orange-500">Home</Link>
                    <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-orange-500">Shop</Link>
                    <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-orange-500">Orders</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-orange-500">About</Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
