import React from 'react';

const Select = ({ handleChange, options }) => {
  const defaultChangeHandler = () => console.log('Changed');
  
  const onChange = handleChange || defaultChangeHandler;

  const displayOptions = options || [{value: '', text: 'Default'}]

  return (
    <select onChange={onChange}>
      {
        displayOptions.map((option, index)=> {
          return <option key={index} value={option.value}>{option.text}</option>
        })
      }
    </select>
  )
}

export default Select;