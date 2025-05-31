import React from "react";
import './style.css';
import { FaLightbulb, FaHammer, FaPuzzlePiece, FaHandshake, FaHeart } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";

function HomeFifthSection() {
    return (
        <>
            <div className="hfifths">
                <h4 className="hfiths-h">Our Values</h4>
                <div className="hfifth-main">
                    <div className="hfifth-r">
                        <div className="hfifth-container">
                            <FaLightbulb className="hfifth-icon" />
                            <h6 className="hfifth-sub">We are passionate entrepreneurs</h6>
                            <p className="hfifth-para">
                                Our passion for business is contagious. We are entrepreneurs and investors ourselves 
                                and like to share our experience and knowledge with customers and partners.
                            </p>
                        </div>
                        <div className="hfifth-container">
                            <FaHammer className="hfifth-icon" />
                            <h6 className="hfifth-sub">We go all the way</h6>
                            <p className="hfifth-para">
                                Advising and concepts are just the start. We do not give up easily, 
                                roll up our sleeves and execute for results.
                            </p>
                        </div>
                        <div className="hfifth-container">
                            <FaPuzzlePiece className="hfifth-icon" />
                            <h6 className="hfifth-sub">Innovative solutions</h6>
                            <p className="hfifth-para">
                                With our innovative formats in advisory and training, we always find the right, 
                                future-proof solutions for our customers.
                            </p>
                        </div>
                    </div>

                    <div className="hfifth-r">
                        <div className="hfifth-container">
                            <GiPlantSeed className="hfifth-icon" />
                            <h6 className="hfifth-sub">We empower for long-term success</h6>
                            <p className="hfifth-para">
                                We empower entrepreneurs to build the capabilities to master their challenges and 
                                succeed long-term. We expect entrepreneurs and ourselves 
                                to take charge and ownership of a sustainable future - for business and beyond.
                            </p>
                        </div>
                        <div className="hfifth-container">
                            <FaHandshake className="hfifth-icon" />
                            <h6 className="hfifth-sub">We believe in the power of collaboration</h6>
                            <p className="hfifth-para">
                                Our creativity and resourcefulness lies in forging connections 
                                (which others might not be able to see, be they conceptually or in the form of cooperations) 
                                which allow entrepreneurs to overcome challenges.
                            </p>
                        </div>
                        <div className="hfifth-container">
                            <FaHeart className="hfifth-icon" />
                            <h6 className="hfifth-sub">We live and expect diversity</h6>
                            <p className="hfifth-para">
                                Openness, fairness, and a human touch. Our team brings different perspectives to our work.
                                We strive to communicate at eye level and openly, 
                                encouraging feedback and fair behaviour.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeFifthSection;
