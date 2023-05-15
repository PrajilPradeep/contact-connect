import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
function App() {
  const [contactList, setContactList] = useState([]);
  const addContactHandler = (contact) => {
    const updatedContactList = [...contactList, contact];
    setContactList(updatedContactList);
  };
  return (
    <>
      <Header />
      <AddContact addContact={addContactHandler} />
      <ContactList contactList={contactList} />
    </>
  );
}

export default App;
