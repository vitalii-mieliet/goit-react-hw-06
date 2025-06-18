import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";
const Contact = ({ contact: { name, phone, id }, removeContact }) => {
  return (
    <li className={css.item}>
      <div>
        <div className={css.field}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.field}>
          <FaPhone />
          <p>{phone}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
