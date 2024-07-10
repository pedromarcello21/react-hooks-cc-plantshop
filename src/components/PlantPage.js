import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filtered, setFiltered] = useState(plants)
  const [display, setDisplay] = useState(false)

  ////Add Plants

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.image.value)
    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify({
        name:e.target.name.value,
        image:e.target.image.value,
        price:parseInt(e.target.price.value)
      })
    })
    .then(res => res.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }


    /////Get plants
    useEffect(() =>{
      fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(resConverted => setPlants(resConverted))
  
    }, [plants])


  /////Search criteria
  const handleChange = (e) =>{
      const filtered = plants.filter(plant => plant.name.startsWith(e.target.value))
      setFiltered(filtered)
      setDisplay(true)
  }


  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants} handleSubmit={handleSubmit}/>
      <Search handleChange = {handleChange} />
      {display ? <PlantList plants = {filtered} /> : <PlantList plants = {plants}/>}
      {console.log(filtered)}
      
    </main>
  );
}

export default PlantPage;
