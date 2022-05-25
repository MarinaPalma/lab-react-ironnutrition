import { Divider, Input } from 'antd';
import React, { useState } from "react";

// Iteration 4
function AddFoodForm(props) {
    const {addFood} = props;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = (element) =>{
        element.preventDefault();
        const newFood = {name, image, calories, servings};
        addFood(newFood);
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
        alert("New food created");
    }

    const handleName= (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories= (e) => setCalories(e.target.value);
    const  handleServings= (e) => setServings(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />
   

      <label>Calories</label>
      <Input value={calories} type="number" onChange= {handleCalories} />


      <label>Servings</label>
      <Input value={servings} type="number" onChange= {handleServings} />


      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;