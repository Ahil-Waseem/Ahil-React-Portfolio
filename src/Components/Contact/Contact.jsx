import React from 'react';
import "./Contact.css";

const Contact = () => {

    const handleWhatsAppSend = (e) => {
        e.preventDefault(); // Prevent page refresh

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Your WhatsApp Number (CHANGE THIS)
        const phoneNumber = "91XXXXXXXXXX"; // Add your phone number here without +

        const whatsappMessage =
            `New Inquiry From Portfolio:
Name: ${name}
Email: ${email}
Message: ${message}`;

        const url = `https://wa.me/${919793167187}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <p>Let’s create something amazing together — I’d love to hear from you!</p>
            </div>

            <div className="contact-section">

                {/* Left Section */}
                <div className="contact-left">
                    <h2>Let’s Talk</h2>
                    <p>
                        If you have any questions or project ideas, feel free to reach out.
                        I’m always open to discussing creative collaborations or freelance opportunities.
                    </p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <i className="fa-solid fa-envelope"></i>
                            <p>waseem@example.com</p>
                        </div>

                        <div className="contact-detail">
                            <i className="fa-solid fa-phone"></i>
                            <p>+919793167187</p>
                        </div>

                        <div className="contact-detail">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Navi Mumbai, Maharashtra</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - WhatsApp Form */}
                <form className="contact-right" onSubmit={handleWhatsAppSend}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter Your Name" required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" required />

                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="6" placeholder="Enter Your Message" required></textarea>

                    <button type="submit" className="send-btn">Send Message</button>
                </form>

            </div>
        </div>
    );
};

export default Contact;
