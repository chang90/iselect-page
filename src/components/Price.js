import React from 'react';

const NoPrice = () => {
  return <div>No Price</div>
}

const Price = ({ price }) => {
  if (price) {
    const dollars = price.split('.')[0];
    const cents = price.split('.')[1];
    return (
      <div>
        $
        <div>
          <span>{dollars}</span>
          <span>.{cents}</span>
        </div>
        *
      </div>
    )
  } else {
    return <NoPrice/>
  }
}

export default Price;