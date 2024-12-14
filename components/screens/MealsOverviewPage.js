import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../../dummy-data";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  bg,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.itemContainer,
          { backgroundColor: bg },
          pressed && styles.isPressed,
        ]}
        onPress={() =>
          navigation.navigate("MealDetails", {
            mealId: id,
          })
        }
      >
        <Image source={{ uri: imageUrl }} style={styles.imgContainer} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {duration}M {complexity} {affordability}
        </Text>
      </Pressable>
    </View>
  );
};

const MealsOverviewPage = ({ route }) => {
  const { categoryId, bg } = route.params;

  const displayedMeals = MEALS.filter((e) => {
    return e.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View>
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
  itemContainer: {
    margin: 20,
    padding: 4,
    borderWidth: 1,
    borderRadius: 12,
  },
  imgContainer: {
    width: "100%",
    height: 124,
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: "bold",
    fontFamily: "cursive",
  },
  description: {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "monospace",
  },
  isPressed: {
    opacity: 0.75,
    transform: "scale(0.97)",
  },
});

export default MealsOverviewPage;
