import React from "react";
import './style.css';
import logo1 from '/src/assets/logos/logo1.jpg'
import logo2 from '/src/assets/logos/logo2.jpg'
import logo3 from '/src/assets/logos/logo3.jpg'
import logo4 from '/src/assets/logos/logo4.jpg'
import logo5 from '/src/assets/logos/logo5.jpg'
import logo6 from '/src/assets/logos/logo6.jpg'
import logo7 from '/src/assets/logos/logo7.jpg'
import logo8 from '/src/assets/logos/logo8.jpg'
import logo9 from '/src/assets/logos/logo9.jpg'
import logo10 from '/src/assets/logos/logo10.jpg'
import logo11 from '/src/assets/logos/logo11.jpg'
import logo12 from '/src/assets/logos/logo12.jpg'




function HomeSixSection(){
    return(
        <>
        <div className="h-logos">
            <div className="h-logo-main">
             <div className="h-logo-cont">
                  <img src={logo1} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo2} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo3} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo4} className="imgfluid"/>
              </div>
                            <div className="h-logo-cont">
                  <img src={logo5} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo6} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo7} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo8} className="imgfluid"/>
              </div>
                <div className="h-logo-cont">
                  <img src={logo9} className="imgfluid"/>
              </div>
                 <div className="h-logo-cont">
                  <img src={logo10} className="imgfluid"/>
              </div>
                 <div className="h-logo-cont">
                  <img src={logo11} className="imgfluid"/>
              </div>
                 <div className="h-logo-cont">
                  <img src={logo12} className="imgfluid"/>
              </div>
            </div>
            <div className="h-logo-button">
           <button className="h-logo-btn">View All</button>
            </div>
        </div>
        </>
    )
}
export default HomeSixSection