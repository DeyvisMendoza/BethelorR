import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "We remodel kitchens with custom cabinets, new countertops, lighting, backsplashes, and flooring. We focus on both style and functionality to create the heart of your home.",
    list: ["Serving all Maryland"],
    video: "public/icons/boton-black.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service1.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "CUSTOM CABINETS",
        desc: "Built-in storage solutions crafted to fit your kitchen style, improve organization, and maximize space.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "COUNTERTOPS INSTALLATION",
        desc: "Precision installation of granite, quartz, or laminate countertops for durability, beauty, and daily use.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "LIGHTING UPGRADES",
        desc: "Install modern lighting fixtures, including recessed lights, pendants, and under-cabinet options, for better visibility and ambiance.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "OPEN LAYOUT CONVERSION",
        desc: "Remove walls or barriers to create a more open kitchen space. Improve flow, visibility, and modernize your layout for better interaction and comfort.",
      },
    ],
  },
  {
    title: "Bathroom Remodeling",
    description:
      "We remodel bathrooms with modern tile, stylish vanities, updated showers, tubs, lighting, and more. Our focus is on comfort, functionality, and clean design — perfect for relaxing and starting your day right.",
    list: ["Serving all Maryland"],
    video: "public/icons/boton-black2.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service2.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "VANITY AND SINK REPLACEMENT",
        desc: "Upgrade your bathroom with elegant vanities and functional sinks — designed for comfort and storage.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "SHOWER AND BATHTUB INSTALLATION",
        desc: "Install sleek walk-in showers or luxurious tubs for a fresh, spa-like experience.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "CUSTOM TILE WORK",
        desc: "Modern tile for floors, walls, and showers — precision-installed for style and durability.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "LIGHTING UPGRADES",
        desc: "Improve your bathroom’s ambiance and visibility with updated fixtures and vanity lighting.",
      },
    ],
  },
  {
    title: "Basement Remodeling",
    description:
      "Transform your basement into a fully functional and stylish extension of your home. \nWe specialize in custom basement remodeling across Maryland, turning unused spaces into cozy family rooms, home offices, guest suites, or entertainment areas",
    list: [
      "Serving all of Maryland with quality craftsmanship and reliable service.",
    ],
    video: "public/icons/boton-black3.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service3.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "CUSTOM BASEMENT DESIGN",
        desc: "Tailored layouts that match your needs—whether it’s a home theater, playroom, bar area, or extra living space.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "FRAMING & DRYWALL FINISHING",
        desc: "Expert framing and seamless drywall installation that give your basement a clean, polished look ready for paint and fixtures.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "LIGHTING & ELECTRICAL UPGRADES",
        desc: "Modern lighting solutions including recessed lights, wall sconces, and safe electrical wiring—bringing comfort, ambiance, and efficiency.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "OPEN LAYOUT CONVERSION",
        desc: "Remove barriers or walls to create spacious, open-concept basements that improve flow, visibility, and family interaction.",
      },
    ],
  },
  {
    title: "Complete Home Renovation",
    description:
      "Transform your home from outdated to outstanding. We specialize in complete home remodeling across Maryland, delivering functional, modern, and beautifully finished spaces — from kitchens and bathrooms to basements, living rooms, and more.",
    list: [
      "Serving all of Maryland with high-quality craftsmanship and reliable service.",
    ],
    video: "public/icons/boton-black4.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service4.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "INTERIOR LAYOUT REMODELING",
        desc: "Open up spaces or redesign your home’s layout to improve flow, light, and daily functionality.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "FLOORING, DRYWALL & PAINTING",
        desc: "We install premium flooring, smooth drywall finishes, and custom paint for a clean, modern look.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "KITCHEN & BATHROOM REMODELING",
        desc: "Upgrade essential spaces with new tile, cabinetry, vanities, countertops, lighting, and plumbing fixtures.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "LIGHTING & ELECTRICAL ENHANCEMENTS",
        desc: "Improve safety and ambiance with updated electrical work and smart lighting solutions.",
      },
    ],
  },
  {
    title: "Home Additions",
    description:
      "Need more space? We build custom home additions that blend seamlessly with your existing home — from new rooms and sunrooms to full second-story expansions.",
    list: ["Serving all of Maryland with expert craftsmanship"],
    video: "public/icons/boton-black5.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service5.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "INTERIOR LAYOUT REMODELING",
        desc: "Open up spaces or redesign your home’s layout to improve flow, light, and daily functionality.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "FLOORING, DRYWALL & PAINTING",
        desc: "We install premium flooring, smooth drywall finishes, and custom paint for a clean, modern look.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "KITCHEN & BATHROOM REMODELING",
        desc: "Upgrade essential spaces with new tile, cabinetry, vanities, countertops, lighting, and plumbing fixtures.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "LIGHTING & ELECTRICAL ENHANCEMENTS",
        desc: "Improve safety and ambiance with updated electrical work and smart lighting solutions.",
      },
    ],
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Refresh your home with clean, durable, and professionally applied paint — inside and out. \nWe offer expert residential painting services across Maryland to boost your home’s curb appeal and interior comfort.",
    list: ["Serving all of Maryland with precision and care."],
    video: "public/icons/boton-black6.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service6.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "INTERIOR WALL & CEILING PAINTING",
        desc: "Smooth, even finishes on walls and ceilings using high-quality paint and clean edge detailing.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "EXTERIOR FACADE & TRIM PAINTING",
        desc: "Protect and refresh your home’s exterior with weather-resistant paint for siding, trim, shutters, and doors.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "DRYAWALL PATCHING & PREP WORK",
        desc: "We fix cracks, holes, and surface imperfections before painting — for a flawless, long-lasting result.",
      },
      {
        icon: "public/services/icon-herramienta-doble.png",
        title: "COLOR MATCHING & CONSULTATION",
        desc: "Get expert help choosing the right colors and finishes to match your style and enhance your space.",
      },
    ],
  },
  {
    title: "Flooring Installation",
    description:
      "Enhance your home with professionally installed floors that combine durability, style, and comfort. We offer expert flooring services across Maryland, using quality materials and clean finishes for lasting results.",
    list: ["Serving all of Maryland with precision and care"],
    video: "public/icons/boton-black7.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service7.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "HARDWOOD & ENGINEERED WOOD",
        desc: "Built-in storage solutions crafted to fit your kitchen style, improve organization, and maximize space.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "LUXURY VINYL PLANK (LVP) & LAMINATE",
        desc: "Affordable, waterproof options with stylish looks and low maintenance.",
      },
      {
        icon: "public/services/icon-herramienta-doble.png",
        title: "TILE FLOORING",
        desc: "Ideal for kitchens, bathrooms, and basements — resistant and easy to clean.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "SUBFLOOR PREP & LEVELING",
        desc: "We prep surfaces to ensure a smooth, long-lasting floor installation.",
      },
    ],
  },
  {
    title: "Window & Door Replacement",
    description:
      "Upgrade your home’s comfort, security, and energy efficiency with professionally installed windows and doors. We offer stylish, durable options that match your home’s look and stand up to Maryland’s weather.",
    list: ["Serving all of Maryland with expert installation and care"],
    video: "public/icons/boton-black8.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service8.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "WINDOW REPLACEMENT & INSTALLATION",
        desc: "Energy-efficient windows installed with precision for better insulation and natural light.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "EXTERIOR & ENTRY DOOR REPLACEMENT",
        desc: "Secure, stylish front and back doors that boost curb appeal and safety.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "SLIDING & PATIO DOORS",
        desc: "Smooth-gliding doors that connect indoor and outdoor living spaces beautifully.",
      },
      {
        icon: "public/services/icon-herramienta-doble.png",
        title: "FRAMING, SEALING & TRIM WORK",
        desc: "Complete installations with framing, caulking, and detailed interior/exterior finishes.",
      },
    ],
  },
  {
    title: "Deck & Patio Construction",
    description:
      "Expand your outdoor living space with custom-built decks and patios that add beauty, comfort, and value to your home. We design and build durable, weather-resistant structures tailored to your lifestyle.",
    list: ["Serving all of Maryland with expert outdoor craftsmanship."],
    video: "public/icons/boton-black9.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service9.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "CUSTOM WOOD & COMPOSITE DECKS",
        desc: "Built to last using premium materials like pressure-treated wood, cedar, or composite.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "PAVER PATIOS & WALKWAYS",
        desc: "Stylish and functional patios built with stone, brick, or concrete pavers.",
      },
      {
        icon: "public/services/icon-herramienta-doble.png",
        title: "COVERED DECKS & PERGOLAS",
        desc: "Enjoy shade and protection with custom structures for year-round use.",
      },
      {
        icon: "public/services/icon-open.png",
        title: "PERMIT & FINAL FINISHING",
        desc: "We take care of permits, sealing, staining, and everything in between.",
      },
    ],
  },
  {
    title: "Home Repair & Improvement",
    description:
      "From small fixes to bigger upgrades, we help keep your home in great shape. Our general repair and improvement services are fast, reliable, and always focused on quality and detail.",
    list: ["Serving all of Maryland with hands-on experience and care"],
    video: "public/icons/boton-black10.png",
    videoLink: "https://www.youtube.com/watch?v=B-HLtGTEyLk",
    image: "public/services/service10.png",
    icons: [
      {
        icon: "public/services/icon-herramienta.png",
        title: "DRYWALL REPAIR & TOUCH-UPS",
        desc: "We fix cracks, dents, holes, and more — leaving your walls ready for paint.",
      },
      {
        icon: "public/services/icon-counter.png",
        title: "DOOR, TRIM & HARDWARE REPAIR",
        desc: "We adjust, repair or replace doors, handles, locks, and moldings.",
      },
      {
        icon: "public/services/icon-focus.png",
        title: "MINOR ELECTRICAL & PLUMBING FIXES",
        desc: "Small leak? Light not working? We handle basic issues quickly and safely.",
      },
      {
        icon: "public/services/icon-herramienta-doble.png",
        title: "CAULKING, PATCHING & GENERAL MAINTENANCE",
        desc: "Sealing, smoothing, and restoring problem areas throughout your home.",
      },
    ],
  },
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const ref = useRef(null);
    // Ajustado el 'amount' para que la animación empiece antes cuando la sección entra en vista
    const isInView = useInView(ref, { once: true, amount: 0.1 }); // Se activa cuando el 10% de la sección es visible

    const handleAccordion = (idx: number) => {
        setActiveIndex(activeIndex === idx ? null : idx);
    };

    // Variantes para el contenedor principal de los textos de cabecera
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Aumentado el retraso entre la aparición de los hijos
                delayChildren: 0.4    // Retraso inicial antes de que los hijos comiencen a aparecer
            }
        }
    };

    // Variantes para el título y el párrafo de la cabecera
    const headerTextVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7, // Duración ligeramente aumentada
                ease: "easeOut"
            }
        }
    };

    // Variantes para cada ítem individual del acordeón (la aparición escalonada)
    const accordionItemVariants = {
        hidden: { opacity: 0, y: 70 }, // Más desplazamiento inicial
        visible: (i: number) => ({ // Función para aplicar un retraso basado en el índice
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15, // Retraso escalonado más pronunciado (0.15 segundos entre cada ítem)
                duration: 0.6,   // Duración más larga para una aparición más suave
                ease: "easeOut"
            }
        })
    };

    // Variantes para el contenido desplegable del acordeón (el texto, lista, botón de video)
    const contentVariants = {
        hidden: { opacity: 0, height: 0, y: -10 },
        visible: {
            opacity: 1,
            height: "auto", // IMPORTANTE: Animar a 'auto' para altura dinámica
            y: 0,
            transition: {
                duration: 0.5, // Duración un poco más larga para una apertura más suave
                ease: "easeInOut", // Suavizado de entrada y salida
                when: "beforeChildren", // Anima el contenedor antes que sus hijos
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.4, // Duración para el cierre
                ease: "easeIn", // Suavizado de entrada
            }
        }
    };

    // Variantes para los iconos detallados (dentro del acordeón abierto)
    const detailedIconsVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.08, // Ligeramente más retraso entre cada icono
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    // Variantes para cada texto de icono individual
    const singleIconTextVariants = {
        hidden: { opacity: 0, x: 30 }, // Más desplazamiento lateral
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeIn" } }
    };


    return (
        <motion.section
            className="services-section"
            ref={ref}
            // No necesitamos 'initial' o 'animate' aquí directamente, los hijos lo manejarán
        >
            <div className="services-header">
                <motion.div
                    className="services-intro"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"} // Animar cuando la sección esté en vista
                    variants={containerVariants}
                >
                    <motion.h2 className="services-title" variants={headerTextVariants}>
                        Our Services.
                    </motion.h2>
                    <motion.p className="services-description" variants={headerTextVariants}>
                        At Bethelor, we offer high-quality home remodeling services in Maryland,
                        specializing in kitchens, bathrooms, basements, full home renovations,
                        and more. Our team is committed to turning your ideas into reality with
                        reliable craftsmanship and attention to detail.
                    </motion.p>
                </motion.div>
            </div>
            <div className="accordion">
                {services.map((service, idx) => (
                    <motion.div
                        className={`accordion-item${activeIndex === idx ? " active" : ""}`}
                        key={service.title} // Asegúrate de que service.title es único o usa un ID
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"} // Animar cuando la sección esté en vista
                        variants={accordionItemVariants}
                        custom={idx} // Pasa el índice como prop 'custom' para las variantes
                        layout // Crucial para una animación de altura suave
                    >
                        <motion.div
                            className="accordion-header"
                            onClick={() => handleAccordion(idx)}
                            // Aquí no necesitamos una transición de layout, el padre ya la tiene
                        >
                            <div className="accordion-content-inner">
                                <h3 className="accordion-button">{service.title}</h3>
                                <AnimatePresence mode="wait"> {/* mode="wait" para que una animación termine antes de que la otra empiece */}
                                    {activeIndex === idx && (
                                        <motion.div
                                            key="accordion-expanded-content" // Clave única para AnimatePresence
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={contentVariants}
                                        >
                                            <p>
                                                {service.description.split("\n").map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                            <ul>
                                                {service.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                            {/* <motion.a
                                                href={service.videoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                            >
                                                <img src={service.video} alt={`Watch video for ${service.title}`} />
                                            </motion.a> */}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <motion.div
                                className="accordion-content-img"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3, ease: "easeOut" }} // Transición más suave para hover
                            >
                                <img src={service.image} alt={service.title} />
                            </motion.div>
                            <div className="accordion-content-icons">
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "end",
                                        alignItems: "start",
                                    }}
                                >
                                    <AnimatePresence mode="wait">
                                        {activeIndex === idx ? (
                                            <motion.span
                                                key="minus"
                                                className="icon-close"
                                                initial={{ rotate: 0, opacity: 0 }}
                                                animate={{ rotate: 180, opacity: 1 }}
                                                exit={{ rotate: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }} // Transición más suave
                                            >
                                                -
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="plus"
                                                className="icon"
                                                initial={{ rotate: 180, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 180, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }} // Transición más suave
                                            >
                                                +
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <AnimatePresence>
                                    {activeIndex === idx && (
                                        <motion.div
                                            key="accordion-detailed-icons" // Clave única
                                            className="accordion-content-icons-general"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={detailedIconsVariants} // Variantes para los iconos detallados
                                        >
                                            {service.icons.map((icon, i) => (
                                                <motion.div
                                                    className="accordion-content-icons-text"
                                                    key={i}
                                                    variants={singleIconTextVariants} // Variantes para cada texto de icono
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "start",
                                                            alignItems: "center",
                                                            flexDirection: "row",
                                                            gap: "10px",
                                                        }}
                                                    >
                                                        <img src={icon.icon} alt="" />
                                                        <h4>{icon.title}</h4>
                                                    </div>
                                                    <p>{icon.desc}</p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}