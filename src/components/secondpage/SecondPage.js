import React from "react";
import { connect } from "react-redux";
import { getCurrentRoute } from "../../actions";
import Section from "../section/Section";
import header2 from "./header2.png";
import Form from "./form";

class SecondPage extends React.Component {
  componentDidMount() {
    this.props.getCurrentRoute(this.props.location.pathname);
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
  render() {
    return (
      <div>
        <Section img={header2} />
        <h1 style={{ textAlign: "center" }}>All Users </h1>
        <div className="dynamic-inputs">{this.renderUsers()}</div>
        <Form />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps, { getCurrentRoute })(SecondPage);
