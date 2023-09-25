import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import the eye icon from Expo Vector Icons

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, showEyeToggle }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible} // Toggle secureTextEntry based on state
      />
      {showEyeToggle && secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
          <Ionicons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#E8ECF4',
    backgroundColor: '#F7F8F9',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
  },
});

export default CustomInput;
