import React from 'react';

const SpecialOffer = ({ text }) => {
  if (!text) {
    return null;
  }
  return (
    <div>
      <div>Special Offer</div>
      <span>{text}</span>
    </div>
  )
}

export default SpecialOffer;