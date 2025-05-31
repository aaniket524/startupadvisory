import React from "react";
import './style.css'

function HomeThirdSection(){
    return(
        <>
        <div className="homethirdsection">
            <h4 className="homethirdsection-head">
                We are Working with
            </h4>
            <div className="homethirdsection-main">
                <div className="hts-container">
                    <p className="hts-numb">
                        01.
                    </p>
                    <h6 className="hts-title">
                        Early to mid-stage startups
                    </h6>
                    <p className="hts-para">
                        If you have launched your product and you need support beyond the initial stages, 
                        we support you with your next steps.
                    </p>

                    <button className="hts-button">
                        Learn More
                    </button>
                </div>
                  <div className="hts-container">
                    <p className="hts-numb">
                        02.
                    </p>
                    <h6 className="hts-title">
                        Innovative SMEs​
                    </h6>
                    <p className="hts-para">
                        If you are a small or mid-sized company, Startup advisory supports you in strengthening your business goals, 
                        finance, organisation and development.
                    </p>

                    <button className="hts-button">
                        Learn More
                    </button>
                </div>
                  <div className="hts-container">
                    <p className="hts-numb">
                        03.
                    </p>
                    <h6 className="hts-title">
                        Investors
                    </h6>
                    <p className="hts-para">
                        If you are investing in startups or SMEs and need support in evaluating their potential, due diligence and working with them after you invested into them, 
                        we can support your decision and getting your transaction and new strategy done.
                    </p>

                    <button className="hts-button">
                        Learn More
                    </button>
                </div>
                  <div className="hts-container">
                    <p className="hts-numb">
                        04.
                    </p>
                    <h6 className="hts-title">
                        Accelerators
                    </h6>
                    <p className="hts-para">
                        If you are running an accelerator and you need experts from the startup area to train and coach your startups or even provide a startup program overall, 
                        we are here to support you with our trainers and live and digital formats for your cohort.
                    </p>

                    <button className="hts-button">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomeThirdSection