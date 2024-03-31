import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home({
  foods,
  foodSearch,
  setFoodSearch,
  getFood,
  setSingleFood,
}) {
  const navigate = useNavigate();
  const handleInfo = (e) => {
    e.preventDefault();
    getFood();
  };
  const handleView = (id) => {
    id = id.replace("http://www.edamam.com/ontologies/edamam", "");
    id = id.replace("#", "%23");
    const URL = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam${id}&app_id=80646bac&app_key=995e672c6bbeee7db28239eb056e7126`;
    handleSingle(URL);
    setTimeout(() => {
      navigate(`/${id}`);
    }, 1000);
  };

  const handleSingle = (URL) => {
    axios
      .get(URL)
      .then((res) => {
        setSingleFood(res.data.hits[0]);
      })
      .catch((err) => {
        console.log("error happen");
      });
  };

  useEffect(() => {
    handleSingle();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-20 text-3xl mt-5">
        <h2>Foodies</h2>
      </div>
      <div>
        <form
          action=""
          className="flex justify-center items-start my-5"
          onSubmit={(e) => handleInfo(e)}
        >
          <input
            type="text"
            placeholder="Food name e.g. Chicken"
            className="border border-gray-300 w-2/4 h-12 px-2"
            value={foodSearch}
            onChange={(e) => setFoodSearch(e.target.value)}
          />
          <button className="bg-gray-300 h-12 w-24">Search</button>
        </form>
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-[80%]">
          {foods.map((a) => {
            return (
              <div
                key={a.recipe.uri}
                className="h-72 bg-gray-200 flex justify-center items-center flex-col gap-2"
              >
                <h2>{a.recipe.label}</h2>
                <img className="h-44 w-[70%]" src={a.recipe.image} alt="" />
                <button
                  className="bg-blue-500 text-white w-20 h-10"
                  onClick={() => handleView(a.recipe.uri)}
                >
                  view
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
