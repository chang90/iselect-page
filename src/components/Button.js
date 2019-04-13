import React from 'react';

const Button = ({ handleClick, children }) => {
  const defaultClickHandler = () => console.log('Clicked');
  
  const onClick = handleClick || defaultClickHandler;

  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;