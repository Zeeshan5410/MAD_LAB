import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";
import Camera from "./Camera";

function WhatsApp() {
  const [activeTab, setActiveTab] = useState("chats");
  const [showCamera, setShowCamera] = useState(false);
  if (showCamera) {
    return (
      <View>
        <Text>Camera</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>WhatsApp</Text>
          <Image
            source={{
              uri: require("../assets/images/search-icon-white.png"),
            }}
            alt="search-icon"
            style={styles.searchIcon}
          />
          <Image
            source={{ uri: require("../assets/images/menu-white.jpg") }}
            alt="search-icon"
            style={styles.menuIcon}
          />
        </View>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => setShowCamera(true)}>
            <Image
              source={{ uri: require("../assets/images/camera-icon.png") }}
              alt="search-icon"
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
          <Pressable style={styles.navButtons}>
            <TouchableOpacity onPress={() => setActiveTab("chats")}>
              <Text style={styles.navBtn}>Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("status")}>
              <Text style={styles.navBtn}>Status</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("calls")}>
              <Text style={styles.navBtn}>Calls</Text>
            </TouchableOpacity>
          </Pressable>
        </View>
        <View>
          {activeTab == "chats" ? (
            <Chats />
          ) : activeTab == "status" ? (
            <Status />
          ) : (
            <Calls />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#075E54",
    height: "50px",
    alignItems: "center",
    paddingLeft: "15px",
    paddingRight: "12px",
  },
  searchIcon: {
    width: "17px",
    height: "17px",
  },
  menuIcon: {
    width: "30px",
    height: "30px",
    marginTop: "4px",
    marginLeft: "8px",
  },
  headerText: {
    color: "white",
    flex: 1,
    fontSize: "16px",
    fontWeight: 500,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#075E54",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "50px",
    alignItems: "center",
    marginTop:'-2px'
  },
  navButtons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  navBtn: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: 500,

    backgroundColor: "#075E54",
  },
  cameraIcon: {
    width: "25px",
    height: "18px",
  },
});

export default WhatsApp;
