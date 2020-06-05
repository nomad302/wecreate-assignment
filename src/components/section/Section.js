import React from "react";
import { connect } from "react-redux";

const Section = (props) => {
  return (
    <div className="section-container">
      <div className="section-item">
        <img src={props.img} alt="Product Design" />
      </div>
      <div className="section-item">
        <div className="content2">
          <h2>{props.sectionData ? props.sectionData.header : ""}</h2>
          <p>{props.sectionData ? props.sectionData.para1 : ""}</p>
          <p>{props.sectionData ? props.sectionData.para2 : ""}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.currentRoute.value === "/") {
    return { sectionData: state.homePageData.sectionData };
  } else {
    return { sectionData: state.secondPageData.sectionData };
  }
};
export default connect(mapStateToProps)(Section);
