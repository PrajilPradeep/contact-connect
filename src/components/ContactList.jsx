import ContactCard from "./ContactCard";
function ContactList({ contactList }) {
  const renderContactList = contactList.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
}

export default ContactList;
