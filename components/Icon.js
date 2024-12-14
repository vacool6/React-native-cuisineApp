import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ onPress, name }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && { opacity: 0.15 }}
      onPress={onPress}
    >
      <Ionicons name={name} color="white" size={24} />
    </Pressable>
  );
};

export default Icon;
