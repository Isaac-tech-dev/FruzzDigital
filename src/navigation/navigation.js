import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/onboarding/Onboarding";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Otp from "../screens/auth/Otp";
import CreatePassword from "../screens/auth/CreatePassword";
import Home from "../screens/home/Home";
import useAuth from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
        <Stack.Screen
            name="home"
            options={{ headerShown: false }}
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onboarding">
          <Stack.Screen
            name="onboarding"
            options={{ headerShown: false }}
            component={Onboarding}
          />
          <Stack.Screen
            name="login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="register"
            options={{ headerShown: false }}
            component={Register}
          />
          <Stack.Screen
            name="forgotpassword"
            options={{ headerShown: false }}
            component={ForgotPassword}
          />
          <Stack.Screen
            name="otp"
            options={{ headerShown: false }}
            component={Otp}
          />
          <Stack.Screen
            name="createpassword"
            options={{ headerShown: false }}
            component={CreatePassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
