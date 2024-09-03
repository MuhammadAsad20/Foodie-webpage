import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // Adjust the path to your ThemeContext

const Header = ({ cartItemCount, onSearch }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const { isDarkMode } = useTheme();
    const location = useLocation();
    
    const isHomePage = location.pathname === '/Pages/home';

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    // Track the scroll position to determine if header is over the hero section
    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => {
                setIsHeroVisible(window.scrollY < 100); // Adjust the scroll position value as needed
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isHomePage]);

    // Define header text color based on visibility and theme
    const headerTextColor = isHomePage && isHeroVisible ? 'text-white' : isDarkMode ? 'text-white' : 'text-black';

    return (
        <header
            className={`flex flex-col md:flex-row items-center ${
                isNavOpen ? 'py-12 p-4' : 'p-2'
            } bg-transparent md:bg-opacity-0 fixed top-0 left-0 w-full z-50 shadow-md ${headerTextColor}`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center mr-auto md:mb-0">
                <motion.h1
                    className={`text-3xl md:text-4xl font-bold ${headerTextColor}`}
                    whileHover={{ scale: 1.1, color: '#FF69B4' }}
                >
                    Foodie
                </motion.h1>
            </Link>

            {/* Hamburger Menu Icon (Mobile) */}
            <button
                className="md:hidden text-2xl mb-2"
                onClick={toggleNav}
            >
                <motion.div whileHover={{ scale: 1.2 }}>
                    <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </motion.div>
            </button>

            {/* Navigation Menu (Desktop and Mobile) */}
            <nav
                className={`fixed top-0 left-0 w-full bg-gray-500 bg-opacity-70 md:bg-transparent transition-transform transform md:relative ${
                    isNavOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:flex md:space-x-8`}
            >
                {['Home', 'Menu', 'About', 'Contact'].map((item, index) => (
                    <Link
                        key={index}
                        to={`/Pages/${item.toLowerCase()}`}
                        className={`nav-link ${headerTextColor} text-lg font-bold hover:text-pink-400`}
                        onClick={() => setIsNavOpen(false)}
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            {/* Search Bar and Cart Icon */}
            <div className="flex items-center space-x-4 mt-2 md:mt-0 md:ml-auto w-full md:w-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded-lg border-2 border-gray-600 focus:outline-none text-black bg-white w-full md:w-48"
                    onChange={(e) => onSearch(e.target.value)}
                />
                <Link to="/cart" className="relative">
                    <motion.div
                        className="relative flex items-center"
                        whileHover={{ scale: 1.2 }}
                    >
                        <i className="fa fa-shopping-cart text-2xl"></i>
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {cartItemCount}
                            </span>
                        )}
                    </motion.div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
