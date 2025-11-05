import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Ahi Waseem</h2>
                    <p>Full Stack Java Developer | Web Developer</p>
                    <div className="footer-socials">
                        <a href="mailto:ahilwaseen315@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="tel:+919793167187">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ahil-waseem" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Ahil-Waseem" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-center">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Contact Info</h3>
                    <p><i className="fa-solid fa-envelope"></i> ahilwaseen315@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
                    <p><i className="fa-solid fa-location-dot"></i> Navi Mumbai, India</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Ahil Waseem. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
