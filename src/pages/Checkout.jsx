import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Checkout = () => {
    const { cartItems, cartTotal, isCartOpen, toggleCart, placeOrder } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('juiza-shipping-details');
        return savedData ? JSON.parse(savedData) : {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            zip: '',
            cardNumber: '',
            expiry: '',
            cvv: ''
        };
    });
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleChange = (e) => {
        const newData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newData);
        // Persist non-sensitive data to localStorage
        const { cardNumber, expiry, cvv, ...safeData } = newData;
        localStorage.setItem('juiza-shipping-details', JSON.stringify(safeData));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        setTimeout(() => {
            placeOrder({
                ...formData,
                paymentMethod
            });
            setIsOrderPlaced(true);
            // Optionally clear shipping details if you want, but user asked for "only once" collection
            // so we keep it.
        }, 1500);
    };

    if (isOrderPlaced) {
        return (
            <div className="pt-32 pb-20 px-6 bg-white min-h-screen flex items-center justify-center">
                <SEO title="Order Confirmed" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-lg"
                >
                    <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Order Confirmed!</h1>
                    <p className="text-gray-500 text-lg mb-8">
                        Thank you for your purchase. Your premium juices are being prepared and will be shipped shortly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/orders"
                            className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-colors"
                        >
                            View Order
                        </Link>
                        <Link
                            to="/"
                            className="px-8 py-3 bg-black text-white font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-20 px-6 bg-white min-h-screen text-center">
                <SEO title="Checkout" />
                <h1 className="text-3xl font-black text-gray-900 mb-4">Your Cart is Empty</h1>
                <Link to="/shop" className="text-orange-500 font-bold underline">Go to Shop</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
            <SEO title="Checkout" description="Securely checkout your premium juice order." />
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Shipping Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                required
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                required
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            required
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                        />
                        <div className="grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                required
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                            />
                            <input
                                type="text"
                                name="zip"
                                placeholder="ZIP Code"
                                required
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                            />
                        </div>

                        <div className="pt-8">
                            <h2 className="text-2xl font-black text-gray-900 mb-6">Payment Method</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`p-4 rounded-xl border-2 font-bold transition-all ${paymentMethod === 'card'
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                                        }`}
                                >
                                    Credit Card
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('cod')}
                                    className={`p-4 rounded-xl border-2 font-bold transition-all ${paymentMethod === 'cod'
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                                        }`}
                                >
                                    Cash on Delivery
                                </button>
                            </div>

                            {paymentMethod === 'card' ? (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="space-y-6 overflow-hidden"
                                >
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="Card Number"
                                        required
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                    />
                                    <div className="grid grid-cols-2 gap-6">
                                        <input
                                            type="text"
                                            name="expiry"
                                            placeholder="MM/YY"
                                            required
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                        />
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                            required
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-100"
                                >
                                    <p className="font-bold flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Payment on Delivery
                                    </p>
                                    <p className="text-sm mt-1 opacity-80">Pay safely with cash when your order arrives at your doorstep.</p>
                                </motion.div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-5 bg-black text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all mt-8"
                        >
                            {paymentMethod === 'cod' ? 'Place Order (Unpaid)' : `Pay Rs. ${cartTotal.toFixed(2)}`}
                        </button>
                    </form>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-sm h-fit"
                >
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Order Summary</h2>
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-bold text-gray-900">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 mt-8 pt-6 space-y-4">
                        <div className="flex justify-between text-gray-500">
                            <span>Subtotal</span>
                            <span>Rs. {cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-xl font-black text-gray-900 pt-4 border-t border-gray-100">
                            <span>Total</span>
                            <span>Rs. {cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Checkout;
