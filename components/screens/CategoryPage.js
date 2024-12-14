import { CATEGORIES } from "../../dummy-data";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const ItemTile = ({ title, color, pressHandler }) => {
  return (
    <View style={[styles.tile, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [pressed && styles.isPressed, styles.press]}
        onPress={pressHandler}
      >
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const CategoryPage = ({ navigation }) => {
  function pressHandler(id, color) {
    navigation.navigate("MealsOverview", {
      categoryId: id,
      bg: color,
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={(item) => (
          <ItemTile
            title={item.item.title}
            color={item.item.color}
            pressHandler={() => pressHandler(item.item.id, item.item.color)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingLeft: 4,
    paddingRight: 4,
  },
  tile: {
    flex: 1,
    height: 150,

    margin: 8,
    shadowColor: "white",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
  },
  press: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  isPressed: {
    backgroundColor: "white",
    borderRadius: 8,
    opacity: 0.15,
  },
  text: {
    fontFamily: "cursive",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CategoryPage;
