import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BotonChoose } from "../../components/BotonChoose/BotonChoose";
import "./Choose.css"; // Asegúrate de que este CSS contenga los estilos visuales principales

const Choose: React.FC = () => {
    // Referencia para la sección principal para useInView
    const sectionRef = useRef(null);
    // Dispara la animación cuando el 20% de la sección es visible, una sola vez.
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // --- Definición de las variantes de animación con Framer Motion ---

    // Variantes para el contenedor principal de la imagen y el texto (arriba)
    const imageTextContainerVariants = {
        hidden: { opacity: 0 }, // Comienza invisible
        visible: {
            opacity: 1, // Se hace visible
            transition: {
                delayChildren: 0.2, // Retraso antes de que los hijos empiecen a animar
                staggerChildren: 0.1, // Retraso pequeño entre los hijos directos si los hubiera
            }
        }
    };

    // Variantes para la imagen de fondo (con un ligero zoom-in y fade-in)
    const imageOverlayVariants = {
        hidden: { opacity: 0, scale: 1.05 }, // Comienza más grande y transparente
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } // Termina en tamaño normal y visible
    };

    // Variantes para el título principal "Why Choose Bethelor?" (slide-up y fade-in)
    const titleVariants = {
        hidden: { opacity: 0, y: 50 }, // Comienza abajo y transparente
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } } // Termina en posición normal, visible
    };

    // Variantes para el contenedor principal de contenido (descripción, lista, stats)
    // Se anima a sí mismo y luego a sus hijos con stagger
    const contentWrapperVariants = {
        hidden: { opacity: 0, y: 50 }, // Comienza abajo y transparente
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.2, // Retraso entre los bloques principales (descripción, detalles)
                delayChildren: 0.6 // Retraso para que aparezca después del título
            }
        }
    };

    // Variantes para el bloque de descripción (el párrafo y el botón) (slide-in desde la izquierda)
    const descriptionVariants = {
        hidden: { opacity: 0, x: -50 }, // Comienza a la izquierda y transparente
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } // Termina en posición normal, visible
    };

    // Variantes para el contenedor de la lista de detalles (ul) (slide-up con stagger para los li)
    const listContainerVariants = {
        hidden: { opacity: 0, y: 30 }, // Comienza abajo y transparente
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.1, // Retraso entre cada li
            }
        }
    };

    // Variantes para cada ítem de la lista (li) (slide-in desde la izquierda)
    const listItemVariants = {
        hidden: { opacity: 0, x: -30 }, // Comienza a la izquierda y transparente
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } // Termina en posición normal, visible
    };

    // Variantes para el contenedor de estadísticas (slide-up con stagger para cada stat)
    const statsContainerVariants = {
        hidden: { opacity: 0, y: 30 }, // Comienza abajo y transparente
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.15, // Retraso entre cada stat
            }
        }
    };

    // Variantes para cada estadística individual (div .choose-stat) (fade-in y scale-up)
    const statItemVariants = {
        hidden: { opacity: 0, scale: 0.8 }, // Comienza más pequeño y transparente
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } // Termina en tamaño normal, visible
    };

    // Variantes para la caja final (f-box) (slide-up y fade-in)
    const fboxVariants = {
        hidden: { opacity: 0, y: 50 }, // Comienza abajo y transparente
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1.0 } } // Termina en posición normal, visible
    };

    // Variantes para el botón dentro de f-box (imagen) (hover y tap)
    const fboxButtonVariants = {
        initial: { scale: 1 }, // Estado inicial, no se anima al aparecer para no chocar con el padre
        hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.section
            className="choose-section"
            ref={sectionRef} // Asocia la referencia para useInView
            initial="hidden" // La sección completa comienza oculta
            animate={isInView ? "visible" : "hidden"} // Anima cuando la sección está en vista
        >
            <motion.div
                className="choose-image-text-container"
                // No necesitamos variants aquí si solo es un contenedor de layout, sus hijos directos ya tienen animación.
                // Si este contenedor tuviera un fondo o estilos propios que necesiten animación, le aplicaríamos variants.
            >
                {/* La imagen de fondo */}
                <motion.div
                    className="choose-image-overlay"
                    style={{ backgroundImage: "url('/choose/choose1.png')" }} // Ruta corregida si es necesario
                    variants={imageOverlayVariants} // Aplica variantes a la imagen de fondo
                ></motion.div>
                {/* El contenedor del título */}
                <motion.div
                    className="choose-text-container"
                    variants={titleVariants} // Aplica variantes al contenedor del título
                >
                    <h1>Why Choose Bethelor?</h1>
                </motion.div>
            </motion.div>

            <div className="choose-content">
                <motion.div
                    className="choose-content-wrapper"
                    variants={contentWrapperVariants} // Aplica variantes al wrapper principal del contenido
                >
                    {/* Bloque de descripción */}
                    <motion.div
                        className="choose-description"
                        variants={descriptionVariants} // Aplica variantes al párrafo de descripción
                    >
                        <p>
                            At Bethelor, we may be a small local team—but we go above and beyond to deliver big results.
                            <br />
                            <br />
                            Our commitment goes beyond construction. We build trust, create beautiful and functional spaces, and treat every project like it’s our own home.
                        </p>
                        {/* BotonChoose: Si BotonChoose es un componente de Framer Motion, animará internamente.
                            Si no, consideraría envolverlo en un motion.div con sus propias variantes si necesitas
                            que aparezca independientemente del párrafo. */}
                        <BotonChoose />
                    </motion.div>
                    <div className="choose-details">
                        {/* Lista de detalles */}
                        <motion.div
                            className="choose-list"
                            variants={listContainerVariants} // Aplica variantes al contenedor de la lista
                        >
                            <ul>
                                {["Locally owned and operated in Maryland",
                                    "Friendly, skilled, and detail-oriented crew",
                                    "Transparent pricing and clear communication",
                                    "Clean job sites, respectful of your home",
                                    "Flexible scheduling and fast project turnaround"].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            variants={listItemVariants} // Aplica variantes a cada li
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                            </ul>
                        </motion.div>
                        {/* Sección de estadísticas */}
                        <motion.div
                            className="choose-stats"
                            variants={statsContainerVariants} // Aplica variantes al contenedor de stats
                        >
                            <motion.div className="choose-stat" variants={statItemVariants}>
                                <span>+12</span>
                                <p>COMPLETED PROJECTS SINCE 2023</p>
                            </motion.div>
                            <motion.div className="choose-stat" variants={statItemVariants}>
                                <span>100%</span>
                                <p>CLIENT SATISFACTION GOAL</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Caja final de llamada a la acción */}
            <motion.div
                className="f-box"
                variants={fboxVariants} // Aplica variantes a la caja final
            >
                <motion.h3 variants={titleVariants}> {/* Reutilizamos titleVariants para el h3 */}
                    Thinking About Remodeling Your Home?
                </motion.h3>
                <motion.img
                    src="/choose/boton.png" // Ruta corregida si es necesario
                    alt="Get a Free Estimate"
                    variants={fboxButtonVariants} // Aplica variantes al botón
                    whileHover="hover"
                    whileTap="tap"
                />
            </motion.div>
        </motion.section>
    );
};

export default Choose;