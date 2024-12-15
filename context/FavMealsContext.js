import { createContext, useContext, useState } from "react";

const FavMealsContext = createContext();

export const useFavMeals = () => useContext(FavMealsContext);

const FavMealsProvider = ({ children }) => {
  const [favMeals, setFavMeals] = useState([]);

  function addMealToFavList(meal) {
    setFavMeals([...favMeals, meal]);
  }

  function removeMealFromFavList(id) {
    const updatedList = favMeals.filter((e) => e.id !== id);
    setFavMeals(updatedList);
  }

  const value = { favMeals, addMealToFavList, removeMealFromFavList };

  return (
    <FavMealsContext.Provider value={value}>
      {children}
    </FavMealsContext.Provider>
  );
};

export default FavMealsProvider;
