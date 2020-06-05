import React from "react";
import { connect } from "react-redux";
import { getCurrentRoute, getSecondPageData } from "../../actions";
import Section from "../section/Section";
import header2 from "./header2.png";
import Form from "./form";

class SecondPage extends React.Component {
  componentDidMount() {
    this.props.getCurrentRoute(this.props.location.pathname);
    // Fake API CAll
    setTimeout(() => {
      this.props.getSecondPageData();
    }, 3000);
  }
  renderUsers = () => {
    if (!this.props.users) {
      return null;
    }
    return this.props.users.map((user, i) => {
      return (
        <h2 key={i}>
          {user.firstName} {user.lastName}
        </h2>
      );
    });
  };

  renderAllUsers() {
    return (
      <div>
        <h1>All Users </h1>
        <div className="dynamic-inputs">{this.renderUsers()}</div>
      </div>
    );
  }
  render() {
    return (
      <div className="secondpage-wrapper">
        <Section img={header2} />
        {this.props.users.length ? this.renderAllUsers() : null}
        <Form />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { getCurrentRoute, getSecondPageData })(
  SecondPage
);
