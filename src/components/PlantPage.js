import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filtered, setFiltered] = useState(plants)

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(resConverted => setPlants(resConverted))

  }, [])


  const handleChange = (e) =>{
      const display = plants.filter(plant => plant.name.startsWith(e.target.value))
      setFiltered(display)
      display.length ===0 && window.alert("Can't find plant")
      console.log(display)

  }


  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
      <Search handleChange = {handleChange} filtered = {filtered}/>
      {filtered.length === 0 && <PlantList plants = {plants} />}
      {filtered.length !== 0 && <PlantList plants = {filtered} />}
      

    </main>
  );
}

export default PlantPage;
