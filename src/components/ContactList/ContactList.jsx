import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({filteredContacts}) => {

  return (
    <div>
      <ul className={style.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
