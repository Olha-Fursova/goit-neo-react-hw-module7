import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["contact-list"]}>
      {contacts.map(contact => (
        <li className={css["contact-list-item"]} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}