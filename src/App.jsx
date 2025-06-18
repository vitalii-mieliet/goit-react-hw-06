import { useEffect, useState } from "react";
import { nanoid } from "nanoid/non-secure";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initContacts from "./data/initContacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || initContacts
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const contact = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const removeContactById = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilter = (query) => {
    setFilter(query);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1 style={{ width: "300px", margin: "0 auto 24px auto" }}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterValue={filter} handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        removeContact={removeContactById}
      />
    </div>
  );
}
export default App;
