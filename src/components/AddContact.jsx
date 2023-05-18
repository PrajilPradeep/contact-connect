import "../styles/App.css";
import React from "react";
import { useState } from "react";

function AddContact({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContact({ name, email });
    setName("");
    setEmail("");
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
