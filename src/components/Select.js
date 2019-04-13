import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';

const Select = ({ handleChange, options }) => {
  const defaultChangeHandler = () => console.log('Changed');
  
  const onChange = handleChange || defaultChangeHandler;

  const displayOptions = options || [{value: '', text: 'Default'}]

  return (
    // <select onChange={onChange}>
    //   {
    //     displayOptions.map((option, index)=> {
    //       return <option key={index} value={option.value}>{option.text}</option>
    //     })
    //   }
    // </select>
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {
    displayOptions.map((option, index)=> {
      return <Dropdown.Item key={index} value={option.value}>{option.text}</Dropdown.Item>
    })
  }
    
  </Dropdown.Menu>
</Dropdown>
  )
}

export default Select;