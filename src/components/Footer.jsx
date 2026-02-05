import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 md:pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                            <img src="/LOGO.png" alt="JUIZA" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Experience pure refreshment with our premium cold-pressed juices.
                            Handcrafted with love for your well-being.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ y: -3, color: '#DC143C' }}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            {['Home', 'Shop', 'About Us', 'Contact', 'Track Order'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-red-500 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Information</h4>
                        <ul className="space-y-4 text-gray-400">
                            {['Copyright Policy', 'Privacy Policy', 'Terms of Service', 'Refund Policy', 'FAQ', 'Shipping Info'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-red-500 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Stay Fresh</h4>
                        <p className="text-gray-400 mb-6">Subscribe to get special offers and organic updates.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                            />
                            <button className="absolute right-2 top-2 bg-red-600 hover:bg-red-700 p-1.5 rounded-md transition-colors">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} JUIZA. All rights reserved. Developed by Subin.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
