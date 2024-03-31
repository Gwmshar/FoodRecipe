import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleDish from "./pages/SingleDish";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [foods, setFoods] = useState([]);
  const [foodSearch, setFoodSearch] = useState("chicken");
  const [singleFood, setSingleFood] = useState([]);
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${foodSearch}&app_id=80646bac&app_key=995e672c6bbeee7db28239eb056e7126`;

  const getFood = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setFoods(res.data.hits);
        setFoodSearch("");
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              foods={foods}
              foodSearch={foodSearch}
              setFoodSearch={setFoodSearch}
              getFood={getFood}
              setSingleFood={setSingleFood}
            />
          }
        ></Route>
        <Route path="/:id" element={<SingleDish singleFood={singleFood} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
