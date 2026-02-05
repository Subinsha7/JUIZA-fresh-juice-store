import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Orders = () => {
    const { orders, cancelOrder } = useCart();

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Processing': return 'bg-blue-100 text-blue-600';
            case 'Delivered': return 'bg-green-100 text-green-600';
            case 'Cancelled': return 'bg-red-100 text-red-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    if (orders.length === 0) {
        return (
            <div className="pt-32 pb-20 px-6 bg-white min-h-screen text-center flex flex-col items-center justify-center">
                <SEO title="My Orders" />
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-4">No Orders Yet</h1>
                <p className="text-gray-500 mb-8">You haven't placed any orders yet. Start shopping now!</p>
                <Link to="/shop" className="px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                    Shop Now
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
            <SEO title="My Orders" />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-gray-900 mb-8">My Orders</h1>

                <div className="space-y-6">
                    {orders.map((order, index) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">{order.id}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm">{formatDate(order.date)}</p>
                                    {order.status === 'Processing' && (
                                        <button
                                            onClick={() => cancelOrder(order.id)}
                                            className="mt-3 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full hover:bg-red-600 transition-colors"
                                        >
                                            Cancel Order
                                        </button>
                                    )}
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Total Amount</p>
                                    <p className="text-2xl font-black text-gray-900">Rs. {order.total.toFixed(2)}</p>
                                    <p className="text-xs text-gray-500 mt-1">Via {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit Card'}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {order.items.map((item, i) => (
                                    <div key={`${order.id}-${i}`} className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 flex items-center justify-center">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-medium text-gray-900">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            {order.status === 'Processing' && (
                                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                                    <button
                                        onClick={() => {
                                            if (confirm('Are you sure you want to cancel this order?')) {
                                                cancelOrder(order.id);
                                            }
                                        }}
                                        className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-sm font-bold rounded-lg transition-colors"
                                    >
                                        Cancel Order
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
