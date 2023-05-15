import "../styles/App.css";
import React from "react";
class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="ui field">
            <label for="name">Name</label>
            <input id="name" placeholder="Name" />
          </div>
          <div className="ui field">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
