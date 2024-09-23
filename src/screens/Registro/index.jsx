import { Text, StyleSheet, TextInput, View } from "react-native";
import Avatar from "../../components/Avatar";
import ButtonCustom from "../../components/ButtonCustom";
import InputCustom from "../../components/InputCustom";

const Registro = (props) => {
  return (
    <View style={registroStyle.fundo}>
      <Text style={registroStyle.text}>Nome</Text>
      <InputCustom placeholder="Digite seu nome" />

      <Text style={registroStyle.text}>Email</Text>
      <InputCustom placeholder="Digite seu Email" />

      <Text style={registroStyle.text}>Senha</Text>
      <InputCustom placeholder="Digite sua senha" secure={true} />

      <ButtonCustom
        onPress={() => {
          props.navigation.navigate("Home");
        }}
        text="Registrar"
        bg="#000000"
      />
    </View>
  );
};

const registroStyle = StyleSheet.create({
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
export default Registro;
