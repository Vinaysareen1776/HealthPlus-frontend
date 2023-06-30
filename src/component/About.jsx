import React from 'react';
import about from '../assets/images/about-img.jpg';

const About = () => {
  return (
      
<div className="hero_area">
<section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About <span>Us</span>
              </h2>
            </div>
            <p>
            Our hospital is staffed with highly skilled and dedicated healthcare professionals who are passionate about delivering exceptional care. Our team consists of board-certified physicians, experienced nurses, allied health professionals, and support staff who work together to ensure the best possible outcomes for our patients.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

   
  )
}

export default About