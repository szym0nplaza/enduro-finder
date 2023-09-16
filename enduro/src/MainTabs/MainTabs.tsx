import React, { useState, useCallback, useEffect } from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventsScreen from "../Screens/EventsScreen/EventsScreen";
import ExploreScreen from "../Screens/ExploreScreen/ExploreScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import TracksScreen from "../Screens/TracksScreen/TracksScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";

export type StackTabsParamList = {
  ExploreTab: undefined;
  TracksTab: undefined;
  EventsTab: undefined;
  ProfileTab: undefined;
};

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<StackTabsParamList>();
// const PlatformMainStack = createNativeStackNavigator<PlatformMainParamList>();

const MainTabs = () => {
//   const [userId, setUserId] = useState<string>("");
//   const getUserId = useCallback(async () => {
//     const userId = await getItem("userId");
//     if (userId) {
//       setUserId(JSON.parse(userId));
//     }
//   }, []);

//   useEffect(() => {
//     getUserId();
//   }, []);

  return (
    // <userIdStateContext.Provider value={{ userId }}>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#CE4651',
          tabBarInactiveTintColor: '#336699',
          tabBarStyle: [
            {
              backgroundColor: "#9EE493",
              display: "flex"
            },
            null
          ],
        }}
        //@ts-ignore
      >
        <Tabs.Screen
          name="ExploreTab"
          component={ExploreScreen}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flame-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="TracksTab"
          component={TracksScreen}
          options={{
            tabBarLabel: "Tracks",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bicycle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="EventsTab"
          component={EventsScreen}
          options={{
            tabBarLabel: "Events",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ProfileTab"
          component={ProfileScreen}
          // initialParams={{ userId: "" }}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    // {/* </userIdStateContext.Provider> */}
  );

  
};

export default MainTabs;