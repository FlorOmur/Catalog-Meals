import React from 'react';
import {Link} from "react-router-dom";
import mealIcon from "../../assets/meal-icon.png"
import paypal from "../../assets/PayPal_logo.png"
import search from "../../assets/search.png"
import meals from "../../assets/meal-icon6.png"
import imeges from "../../assets/image.png"
import total from "../../assets/meal-icon4.png"
import "./Information.css"

const Information = () => {
  return (
    <div className="information">
      <div className="row">
        <div className="imgCol">
          <img src={mealIcon} alt="img"/>
        </div>
        <div className="infoCol">
          <div className="InfoItem">
            <h1>Welcome to TheMealDB</h1>
            <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
            <p>We also offer a <Link to="https://www.themealdb.com//api.php"><span
              className="linkApi"> free JSON API</span></Link> for anyone wanting to use it, with additional features
              for subscribers.</p>
            <button className="infoBtn"><img src={paypal} alt="paypal" width="60px"/> Подписатся</button>
            <p>Click to Support $2 per month (cancel anytime)<br/> Currently 750 supporters</p>
          </div>
        </div>
        <div className="imgCol">
          <img src={mealIcon} alt="img"/>
        </div>
      </div>
      <div className="line"></div>
      <div>
        <div className="boxSearch">
          <form>
            <input type="text" placeholder="Search for a meal ..."/>
            <button><img src={search} alt="btn" width="15px"/></button>
          </form>
        </div>
        <div className="boxTotals">
          <div className="boxTotals">
            <img src={meals} alt="img" />
            <p><b>Total Meals:</b> 283</p>
          </div>
          <div className="boxTotals">
            <img src={total} alt="img" />
            <p><b> Total Ingredients:</b> 574</p>
          </div>
          <div className="boxTotals">
            <img src={imeges} alt="img" />
            <p><b>Images:</b> 283</p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Information;