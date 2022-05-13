import React from 'react';
import Information from "../Information";
import LatestMeals from "../LatestMeals";
import RandomMeals from "../RandomMeals";


const HomePage = () => {

  return (
    <div>
      {<Information />}
      {<LatestMeals/>}
      {<RandomMeals/>}
    </div>
  );
};

export default HomePage;