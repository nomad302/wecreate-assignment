import React from "react";
import "../section/section.css";
import "./DesignService.css";
import uxd from "./user-experience-design.svg";
import visuald from "./visual-design.svg";

const DesignServices = () => {
  return (
    <div className="design-service-container">
      <div className="section-container">
        <div className="section-item">
          <div className="content2">
            <h2>User Experience Design</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis impedit voluptatum eos maiores? Aut qui, reiciendis
              placeat omnis accusamus impedit!
            </p>
          </div>
        </div>
        <div className="section-item">
          <img src={uxd} alt="User Design Experience" />
        </div>
      </div>

      <div className="section-container">
        <div className="section-item">
          <img src={visuald} alt="User Design Experience" />
        </div>
        <div className="section-item">
          <div className="content2">
            <h2>Visual Design</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis impedit voluptatum eos maiores? Aut qui, reiciendis
              placeat omnis accusamus impedit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignServices;
