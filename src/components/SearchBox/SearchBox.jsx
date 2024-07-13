import { Field } from "formik"

const SearchBox = ({filter, handleFilterChange}) => {
  return (
    <Field 
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
