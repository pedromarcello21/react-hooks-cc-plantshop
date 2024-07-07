import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const [available, setAvailable] = useState(true)

  const handleAvailability = () => {
    setAvailable(!available)
  }


  return (
    <ul className="cards">
      {plants.length > 0 ? plants.map(plant => <PlantCard key = {plant.name} image = {plant.image} name = {plant.name} price = {plant.price}/> ) : <p>Can't find plant :/</p>}
    </ul>
    
  );
}

export default PlantList;
