import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryPage from "../components/screens/CategoryPage";
import Favorite from "../components/screens/Favorite";
import Icon from "./Icon";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        drawerContentStyle: {
          backgroundColor: "#4d312b",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "gold",
        headerStyle: {
          backgroundColor: "#322725",
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryPage}
        options={{
          title: "All Categories",
          drawerIcon: () => {
            return <Icon name="list" />;
          },
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          drawerIcon: () => {
            return <Icon name="star" />;
          },
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
