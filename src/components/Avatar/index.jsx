import { StyleSheet, View, Text } from "react-native";

const Avatar = (props) => {
  const avatarStyle = StyleSheet.create({
    styleAvatar: {
      backgroundColor: props.cor,
      width: 150,
      height: 150,
      borderRadius: 70,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      color: "#ffffff",
    },
  });

  return (
    <View style={avatarStyle.styleAvatar}>
      <Text style={avatarStyle.text}>Avatar</Text>
    </View>
  );
};

export default Avatar;
