import React from "react";
import "./section.css";

const Section = props => {
  return (
    <div className="section-container">
      <div className="section-item">
        <img src={props.img} alt="Product Design" />
      </div>
      <div className="section-item">
        <div className="content2">
          <h2>More than visual design, more than interaction</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            impedit voluptatum eos maiores? Aut qui, reiciendis placeat omnis
            accusamus impedit!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
            necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
