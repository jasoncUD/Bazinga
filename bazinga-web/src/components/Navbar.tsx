import React, { FC } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {
   return (
    <nav className="navbar">
      <div className="nav-links">
        
        <Link to={'/'}>
            <h2>Home</h2> 
        </Link>
        <Link to={"/learn"}>
            <h2>Learn</h2>
        </Link>
        <Link to={"/profile"}>
            <h2>Profile</h2>
        </Link>
      </div>
      
    </nav>
   );
};

export default Navbar;