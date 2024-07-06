import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filtered, setFiltered] = useState(plants)
  const [notFound, setNotFound] = useState(false)

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(resConverted => setPlants(resConverted))

  }, [])


  const handleChange = (e) =>{
      const display = plants.filter(plant => plant.name.startsWith(e.target.value))
      setFiltered(display)
      if(display.length ===0){
        setNotFound(true)
      } else{
        setNotFound(false)
      }

  }


  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
      <Search handleChange = {handleChange} filtered = {filtered}/>
      {notFound ? <p>Can't find that plant</p> : <PlantList plants = {filtered} />}
      
    </main>
  );
}

export default PlantPage;
