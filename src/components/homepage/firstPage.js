import React from "react";
import Section from "../section/Section";
import Process from "../process/process";
import Services from "../services/Services";
import { connect } from "react-redux";
import { getCurrentRoute } from "../../actions";
import logo from "../section/more than visual design.png";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCurrentRoute(this.props.location.pathname);
  }
  render() {
    return (
      <div>
        <Section img={logo} />
        <Process />
        <Services />
      </div>
    );
  }
}

export default connect(null, { getCurrentRoute })(FirstPage);
