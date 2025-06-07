import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Importar motion y useInView
import "./Projects.css";

const projectImages = [
    "/project/project1.png", // Asegúrate de que las rutas sean correctas para tu setup.
    "/project/project2.png", // Por ejemplo, si están en 'public', la ruta es '/project/...'
    // Agrega más imágenes si las tienes
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

    // Referencia para la sección principal para useInView
    const sectionRef = useRef(null);
    // Dispara la animación cuando el 20% de la sección es visible, una sola vez.
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Prepare images with clones for infinite effect
    const imagesWithClones = [
        projectImages[projectImages.length - 1], // last as first clone
        ...projectImages,
        projectImages[0], // first as last clone
    ];

    // Calculamos el ancho de la imagen solo una vez después del montaje
    useEffect(() => {
        const img = document.getElementById("slider-img-1") as HTMLImageElement;
        if (img) {
            // Asegúrate de que el ancho se calcule correctamente, incluyendo posibles márgenes o gap
            const computedStyle = window.getComputedStyle(img);
            const marginX = parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
            const gap = 10; // Si hay un gap de 10px entre imágenes en tu CSS
            setImageWidth(img.clientWidth + marginX + gap); // Ajusta esto si tu layout es diferente
        }
    }, []); // Se ejecuta solo una vez al montar

    // Actualiza la posición inicial del slider sin transición cuando imageWidth cambia
    useEffect(() => {
        if (trackRef.current && imageWidth > 0) {
            trackRef.current.style.transition = "none";
            trackRef.current.style.transform = `translateX(-${current * imageWidth}px)`;
            // Forzar un reflow para asegurar que la transición 'none' se aplique antes de cualquier otro movimiento
            trackRef.current.offsetHeight;
        }
    }, [imageWidth]);


    const updateSlider = (next: number, animate = true) => {
        if (trackRef.current) {
            trackRef.current.style.transition = animate
                ? "transform 0.8s ease-in-out" // Mantiene la transición de CSS para el movimiento del slider
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
                // Si estamos en el clon final, saltar a la primera imagen real
                setCurrent(1);
                updateSlider(1, false); // false para que no haya transición visual
            } else if (current === 0) {
                // Si estamos en el clon inicial, saltar a la última imagen real
                setCurrent(imagesWithClones.length - 2);
                updateSlider(imagesWithClones.length - 2, false); // false para que no haya transición visual
            }
        };
        const track = trackRef.current;
        if (track) {
            track.addEventListener("transitionend", handleTransitionEnd);
            return () => {
                track.removeEventListener("transitionend", handleTransitionEnd);
            };
        }
    }, [current, imageWidth, imagesWithClones.length, updateSlider]); // Añadir updateSlider a las dependencias

    // --- Definición de las variantes de animación con Framer Motion ---

    // Variantes para el contenedor principal del header (título y descripción)
    const headerContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.2, // Retraso entre el título y la descripción
                delayChildren: 0.3 // Retraso inicial para que aparezcan
            }
        }
    };

    // Variantes para el título y la descripción individualmente
    const textItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Variantes para la imagen de "projects-image" (el botón de la esquina superior derecha)
    const headerImageVariants = {
        hidden: { opacity: 0, x: 50 }, // Viene desde la derecha
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.5 } } // Más lento y con retraso
    };

    // Variantes para el contenedor de categorías
    const categoriesContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.1, // Retraso entre cada ítem de categoría
                delayChildren: 0.7 // Retraso para que la lista de categorías aparezca después del header
            }
        }
    };

    // Variantes para cada ítem de categoría individual
    const categoryItemVariants = {
        hidden: { opacity: 0, x: -30 }, // Viene desde la izquierda
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Variantes para el contenedor del slider
    const sliderContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.9 } } // Retraso para que aparezca después de las categorías
    };

    // Variantes para los botones de navegación del slider
    const sliderButtonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
        hover: { scale: 1.1, transition: { duration: 0.2 } },
        tap: { scale: 0.9 }
    };


    return (
        <motion.section
            className="projects-section"
            ref={sectionRef} // Asocia la referencia para useInView
            initial="hidden" // Estado inicial al cargar
            animate={isInView ? "visible" : "hidden"} // Anima cuando la sección está en vista
        >
            {/* Title and Introduction */}
            <div className="projects-header">
                <motion.div
                    className="projects-intro"
                    variants={headerContainerVariants} // Aplica las variantes al contenedor
                >
                    <motion.h2 className="projects-title" variants={textItemVariants}>
                        Our Projects.
                    </motion.h2>
                    <motion.p className="projects-description" variants={textItemVariants}>
                        Explore some of our featured remodeling projects across Maryland. From
                        kitchens and bathrooms to full home makeovers, we bring quality and
                        creativity into every space.
                    </motion.p>
                </motion.div>
                <motion.img
                    src="/project/boton-rigth.png" // Asegúrate de que la ruta sea correcta
                    alt="See all projects"
                    className="projects-image"
                    variants={headerImageVariants} // Aplica variantes a la imagen
                />
            </div>

            {/* Project Content */}
            <div className="project-content">
                {/* Categories List */}
                <motion.div
                    className="project-categories"
                    variants={categoriesContainerVariants} // Aplica variantes al contenedor de categorías
                >
                    <ul className="categories-list">
                        {categories.map((cat) => (
                            <motion.li
                                className="category-item"
                                key={cat.name}
                                variants={categoryItemVariants} // Aplica variantes a cada ítem de categoría
                                whileHover={{ scale: 1.05, color: "#000" }} // Efecto de hover
                                whileTap={{ scale: 0.95 }} // Efecto de clic
                            >
                                {cat.name} <span className="category-count">{cat.count}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Featured Projects Slider */}
                <motion.div
                    className="slider-container"
                    variants={sliderContainerVariants} // Aplica variantes al contenedor del slider
                >
                    {/* Images - No usamos motion.img aquí porque el movimiento es por JS/CSS transform */}
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
                        <motion.img
                            src="/project/boton-left.png" // Asegúrate de que la ruta sea correcta
                            className="slider-btn left"
                            alt="Previous"
                            onClick={handleLeft}
                            style={{ cursor: "pointer" }}
                            variants={sliderButtonVariants} // Animaciones para los botones
                            whileHover="hover"
                            whileTap="tap"
                        />
                        <motion.img
                            src="/project/boton-rigth-white.png" // Asegúrate de que la ruta sea correcta
                            className="slider-btn right"
                            alt="Next"
                            onClick={handleRight}
                            style={{ cursor: "pointer" }}
                            variants={sliderButtonVariants} // Animaciones para los botones
                            whileHover="hover"
                            whileTap="tap"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;