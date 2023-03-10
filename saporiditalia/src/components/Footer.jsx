import React from "react";
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h4>About Us</h4>
                        <p>
                            Indulge in the taste of Italy with our menu, carefully crafted to take you on a culinary journey through Italy's diverse and flavorful cuisine.
                        </p>
                    </div>
                    <div className="footer__section">
                        <h4>Contact Us</h4>
                        <p>
                            123 Main Street
                            <br />
                            Anytown, USA 12345
                            <br />
                            Phone: (123) 456-7890
                            <br />
                            Email: bookings@saporeditalia.com
                        </p>
                    </div>
                    <div className="footer__section">
                        <h4>Social Media</h4>
                        <ul className="social">
                            <li><a href="">
                                <FaFacebook className="icon" />
                            </a></li>
                            <li><a href="">
                                <FaInstagram className="icon" />
                            </a></li>
                            <li><a href="">
                                <FaYoutube className="icon" />
                            </a></li>
                            <li><a href="">
                                <FaTwitter className="icon" />
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2023 Example Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
