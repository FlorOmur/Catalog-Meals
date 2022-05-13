import HomePage from "./components/HomePage";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MealInfo from "./components/screen/MealInfo";
import RandomMealInfo from "./components/screen/RandomMealInfo";
import Ingredients from "./components/Ingredients";

function App() {
  return (
    <BrowserRouter>
      <Header />
    <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/latestMeals/:id" element={<MealInfo />}/>
          <Route path="/randomMeals/:id" element={<RandomMealInfo />}/>
          <Route path="/ingredients/:product" element={<Ingredients />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
