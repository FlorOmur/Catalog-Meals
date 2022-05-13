import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const LatestMeals = () => {

  const [latestMeals, setLatestMeals] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios("https://www.themealdb.com/api/json/v2/1/latest.php")
      .then((res) => {
        setLatestMeals(res.data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return "loading"
  }

  return (
    <div>
      <h2 className="titleComponents">Latest Meals</h2>
      <div className="row">
        {
          latestMeals.meals.map((oneMeal) => (
            <div key={oneMeal.idMeal} className="mealCol">
              <Link to={`/latestMeals/${oneMeal.idMeal}`}>
                <img className="item-img" src={`${oneMeal.strMealThumb}/preview`} alt="img"/>
                <h3 className="titleMeals">{oneMeal.strMeal}</h3>
              </Link>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default LatestMeals;