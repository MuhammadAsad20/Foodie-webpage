import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Ensure this CSS file is imported
// Sample Menu Items
const sampleMenuItems = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
        price: 12.00,
        image: 'https://shorturl.at/ac7Y2',
        type: 'Main Courses',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Pan Cakes',
        description: 'Fluffy pancakes served with syrup and butter.',
        price: 10.00,
        image: 'https://shorturl.at/uKaeY',
        type: 'Desserts',
        rating: 3.8
    },
    {
        id: 3,
        name: 'Spaghetti ma ma mia',
        description: 'Classic Italian pasta dish with a twist.',
        price: 22.00,
        image: 'https://shorturl.at/PuQXw',
        type: 'Main Courses',
        rating: 4.2
    },
    {
        id: 4,
        name: 'Chicken Alfredo',
        description: 'Creamy Alfredo sauce over fettuccine pasta with grilled chicken.',
        price: 14.00,
        image: 'https://rb.gy/dh52x3',
        type: 'Main Courses',
        rating: 4.0
    },
    {
        id: 5,
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
        price: 9.00,
        image: 'https://rb.gy/jix7oe',
        type: 'Appetizers',
        rating: 3.5
    },
    {
        id: 6,
        name: 'Margherita Pizza',
        description: 'Fresh tomatoes, mozzarella cheese, and basil on a crispy crust.',
        price: 10.00,
        image: 'https://rb.gy/n26tmd',
        type: 'Main Courses',
        rating: 4.8
    },
    {
        id: 7,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
        price: 7.00,
        image: 'https://shorturl.at/NWhT5',
        type: 'Desserts',
        rating: 4.9
    },
    {
        id: 8,
        name: 'Grilled Salmon',
        description: 'Perfectly grilled salmon served with a lemon butter sauce and vegetables.',
        price: 18.00,
        image: 'https://rb.gy/9r5p0l',
        type: 'Appetizers',
        rating: 4.7
    },
    {
        id: 9,
        name: 'Chocolate Lava Cake',
        description: 'Rich chocolate cake with a gooey molten center.',
        price: 6.99,
        image: 'https://shorturl.at/teMDJ',
        type: 'Desserts',
        rating: 4.6
    },
    {
        id: 10,
        name: 'Lemonade',
        description: 'Refreshing lemonade made with fresh lemons.',
        price: 2.99,
        image: 'https://shorturl.at/mrtus',
        type: 'Beverages',
        rating: 4.3
    },
    {
        id: 11,
        name: 'BBQ Ribs',
        description: 'Tender ribs glazed with a smoky BBQ sauce.',
        price: 16.00,
        image: 'https://shorturl.at/n8f6q',
        type: 'Main Courses',
        rating: 4.4
    },
    {
        id: 12,
        name: 'Buffalo Wings',
        description: 'Spicy chicken wings served with celery and ranch.',
        price: 11.00,
        image: 'https://shorturl.at/zIicd',
        type: 'Appetizers',
        rating: 4.3
    },
    {
        id: 13,
        name: 'Signature Burger',
        description: 'Juicy beef patty with cheese, lettuce, and our special sauce.',
        price: 13.00,
        image: 'https://shorturl.at/QV3P8',
        type: 'Main Courses',
        rating: 4.5
    },
    {
        id: 14,
        name: 'Greek Salad',
        description: 'Mixed greens with olives, feta cheese, and a Greek vinaigrette.',
        price: 8.00,
        image: 'https://shorturl.at/OpFIR',
        type: 'Appetizers',
        rating: 4.2
    },
    {
        id: 15,
        name: 'Pumpkin Pie',
        description: 'Classic pumpkin pie with a spiced filling.',
        price: 5.50,
        image: 'https://shorturl.at/Atufe',
        type: 'Desserts',
        rating: 4.7
    },
    {
        id: 16,
        name: 'Cheesecake',
        description: 'Rich and creamy cheesecake with a graham cracker crust.',
        price: 6.50,
        image: 'https://tinyurl.com/445fhh44',
        type: 'Desserts',
        rating: 4.8
    },
    {
        id: 17,
        name: 'Iced Coffee',
        description: 'Refreshing iced coffee with a hint of vanilla.',
        price: 3.50,
        image: 'https://tinyurl.com/4kar9wax',
        type: 'Beverages',
        rating: 4.1
    },
    {
        id: 18,
        name: 'Hot Chocolate',
        description: 'Rich hot chocolate topped with whipped cream.',
        price: 4.00,
        image: 'https://tinyurl.com/muv9m2vd',
        type: 'Beverages',
        rating: 4.4
    },
    {
        id: 19,
        name: 'Mojito',
        description: 'Refreshing mint and lime cocktail.',
        price: 5.50,
        image: 'https://tinyurl.com/3xtpbc5u',
        type: 'Beverages',
        rating: 4.6
    },
    {
        id: 20,
        name: 'Berry Smoothie',
        description: 'Smoothie made with mixed berries and yogurt.',
        price: 4.50,
        image: 'https://tinyurl.com/ycyzdwcx',
        type: 'Beverages',
        rating: 4.7
    }
];

const MenuSection = () => {
    const [filteredItems, setFilteredItems] = useState(sampleMenuItems);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [editQuantity, setEditQuantity] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages'];

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
        let items = sampleMenuItems;

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
        setEditQuantity(item.id);
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setQuantity(isNaN(value) ? 1 : value);
    };

    const handleSaveQuantity = () => {
        setCartItemCount(prev => prev + quantity);
        setEditQuantity(null);
        setQuantity(1);
    };

    return (
        <section id="menu" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-customPink">Our Menu</h2>
                
                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search for a dish..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="p-2 w-full border border-gray-300 rounded text-black"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap space-x-2 mb-8">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-3 py-1 rounded text-sm ${
                                selectedCategory === category
                                    ? 'bg-pink-500 text-white'
                                    : 'bg-gray-800 text-white'
                            }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="border rounded-lg p-4 shadow-lg bg-gray-800 hover:bg-gray-800 transition-colors duration-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <h3 className="text-xl font-bold mt-4">{item.name}</h3>
                                <p className="text-gray-400">{item.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-pink-500 font-bold">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    {editQuantity === item.id ? (
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={handleDecrement}
                                                className="bg-pink-500 text-white px-4 py-2 rounded"
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                className="w-12 text-center text-black border border-gray-600 rounded no-spinner"
                                            />
                                            <button
                                                onClick={handleIncrement}
                                                className="bg-pink-500 text-white px-4 py-2 rounded"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={handleSaveQuantity}
                                                className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200 flex items-center space-x-2"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            <i className="fa-solid fa-cart-shopping text-lg"></i>
                                            <span className="ml-2">Add to Cart</span>
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center col-span-full">No items found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
