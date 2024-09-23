import { Button, StyleSheet, Text, View } from "react-native";
import ButtonCustom from "../../components/ButtonCustom";

const Home = (props) => {
  const homeStyle = StyleSheet.create({
    fundo: {
      fontSize: 300,
      backgroundColor: "#ff0000",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    corTexto: {
      textAlign: "center",
      fontSize: 100,
      color: "#ffffff",
    },
  });
  return (
    <View style={homeStyle.fundo}>
      <Text style={homeStyle.corTexto}>Página Home</Text>

      <ButtonCustom
        navigation={props.navigation}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        text="Ir para Login"
        bg="#000000"
      />
    </View>
  );
};
export default Home;
