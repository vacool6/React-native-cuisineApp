import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../dummy-data";
import { CustomBtn } from "../CustomBtn";
import { useFavMeals } from "../../context/FavMealsContext";

const MealDetailsPage = ({ route }) => {
  const { mealId } = route.params;
  const { addMealToFavList } = useFavMeals();

  const meal = MEALS.filter((e) => e.id === mealId);

  const pressHandler = () => {
    addMealToFavList(meal[0]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: meal[0].imageUrl }} style={styles.imgContainer} />
        <View style={styles.btnContainer}>
          <CustomBtn meal={meal[0]} pressHandler={pressHandler}>
            Add to Favorite
          </CustomBtn>
        </View>
      </View>

      <Text style={[styles.title, { borderBottomWidth: 0 }]}>
        {meal[0].title}
      </Text>

      <Text style={styles.description}>
        {meal[0].duration}M {meal[0].complexity} {meal[0].affordability}
      </Text>

      <View>
        <Text style={styles.title}>Ingredients</Text>
        {meal[0].ingredients.map((e, index) => (
          <Text key={index} style={styles.list}>
            {e}
          </Text>
        ))}
      </View>

      <View>
        <Text style={styles.title}>Preparation steps</Text>
        {meal[0].steps.map((e, index) => (
          <Text key={index} style={styles.list}>
            {e}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 12,
    marginBottom: 84,
  },
  imgContainer: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: "bold",
    fontFamily: "cursive",
    color: "white",
    borderBottomWidth: 2,
    borderColor: "gold",
    paddingBottom: 4,
  },
  description: {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "monospace",
    backgroundColor: "white",
  },
  list: {
    textAlign: "center",
    backgroundColor: "goldenrod",
    borderRadius: 12,
    marginBottom: 4,
    marginTop: 4,
    padding: 4,
  },
  innerContainer: {
    position: "relative",
  },
  btnContainer: {
    position: "absolute",
    right: 8,
    top: 12,
  },
});

export default MealDetailsPage;
