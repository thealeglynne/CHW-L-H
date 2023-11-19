import React from 'react';
import "../style/cards3.css"

function Card3(props) {
  const { title, text, imageUrl } = props;

  const handleClick = () => {
    console.log('Clic en la tarjeta');
  };

  return (
    <div className="card3" onClick={handleClick}>
      <div className="card3-inner">
        <div className="card3-front">
          <img src={imageUrl} alt={title} />
          <div className="titleC3">
          <h2 className='textC'><b>{title}</b></h2>
          </div>
        </div>
        <div className="card3-back">
          <p className='textBackC3'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
