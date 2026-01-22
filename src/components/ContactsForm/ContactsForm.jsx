import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactsForm.module.css";

export default function ContactsForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      addContact({
        name: form.name.value,
        number: form.number.value,
      }),
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} name="name" placeholder="Name" required />
      <input className={css.input} name="number" placeholder="Phone" required />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
