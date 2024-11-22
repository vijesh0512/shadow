import React, { useState } from 'react';
import './live.css'; // Add your styles

const Navbar = ({ onNavClick }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };

  const handleNavClick = (navItem) => {
    onNavClick(navItem);
    setIsSideOpen(false); 
  };

  const openPayment = () => {
    setIsPaymentOpen(true); 
  };

  const closePayment = () => {
    setIsPaymentOpen(false); 
  };

  const redirectToUPI = () => {
    window.location.href = "upi://pay?pa=9362954890@ptsbi"; 
  };

  return (
    <>
      <div className='navflex'>
        <img src="./line.jfif" alt="line" onClick={toggleSide} />
        <img 
          src="https://static.vecteezy.com/system/resources/previews/009/793/387/non_2x/india-currency-rupee-icon-symbol-illustration-vector.jpg" 
          alt="payment icon"  
          onClick={openPayment} 
        />
        {/* <h1 className='navbar'>SHADOW PLAYER</h1> */}
      </div>
      {isSideOpen && <SideNav onNavClick={handleNavClick} />}
      {isPaymentOpen && <PaymentModal onClose={closePayment} onPay={redirectToUPI} />}
    </>
  );
};

const SideNav = ({ onNavClick }) => {
  return (
    <div className='side-nav'>
      <ul>
        <li onClick={() => onNavClick('home')}>Home</li>
       <li onClick={() => onNavClick('vlc')}>Live TV</li>
        <li onClick={() => onNavClick('Movies')}>Movies</li>
        <li onClick={() => onNavClick('Shows')}>TV Shows</li>
        <li onClick={() => onNavClick('Kids')}>Kids</li>
        <li onClick={() => onNavClick('Albums')}>Albums</li>
        <li onClick={() => onNavClick('Series')}>Series</li>
        <li onClick={() => onNavClick('Vid')}>Video Songs</li>
      </ul>
    </div>
  );
};

const PaymentModal = ({ onClose, onPay }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contribute</h2>
        <h3>Scan to Pay</h3>
        <img 
          src="https://github.com/vijesh0512/image/blob/main/cad6e87b-1b60-4358-b9a6-0575f6c12d8b.jpg?raw=true" // Replace with your QR code image URL
          alt="QR Code" 
          className="qr-image" 
        />
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="paynow-btn" onClick={onPay}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
