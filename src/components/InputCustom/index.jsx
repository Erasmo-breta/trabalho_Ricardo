import { TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const InputCustom = (props) => {
  const inputstyles = StyleSheet.create({
    input: {
      backgroundColor: "#ffffff",
      width: 300,
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
    },
  });

  return (
    <TextInput
      style={inputstyles.input}
      placeholder={props.placeholder}
      onChangeText={props.change}
      defaultValue={props.value}
      secureTextEntry={props.secure}
      keyboardType={props.keytype}
    />
  );
};
export default InputCustom;
