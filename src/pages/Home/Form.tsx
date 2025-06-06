import React from "react";
import "./Form.css";
import BotonForm from "../../components/BotonForm/BotonForm";

const Form: React.FC = () => (
  <section className="form-section">
    <div className="form-image-container">
      <img src="/public/form/Form1 copy.png" alt="" className="form-image" />
    </div>
    <div className="form-content">
      <div className="form-header">
        <h2 className="form-title">
          Let’s Talk About Your Project in Maryland
        </h2>
        <p className="form-description">
          Tell us your vision, and we’ll make it real. Whether you’re updating a
          small bathroom or planning a full home remodel, our team is ready to
          help—on time and within budget.
        </p>
      </div>
      <div className="form-communications-container">
        <div className="form-input-container">
          <h3 className="form-communications-title">Communications</h3>
          <div className="form-communications-list">
            <div className="form-communication-item">
              <img
                src="/public/form/form1.png"
                alt=""
                className="form-communication-icon"
              />
              <div className="form-communication-info">
                <span className="form-communication-label">Address</span>
                <p className="form-communication-text">
                  59 Serpens Ct, Rosedale, <br />
                  MD 21237
                </p>
              </div>
            </div>
            <div className="form-communication-item">
              <img
                src="/public/form/form2.png"
                alt=""
                className="form-communication-icon"
              />
              <div className="form-communication-info">
                <span className="form-communication-label">
                  Phone & Mail Support 24/7
                </span>
                <p className="form-communication-text">
                  Mail: Contact@bethelor.com
                  <br />
                  Phone number: +1 240 618 7916
                </p>
              </div>
            </div>
            <div className="form-communication-item">
              <img
                src="/public/form/form3.png"
                alt=""
                className="form-communication-icon"
              />
              <div className="form-communication-info">
                <span className="form-communication-label">Working Time</span>
                <p className="form-communication-text">
                  Monday - Friday: 8:00am - 5:00pm
                  <br />
                  Holiday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-extra">
          <h3>Drop A Line</h3>
          <form action="" className="form-inputs">
            <div className="form-inputs-container">
              <div className="forminput-container">
                <input
                  type="text"
                  className="forminput-input"
                  placeholder="*Full Name"
                />
                <span className="forminput-corner forminput-corner-left"></span>
                <span className="forminput-corner forminput-corner-right"></span>
                <span className="forminput-corner forminput-corner-bottom"></span>
                <span className="forminput-corner forminput-corner-top"></span>
              </div>
              <div className="forminput-container">
                <input
                  type="text"
                  className="forminput-input"
                  placeholder="*Email"
                />
                <span className="forminput-corner forminput-corner-left"></span>
                <span className="forminput-corner forminput-corner-right"></span>
                <span className="forminput-corner forminput-corner-bottom"></span>
                <span className="forminput-corner forminput-corner-top"></span>
              </div>
            </div>
            <div className="form-inputs-container">
              <div className="forminput-container">
                <input
                  type="text"
                  className="forminput-input"
                  placeholder="*Phone Number"
                />
                <span className="forminput-corner forminput-corner-left"></span>
                <span className="forminput-corner forminput-corner-right"></span>
                <span className="forminput-corner forminput-corner-bottom"></span>
                <span className="forminput-corner forminput-corner-top"></span>
              </div>
              <div className="forminput-container">
                <input
                  type="text"
                  className="forminput-input"
                  placeholder="*Service Needed"
                />
                <span className="forminput-corner forminput-corner-left"></span>
                <span className="forminput-corner forminput-corner-right"></span>
                <span className="forminput-corner forminput-corner-bottom"></span>
                <span className="forminput-corner forminput-corner-top"></span>
              </div>
            </div>
            <div className="form-inputs-container">
              <div className="forminput-container">
                <input
                  type="text"
                  className="forminput-input"
                  placeholder="*Adress"
                />
                <span className="forminput-corner forminput-corner-left"></span>
                <span className="forminput-corner forminput-corner-right"></span>
                <span className="forminput-corner forminput-corner-bottom"></span>
                <span className="forminput-corner forminput-corner-top"></span>
              </div>
              <div className="forminput-container">
                <input
                  type="text"
                  className="forminput-input"
                  placeholder="Zip Code"
                />
                <span className="forminput-corner forminput-corner-left"></span>
                <span className="forminput-corner forminput-corner-right"></span>
                <span className="forminput-corner forminput-corner-bottom"></span>
                <span className="forminput-corner forminput-corner-top"></span>
              </div>
            </div>
            <div className="forminput-container1">
              <input
                className="forminput-textarea"
                placeholder="Briefly describe your project"
              ></input>
              <span className="forminput-corner forminput-corner-left1"></span>
              <span className="forminput-corner forminput-corner-right1"></span>
              <span className="forminput-corner forminput-corner-bottom1"></span>
              <span className="forminput-corner forminput-corner-top1"></span>
            </div>
            <div className="privacy-container">
              <input type="checkbox" id="privacy" className="checkbox" />
              <label htmlFor="privacy" className="privacy-label">
                <span className="main-text">
                  I agree to receive occasional project updates and special
                  offers from Bethelor. My information will stay private and
                  never be shared without permission.
                </span>
              </label>
            </div>
            <div className="form-button-container">
              <BotonForm />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Form;
