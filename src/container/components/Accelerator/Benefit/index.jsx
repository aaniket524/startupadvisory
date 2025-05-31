import React from "react";
import './style.css';

function Benefit() {
    return (
        <div className="benefit">
            <div className="benefit-main">
                <p className="benefit-subtitle">BENEFITS YOU GAIN</p>
                <h3 className="benefit-title">Why collaborate with Konsultori?</h3>
                <p className="benefit-desc">
                    Startup advisory workshops are a good choice for accelerators who want to provide startups 
                    with quality training from experienced trainers that leads to positive results and growth.
                </p>

                <div className="benefit-grid">
                    <div className="benefit-box">Expert trainers</div>
                    <div className="benefit-box">Flexible delivery</div>
                    <div className="benefit-box">Dynamic teaching</div>
                    <div className="benefit-box">Effective learning</div>
                    <div className="benefit-box">Impressive collabs</div>
                    <div className="benefit-box">Excellent feedback</div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;
