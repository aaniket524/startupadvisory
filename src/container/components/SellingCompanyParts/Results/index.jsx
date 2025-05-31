import React from "react";
import './style.css';

function ResultsSection({ title, results = [] }) {
    return (
        <div className="s-results">
            <h4 className="sresults-title">{title}</h4>
            <div className="sresults-cont">
                {results.map((item, index) => (
                    <div className="sresults-inner" key={index}>
                        {item.image && (
                            <div className="sresult-img-wrapper">
                                <img src={item.image} alt={item.text} className="sresult-img img-fluid" />
                            </div>
                        )}
                        <p className="sresults-para">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResultsSection;
