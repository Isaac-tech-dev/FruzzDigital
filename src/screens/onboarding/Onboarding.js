import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { colors } from "../../themes/theme";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation();
  const Login = () => {
    navigation.navigate("login"); // Navigate to the next screen
  };
  const Register = () => {
    navigation.navigate("register"); // Navigate to the next screen
  };

  return (
    <View style={styles.container}>
      <Image style={{width: '100%', height: '100%'}} source={require("../../../assets/images/background.png")}/>
      <View style={styles.logo}>
        <Image source={require("../../../assets/icons/logo.png")} />
        <Image source={require("../../../assets/icons/Text.png")} />

        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            paddingVertical: 15,
            backgroundColor: "#2a2a2a",
            width: "70%",
            borderRadius: 8,
          }}
          onPress={Login}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 8,
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderWidth: 1,
            borderBlockColor: "#2a2a2a",
            width: "70%",
            borderRadius: 8,
          }}
          onPress={Register}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: colors.green,
            marginTop: 60,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Continue as a guest
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 450,
    width: "100%",
  },
});
