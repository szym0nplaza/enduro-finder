import React, { useState, useCallback, useEffect } from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventsScreen from "../Screens/EventsScreen/EventsScreen";
import ExploreScreen from "../Screens/ExploreScreen/ExploreScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import TracksScreen from "../Screens/TracksScreen/TracksScreen";

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
        }}
      >
        <Tabs.Screen
          name="ExploreTab"
          component={EventsScreen}
          options={{
            tabBarLabel: "Main",
            // tabBarIcon: ({ color, size }) => (
            //   <Ionicons name="home" color={color} size={size} />
            // ),
          }}
        />
        <Tabs.Screen
          name="TracksTab"
          component={ExploreScreen}
          options={{
            tabBarLabel: "Search post",
            // tabBarIcon: ({ color, size }) => (
            //   <Ionicons name="md-search" size={size} color={color} />
            // ),
          }}
        />
        <Tabs.Screen
          name="EventsTab"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Create post",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialIcons name="post-add" size={size} color={color} />
            // ),
          }}
        />
        <Tabs.Screen
          name="ProfileTab"
          component={TracksScreen}
          // initialParams={{ userId: "" }}
          options={{
            tabBarLabel: "My timeline",
            // tabBarIcon: ({ color, size }) => (
            //   <FontAwesome name="user-circle-o" size={size} color={color} />
            // ),
          }}
        />
      </Tabs.Navigator>
    // {/* </userIdStateContext.Provider> */}
  );
};

export default MainTabs;