import ContactCard from "./ContactCard";
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
  return <div className="ui celled list">{renderContactList}</div>;
}

export default ContactList;
