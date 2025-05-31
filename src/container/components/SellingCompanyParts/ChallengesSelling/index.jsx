import React from "react";
import './style.css';

function ChallengesSelling({ title = "", items = [] }) {
    return (
        <>
            <div className="selling-challenges">
                <h4 className="sc-title">
                    {title}
                </h4>
                <div className="sc-main">
                    {items.map((text, index) => (
                        <div className="sc-container" key={index}>
                            <p className="sc-para">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ChallengesSelling;
