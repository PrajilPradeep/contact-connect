import "../styles/App.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" exact element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/edit" element={<EditContact />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
