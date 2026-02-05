import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
    const {
        isCartOpen,
        toggleCart,
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        toggleCart();
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-[70] flex flex-col p-6"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-black text-gray-900">Your Cart</h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                    <span className="text-6xl">🛒</span>
                                    <p className="text-xl font-medium">Your cart is empty</p>
                                    <button
                                        onClick={toggleCart}
                                        className="text-black font-bold underline"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="flex gap-4 p-4 rounded-3xl bg-gray-50"
                                    >
                                        {/* Image */}
                                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                                                <p className="text-gray-500 text-sm">Rs. {item.price}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1 border border-gray-100">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-6 h-6 flex items-center justify-center hover:text-orange-500"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-6 h-6 flex items-center justify-center hover:text-orange-500"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                {/* Remove Button */}
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-400 hover:text-red-600 p-2"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {cartItems.length > 0 && (
                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                <div className="flex items-center justify-between text-lg font-medium">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-bold text-gray-900">Rs. {cartTotal.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                                >
                                    Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
