 import React from 'react';

 import Button from './Button';
 import Select from './Select';
 import CardHeader from './CardHeader';
 import SpecialOffer from './SpecialOffer';

 const Card = (props) => {
   console.log(props);
   const frequency = 'Annually';
   
   return (
    <div>
      <CardHeader partnerLogo={props["partner_logo"]} planType={props["plan_type"]} rates={props.rates} frequency={frequency}/>
      <Select/>
      <Button>Apply Now</Button>
      <SpecialOffer text={props.specialOffer}/>
    </div>
   )
 }

 export default Card;