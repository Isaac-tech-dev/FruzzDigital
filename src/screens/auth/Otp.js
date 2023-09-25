import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/backButton";
import CustomInput from "../../components/textInput";
import OTPInput from "../../components/otpInput";
import { useNavigation } from "@react-navigation/native";

export default function Otp() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation()
  const Verify = () => {
    navigation.navigate("createpassword"); // Navigate to the next screen
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
        OTP Verification
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "medium",
          width: "100%",
          color: "#8391A1",
        }}
      >
        Enter the verification code we just sent on your email address.
      </Text>

      <View style={{ marginTop: 40 }}>
        <OTPInput/>
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
          onPress={Verify}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>
          Don’t have an account?
          <Text style={{ color: "#35C2C1", fontWeight: "bold" }}>
            Register Now
          </Text>
        </Text>
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
