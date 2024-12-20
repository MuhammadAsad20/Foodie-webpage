import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // Adjust the path to your ThemeContext

const Header = () => {
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
            className={`flex justify-between items-center px-6 md:px-12 py-4 bg-transparent fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerTextColor} shadow-lg`}
        >
            {/* Logo */}
            <Link to="/test" className="flex items-center">
                <motion.h1
                    className={`text-3xl md:text-4xl font-bold ${headerTextColor}`}
                    whileHover={{ scale: 1.1, color: '#FF69B4' }}
                >
                    Foodie
                </motion.h1>
            </Link>

            {/* Hamburger Menu Icon (Mobile) */}
            <button
                className="md:hidden text-3xl text-pink-500"
                onClick={toggleNav}
            >
                <motion.div whileHover={{ scale: 1.2 }}>
                    <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </motion.div>
            </button>

            {/* Navigation Menu (Desktop and Mobile) */}
            <nav
                className={`absolute top-0 left-0 w-full bg-gray-800 bg-opacity-90 md:bg-transparent transition-all duration-300 md:relative md:flex md:space-x-8 md:flex-row md:items-center transform ${
                    isNavOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
            >
                <div className="flex flex-col md:flex-row md:space-x-8">
                    {['Home', 'Menu', 'About', 'Contact', 'Profile'].map((item, index) => (
                        <Link
                            key={index}
                            to={`/Pages/${item.toLowerCase()}`}
                            className={`nav-link ${headerTextColor} text-lg font-semibold py-2 px-4 hover:text-pink-500 transition-all duration-200`}
                            onClick={() => setIsNavOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Overlay for Mobile Menu */}
            {isNavOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-50 md:hidden"
                    onClick={() => setIsNavOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Header;
