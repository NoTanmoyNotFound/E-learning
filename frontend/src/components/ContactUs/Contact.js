import React from "react";
import './Contact.css';
function Contact() {
  return (
    
      <div className="kotte">
        <div className="bgImg">
          <section className="contact">
            <div className="content">
              <h2>Contact Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                dolorum consectetur earum quos quas aspernatur, vero nam minus
                deleniti ullam est velit fugiat, minima quo.
              </p>
            </div>
            <div className="containerc1">
              <div className="contactInfo">
                <div className="box">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>
                      Berunanpukhuria, <br />
                      West Bengal <br /> 700126
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p>9903569874</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>readx@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="contactForm">
                <form action="your-server-endpoint">
                  <h2>Send Message</h2>
                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Full Name</span>
                  </div>
                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Email</span>
                  </div>
                  <div className="inputBox">
                    <textarea required="required" defaultValue={""} />
                    <span>Type your message....</span>
                  </div>
                  <div className="inputBox">
                    <button type="submit">send</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    
  );
}

export default Contact;