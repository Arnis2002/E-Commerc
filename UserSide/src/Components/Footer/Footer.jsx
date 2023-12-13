import './Footer.css';
import FooterLogo from '../Assets/logo_big.png';
import InstagramIcon from '../Assets/instagram_icon.png';
import PinterestIcon from '../Assets/pintester_icon.png';
import WhatsAppIcon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={FooterLogo} alt="" />
                <p>SHOPPER</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={InstagramIcon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={PinterestIcon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={WhatsAppIcon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright Arnis@ 2023 - All Right Reserved.</p>
            </div>
          
        </div>
    )
}

export default Footer