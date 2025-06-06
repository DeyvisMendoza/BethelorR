import { useRef, useEffect } from "react";
import "./Header.css";
import { BotonHeader } from "../BotonHeader/BotonHeader";
// Ajusta la ruta si es necesario

export const Header = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;
        const text = textRef.current;

        if (!wrapper || !container || !text) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = wrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const x = e.clientX - centerX;
            const y = e.clientY - centerY;

            // Movimiento más suave para el contenedor
            const containerFactor = 0.05;
            container.style.transform = `translate(calc(-50% + ${
                x * containerFactor
            }px), calc(-50% + ${y * containerFactor}px))`;

            // Movimiento más pronunciado para el texto
            const textFactor = 0.6;
            text.style.transform = `translate(calc(-28% + ${
                x * textFactor
            }px), calc(-50% + ${y * textFactor}px))`;
        };

        const handleMouseLeave = () => {
            container.style.transform = `translate(-50%, -50%)`;
            text.style.transform = `translate(-28%, -50%)`;
        };

        wrapper.addEventListener("mousemove", handleMouseMove);
        wrapper.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            wrapper.removeEventListener("mousemove", handleMouseMove);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <header className="">
            <div className="container">
                {/* Logo Section */}
                <div className="flex items-center gap-10">
                    {/* <button className="boton-menu">MENU</button> */}
                    <div className="hover-wrapper" ref={wrapperRef}>
                        <div className="hover-container" ref={containerRef}>
                            <p className="hover-text" ref={textRef}>MENU</p>
                        </div>
                    </div>

                    <div className="containerLogo">
                        <h1 className="name-logo">BETHELOR</h1>
                        <p className="texto-alternativo">Home Contruction & Remodeling</p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="contact-info flex space-x-8 gap-6">
                    {/* Address */}
                    <div className="flex items-center space-x-2 gap-2 cursor-pointer">
                        <img
                            src="public/header/location.png"
                            alt=""
                            className="invertible-img"
                        />
                        <p>59 Serpent Cir, Roadside, MO 21337</p>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center space-x-2 gap-2 cursor-pointer">
                        <img
                            src="public/header/phone.png"
                            alt=""
                            className="invertible-img"
                        />
                        <p>+1 240 618 7916</p>
                    </div>
                    {/* Email */}
                    <div className="flex items-center space-x-2 gap-2 cursor-pointer">
                        <img
                            src="public/header/send.png"
                            alt=""
                            className="invertible-img"
                        />
                        <p>Contact@bethelor.com</p>
                    </div>
                    {/* Call to Action */}
                    <div className="container-request">
                        <BotonHeader />
                    </div>
                </div>
            </div>
        </header>
    );
};
