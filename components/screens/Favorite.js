import { View, FlatList } from "react-native";
import { useFavMeals } from "../../context/FavMealsContext";
import MealItem from "../MealItem";

const Favorite = () => {
  const { favMeals, removeMealFromFavList } = useFavMeals();

  return (
    <View style={styles.container}>
      <FlatList
        data={favMeals}
        renderItem={(meal) => (
          <MealItem
            id={meal.item.id}
            title={meal.item.title}
            imageUrl={meal.item.imageUrl}
            duration={meal.item.duration}
            affordability={meal.item.affordability}
            complexity={meal.item.complexity}
            pressHandler={() => removeMealFromFavList(meal.item.id)}
          />
        )}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4d312b",
    height: "100%",
  },
});

export default Favorite;
