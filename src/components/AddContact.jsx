import "../styles/App.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { addContactHandler } = useContactsCrud();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ui field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddContact;
