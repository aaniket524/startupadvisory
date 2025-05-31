import React from "react";
import './style.css'; // Keep your existing style file

function Expertise({ title, items = [] }) {
    return (
        <div className="expertise">
            <h4 className="expertise-title">{title}</h4>
            <div className="expertise-cont">
                {items.map((item, index) => (
                    <div className="expertise-inner" key={index}>
                        <h6 className="expertise-h">{item.heading}</h6>
                        <p className="expertise-p">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Expertise;
