import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    // Load cart and orders from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('juiza-cart');
        const savedOrders = localStorage.getItem('juiza-orders');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('juiza-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Save orders to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('juiza-orders', JSON.stringify(orders));
    }, [orders]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true); // Open cart when adding item
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + delta;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            })
        );
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const placeOrder = (orderDetails) => {
        const newOrder = {
            id: 'ORD-' + Date.now(),
            date: new Date().toISOString(),
            items: cartItems,
            total: cartTotal,
            status: 'Processing',
            ...orderDetails
        };
        setOrders((prev) => [newOrder, ...prev]);
        setCartItems([]); // Clear cart
        return newOrder;
    };

    const cancelOrder = (orderId) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, status: 'Cancelled' } : order
            )
        );
    };

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                orders,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleCart,
                placeOrder,
                cancelOrder,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
