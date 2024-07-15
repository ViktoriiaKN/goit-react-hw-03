import style from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={style.contactItem}>
      <div className={style.contactWrapper}>
        <p className={style.contactName}>{contact.name}</p>
        <p className={style.contactNumber}>{contact.number}</p>
      </div>
      <button className={style.deleteButton} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
