import Contact from '../Contact/Contact';

const ContactList = ({filteredContacts}) => {

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
