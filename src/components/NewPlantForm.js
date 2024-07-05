import React, {useEffect} from "react";

function NewPlantForm({plants, setPlants}) {

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

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );

};


export default NewPlantForm;
