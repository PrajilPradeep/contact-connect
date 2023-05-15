import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
function App() {
  const contactList = [
    {
      id: 1,
      name: "Sam",
      email: "Sam@gmail.com",
    },
    {
      id: 2,
      name: "Rick",
      email: "Rick@outlook.com",
    },
  ];
  return (
    <>
      <Header />
      <AddContact />
      <ContactList contactList={contactList} />
    </>
  );
}

export default App;
