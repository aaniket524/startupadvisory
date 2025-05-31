import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './style.css';
import NewsLetter from '../Home/NewsLetter';

function ContactSection() {
    return (
        <>
        <section className="contact-section">
            <div className="contact-left">
                <h2>Get in touch<br />with us</h2>

                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                        <strong>EMAIL</strong>
                        <p>sales@startup-advisory.com</p>
                    </div>
                </div>

                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <div>
                        <strong>PHONE</strong>
                        <p>+43 680 221 3733</p>
                    </div>
                </div>

                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                        <strong>OFFICE</strong>
                        <p>Postgasse 8b, 1010 Vienna, Austria</p>
                    </div>
                </div>

                <div className="social-links">
                    <p>KEEP IN TOUCH</p>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaTwitter /></a>
                </div>
            </div>

            <div className="contact-right">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.7378723542934!2d16.376018915930726!3d48.210150979229376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07ad3320a7b1%3A0x4bcd645505ac8e3b!2sPostgasse%208b%2C%201010%20Wien%2C%20Austria!5e0!3m2!1sen!2sus!4v1685745631271!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
             
        </section>
        </>
      
    );
}

export default ContactSection;
