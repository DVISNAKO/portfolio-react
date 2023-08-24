import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <header className="header">
                <a href="/" className="logo">Portfolio</a>

                <i className='bx bx-menu' id="menu-icon"></i>

                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <a href="#about">About</a>
                    <a href="#portfolio">JavaScript Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;