import React from 'react'
import { Card, Button, Row } from 'antd';

function FoodBox(props) {
   const {foodList, searchFood, deleteFood} = props;

    return ( 
        
        <Row>

                
        {foodList && searchFood.map((element)=>{
            return(
        <Card
          title={element.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={element.image} height={60} alt="food" />
          <p>Calories: {element.calories}</p>
          <p>Servings: {element.servings}</p>
          <p>
            <b>Total Calories: {element.calories * element.servings}</b> kcal
          </p>
          <Button onClick={()=>deleteFood(element.name)} type="primary"> Delete </Button>
        </Card>
        )})}
      </Row>

     
    );
  }
  
  export default FoodBox;