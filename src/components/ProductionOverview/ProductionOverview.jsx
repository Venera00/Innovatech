import React from "react";
import img from "../../assets/vrpro.jpg";
import "./ProductionOverview.css";

const ProductionOverview = () => {
  return (
    <div className="product-overview">
      <h2>Innovatech VR Pro</h2>
      <p>Discover the next generation of virtual reality.</p>
      <img src={img} alt="Innovatech VR Pro" className="product-img" />
      {/* <video src="path/to/promotional-video.mp4" controls></video> */}
      <section className="features">
        <h3>Features</h3>
        <ul>
          <li>High resolution display</li>
          <li>Immersive sound</li>
          <li>Comfortable design</li>
          <li>Advanced motion tracking</li>
        </ul>
      </section>
      <section className="testimonials">
        <h3>User Testimonials</h3>
        <p>"The best VR experience I've ever had!" - Jane Doe</p>
        <p>"Incredibly immersive and comfortable." - John Smith</p>
      </section>
    </div>
  );
};

export default ProductionOverview;
