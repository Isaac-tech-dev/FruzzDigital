import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import auth from '../../config/firebase'

const Home = () => {
    const navigation = useNavigation();
    const Logout = async ()=> {
        await signOut(auth)
    }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Welcome to the Fruzz.</Text>
      <Text style={{ fontSize: 20 }}>You succesfully logged in</Text>
      <TouchableOpacity
        style={{
          marginTop: 8,
          paddingHorizontal: 10,
          paddingVertical: 15,
          backgroundColor: "#2a2a2a",
          width: "50%",
          borderRadius: 8,
        }}
        onPress={Logout}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "500", // Changed from 500 to "500"
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
