import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo-nero.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className = {styles.headerContainer}>

            <Navbar expand="lg" bg='light'>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt="Delivery App Logo" className={styles.logo}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className={styles.hamburgerMenu}/>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.linkContainer} >
                    <Nav className={`mr-auto`}>
                    <Nav.Link className={styles.navHomeLink}>
                        <Link to="/" className={styles.homeLink}>Home</Link>
                    </Nav.Link>
                    <Nav.Link className={styles.navRestaurantsLink}>
                        <Link to="/selectedRestaurant" className={styles.restaurantsLink}>Ristoranti</Link>
                    </Nav.Link>
                    <Nav.Link className={styles.navLoginLink}>
                        <Link to="/login" className={styles.loginLink}>Login/Registrazioni</Link>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    )
}

export default Header;