import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

function ContactList({ deleteContact, searchTerm, searchKeyword }) {
  const { contactList, retrieveContacts } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const inputEl = useRef("");

  const renderContactList = contactList.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    );
  });

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h3>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h3>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contact"
            className="prompt"
            value={searchTerm}
            onChange={getSearchTerm}
          />
          <i className="search icon" />
        </div>
      </div>

      <div className="ui celled list">
        {contactList.length >= 1 ? renderContactList : "No Contacts Available"}
      </div>
    </div>
  );
}

export default ContactList;
