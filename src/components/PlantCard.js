import React, { useState } from "react";

function PlantCard({name, image, price}) {

  const [available, setAvailable] = useState(true)

  const handleAvailability = () => {
    setAvailable(!available)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={`Picture of ${name}`} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {available ? (
        <button className="primary" onClick = {handleAvailability}>In Stock</button>
      ) : (
        <button onClick = {handleAvailability}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
