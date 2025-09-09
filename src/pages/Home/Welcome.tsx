import "./Welcome.css";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="main-section">
        <div className="image-text-container">
          <div
            className="image-overlay"
            style={{ backgroundImage: "url('/public/welcome/welcome-fondo1.png')" }}
          ></div>
          <div className="text-container">
            <h1>Home Remodeling in Maryland 2025</h1>
            <p>
              Kitchens, bathrooms, basements & more.
              <br />
              High-quality results. Trusted service.
            </p>
          </div>
        </div>

        <div className="right-container">
          <div className="right-images">
            <div
              className="image"
              style={{ backgroundImage: "url('/public/welcome/welcome-fondo2.png')" }}
            ></div>
            <div
              className="image"
              style={{ backgroundImage: "url('/public/welcome/welcome-fondo3.png')" }}
            ></div>
          </div>
          <div className="description">
            <p className="fade-in" data-scroll>
              At Bethelor, we bring your vision to life with expert remodeling
              of kitchens, bathrooms, and interiors. Proudly serving Maryland
              with reliable craftsmanship, personalized designs, and results
              that feel like home.
            </p>
          </div>
        </div>
      </div>

      <div className="button-section">
        <div className="button-item">
          <a href="/services">View All Services</a>
        </div>
        <div className="button-item">
          <a href="/projects">View All Projects</a>
        </div>
        <div className="button-item">
          <a href="/about">About Us</a>
        </div>
        <div className="button-item">
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
};
