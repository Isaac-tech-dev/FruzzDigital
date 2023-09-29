import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/backButton";
import CustomInput from "../../components/textInput";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const Login = async () => {
    setLoading(true);
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("home");
      } catch (err) {
        console.log("Error:", err.message);
      }
      //Goodd to Go
      //navigation.goBack()
      //navigation.navigate("Home");
    } else {
      //show error
       setLoading(false);
      Alert.alert("Fill all inputs");
    }
    setTimeout(() => {
      // After the operation is complete, hide the ActivityIndicator
      setLoading(false);

      // You can also navigate to another screen or perform any other action here.
    }, 2000);
  };

  const ForgotPassword = () => {
    navigation.navigate("forgotpassword"); // Navigate to the next screen
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
          marginTop: 100,
        }}
      >
        Welcome back! Glad to see you, Again!
      </Text>

      <View style={{ marginTop: 40 }}>
        <CustomInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          placeholder="Enter your Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          showEyeToggle={true}
        />
        <TouchableOpacity style={{ marginTop: 10 }} onPress={ForgotPassword}>
          <Text style={{ textAlign: "right", color: "#6A707C" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#2a2a2a" />
        ) : (
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
              onPress={Login}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500", // Changed from 500 to "500"
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View
        style={{
          marginTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "400" }}>Or Login with</Text>

        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderColor: "#E8ECF4",
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Image source={require("../../../assets/icons/facebook.png")} />
          </View>
          <View
            style={{
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderColor: "#E8ECF4",
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Image source={require("../../../assets/icons/google.png")} />
          </View>
          <View
            style={{
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderColor: "#E8ECF4",
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Image source={require("../../../assets/icons/apple.png")} />
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>
          Don’t have an account?{" "}
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
