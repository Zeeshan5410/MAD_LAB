import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { chatsData } from "./Data/ChatsData";
function Chats() {
  return (
    <View style={styles.container}>
      {chatsData.map((obj,index) => {
        return (
          <View style={styles.chat} key={index}>
            <Image
              source={{ uri: require("../assets/images/dpz/dp1.png") }}
              alt="search-icon"
              style={styles.dp}
            />
            <View style={styles.chatDetails}>
              <Text>{obj.name}</Text>
              <Text>{obj.message}</Text>
            </View>
            <Text>11:59pm</Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  chat: {
    flexDirection: "row",
    paddingLeft: "10px",
    paddingRight: "10px",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "10px",
  },
  chatDetails: {
    flex: 1,
  },
  dp: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
  },
});
export default Chats;
