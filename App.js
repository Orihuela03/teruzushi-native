import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import UbicationRestaurant from "./components/UbicationRestaurant";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContent}>
          <Header title1="Ubication" title2="About the chef" />
          <UbicationRestaurant
            title1="Teruzushi"
            subtitle1="Food entertainment unfolds. Third generation Teru Sushi, who has been making sushi all over the world and proposing the joy of food to people, will now deliver the best sushi at the theater-style counter. Please enjoy your time filled with laughter and excitement to your heart's content. The restaurant is located in Fukuoka prefecture, in the city of Kitakyushu, in the Tobata district, in the Sugawara neighborhood."
            buttonContent="GO TO MAPS"
          />
        </View>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  mainContent: {
    flex: 1,
    paddingBottom: 50,
  },
});