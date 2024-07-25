import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>At our real estate agency, your peace of mind is our top priority. We are committed to providing a seamless and stress-free experience from start to finish. Our team of dedicated professionals ensures that every step of your property journey is handled with the utmost care and attention.</p>


          <p> Whether you’re buying, selling, or renting, we prioritize clear communication, expert advice, and personalized service to meet your unique needs.</p>

          <p>Trust us to guide you through the process with confidence and ease, so you can focus on enjoying your new home or investment. Your satisfaction and comfort are our ultimate goals.</p>

        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
