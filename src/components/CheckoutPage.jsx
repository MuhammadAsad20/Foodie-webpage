import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const cartItems = location.state?.cartItems || [];

    const [shippingInfo, setShippingInfo] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [cardInfo, setCardInfo] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleCardInfoChange = (e) => {
        const { name, value } = e.target;
        setCardInfo({ ...cardInfo, [name]: value });
    };

    const handlePromoCode = () => {
        if (promoCode === "DISCOUNT10") {
            setDiscount(10); // 10% discount
            alert("Promo code applied!");
        } else {
            setDiscount(0);
            alert("Invalid promo code!");
        }
    };

    const handleOrderPlacement = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Additional validation for card payment
        if (paymentMethod === "Card" && (!cardInfo.cardNumber || !cardInfo.expiryDate || !cardInfo.cvv)) {
            alert("Please enter your card details.");
            return;
        }

        alert("Order placed successfully!");
        console.log("Shipping Info:", shippingInfo);
        console.log("Cart Items:", cartItems);
        console.log("Payment Method:", paymentMethod);
        if (paymentMethod === "Card") {
            console.log("Card Info:", cardInfo);
        }

        navigate("/Pages/OrderConfirmation", { state: { cartItems, shippingInfo, discount, paymentMethod, cardInfo } });
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const total = (subtotal * (1 - discount / 100)).toFixed(2);

    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6 lg:px-16">
                <h2 className="text-4xl font-extrabold text-center text-pink-500 mb-12">Checkout</h2>

                {/* Order Summary */}
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl mb-8">
                    <h3 className="text-2xl font-semibold text-pink-500 mb-6">Order Summary</h3>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-4 hover:bg-gray-700 p-4 rounded-lg transition">
                                <div>
                                    <p className="font-medium text-lg">{item.name}</p>
                                    <p className="text-sm text-gray-400">x{item.quantity}</p>
                                </div>
                                <p className="font-medium text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty!</p>
                    )}
                    <hr className="my-4 border-gray-700" />
                    <div className="flex justify-between mb-4 text-lg">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mb-4 text-lg">
                        <p>Discount</p>
                        <p>-{discount}%</p>
                    </div>
                    <hr className="my-4 border-gray-700" />
                    <div className="flex justify-between font-semibold text-2xl">
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>

                {/* Shipping Information Form */}
                <form onSubmit={handleOrderPlacement} className="bg-gray-800 p-10 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-semibold text-pink-500 mb-6">Shipping Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={shippingInfo.name}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={shippingInfo.phone}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400 mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={shippingInfo.address}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={shippingInfo.email}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                
                            />
                        </div>
                    </div>

                    {/* Payment Method Selection */}
                    <div className="mb-6">
                        <label className="block text-sm text-gray-400 mb-2">Payment Method</label>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="COD"
                                    checked={paymentMethod === "COD"}
                                    onChange={() => setPaymentMethod("COD")}
                                    className="mr-2"
                                />
                                Cash on Delivery (COD)
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Card"
                                    checked={paymentMethod === "Card"}
                                    onChange={() => setPaymentMethod("Card")}
                                    className="mr-2"
                                />
                                Credit/Debit Card
                            </label>
                        </div>
                    </div>

                    {/* Card Details (only show if 'Card' is selected) */}
                    {paymentMethod === "Card" && (
                        <div className="space-y-6 mb-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={cardInfo.cardNumber}
                                    onChange={handleCardInfoChange}
                                    className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>

                            <div className="flex space-x-6">
                                <div className="w-1/2">
                                    <label className="block text-sm text-gray-400 mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={cardInfo.expiryDate}
                                        onChange={handleCardInfoChange}
                                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label className="block text-sm text-gray-400 mb-2">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={cardInfo.cvv}
                                        onChange={handleCardInfoChange}
                                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Promo Code Section */}
                    <div className="flex items-center space-x-4 mb-6">
                        <input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Enter Promo Code"
                        />
                        <button
                            type="button"
                            onClick={handlePromoCode}
                            className="p-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:outline-none transition"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Place Order Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:outline-none transition"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CheckoutPage;
