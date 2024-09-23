import { Pressable, StyleSheet, Text } from "react-native";

const ButtonCustom = (props) => {
  const styles = StyleSheet.create({
    fundo: {
      fontSize: 16,
      width: 200,
      backgroundColor: props.bg,
      margin: 3,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      textAlign: "center",
      color: "#ffffff",
    },
  });
  return (
    <Pressable style={styles.fundo} onPress={props.onPress}>
      {({ pressed }) => <Text style={styles.text}>{props.text}</Text>}
    </Pressable>
  );
};
export default ButtonCustom;
