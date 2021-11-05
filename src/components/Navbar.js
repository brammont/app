import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick =()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
    };
    useEffect(() => {    
        showButton();
        window.addEventListener('resize', showButton);
        // limpiar funcion
        return () => {
        // remover el evento expandir en la pantalla
        window.removeEventListener('resize', showButton);
      }
    }, [])
   
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint
                            className="nav-icon"
                            />
                            LAVAISH
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes/>:<FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Principal
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                    Productos
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'>Registrarse</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}
                                        >
                                            Registrarse
                                        </Button>
                                    </Link>
                                    )}
                            </li>
                        </ul>
                    </div>
                </nav>  
            </IconContext.Provider>
        </>
    )
}

export default Navbar
