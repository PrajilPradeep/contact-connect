import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
function ContactList({ contactList, deleteContact }) {
  const renderContactList = contactList.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    );
  });
  return (
    <div className="main">
      <h3>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h3>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}

export default ContactList;
