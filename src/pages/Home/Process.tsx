import React from "react";
import "./Process.css";
import BotonProcess from "../../components/BotonProcess/BotonProcess";


const processSteps = [
    {
        img: "/public/process/process1.png",
        title: "Project Consultation & Planning",
        description: (
            <>
                We start by listening to your goals, needs, and vision. Whether you’re
                remodeling your kitchen, bathroom, or entire home, we define the
                scope, timeline, and budget.
                <br />
                <br />
                This step ensures we understand exactly what you want — and how to make
                it happen.
            </>
        ),
    },
    {
        img: "/public/process/process2.png",
        title: "Design & Material Selection",
        description: (
            <>
                Once we understand your goals, we move into the design phase. We’ll
                help you choose layouts, finishes, colors, fixtures, tiles, flooring,
                and cabinetry that match your style and budget.
                <br />
                <br />
                You’ll get a clear plan before any work begins.
            </>
        ),
    },
    {
        img: "/public/process/process3.png",
        title: "Construction & Installation",
        description: (
            <>
                Now it’s time to bring the plan to life. Our team begins the
                construction process — from demolition to framing, plumbing,
                electrical, drywall, and installation.
                <br />
                <br />
                We keep the worksite clean and communicate with you at every step.
            </>
        ),
    },
    {
        img: "/public/process/process4.png",
        title: "Final Walkthrough & Quality Check",
        description: (
            <>
                Once construction is complete, we do a full walkthrough together to
                make sure every detail meets your expectations.
                <br />
                <br />
                We handle any final adjustments and leave your space clean, functional,
                and ready to enjoy.
            </>
        ),
    },
];

const Process: React.FC = () => (
    <section className="process-section">
        <div className="process-container">
            <div className="process-header">
                <h2 className="process-title">Our Remodeling Process</h2>
                <p className="process-description">
                    We follow a clear, client-focused process to ensure every remodeling
                    project is completed on time, on budget, and with high-quality results.
                </p>
            </div>
            <div className="process-content">
                {processSteps.map((step, idx) => (
                    <div className="process-item" key={idx}>
                        <img
                            className="process-item-image"
                            src={step.img}
                            alt={step.title}
                        />
                        <h4 className="process-item-title">{step.title}</h4>
                        <p className="process-item-description">{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="process-footer">
                <img className="process-footer-image" src="" alt="" />
                <BotonProcess/>
            </div>
        </div>
    </section>
);

export default Process;
