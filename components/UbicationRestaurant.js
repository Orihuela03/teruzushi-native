import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const UbicationRestaurant = ({
  title1,
  subtitle1,
  buttonContent,
}) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.restaurantContainer}>
        <View style={styles.restaurantText}>
          <Text style={styles.title}>{title1}</Text>
          <Text style={styles.subtitle}>{subtitle1}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://maps.app.goo.gl/E6q7VTS41cXgbzSF7")
            }
          >
            <Text style={styles.buttonText}>{buttonContent}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  restaurantContainer: {
    width: "90%",
    maxWidth: 600,
    height: 400,
    borderRadius: 28,
    flexDirection: "column",
    backgroundColor: "#a00000",
    marginBottom: 20,
  },
  restaurantText: {
    marginTop: 10,
    marginLeft: 20,
    textAlign: "justify",
    paddingRight: 20,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "black",
    height: 50,
    width: 200,
    borderRadius: 28,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  }
});

export default UbicationRestaurant;