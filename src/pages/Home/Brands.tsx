import React from "react";
import "./Brands.css";

const Brands: React.FC = () => (
    <section className="brands-section">
        <div className="brand-logo">
            <img src="/public/brands/brands0.png" alt="" />
        </div>

        <div className="brand-details">
            <div className="brand-item">
                <img src="/public/brands/brands1.png" alt="" />
                <div className="brand-description">
                    <h3 className="brand-title">Creative Craftsmanship</h3>
                    <p className="brand-text">
                        Every project is guided by creativity and precision. We combine style and function to design spaces that are both beautiful and useful.
                    </p>
                </div>
            </div>

            <div className="brand-item">
                <img src="/public/brands/brands2.png" alt="" />
                <div className="brand-description">
                    <h3 className="brand-title">Tailored for You</h3>
                    <p className="brand-text">
                        We don’t believe in one-size-fits-all. Each home is different — and so is every solution we create for our clients.
                    </p>
                </div>
            </div>

            <div className="brand-item">
                <img src="/public/brands/brands3.png" alt="" />
                <div className="brand-description">
                    <h3 className="brand-title">Efficient & Reliable</h3>
                    <p className="brand-text">
                        We work smart and stay on schedule. Our team is focused, organized, and always respectful of your time and space.
                    </p>
                </div>
            </div>

            <div className="brand-item">
                <img src="/public/brands/brands4.png" alt="" />
                <div className="brand-description">
                    <h3 className="brand-title">Smart Planning, Solid Results</h3>
                    <p className="brand-text">
                        We help you make confident decisions from start to finish. Clear guidance, honest advice, and no surprises.
                    </p>
                </div>
            </div>
        </div>

        <div className="trusted-brands">
            <h3 className="trusted-brands-title">Brands We Trust for Remodeling in Maryland</h3>
            <div className="trusted-brands-logo">
                <img src="/public/brands/brands5.svg" alt="" />
            </div>
        </div>
    </section>
);

export default Brands;