import "../styles/App.css";
import React from "react";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContact(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="ui field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
