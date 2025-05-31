import React from "react";
import './style.css';

function SellingLogo({ logos = [], limit = 12, showButton = true }) {
    // Only display 'limit' number of logos
    const visibleLogos = logos.slice(0, limit);

    return (
        <div className="h-logos">
            <div className="h-logo-main">
                {visibleLogos.map((logo, index) => (
                    <div className="h-logo-cont" key={index}>
                        <img src={logo} className="imgfluid" alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>

            {showButton && (
                <div className="h-logo-button">
                    <button className="h-logo-btn">View All</button>
                </div>
            )}
        </div>
    );
}

export default SellingLogo;
