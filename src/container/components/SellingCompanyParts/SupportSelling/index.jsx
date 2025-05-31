import React from "react";
import './style.css'; 

function SupportSelling({ 
    title = "", 
    subtitle = "", 
    list = [], 
    buttonText = "", 
    imageSrc = "" 
}) {
    return (
        <div className="support-selling">
            <h4 className="support-title">{title}</h4>
            <div className="support-content">
                <div className="support-image">
                    <img src={imageSrc} alt="Support visual" />
                </div>
                <div className="support-text">
                    <h4 className="support-subtitle">{subtitle}</h4>
                    <ul className="support-list">
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button className="support-button">{buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default SupportSelling;
