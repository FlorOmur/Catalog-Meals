import React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const RandomMealInfo = () => {

  const [latestMeals,setLatestMeals] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const [ingredients,setIngredients] = useState([])
  const getIngredients = () => {
    let result = []
    for(let i = 0; i< 20; i++) {
      if(latestMeals[`strIngredient${i + 1}`])
        result = [...result,latestMeals[`strIngredient${i + 1}`]]
    }
    setIngredients(result)
  }
  const {id} = useParams()
  useEffect(()  => {
    axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`)
      .then((res) => {
        setLatestMeals(res.data.meals[0])
        getIngredients(res.data.meals[0])
        setIsLoading(false)
      })
  })
  if(isLoading){
    return 'loading'
  }
  return (
    <div className="container">
      <div className="row">
        <div  className="col-4">
          <Link to="/"><button className="btnComponent" >Back</button> </Link>
          <div className="itemMeal">
            <h2 className="titleMeals">{latestMeals.strMeal}</h2>
            <img className="item-img" src={`${latestMeals.strMealThumb}/preview`} alt="img" />
            <Link to={`/latestMeals/${+id+ 1}`}><button className="btnComponent" >Go Next</button></Link>
          </div>
        </div>
        <div className="col-8">
          <h2 className="titleMeals">Ingredients</h2>
          <div className="row">
            {
              ingredients.map((ingredient,index) => (
                <div className="mealCol">
                  <Link  to={`/ingredients/${ingredient}`} key={index} className="item-col ">
                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} width="100%" alt="img"/>
                    <h4 className="titleMeals">{ingredient}</h4>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomMealInfo;