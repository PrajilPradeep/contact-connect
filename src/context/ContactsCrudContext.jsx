import { createContext, useContext, useState } from "react";
import api from "../api/contacts";

const ContactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contactList, setContactList] = useState([]);

  //Retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContactList(response.data);
  };

  const value = {
    contactList,
    retrieveContacts,
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
