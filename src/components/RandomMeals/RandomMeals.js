import React, {useEffect, useState} from 'react';
import axios from "axios";
import Information from "../Information";
import LatestMeals from "../LatestMeals";
import {Link} from "react-router-dom";

const HomePage = () => {
  const [random, setRandom] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then((res) => {
        setRandom(res.data)
        setLoading(false)
      })
  },[])
  console.log(random.meals)

  if(loading){
    return 'loading'
  }

  return (
    <div>
      <h2 className="titleComponents" >Random Meals</h2>
      <div className="row">
        {
          random.meals.map((meal) => (
            <div key={meal.idMeal} className="mealCol">
              <Link to={`/randomMeals/${meal.idMeal}`}>
                <img src={`${meal.strMealThumb}/preview`} className="mealImg" alt="img" />
                <h3 className="titleMeals">{meal.strMeal}</h3>
              </Link>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default HomePage;