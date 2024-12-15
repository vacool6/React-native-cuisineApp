import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../../dummy-data";
import MealItem from "../MealItem";

const MealsOverviewPage = ({ route }) => {
  const { categoryId, bg } = route.params;

  const displayedMeals = MEALS.filter((e) => {
    return e.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={(mi) => (
          <MealItem
            id={mi.item.id}
            title={mi.item.title}
            imageUrl={mi.item.imageUrl}
            duration={mi.item.duration}
            complexity={mi.item.complexity}
            affordability={mi.item.affordability}
            bg={bg}
          />
        )}
        keyExtractor={(e) => e.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 68,
  },
});

export default MealsOverviewPage;
