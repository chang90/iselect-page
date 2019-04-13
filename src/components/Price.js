import React from 'react';

const NoPrice = () => {
  return <div>No Price</div>
}
const fontColor = {
  color: '#63666d'
}
const dollarSignStyle = {
  'fontSize': '20px',
  'verticalAlign': 'top'
}
const dollarStyle = {
  'fontSize': '36px',
  'lineHeight': '36px',
  'verticalAlign': 'top'
}
const centStyle = {
  'fontSize': '16px',
  'verticalAlign': 'top'
}
const Price = ({ price }) => {
  if (price) {
    const dollars = price.split('.')[0];
    const cents = price.split('.')[1];
    return (
        <div style={fontColor}>
          <span style={dollarSignStyle}>$</span>
          <span style={dollarStyle}>{dollars}</span>
          <span style={centStyle}>.{cents}*</span>
        </div>
    )
  } else {
    return <NoPrice/>
  }
}

export default Price;