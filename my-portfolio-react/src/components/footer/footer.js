import './footer.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-text">
                    <p>Created in 2023 by Dmitry Vishnyakov</p>
                </div>
                <div className="footer-iconsTop">
                    <a href="#home"><box-icon name='up-arrow-alt'></box-icon></a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;