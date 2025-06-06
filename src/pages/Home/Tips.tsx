import React from "react";
import "./Tips.css";
import { BotonTip } from "../../components/BotonTip/BotonTip";

const tips = [
    {
        img: "public/tip/Tip1.png",
        alt: "Bathroom Remodel",
        day: "01",
        month: "Mar 12",
        tags: "Bathroom Remodel, Maryland Projects",
        title: "A Budget-Friendly Bathroom Makeover with Big Results",
        desc:
            "When our client in Glen Burnie, Maryland called us, their bathroom was outdated and in need of a refresh. They didn’t want a full renovation, just a clean, modern look that felt fresh without spending a fortune.",
    },
    {
        img: "public/tip/Tip2.png",
        alt: "Bathroom Remodel",
        day: "02",
        month: "Mar 30",
        tags: "PAINTING, MARYLAND PROJECTS",
        title: "A Fresh Look with Interior & Exterior Paint in Dundalk, MD",
        desc:
            "This Dundalk home got a major refresh with new interior and exterior paint, plus careful repairs to the window and door frames. The result? A clean, modern finish that looks brand new—without breaking the budget.",
    },
    {
        img: "public/tip/Tip3.png",
        alt: "Bathroom Remodel",
        day: "03",
        month: "Apr 08",
        tags: "A Clean Modern Bathroom Update in Rosedale, MD",
        title: "A Budget-Friendly Bathroom Makeover with Big Results",
        desc:
            "This small bathroom in Rosedale got a fresh update without a full renovation. We replaced the vanity and toilet, added a fresh coat of paint, and modernized the space with simple yet impactful touches.",
    },
];


const Tips: React.FC = () => (
    <section className="tips-section">
        <div className="tips">
            <h3 className="tips-title">Home Remodeling Tips & Trends in Maryland</h3>
            <p>
                Discover expert advice, remodeling inspiration, and real-life project
                stories from homes across Maryland. Whether you’re updating a bathroom in
                Towson or renovating your kitchen in Dundalk, our team shares tips,
                trends, and local insights to help you create a space you love.
            </p>
        </div>

        <div className="tips-card-container">
            {tips.map((tip, idx) => (
                <div className="tip-card" key={idx}>
                    <div className="tip-image-container">
                        <img src={tip.img} alt={tip.alt} />
                        <div className="tip-date-box">
                            <div className="tip-day">
                                <p>{tip.day}</p>
                            </div>
                            <div className="tip-month">
                                <p>{tip.month}</p>
                            </div>
                        </div>
                        <div className="tip-tag-box">{tip.tags}</div>
                    </div>
                    <div className="tip-content">
                        <h2>{tip.title}</h2>
                        <p>{tip.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        <BotonTip />
    </section>
);

export default Tips;
