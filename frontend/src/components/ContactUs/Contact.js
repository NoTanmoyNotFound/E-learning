import React from "react";
import './Contact.css';
import Header from "../Home/Header/Header";
function Contact() {

  const [inputdata, setInputdata] = React.useState({});
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);






  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  }


  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user/contact`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputdata),
      })
      const data = await response.json();
      if (data.success === false) {
        setError(data.message);
        return;
      }
      setSuccess('Data send successfully');
      console.log(data);
    

  }

  catch (error) {
    setError(error);

  }

}












return (


  <div className="kotte">
  <Header/>
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
            <form onSubmit={handelSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" required="required" name="name" onChange={handleChange} />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required" onChange={handleChange} name="email" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required" defaultValue={""} onChange={handleChange} name="message" />
                <span>Type your message....</span>
              </div>
              {error && <div className="error text-[#f50000]">{error}</div>}
              {success && <div className="success text-[#44ff41]">{success}</div>}
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