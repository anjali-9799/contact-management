import React from "react";
import Header from "./Header";
import AddContacts from "./AddContacts";
import "./App.css";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Anjali",
      email: "anjali9799@gmail.com",
    },
    {
      id: "2",
      name: "Aish",
      email: "aishbht@gmail.com",
    },
    {
      id: "3",
      name: "Bharti",
      email: "bharti@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
