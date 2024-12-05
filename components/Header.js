import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import "react-native-reanimated";

const Header = ({ title1, title2 }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.textSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Ubication")}>
          <Text style={styles.linkText}>{title1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AboutTheChef")}>
          <Text style={styles.linkText}>{title2}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.logoImage}
            source={require("../assets/logo.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  textSection: {
    flexDirection: "row",
    gap: 16,
  },
  linkText: {
    fontSize: 16,
    color: "#000000",
    textDecorationLine: "none",
  },
  logoSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  }
});

export default Header;