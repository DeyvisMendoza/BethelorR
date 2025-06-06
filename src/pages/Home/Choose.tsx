import React from "react";
import "./Choose.css";
import { BotonChoose } from "../../components/BotonChoose/BotonChoose";

const Choose: React.FC = () => {
    return (
        <section className="choose-section">
            <div className="choose-image-text-container">
                <div
                    className="choose-image-overlay"
                    style={{ backgroundImage: "url('/public/choose/choose1.png')" }}
                ></div>
                <div className="choose-text-container">
                    <h1>Why Choose Bethelor?</h1>
                </div>
            </div>

            <div className="choose-content">
                <div className="choose-content-wrapper">
                    <div className="choose-description">
                        <p>
                            At Bethelor, we may be a small local team—but we go above and beyond to deliver big results.
                            <br />
                            <br />
                            Our commitment goes beyond construction. We build trust, create beautiful and functional spaces, and treat every project like it’s our own home.
                        </p>
                        {/* <img src="public/icons/boton-choose1.png" alt="" /> */}
                       <BotonChoose/>
                    </div>
                    <div className="choose-details">
                        <div className="choose-list">
                            <ul>
                                <li>Locally owned and operated in Maryland</li>
                                <li>Friendly, skilled, and detail-oriented crew</li>
                                <li>Transparent pricing and clear communication</li>
                                <li>Clean job sites, respectful of your home</li>
                                <li>Flexible scheduling and fast project turnaround</li>
                            </ul>
                        </div>
                        <div className="choose-stats">
                            <div className="choose-stat">
                                {/* <span id="count1" className="count" data-target="12">0</span> */}
                                <span>+12</span>
                                <p>COMPLETED PROJECTS SINCE 2023</p>
                            </div>
                            <div className="choose-stat">
                                {/* <span id="count2" className="count" data-target="100">0</span><span>%</span> */}
                                <span>100%</span>
                                <p>CLIENT SATISFACTION GOAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-box">
                <h3>Thinking About Remodeling Your Home?</h3>
                <img src="/public/choose/boton.png" alt="" />
            </div>
        </section>
    );
};

export default Choose;
