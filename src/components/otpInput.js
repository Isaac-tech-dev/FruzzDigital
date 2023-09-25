import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;

    // Focus the next input field if available
    if (text !== '' && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    setOTP(newOTP);
  };

  const handleBackspace = (index) => {
    // Focus the previous input field if available
    if (index > 0) {
      inputRefs[index - 1].current.focus();
    }

    const newOTP = [...otp];
    newOTP[index] = '';
    setOTP(newOTP);
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          value={value}
          onChangeText={(text) => handleInputChange(text, index)}
          maxLength={1}
          keyboardType="numeric"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1, // Distribute input fields equally
    height: 50,
    borderWidth: 1,
    backgroundColor: '#F7F8F9',
    borderColor: '#E8ECF4',
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 15,
  },
});

export default OTPInput;
