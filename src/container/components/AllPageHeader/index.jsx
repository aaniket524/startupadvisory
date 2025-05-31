import React from "react";
import './style.css'

function AllPageHeader({ subtitle, title,bgColor = "#fff", description, buttonText }){
    const sectionStyle = {
        backgroundColor: bgColor,
    };
    return(
        <>
        
        <div className="allpageheader"  style={sectionStyle}>
            <div className="allpageheader-main">
                <div className="allpageheader1">
                {subtitle && <p className="allpageh-para">{subtitle}</p>}
                    {title && <h4 className="allpageh-title">{title}</h4>}
                </div>
                 <div className="allpageheader2">
                     {description && <p className="allpageh-desc">{description}</p>}

                    <button className="allpageh-btn">
                            {buttonText}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AllPageHeader;