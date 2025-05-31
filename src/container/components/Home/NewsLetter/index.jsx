import React from "react";
import './style.css'

function NewsLetter(){
    return(
        <>
        <div className="newsletter">
            <div className="news-letter-main">
                <div className="news-letter-m1">
                <h4 className="newsletter-title">
                    Startup advisory  Newsletter
                </h4>
                </div>
                <div className="news-letter-m2">
                <button className="newsletter-btns">
                    Subscribe
                </button>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default NewsLetter