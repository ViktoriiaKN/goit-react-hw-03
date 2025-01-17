import { Field } from "formik"
import style from './SearchBox.module.css'

const SearchBox = ({filter, handleFilterChange}) => {
  return (
    <Field 
    className={style.searchBox}
    as='input'
    text='text'
    name='filter'
    value={filter}
    onChange={handleFilterChange}
    placeholder='Search contacts'
    />
  )
}

export default SearchBox;
