import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Phonebook</h1>
    </header>
  );
}