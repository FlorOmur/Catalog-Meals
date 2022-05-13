import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Ingredients = () => {

  const [ingredients,setIngredients] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const {product} = useParams()

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${product}`)
      .then((res) =>{
        setIngredients(res.data)
        setIsLoading(false)
      })
  },[product])

  if (isLoading){
    return 'Loading'
  }

  return (
    <div>
      <div className="row">
        <div  className="col-4">
            <Link to={`/`}><button className="btnComponent" >Back</button></Link>
            <h2 className="titleMeals">{product}</h2>
            <img src={`https://www.themealdb.com/images/ingredients/${product}.png`} width="100%" alt="img"/>
            <Link to={`/latestMeals/${product}`}><button className="btnComponent" >Go Next</button> </Link>
        </div>
        <div className="col-8">
          <h2 className="titleMeals">Meals</h2>
          <div className="row">
            {
              ingredients.meals.map((ingredient) => (
                <div key={ingredient.idMeal} className="mealCol">
                  <Link to={`/randomMeals/${ingredient.idMeal}`} >
                    <img src={`${ingredient.strMealThumb}`} width="100%" alt="img"/>
                    <h4 className="titleMeals">{ingredient.strMeal}</h4>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Ingredients;