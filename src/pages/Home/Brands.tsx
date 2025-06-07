import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Brands.css";

// Datos para los brand items (sin cambios)
const brandItemsData = [
    {
        id: 1,
        imgSrc: "/brands/brands1.png",
        title: "Creative Craftsmanship",
        description: "Every project is guided by creativity and precision. We combine style and function to design spaces that are both beautiful and useful.",
    },
    {
        id: 2,
        imgSrc: "/brands/brands2.png",
        title: "Tailored for You",
        description: "We don’t believe in one-size-fits-all. Each home is different — and so is every solution we create for our clients.",
    },
    {
        id: 3,
        imgSrc: "/brands/brands3.png",
        title: "Efficient & Reliable",
        description: "We work smart and stay on schedule. Our team is focused, organized, and always respectful of your time and space.",
    },
    {
        id: 4,
        imgSrc: "/brands/brands4.png",
        title: "Smart Planning, Solid Results",
        description: "We help you make confident decisions from start to finish. Clear guidance, honest advice, and no surprises.",
    },
];

const Brands: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    // --- Definición de las variantes de animación con Framer Motion ---

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const brandLogoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const brandDetailsContainerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const brandItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const imageAndTitleVariants = {
        initial: { opacity: 1, y: 0, scale: 1 },
        hovered: { opacity: 0, y: -20, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
    };

    // Ajuste clave para el párrafo, ahora que el contenedor tiene altura fija
    const descriptionVariants = {
        initial: { opacity: 0, y: 100 }, // Comienza más abajo, casi al fondo del contenedor de 300px
        hovered: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
    };

    const titleHoverMoveVariants = {
        initial: { y: 0 },
        // **NUEVO VALOR AJUSTADO para altura fija de 300px:**
        // El título ahora debe moverse para centrarse verticalmente dentro de la sección
        // donde antes estaba la imagen, pero dentro del espacio total disponible de 300px.
        // La imagen + su margin-bottom son 120px + 15px = 135px.
        // El padding-top del item es 20px. El título comenzaba en 20px + 135px = 155px desde arriba.
        // Si queremos que se centre en los 300px (que su centro sea 150px),
        // y su altura es ~1.3rem * 1.2 * 16px = ~25px, su centro sería 150px - (25px/2) = 137.5px desde arriba.
        // El movimiento sería: 137.5 - 155 = -17.5px. Sin embargo, "layout" de Framer Motion
        // es muy bueno para reubicar. El `y` que le daremos es cuánto DEBE SUBIR para que el texto aparezca abajo.
        // El padding-bottom del item es 40px. El texto tiene 12px de tamaño.
        // El h3 está a unos 20px + 120px + 15px = 155px de la parte superior.
        // Si queremos que el h3 se centre con el p, y que ambos estén en el medio inferior.
        // Este valor es una ESTIMACIÓN FUERTE y probablemente requiera ajuste fino.
        hovered: { y: -70, transition: { duration: 0.3, ease: "easeOut" } }, // Subirá para dejar espacio al párrafo
    };


    const trustedBrandsVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 1.2,
                staggerChildren: 0.2
            }
        }
    };

    const trustedBrandsTitleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const trustedBrandsLogoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }
    };


    return (
        <motion.section
            className="brands-section"
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <motion.div className="brand-logo" variants={brandLogoVariants}>
                <img src="/brands/brands0.png" alt="Bethelor Logo" />
            </motion.div>

            <motion.div
                className="brand-details"
                variants={brandDetailsContainerVariants}
            >
                {brandItemsData.map((item) => (
                    <motion.div
                        className="brand-item"
                        key={item.id}
                        variants={brandItemVariants}
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        // layout // Mantener layout aquí
                    >
                        {/* La imagen solo visible en estado inicial */}
                        <motion.img
                            src={item.imgSrc}
                            alt={item.title}
                            animate={hoveredItemId === item.id ? "hovered" : "initial"}
                            variants={imageAndTitleVariants}
                        />
                        {/* Contenedor de la descripción con el título y el párrafo */}
                        <motion.div className="brand-description">
                            <motion.h3
                                className="brand-title"
                                animate={hoveredItemId === item.id ? "hovered" : "initial"}
                                variants={titleHoverMoveVariants}
                                layout // CLAVE: para que el título se mueva suavemente
                            >
                                {item.title}
                            </motion.h3>
                            {/* El párrafo de descripción */}
                            <motion.p
                                className="brand-text"
                                animate={hoveredItemId === item.id ? "hovered" : "initial"}
                                variants={descriptionVariants}
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="trusted-brands"
                variants={trustedBrandsVariants}
            >
                <motion.h3 className="trusted-brands-title" variants={trustedBrandsTitleVariants}>
                    Brands We Trust for Remodeling in Maryland
                </motion.h3>
                <motion.div className="trusted-brands-logo" variants={trustedBrandsLogoVariants}>
                    <img src="/brands/brands5.svg" alt="Trusted Brands Logos" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Brands;