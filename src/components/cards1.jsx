import React from 'react';
import "../style/card1.css";

function Card(props) {

  const { title,  imageUrl } = props;


  const handleClick = () => {
 
    console.log('Clic en la tarjeta');
  };

  return (
    <div id="card1H" className="card1H" onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
