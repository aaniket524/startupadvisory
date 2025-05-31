import React from "react";
import './style.css'

function HomeFourthSection(){
    return(
        <>
        <div className="homefourthsection">
            <div className="homefourthsection-main">
                <div className="hfs-c1">
                    <h4 className="hfs-head">
                        Support for you
                    </h4>
                    <p className="hfs-para">
                        Choose a topic that suits you best and let’s discuss your challenges. 
                        Our experts will be there to answer all your questions and advise you on 
                        potential solutions and support.
                    </p>
                    <button className="hfs-btn">Book Free Meeting Now "icon"</button>

                </div>
                <div className="hfs-c2">
                    <ul className="hfs-ul">
                        <li>Growth and Strategy</li>
                        <li>M&A - Corporate Finance</li>
                        <li>Organization Design</li>
                        <li>Workshops for accelerators</li>
                        <li>Self-paced trainings</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomeFourthSection