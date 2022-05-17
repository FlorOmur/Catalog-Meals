import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {

  const {name} = useParams()
  const [browse, setBrowse] = useState([])

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(({data}) => {
        setBrowse(data.meals)
      })
  },[name])

  return (
    <div>
      <Link to="/"><button className="btnBrowse" >Back</button> </Link>
        <div className="itemLatesMeat">
          {
            browse.map((meal) => (
              <div key={meal.idMeal} className="mealCol">
                <img className="mealImg" src={`${meal.strMealThumb}/preview`} alt="img"/>
                <h3 className="titleMeals">{meal.strMeal}</h3>
              </div>
            ))
          }
        </div>
      <h3 className="titleMeals">Browse Meals</h3>
    </div>
  );
};

export default Browse;