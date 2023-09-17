import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { AppState, View, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NavigatorScreenParams } from "@react-navigation/native";
import MainTabs from "../MainTabs/MainTabs";
import { AddEventForm } from "../Components/AddEventForm";
import { RegisterTrackForm } from "../Components/RegisterTrackForm";
import { ProfileForm } from "../Components/ProfileForm";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type StackTabsParamList = {
//   PlatformMain: NavigatorScreenParams<PlatformMainParamList>;
//   SearchPosts: undefined;
//   CreatePost: undefined;
//   MyTimeLine: { userId: string };
};



export type RootStackParamList = {
  Introduction: undefined;
  Login: undefined;
  Register: undefined;
  MainTabs: NavigatorScreenParams<StackTabsParamList>;
};

export const Navigation = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
  
    // const settingLoggedInToTrue = () => {
    //   setIsLoggedIn(true);
    // };
  
    // useEffect(() => {
    //   const appStateListener = AppState.addEventListener("change", async () => {
    //     const expiresIn = await getItem("tokenExpiresIn");
    //     if (expiresIn) {
    //       const parsedExpiresIn = JSON.parse(expiresIn);
    //       if (new Date().getTime() > +parsedExpiresIn) {
    //         setIsLoading(false);
    //         return setIsLoggedIn(false);
    //       }
    //       setIsLoggedIn(true);
    //       setIsLoading(false);
    //     }
    //   });
    //   return () => {
    //     appStateListener?.remove();
    //   };
    // }, []);
  
    // if (isLoading) {
    //   return (
    //     <View>
    //       <Text>Loading...</Text>
    //     </View>
    //   );
    // }
  
    return (
    //   <appStateContext.Provider
    //     value={{ setIsLoggedInMethod: settingLoggedInToTrue }}
    //   >
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
             {/*  {!isLoggedIn ? (
                <>
                  <Stack.Screen
                    name="Introduction"
                    component={IntroductionScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Register" component={RegisterScreen} />
                </>
              ) : ( */}
                <Stack.Screen
                  name="MainTabs"
                  component={MainTabs}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddEventForm"
                  component={AddEventForm}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RegisterTrackForm"
                  component={RegisterTrackForm}
                  options={{ headerShown: false }}
                />
              {/* )} */}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
    //   </appStateContext.Provider>
    );
  };
  