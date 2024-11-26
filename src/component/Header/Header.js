import React from 'react';
import './Header.css';
import { assest } from '../../assest/assest';


const Header = () => {
  return (
    <div className='header'>
      <div className='brand'>
        <img src={assest.vector} alt='Brand Icon' />
        <h1>BrandNav</h1>
      </div>
      <ul>
        <li>Product</li>
        <li>Pricing</li>
        <li>Blogs</li>
        <li>Resources</li>
      </ul>
      <div className="log">
        <h4 className="login">Login</h4>
        <h4 className="str">Start for free</h4>
      </div>
    </div>
  );
};

export default Header;

