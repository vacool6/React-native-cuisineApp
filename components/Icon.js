import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ onPress, name, opacity }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && { opacity }}
      onPress={onPress}
    >
      <Ionicons name={name} color="white" size={24} />
    </Pressable>
  );
};

export default Icon;
