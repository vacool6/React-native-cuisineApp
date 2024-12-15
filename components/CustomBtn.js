import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "./Icon";
import { useFavMeals } from "../context/FavMealsContext";
import { useEffect, useState } from "react";

export const CustomBtn = (props) => {
  const [disabled, setDisabled] = useState(false);
  const { meal, pressHandler } = props;
  const { favMeals } = useFavMeals();

  useEffect(() => {
    if (meal) {
      for (let i of favMeals) {
        if (i.id === meal.id) {
          setDisabled(true);
        }
      }
    }
  }, [favMeals]);

  return (
    <Pressable
      onPressIn={pressHandler}
      style={({ pressed }) => pressed && styles.active}
      disabled={disabled}
    >
      <View style={disabled ? styles.disabled : styles.btnContainer}>
        <Icon name={!disabled ? "star-outline" : "star"} />
        <Text style={styles.text}>
          {disabled ? "Favorite" : props.children}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },

  btnContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    width: 140,
    borderRadius: 12,
  },
  active: {
    transform: "scale(0.95)",
    opacity: 0.5,
  },
  disabled: {
    flexDirection: "row",
    backgroundColor: "orange",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    width: 100,
    borderRadius: 12,
  },
});
