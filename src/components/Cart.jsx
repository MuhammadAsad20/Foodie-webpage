import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cartItems, updateQuantity, removeItem } = useCart();

    const handleIncrease = (item) => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-8 md:px-16">
                <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-12 tracking-wide uppercase">
                    Your Cart
                </h2>

                <div className="flex flex-col gap-8">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex bg-gray-800 rounded-lg shadow-xl overflow-hidden p-4 items-center justify-between"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                                <div className="flex-1 ml-6">
                                    <h3 className="text-2xl font-bold text-pink-500">{item.name}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                                    <div className="flex items-center space-x-6">
                                        <button
                                            onClick={() => handleDecrease(item)}
                                            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-all"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => handleIncrease(item)}
                                            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-all"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-lg font-semibold text-pink-500">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
                                    >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-400 col-span-full">
                            Your cart is empty!
                        </p>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg border-t-4 border-pink-500">
                        <h3 className="text-3xl font-semibold text-pink-500 mb-8">Cart Summary</h3>
                        <div className="flex justify-between mb-6">
                            <span className="text-lg text-gray-400">Subtotal</span>
                            <span className="text-lg font-semibold">
                                $
                                {cartItems
                                    .reduce((total, item) => total + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <div className="flex justify-between mb-8">
                            <span className="text-lg text-gray-400">Shipping</span>
                            <span className="text-lg font-semibold">Free</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-700 pt-6">
                            <span className="text-2xl font-bold text-pink-500">Total</span>
                            <span className="text-2xl font-bold">
                                $
                                {cartItems
                                    .reduce((total, item) => total + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <Link to="/Pages/checkoutPage" state={{ cartItems }}>
                            <button className="mt-8 w-full px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-all transform hover:scale-105">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartPage;
