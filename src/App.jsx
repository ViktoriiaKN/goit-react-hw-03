import { Formik } from 'formik';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik initialValues={{ filter: '' }}>
        {() => (
          <div>
            <SearchBox
              filter={filter}
              handleFilterChange={handleFilterChange}
            />
          </div>
        )}
      </Formik>
      <ContactForm addContact={addContact} />
      <ContactList filteredContacts={filteredContacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
