import { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";

function App() {
  const [contactList, setContactList] = useState([]);
  const LOCAL_STORAGE_KEY = "contactList";
  const addContactHandler = (contact) => {
    const updatedContactList = [...contactList, { id: uuidv4(), ...contact }];
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
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

  const deleteContact = (id) => {
    const newContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(newContactList);
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newContactList)
    );
  };
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contactList={contactList}
                deleteContact={deleteContact}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContact={addContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
