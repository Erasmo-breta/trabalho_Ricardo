import { Button, Image, Text, StyleSheet, TextInput, View } from "react-native";
import Avatar from "../../components/Avatar";
import React, { useState } from "react";
import Registro from "../Registro";
import ButtonCustom from "../../components/ButtonCustom";
import InputCustom from "../../components/InputCustom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const loginUser = () => {
    const userEmail = "E";
    const userPassword = "0";
    if (userEmail === email && userPassword === senha) {
      console.warn("Logado com sucesso");
      props.navigation.navigate("Home");
    } else {
      console.warn("Usuario ou senha inválido");
    }
  };
  return (
    <View style={loginStyle.fundo}>
      <Avatar cor={"#000000"} />
      <Text style={loginStyle.text}>Login</Text>
      <InputCustom
        placeholder="Digite seu Email"
        change={(event) => setEmail(event)}
        value={email}
      />
      <Text style={loginStyle.text}>Senha</Text>
      <InputCustom
        placeholder="Digite sua senha"
        change={(event) => setSenha(event)}
        value={senha}
        secure={true}
      />

      <ButtonCustom
        onPress={() => {
          loginUser();
        }}
        text="SALVAR"
        bg="#000000"
      />
      <ButtonCustom
        onPress={() => {
          props.navigation.navigate("Registro");
        }}
        text="REGISTRAR"
      />
    </View>
  );
};

const loginStyle = StyleSheet.create({
  fundo: {
    backgroundColor: "#ff0000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
  },
});

export default Login;
