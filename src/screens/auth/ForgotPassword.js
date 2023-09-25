import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/backButton";
import CustomInput from "../../components/textInput";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
  const Otp = () => {
    navigation.navigate("otp"); // Navigate to the next screen
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      <View style={{ marginTop: 20 }}>
        <BackButton />
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          width: "80%",
          lineHeight: 40,
          marginTop: 80,
        }}
      >
        Forgot Password?
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "medium",
          width: "100%",
          color: "#8391A1",
        }}
      >
        Don't worry! It occurs. Please enter the email address linked with your
        account.
      </Text>

      <View style={{ marginTop: 40 }}>
        <CustomInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 8,
            paddingHorizontal: 10,
            paddingVertical: 15,
            backgroundColor: "#2a2a2a",
            width: "80%",
            borderRadius: 8,
          }}
          onPress={Otp}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    borderWidth: 2,
    borderColor: "#E8ECF4",
    backgroundColor: "#F7F8F9",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
