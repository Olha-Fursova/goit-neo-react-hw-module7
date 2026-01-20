import Layout from '../Layout/Layout';
import AppBar from '../AppBar/AppBar';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  return (
    <Layout>
      <AppBar />
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
}