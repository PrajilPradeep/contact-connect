import { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  const [contactList, setContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const editContactHandler = async (updatedContact) => {
    const { id } = updatedContact;
    const response = await api.put(`/contacts/${id}`, updatedContact);
    setContactList(
      contactList.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
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
        <ContactsCrudContextProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ContactList
                  contactList={
                    searchTerm.length >= 1 ? searchResult : contactList
                  }
                  searchTerm={searchTerm}
                  searchKeyword={searchHandler}
                />
              }
            />
            <Route path="/add" element={<AddContact />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route
              path="/edit"
              element={<EditContact editContact={editContactHandler} />}
            />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
