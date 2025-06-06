import React, { useRef } from "react";
import "./About.css";


const About: React.FC = () => {
    const cicleContainerRef = useRef<HTMLDivElement>(null);

    const handleCicleClick = () => {
        if (cicleContainerRef.current) {
            cicleContainerRef.current.classList.toggle("swap");
        }
    };

    return (
        <section className="about-section">
            <div className="about-header">
                <div className="about-intro">
                    <h2 className="about-title">About Bethelor.</h2>
                    {/* 
                    <p className="about-description">
                        Explore some of our featured remodeling About across Maryland. From
                        kitchens and bathrooms to full home makeovers, we bring quality and
                        creativity into every space.
                    </p> 
                    */}
                </div>
            </div>
            <div className="about-cicle-text">
                <div
                    className="container-cicles"
                    id="cicleContainer"
                    ref={cicleContainerRef}
                    onClick={handleCicleClick}
                >
                    <div className="cicle-white">
                        <p>Done Projects</p>
                        <span>+12</span>
                    </div>
                    <div className="cicle-black">
                        <p>Done Projects</p>
                        <span>2023</span>
                    </div>
                </div>

                <div className="container-text">
                    <h3>Home Remodeling with Integrity, Craftsmanship, and Vision.</h3>
                    <p>
                        At Bethelor, we specialize in home remodeling and improvement services
                        across Maryland. From kitchens and bathrooms to complete home
                        renovations, we bring precision, passion, and personalized attention to
                        every project—big or small.
                        <br />
                        <br />
                        Founded by skilled professionals with years of hands-on experience, Bethelor
                        is built on trust, hard work, and a clear commitment to quality. We work
                        closely with homeowners to transform their spaces with smart design, durable
                        materials, and reliable results.
                        <br />
                        <br />
                        Our team takes pride not only in what we build—but in how we make our clients
                        feel throughout the process.
                    </p>
                </div>
            </div>

            <div className="about-images">
                <img src="/public/about/about1.png" alt="" className="about-image1" />
                <img src="/public/about/about2.png" alt="" className="about-image2" />
                <img src="/public/about/about3.png" alt="" className="about-image3" />
            </div>
        </section>
    );
};

export default About;
