import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
    const location = useLocation();
    const { cartItems, shippingInfo, discount, total } = location.state || {};

    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6 lg:px-16">
                <h2 className="text-4xl font-extrabold text-center text-pink-500 mb-12">Order Confirmation</h2>

                {/* Confirmation Message */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
                    <h3 className="text-2xl font-semibold text-pink-500 mb-4">Thank you for your order!</h3>
                    <p className="text-lg mb-6">We’ve received your order and will start processing it soon.</p>
                    <p className="text-sm text-gray-400">We’ll send you an email confirmation once your order is ready to be shipped.</p>
                </div>

                {/* Order Details */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8">
                    <h4 className="text-xl font-semibold text-pink-500 mb-4">Order Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p className="font-medium">Name: <span className="text-gray-300">{shippingInfo?.name}</span></p>
                            <p className="font-medium">Phone: <span className="text-gray-300">{shippingInfo?.phone}</span></p>
                            <p className="font-medium">Email: <span className="text-gray-300">{shippingInfo?.email}</span></p>
                        </div>
                        <div>
                            <p className="font-medium">Address: <span className="text-gray-300">{shippingInfo?.address}</span></p>
                        </div>
                    </div>
                </div>

                {/* Items List */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8">
                    <h4 className="text-xl font-semibold text-pink-500 mb-4">Items Ordered</h4>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-4 p-4 hover:bg-gray-700 rounded-lg transition">
                                <p className="text-lg font-medium text-gray-300">{item.name} (x{item.quantity})</p>
                                <p className="text-lg font-semibold text-pink-500">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">Your cart is empty.</p>
                    )}
                    <hr className="my-6 border-gray-700" />
                </div>

                {/* Pricing & Discount */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                    <div className="flex justify-between mb-4 text-lg">
                        <p className="font-semibold">Subtotal</p>
                        <p className="font-semibold">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mb-4 text-lg">
                        <p className="font-semibold">Discount</p>
                        <p className="font-semibold">-{discount}%</p>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="flex justify-between text-2xl font-bold">
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderConfirmation;
