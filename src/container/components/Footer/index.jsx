import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-column">
                    <h4>Our customers</h4>
                    <ul>
                        <li><span className="highlight"><Link to="/startup-consultant">Startups and Scaleups</Link></span></li>
                        <li><span className="highlight"><Link to="/small-enterprises">Small enterprises</Link></span></li>
                        <li><span className="highlight"><Link to="/accelerators">Accelerators</Link></span></li>
                        <li><span className="highlight"><Link to="/investors">Investors</Link></span></li>
                        <li><span className="highlight"><Link to="/">Food Sector</Link></span></li>
                    </ul>
                    <h4>Get in contact</h4>
                    <p>Postgasse 8b, 1010<br/>Vienna, Austria</p>
                    <p>sales@startup-advisory.com<br/>+43 680 221 3753</p>
                </div>

                <div className="footer-column">
                    <h4>Our Services</h4>
                    <ul>
                        <li><Link to="/growth-strategy">Growth strategy</Link></li>
                        <li><Link to="/startup-consultant">Go-to-market strategy for startups</Link></li>
                        <li><Link to="/">Business collaboration</Link></li>
                        <li><Link to="/">Strategy and Sustainability</Link></li>
                        <li><Link to="/organization">Organization</Link></li>
                        <li><Link to="/people-and-culture">People & Culture</Link></li>
                        <li><Link to="/leadership-and-change">Leadership and change</Link></li>
                        <li><Link to="/find-investors"> funding from investors</Link></li>
                        <li><Link to="/selling-a-company">Selling your business</Link></li>
                        <li><Link to="/business-valuation">Company valuation</Link></li>
                        <li><Link to="/">Financial plan</Link></li>
                        <li><Link to="/">Business negotiation tactics</Link></li>
                        <li><Link to="/startup-consultant">Startup Acquisitions</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Our Team</Link></li>
                        <li><Link to="/contact-us">Contact</Link></li>
                        <li><Link to="/">Become a partner</Link></li>
                        <li><Link to="/">Terms and condition</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Imprints</Link></li>
                        <li><Link to="/">Press</Link></li>
                        <li><Link to="/">Downloads</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
