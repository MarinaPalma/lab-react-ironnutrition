
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';




function App() {
const [food, setFood] = useState(foods);
const [searchFood, setSearchFood] = useState(foods);
const [showFood, setShowFood] = useState(true);

const addFood = (newFood) =>{
  const updatedFood = [ ...food, newFood]
  setFood(updatedFood);
  setSearchFood(updatedFood);
}

const toggleShow =() =>{

  setShowFood(!showFood);
};

const searchFilter = (search) => {
  let filteredFood = food.filter((element)=>
    element.name.toLowerCase().includes(search.toLowerCase())
  );
  
  setSearchFood(filteredFood);
};

const deleteFood = (foodname)=>{
const filteredElements = food.filter((element)=>{
  return element.name !== foodname;
})
setFood(filteredElements);
setSearchFood(filteredElements) //because we are doing the map in the searchbar
}

  return (
    <div className="App">
    {/* <h1>Food List</h1> */}
{/* if toggle is true shows form with hide btn, otherwise if its false hides and shows add btn*/}
 {showFood && <AddFoodForm addFood={addFood}/>} 
 

 <Button onClick={toggleShow}> {showFood ? "Hide Form ": "Add New Food"} </Button>

<Search searchFilter={searchFilter}/>


    <Divider>Food List</Divider>

    {searchFood.length===0 ? <p>No food to show</p> : <Row style={{ width: '100%', justifyContent: 'center' }}>
    <FoodBox foodList={food} searchFood={searchFood} deleteFood={deleteFood}/>
</Row>}
    
     {/* <Row style={{ width: '100%', justifyContent: 'center' }}>
    <FoodBox foodList={food} searchFood={searchFood} deleteFood={deleteFood}/>
</Row> SEM A MSG VAZIA*/}



     
    </div>
  );
}

export default App;
