import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Tips.css";
import { BotonTip } from "../../components/BotonTip/BotonTip"; // Asegúrate de que la ruta es correcta

const tips = [
    {
        img: "/tip/Tip1.png", // Revisa y ajusta estas rutas según tu estructura de carpetas (ej. /tip/Tip1.png si está en public)
        alt: "Bathroom Remodel",
        day: "01",
        month: "Mar 12",
        tags: "Bathroom Remodel, Maryland Projects",
        title: "A Budget-Friendly Bathroom Makeover with Big Results",
        desc:
            "When our client in Glen Burnie, Maryland called us, their bathroom was outdated and in need of a refresh. They didn’t want a full renovation, just a clean, modern look that felt fresh without spending a fortune.",
    },
    {
        img: "/tip/Tip2.png", // Revisa y ajusta
        alt: "Bathroom Remodel",
        day: "02",
        month: "Mar 30",
        tags: "PAINTING, MARYLAND PROJECTS",
        title: "A Fresh Look with Interior & Exterior Paint in Dundalk, MD",
        desc:
            "This Dundalk home got a major refresh with new interior and exterior paint, plus careful repairs to the window and door frames. The result? A clean, modern finish that looks brand new—without breaking the budget.",
    },
    {
        img: "/tip/Tip3.png", // Revisa y ajusta
        alt: "Bathroom Remodel",
        day: "03",
        month: "Apr 08",
        tags: "A Clean Modern Bathroom Update in Rosedale, MD", // NOTA: Hay un error aquí, debería ser una etiqueta, no un título completo. Si es un error de dato, deberías corregirlo en tu fuente de datos.
        title: "A Budget-Friendly Bathroom Makeover with Big Results", // NOTA: Este título es el mismo que el primero.
        desc:
            "This small bathroom in Rosedale got a fresh update without a full renovation. We replaced the vanity and toilet, added a fresh coat of paint, and modernized the space with simple yet impactful touches.",
    },
];

const Tips: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 }); // Anima cuando el 10% de la sección es visible

    // Variantes para el contenedor principal de la sección
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.1, // Retraso entre los bloques principales (tips, tips-card-container, boton)
                delayChildren: 0.2
            }
        }
    };

    // Variantes para el bloque de texto superior (h3 y p)
    const headerTextVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Variantes para cada tarjeta de tip - AHORA ASEGURAMOS QUE APAREZCAN UNO POR UNO
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({ // Usamos 'i' para un delay escalonado por índice
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.2 // Retraso progresivo para cada tarjeta (0.2s entre cada una)
            }
        })
    };

    // Variantes para el botón al final
    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
    };

    return (
        <motion.section
            className="tips-section"
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <motion.div className="tips" variants={headerTextVariants}>
                <h3 className="tips-title">Home Remodeling Tips & Trends in Maryland</h3>
                <p>
                    Discover expert advice, remodeling inspiration, and real-life project
                    stories from homes across Maryland. Whether you’re updating a bathroom in
                    Towson or renovating your kitchen in Dundalk, our team shares tips,
                    trends, and local insights to help you create a space you love.
                </p>
            </motion.div>

            <motion.div className="tips-card-container">
                {tips.map((tip, idx) => (
                    <motion.div
                        className="tip-card"
                        key={idx}
                        variants={cardVariants}
                        custom={idx} // Pasa el índice para el delay escalonado
                    >
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
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={buttonVariants}>
                <BotonTip />
            </motion.div>
        </motion.section>
    );
};

export default Tips;