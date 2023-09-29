import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/backButton";
import CustomInput from "../../components/textInput";
import { useNavigation } from "@react-navigation/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const Register = async () => {
    if (email && password) {
      try {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate("login");
      } catch (err) {
        console.log("Error:", err.message);
      }
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

  return (
    <ScrollView>
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
            marginTop: 20,
          }}
        >
          Hello! Register to get started
        </Text>

        <View style={{ marginTop: 40 }}>
          <CustomInput
            placeholder="Enter Username"
            value={username}
            onChangeText={(value) => setUserName(value)}
          />
          <CustomInput
            placeholder="Enter your Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <CustomInput
            placeholder="Enter your Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            showEyeToggle={true}
          />
          <CustomInput
            placeholder="Confirm Password"
            value={confirmpassword}
            onChangeText={(value) => setConfirmPassword(value)}
            secureTextEntry={true}
            showEyeToggle={true}
          />
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
                onPress={Register}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500", // Changed from 500 to "500"
                  }}
                >
                  Register
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
            Already have an account?
            <Text style={{ color: "#35C2C1", fontWeight: "bold" }}>
              Login Now
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
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
