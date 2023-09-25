import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../themes/theme";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      classname="bg-white rounded-full h-8 w-8"
    >
      <MaterialIcons name="keyboard-arrow-left" size={32} color="black" />
    </TouchableOpacity>
  );
}
