import React, { useState } from 'react';
import cart from "../src/images/icon-cart.svg";
import avatar from "../src/images/image-avatar.png";
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import "./App.css";
import type { RootState } from './store';

const App: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
    setIsCartOpen(false)
  };

  return (
    <div className="main">
      {/* Burger menu for mobile */}
      <div className="burger-menu">
        <button style={{ border: "none" }} onClick={toggleNav}>
          {isNavOpen ? (
            <i className="fa-solid fa-xmark"></i> // Close icon
          ) : (
            <i className="fa-solid fa-bars"></i> // Burger icon
          )}
        </button>
      </div>

      <header>
        <nav>
          <h1>Sneakers</h1>

          {/* Navigation Links */}
          <div className={`link-box ${isNavOpen ? 'open' : ''}`}>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/men">Men</Link>
            <Link className="nav-link" to="/women">Women</Link>
          </div>

          {/* Cart and Avatar */}
          <div className="box" style={{ position: 'relative' }}>
            <div onClick={toggleCart} style={{ cursor: 'pointer' }}>
              <img src={cart} alt="Cart icon" />
              <span>{totalQuantity}</span>
            </div>

            <img src={avatar} alt="User avatar" />

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="cart-dropdown">
                <h4>Cart</h4>
                {items.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul>
                    {items.map(item => (
                      <li key={item.id}>
                        <div style={{ height: "67px" }}>
                          <hr />
                          <div style={{ marginTop: "10px", display: "flex" }}>
                            <img
                              className="image-tools"
                              src={item.image}
                              alt={item.name || "Product image"}
                            />
                            <div className="totalPrice">
                              <span className="text">Fall Limited Edition Sneakers</span>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                                <span>${(item.quantity * item.price).toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </nav>
        <hr />
      </header>

      <main>
        <Outlet />

        {/* Optional mobile carousel container */}
        <div className="mobile-carousel">
          {/* Content goes here if needed */}
        </div>
      </main>
    </div>
  );
};

export default App;
