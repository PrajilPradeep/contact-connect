import { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  const [contactList, setContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContactList([...contactList, response.data]);
  };

  const editContactHandler = async (updatedContact) => {
    const { id } = updatedContact;
    const response = await api.put(`/contacts/${id}`, updatedContact);
    setContactList(
      contactList.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  useEffect(() => {
    const getAllContact = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContactList(allContacts);
    };

    getAllContact();
  }, []);

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contactList.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contactList);
    }
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
                contactList={
                  searchTerm.length >= 1 ? searchResult : contactList
                }
                deleteContact={deleteContact}
                searchTerm={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContact={addContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route
            path="/edit"
            element={<EditContact editContact={editContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
