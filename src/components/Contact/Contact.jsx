const Contact = ({ contact }) => {
  return (
    <div>
      <li>
        {contact.name}: {contact.number}
      </li>
    </div>
  );
};

export default Contact;
 /* changes */
