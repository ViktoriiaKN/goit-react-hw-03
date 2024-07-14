import style from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <li className={style.contactItem}>
      <div>
        <p className={style.contactName}></p>
        <p>
          {contact.name}: {contact.number}{' '}
        </p>
      </div>
    </li>
  );
};

export default Contact;
