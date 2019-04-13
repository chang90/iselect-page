import React from 'react';

const SpecialOffer = ({ text }) => {
  if (!text) {
    return null;
  }
  return (
    <div className={"offerContainer mt-4 p-2 pt-4 position-relative"}>
      <div className={"offer-title"}>Offer
        <span className="top-left"></span>
        <span className="top-right"></span>
        <span className="bottom-left"></span>
        <span className="bottom-right"></span>
      </div>
      <span>{text}</span>
    </div>
  )
}

export default SpecialOffer;