import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
function App() {
  return (
    <>
      <Header />
      <AddContact />
    </>
  );
}

export default App;
