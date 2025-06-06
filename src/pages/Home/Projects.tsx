import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projectImages = [
    "/public/project/project1.png",
    "/public/project/project2.png",
];

const categories = [
    { name: "ALL PROJECTS", count: 12 },
    { name: "KITCHEN REMODELING", count: 3 },
    { name: "BATHROOM REMODELING", count: 3 },
    { name: "BASEMENT REMODELING", count: 1 },
    { name: "WINDOW & DOOR REPLACEMENT", count: 5 },
];

export const Projects: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const trackRef = useRef<HTMLDivElement>(null);
    const [imageWidth, setImageWidth] = useState(0);

    // Prepare images with clones for infinite effect
    const imagesWithClones = [
        projectImages[projectImages.length - 1], // last as first clone
        ...projectImages,
        projectImages[0], // first as last clone
    ];

    useEffect(() => {
        // Set image width after mount
        const img = document.getElementById("slider-img-1") as HTMLImageElement;
        if (img) {
            setImageWidth(img.clientWidth + 10);
        }
    }, []);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transition = "none";
            trackRef.current.style.transform = `translateX(-${current * imageWidth}px)`;
        }
    }, [imageWidth]);

    const updateSlider = (next: number, animate = true) => {
        if (trackRef.current) {
            trackRef.current.style.transition = animate
                ? "transform 0.8s ease-in-out"
                : "none";
            trackRef.current.style.transform = `translateX(-${next * imageWidth}px)`;
        }
    };

    const handleRight = () => {
        if (current >= imagesWithClones.length - 1) return;
        const next = current + 1;
        setCurrent(next);
        updateSlider(next);
    };

    const handleLeft = () => {
        if (current <= 0) return;
        const next = current - 1;
        setCurrent(next);
        updateSlider(next);
    };

    // Infinite loop effect
    useEffect(() => {
        const handleTransitionEnd = () => {
            if (current === imagesWithClones.length - 1) {
                setCurrent(1);
                updateSlider(1, false);
            } else if (current === 0) {
                setCurrent(imagesWithClones.length - 2);
                updateSlider(imagesWithClones.length - 2, false);
            }
        };
        const track = trackRef.current;
        if (track) {
            track.addEventListener("transitionend", handleTransitionEnd);
            return () => {
                track.removeEventListener("transitionend", handleTransitionEnd);
            };
        }
    }, [current, imageWidth, imagesWithClones.length]);

    return (
        <section className="projects-section">
            {/* Title and Introduction */}
            <div className="projects-header">
                <div className="projects-intro">
                    <h2 className="projects-title">Our Projects.</h2>
                    <p className="projects-description">
                        Explore some of our featured remodeling projects across Maryland. From
                        kitchens and bathrooms to full home makeovers, we bring quality and
                        creativity into every space.
                    </p>
                </div>
                <img
                    src="public/project/boton-rigth.png"
                    alt="Projects"
                    className="projects-image"
                />
            </div>

            {/* Project Content */}
            <div className="project-content">
                {/* Categories List */}
                <div className="project-categories">
                    <ul className="categories-list">
                        {categories.map((cat) => (
                            <li className="category-item" key={cat.name}>
                                {cat.name} <span className="category-count">{cat.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Featured Projects Slider */}
                <div className="slider-container">
                    {/* Images */}
                    <div className="slider-track" ref={trackRef} style={{ display: "flex" }}>
                        {imagesWithClones.map((src, idx) => (
                            <img
                                key={idx}
                                id={`slider-img-${idx}`}
                                src={src}
                                className="slider-img"
                                alt={`Project ${idx}`}
                                draggable={false}
                                style={{ userSelect: "none" }}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="slider-controls">
                        <img
                            src="/public/project/boton-left.png"
                            className="slider-btn left"
                            alt="Previous"
                            onClick={handleLeft}
                            style={{ cursor: "pointer" }}
                        />
                        <img
                            src="/public/project/boton-rigth-white.png"
                            className="slider-btn right"
                            alt="Next"
                            onClick={handleRight}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;