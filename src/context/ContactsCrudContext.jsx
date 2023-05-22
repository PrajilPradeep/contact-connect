import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuidv4 } from "uuid";

const ContactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contactList, setContactList] = useState([]);

  //Retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContactList(response.data);
  };

  //Add contact
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContactList([...contactList, response.data]);
  };

  //Delete contact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(newContactList);
  };

  const value = {
    contactList,
    retrieveContacts,
    removeContactHandler,
    addContactHandler,
  };
  return (
    <ContactsCrudContext.Provider value={value}>
      {children}
    </ContactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(ContactsCrudContext);
}

export default ContactsCrudContext;
