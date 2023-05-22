import "../styles/App.css";
import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

function EditContact() {
  const { editContactHandler } = useContactsCrud();
  const location = useLocation();
  const { id, name, email } = location.state.contact;

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All the fields are mandatory!");
      return;
    }
    editContactHandler({ id, name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="ui field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditContact;
