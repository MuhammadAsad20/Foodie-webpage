import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import { CartProvider } from './context/CartContext';
import Test from './components/Test';
import Loader from './components/Loader';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import TermsOfService from './components/TermsOfServices';
import PrivacyPolicy from './components/PrivacyPolicy';
import CartPage from './components/Cart';
import CustomCursor from './components/Cursor';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmation from './components/OrderConfirmation';
import AuthPage from './Pages/Auth';
import ProfilePage from './Pages/Profile';

function App() {
  
  return (
     <ThemeProvider> {/* Wrap with ThemeProvider */}
      <CartProvider> {/* Wrap with CartProvider */}
        <Router>
          <CustomCursor />
          <Routes>
            <Route path="/" element={<Loader />} />
            <Route path="/test" element={<Test />} />
            <Route path="/Pages/home" element={<Home />} />
            <Route path="/Pages/about" element={<About />} />
            <Route path="/Pages/contact" element={<Contact />} />
            <Route path="/Pages/menu" element={<Menu />} />
            <Route path="/Pages/auth" element={<AuthPage />} />
            <Route path="/Pages/profile" element={<ProfilePage />} />
            <Route path="/Pages/cart" element={<CartPage />} />
            <Route path="/Pages/CheckoutPage" element={<CheckoutPage />}/>
            <Route path="/Pages/OrderConfirmation" element={<OrderConfirmation />}/>
            <Route path="/Terms-of-Service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
