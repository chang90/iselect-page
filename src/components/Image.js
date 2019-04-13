import React from 'react';

const imgStyle = {
	'maxWidth': '100%'
}
const Image = ({ url }) => {
  return (
    <div>
      <img src={url} style={imgStyle}/>
    </div>
  )
}

export default Image;