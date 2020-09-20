import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppParamList } from "./AppParamList";
import { Ionicons } from "@expo/vector-icons";
import AccidentsMap from "./../screens/AccidentsMap";
import Explore from "./../screens/Explore";
import Preferences from "./../screens/Preferences";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={"Explore"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "ios-information-circle";

            if (route.name === "AccidentsMap") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Preferences") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "lightblue",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="AccidentsMap" component={AccidentsMap} />
        <Tabs.Screen name="Explore" component={Explore} />
        <Tabs.Screen name="Preferences" component={Preferences} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;
