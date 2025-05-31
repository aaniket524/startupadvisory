import React from 'react';
import './style.css';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

function CopyrightSection() {
    return (
        <div className="copyright-container">
            <div className="left-text">
                © Startup advisory BD GmbH 2012 - 2025 | Created by <strong>Marvik Studio</strong> 
            </div>
            <div className="right-icons">
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
        </div>
    );
}

export default CopyrightSection;
