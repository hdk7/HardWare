import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
  const [menu,setMenu]=useState("home");
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Quality Tools, Delivered to Your Door</h2>
            <p>Enjoy competitive prices and frequent discounts on high-quality tools and hardware.</p>
            <button>
            <a 
            href="#explore-menu" 
            onClick={() => setMenu("menu")} 
            className={menu === "menu" ? "active" : ""}
          > View Products</a></button>
        </div>
    </div>
  )
}

export default Header
