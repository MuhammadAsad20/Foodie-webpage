import React, { useState } from 'react';

const sampleCartItems = [
    {
        id: 1,
        name: 'Margherita Pizza',
        price: 10.99,
        quantity: 2,
        image: 'https://rb.gy/n26tmd',
    },
    {
        id: 2,
        name: 'Caesar Salad',
        price: 7.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Chocolate Lava Cake',
        price: 6.99,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
    },
];

const CartPage = () => {
    const [cartItems, setCartItems] = useState(sampleCartItems);

    const handleQuantityChange = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4 bg-black text-white">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            
            <div className="space-y-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center border-b pb-4 mb-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-gray-400">Price: ${item.price.toFixed(2)}</p>
                            <div className="flex items-center mt-2">
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="bg-pink-500 text-white px-2 py-1 rounded"
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    className="mx-2 w-16 text-center text-black border border-gray-600 rounded"
                                    min="1"
                                />
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="bg-pink-500 text-white px-2 py-1 rounded"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="ml-4 text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">Subtotal: ${ (item.price * item.quantity).toFixed(2) }</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-between">
                <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
                <button className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition-colors duration-200">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
