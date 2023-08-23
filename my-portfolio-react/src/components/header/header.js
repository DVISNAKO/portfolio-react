import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <header class="header">
                <a href="/" class="logo">Portfolio</a>

                <i class='bx bx-menu' id="menu-icon"></i>

                <nav class="navbar">
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