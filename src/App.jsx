import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import Test from './components/Test';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import TermsOfService from './components/TermsOfServices';
import PrivacyPolicy from './components/PrivacyPolicy';
import CartPage from './components/Cart';
import CustomCursor from './components/Cursor';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += item.quantity;
        return newItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ThemeProvider> {/* Wrap with ThemeProvider */}
      <Router>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Test/>} />
          <Route path="/Pages/Home" element={<Home />} />
          <Route path="/Pages/About" element={<About />} />
          <Route path="/Pages/Contact" element={<Contact />} />
          <Route path="/Pages/Menu" element={<Menu />} />
          <Route path="/terms-of Service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
