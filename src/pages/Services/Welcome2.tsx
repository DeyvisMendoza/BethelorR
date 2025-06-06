import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./Welcome2.css"


export const Welcome2 = () => {
  return (
    <>
      <div className="main-content-wrapper">
        <HeaderTwo />
        <div className="welcome-two-header">
          <h2 className="welcome-two-title">
            Home Remodeling Services in Maryland
          </h2>
          <p>
            At Bethelor, we specialize in home remodeling services across Maryland — including kitchen renovations, bathroom makeovers, interior & exterior painting, flooring, and more. Whether you're updating one room or planning a full home renovation, our team delivers expert craftsmanship, reliable timelines, and personalized results that feel like home.
          </p>
        </div>
      </div>
    </>
  );
};
