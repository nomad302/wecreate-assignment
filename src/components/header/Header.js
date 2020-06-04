import React from "react";
import "./header.css";
import prodDesign from "./product_Design.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFirstPageData } from "../../actions";

class Header extends React.Component {
  // Fake API CALL
  componentDidMount() {
    setTimeout(() => {
      this.props.getFirstPageData();
    }, 3000);
  }
  render() {
    return (
      <div className="container">
        <div className="header-item">
          <div className="link">
            <Link
              to={this.props.currentRoute === "/" ? "/secondpage" : "/"}
              style={{
                textDecoration: "none",
                color: "#4dd0e1",
                fontWeight: "bold"
              }}>
              {this.props.currentRoute === "/" ? "Next Page" : "Go Back"}
            </Link>
          </div>

          <div className="content">
            <div>
              <h1>Product Design</h1>
              <p>{this.props.headerData}</p>
            </div>
          </div>
        </div>
        <div className="header-item">
          <img src={prodDesign} alt="Product Design" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute.value,
    headerData: state.homePageData.headerBlock
  };
};
export default connect(mapStateToProps, { getFirstPageData })(Header);
