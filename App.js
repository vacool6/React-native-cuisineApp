import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverviewPage from "./components/screens/MealsOverviewPage";
import MealDetailsPage from "./components/screens/MealDetailsPage";
import DrawerNavigator from "./components/DrawerNavigator";
import FavMealsProvider from "./context/FavMealsContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavMealsProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#4d312b",
              },
              headerStyle: {
                backgroundColor: "#322725",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewPage} />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsPage}
              options={{
                title: "Preparation Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavMealsProvider>
    </>
  );
}

const styles = StyleSheet.create({});
