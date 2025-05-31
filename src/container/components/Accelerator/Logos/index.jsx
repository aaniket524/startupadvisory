import React from "react";
import './style.css';

function Logos() {
    return (
        <div className="logos">
            <div className="logos-main">
                
                <div className="logos-grid">
                    <img src="https://d2crvu6tosum4d.cloudfront.net/media/configuration/gogxn/gxn-logo-header.png" alt="Company 1" className="logos-img" />
            
                    <img src="logo2.png" alt="Company 2" className="logos-img" />
                    <img src="logo3.png" alt="Company 3" className="logos-img" />
                    <img src="logo4.png" alt="Company 4" className="logos-img" />
                    <img src="logo5.png" alt="Company 5" className="logos-img" />
                    <img src="logo6.png" alt="Company 6" className="logos-img" />
                    <img src="logo7.png" alt="Company 7" className="logos-img" />
                    <img src="logo8.png" alt="Company 8" className="logos-img" />
                    {/* Add more logos as needed */}
                </div>
            </div>
        </div>
    );
}

export default Logos;
