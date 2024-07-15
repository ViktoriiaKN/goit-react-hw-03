import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const ContactForm = ({addContact}) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  const handleSubmit = (values) => {
const newContact = {
  id: nanoid(),
  ...values, //Spread
}
addContact(newContact);
resetForm();
  }

  return (<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
<Form className={style.formContainer}>
<div className={style.formName}>
  <label htmlFor="name" className={style.label}>Name</label>
  <Field name='name' type='text' className={style.inputField}/>
 
</div>
<ErrorMessage name='name' component='div' className={style.errorMessage}/>
<div className={style.formField}>
  <label htmlFor="number" className={style.label}>Number</label>
  <Field name='number' type='text' className={style.inputField}/>
  
</div>
<ErrorMessage name='number' component='div' className={style.errorMessage}/>
<button type='submit' className={style.buttonSubmit}>Add Contact</button>
</Form>
  </Formik>);
};

export default ContactForm;
