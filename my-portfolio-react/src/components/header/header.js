import './header.css';

function Header() {
    return (
        <div className='header'>
            <header class="header">
                <a href="#" class="logo">Portfolio</a>

                <i class='bx bx-menu' id="menu-icon"></i>

                <nav class="navbar">
                    <a href="#home" class="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>

                </nav>
            </header>
        </div>
    );
}

export default Header;