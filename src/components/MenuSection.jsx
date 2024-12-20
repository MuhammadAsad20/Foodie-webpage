import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import menuData from '../Data/SampleData';

const MenuSection = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [filteredItems, setFilteredItems] = useState(menuData);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [editQuantity, setEditQuantity] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [toastMessage, setToastMessage] = useState(null); // Toast message state

    const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages'];

    // Detect system theme preference
    useEffect(() => {
        const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(matchDark.matches);

        const handleThemeChange = (e) => setIsDarkMode(e.matches);
        matchDark.addEventListener('change', handleThemeChange);

        return () => {
            matchDark.removeEventListener('change', handleThemeChange);
        };
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        filterItems(category, searchQuery);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        filterItems(selectedCategory, query);
    };

    const filterItems = (category, query) => {
        let items = menuData;

        if (category !== 'All') {
            items = items.filter((item) => item.type === category);
        }

        if (query) {
            items = items.filter((item) =>
                item.name.toLowerCase().includes(query)
            );
        }

        setFilteredItems(items);
    };

    const handleAddToCart = (item) => {
        addToCart(item, quantity);
        setCartItemCount((prev) => prev + quantity);
        setEditQuantity(null);
        setQuantity(1);

        // Show toast message
        setToastMessage(`Added ${item.name} to the cart!`);
        setTimeout(() => setToastMessage(null), 3000); // Clear message after 3 seconds
    };

    const handleGoToCart = () => navigate('/Pages/cart');

    return (
        <section
            id="menu"
            className={`py-16 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'}`}
        >
            <div className="container mx-auto px-8 lg:px-20">
                <h2 className={`text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-pink-500' : 'text-pink-600'}`}>
                    Our Menu
                </h2>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search for a dish..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={`p-4 w-full border rounded-lg shadow-md focus:outline-none focus:ring-2 ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-300 focus:ring-pink-500' : 'border-gray-300 bg-gray-200 text-gray-900 focus:ring-pink-600'}`}
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center space-x-4 mb-10">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold ${
                                selectedCategory === category
                                    ? isDarkMode
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-pink-600 text-white'
                                    : isDarkMode
                                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                            }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${
                                    isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="text-sm mt-2">{item.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => handleAddToCart(item)}
                                            className={`px-4 py-2 rounded-lg font-medium ${
                                                isDarkMode
                                                    ? 'bg-pink-500 text-white hover:bg-pink-400'
                                                    : 'bg-pink-600 text-white hover:bg-pink-500'
                                            }`}
                                        >
                                            Add to Cart
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center col-span-full">No items found matching your search.</p>
                    )}
                </div>

                {/* Toast Notification */}
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg bg-pink-500 text-white text-lg font-semibold"
                    >
                        {toastMessage}
                    </motion.div>
                )}

                {/* Cart Button */}
                <div className="fixed bottom-4 right-4">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`p-4 rounded-full shadow-lg cursor-pointer ${
                            isDarkMode
                                ? 'bg-gray-800 text-gray-300'
                                : 'bg-gray-100 text-gray-900'
                        }`}
                        onClick={handleGoToCart}
                    >
                        <span className="text-lg font-bold">🛒 {cartItemCount}</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
