import { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contactList, setContactList] = useState([]);
  console.log(uuidv4());
  const addContactHandler = (contact) => {
    const updatedContactList = [...contactList, { id: uuidv4(), ...contact }];
    window.localStorage.setItem(
      "contactList",
      JSON.stringify(updatedContactList)
    );
    setContactList(updatedContactList);
  };

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem("contactList")
    );
    if (contactsFromLocalStorage) {
      setContactList(contactsFromLocalStorage);
    }
  }, []);
  return (
    <>
      <Header />
      <AddContact addContact={addContactHandler} />
      <ContactList contactList={contactList} />
    </>
  );
}

export default App;
