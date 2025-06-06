import React from "react";
import "./SectionBlack.css"; // Import the CSS file for styling

export const SectionBlack = () => {
  return (
    <section className="hero-section-container">
      {/* Sección Superior */}
      <div className="hero-content-top">
        {/* Columna 1: Expert Solutions */}
        <div className="hero-column-expert-solutions">
          <ul className="expert-solutions-list">
            <li>Expert Solutions</li>
          </ul>
        </div>

        {/* Columna 2: Título y Descripción */}
        <div className="hero-column-main-text">
          <h3 className="hero-title">
            At Bethelor, We Build More Than Spaces — We Build Trust.
          </h3>
          <p className="hero-description">
            Our home remodeling services are designed to elevate your everyday
            life. From kitchens to bathrooms, we blend craftsmanship with care
            to make your home truly yours.
          </p>
        </div>

        {/* Columna 3: Botón de Exploración */}
        <div className="hero-column-explore-button">
          <a href="#services" className="explore-button">
            <span className="button-text">Explore Our Remodeling Services</span>
            <span className="arrow-down">↓</span>
          </a>
        </div>
      </div>

      {/* Línea Divisoria */}
      <div className="hero-divider-line"></div>

      {/* Sección Inferior (Estadísticas) */}
      <div className="hero-content-bottom">
        <div className="choose-stats">
          <div className="choose-stat">
            {/* <span id="count1" className="count" data-target="12">0</span> */}
            <span>+12</span>
            <p>COMPLETED PROJECTS SINCE 2023</p>
          </div>
          <div className="choose-stat">
            {/* <span id="count2" className="count" data-target="100">0</span><span>%</span> */}
            <span>100%</span>
            <p>CLIENT SATISFACTION GOAL</p>
          </div>
        </div>
        <div className="bottom-description">
          <p>
            Proudly remodeling homes across rosedale, Towson, Dundalk, Glen
            Burnie, and beyond. Discover why Maryland homeowners trust Bethelor
            for quality and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};
