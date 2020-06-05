import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addUsers } from "../../actions";

class Form extends React.Component {
  renderInput({ input }) {
    return <input {...input} />;
  }
  renderUsers = ({ fields }) => (
    <ul>
      {fields.map((user, index) => (
        <li key={index}>
          <h4>User #{index + 1}</h4>
          <Field
            name={`${user}.firstName`}
            type="text"
            component={this.renderInput}
            label="First Name"
          />
          <Field
            name={`${user}.lastName`}
            type="text"
            component={this.renderInput}
            label="Last Name"
          />
          <button
            type="button"
            title="Remove User"
            className="red-button"
            onClick={() => fields.remove(index)}>
            -
          </button>
        </li>
      ))}
      <button type="button" onClick={() => fields.push({})}>
        +
      </button>
      <button type="submit">Submit</button>
    </ul>
  );

  renderAllUsers = (users) => {
    return users.map((user, i) => {
      return (
        <div>
          `${user.firstName} ${user.lastName}`
        </div>
      );
    });
  };
  onSubmit = (formValues) => {
    setTimeout(() => {
      this.props.addUsers(formValues.users);
    }, 3000);
  };

  render() {
    return (
      <div className="form-wrapper">
        <h2>Dynamic Form</h2>
        <div className="form-container">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <h3 style={{ marginBottom: "15px" }}>
              Add User (First Name, Last Name)
            </h3>
            <div className="dynamic-inputs">
              <FieldArray name="users" component={this.renderUsers} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const ReduxForm = reduxForm({
  form: "dynamicForm",
})(Form);

export default connect(null, { addUsers })(ReduxForm);
