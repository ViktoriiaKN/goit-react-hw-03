import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({filteredContacts, deleteContact}) => {

  return (
    <div>
      <ul className={style.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} deleteContact={() => deleteContact(contact.id)} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
