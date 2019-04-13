import React from 'react';

import { Button } from 'react-bootstrap';
import Select from './Select';
import CardHeader from './CardHeader';
import SpecialOffer from './SpecialOffer';

const selectContainerStyle = {
  background: '#eef0f2'
}

const Card = (props) => {
 console.log(props);
 const frequency = 'Annually';
 
 return (
  <div className="col-12 col-md-4 p-1">
    <div className="card h-100 pt-4 pb-4">
    <div className="pb-4">
      <CardHeader partnerLogo={props["partner_logo"]} planType={props["plan_type"]} rates={props.rates} frequency={frequency}/>
      <div className={"p-2 contain-star"}>
        Indicative premium using the information you provided
      </div>
    </div>
      <div style={selectContainerStyle} className="p-1">
        <Select/>
      </div>
      <div className="p-2">
        <Button>Apply Now</Button>
        <SpecialOffer text={props.specialOffer}/>
      </div>
    </div>
  </div>
 )
}

export default Card;