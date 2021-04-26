import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        console.log(localStorage.getItem("loggedIn"));
        setLoggedIn(localStorage.getItem("loggedIn"));
        console.log(loggedIn);
    }, [localStorage.getItem("loggedIn")]);


    const handleClick = () => setClick(!click);
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
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        PyJaC
                        <span className='fa-stack fa-lg'>
                            <i className='fas fa-desktop fa-stack-2x'></i>
                            <i className='fas fa-angle-right fa-stack-1x'></i>
                            <i className='fas fa-question fa-stack-1x'></i>
                        </span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/quiz'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Take Quiz
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/subfields'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Subfields
                            </Link>
                        </li>

                        {loggedIn ? (
                            <>
                                <li className='nav-item'>
                                    <Link
                                        to='/profile'
                                        className='nav-links'
                                        onClick={closeMobileMenu}
                                    >
                                        Profile
                                    </Link>
                                </li>
                            </>

                        ) : (
                            <>
                                <li>
                                    <Link
                                        to='/sign-up'
                                        className='nav-links-mobile'
                                        onClick={closeMobileMenu}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/login'
                                        className='nav-links-mobile'
                                        onClick={closeMobileMenu}
                                    >
                                        Log In
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {loggedIn ? (
                        <></>
                    ) : (
                        <>
                            {button && <Link to='/sign-up'><Button buttonStyle='btn--outline'>SIGN UP</Button> </Link>}
                            {button && <Link to='/login'><Button buttonStyle='btn--outline'>LOG IN</Button> </Link>}
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;