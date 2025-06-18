import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
