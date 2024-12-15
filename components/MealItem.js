import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, Image, StyleSheet, View } from "react-native";
import { CustomBtn } from "./CustomBtn";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  bg,
  pressHandler,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.itemContainer,
        bg && { backgroundColor: bg },
        pressed && styles.isPressed,
      ]}
      onPress={() =>
        navigation.navigate("MealDetails", {
          mealId: id,
        })
      }
    >
      <Image source={{ uri: imageUrl }} style={styles.imgContainer} />
      {pressHandler && (
        <View style={styles.btnContainer}>
          <CustomBtn pressHandler={() => pressHandler()}>
            Remove Favorite
          </CustomBtn>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        {duration}M {complexity} {affordability}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 20,
    padding: 4,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "goldenrod",
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
  btnContainer: {
    position: "absolute",
    right: 8,
    top: 12,
  },
});

export default MealItem;
