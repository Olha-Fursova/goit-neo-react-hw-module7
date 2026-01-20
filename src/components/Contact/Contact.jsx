import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css["contact-container"]}>
      <div className={css["contact-info"]}>
        <h3 className={css["contact-name"]}>{contact.name}</h3>
        <p className={css["contact-number"]}>{contact.number}</p>
      </div>
      <button
        className={css["delete-btn"]}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
