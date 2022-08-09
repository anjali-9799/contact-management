import React from "react";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <AddContacts />
      <ContactList />
    </div>
  );
}

export default App;
