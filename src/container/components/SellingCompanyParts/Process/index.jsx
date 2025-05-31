import React from "react";
import './style.css';

function ProcessSection({ title, steps = [],subtitle, buttonText = '', backgroundColor = '' }) {
    const sectionStyle = {
        backgroundColor: backgroundColor || 'transparent',
        paddingBottom: buttonText ? '40px' : '20px'
    };

    return (
        <div className="process" style={sectionStyle}>
            <h4 className="process-head">{title}</h4>
            {subtitle && <p className="process-subhead">{subtitle}</p>}

            <div className="process-main">
                {steps.map((step, index) => (
                    <div className="sprocess-container" key={index}>
                        <p className="sprocess-numb">
                            {String(index + 1).padStart(2, '0')}.
                        </p>
                        <h5 className="sprocess-title">{step.heading}</h5>
                        <p className="sprocess-para">{step.description}</p>
                    </div>
                ))}
            </div>
            
            {buttonText && (
                       <button className="hts-button">
{buttonText}                    </button>
            )}
        </div>
    );
}

export default ProcessSection;
