import React from 'react';

import Image from './Image';
import Price from './Price';

const CardHeader = ({ partnerLogo, planType, rates, frequency }) => {

  const rate = rates.find(rate => rate.frequency === (frequency || 'Annually'))

  return (
    <div>
      <Image url={partnerLogo}/>
      <span>{planType}</span>
      <Price price={rate && rate.price}/>
    </div>
  )
}

export default CardHeader;