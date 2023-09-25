import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/backButton";
import CustomInput from "../../components/textInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../config/firebase"

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
            marginTop: 70,
          }}
        >
          Hello! Register to get started
        </Text>

        <View style={{ marginTop: 40 }}>
          <CustomInput
            placeholder="Enter Username"
            value={username}
            onChangeText={(text) => setUserName(text)}
          />
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
          <CustomInput
            placeholder="Confirm Password"
            value={confirmpassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            showEyeToggle={true}
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
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
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
