import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const addToCart = (item, quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }
            return [...prevItems, { ...item, quantity }];
        });
        setCartItemCount(prevCount => prevCount + quantity);
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setCartItemCount(prevCount => prevCount - 1); // Adjust the item count when removing
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, updateQuantity, cartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
