import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import  './navbar.css';
import { Button } from "./Button";



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {          /*Resize the button*/
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

  return (
  <>
    <nav className ='navbar'>
        <div className = 'navbar-container'>
            <Link to = '/' className="navbar-logo " onClick={closeMobileMenu}>
                Travel <i className='fab fa-typo3' />
            </Link> 
            <div className = 'menu-icon' onClick = {handleClick}>
                <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/*Resposible for the navbar to disappear everytime you click*/} 
                <li className='nav-item'>
                    <Link to ='/' className='nav-links' onClick = {closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/projects' className='nav-links' onClick = {closeMobileMenu}>
                        Project
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/contact' className='nav-links' onClick = {closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>
                        Sign up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
  </>
  )
}

export default Navbar;
