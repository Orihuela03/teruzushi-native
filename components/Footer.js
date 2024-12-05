import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.socialSection}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/p/Teruzushi-61559864859770/')}
        >
          <View style={styles.icon}>
            <Image
              source={require('../assets/facebook.png')} // Usar archivos en la carpeta assets
              style={styles.iconImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://x.com/Teruzushi_')}
        >
          <View style={styles.icon}>
            <Image
              source={require('../assets/twitter.png')} // Usar archivos en la carpeta assets
              style={styles.iconImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com/teruzushi/')}
        >
          <View style={styles.icon}>
            <Image
              source={require('../assets/instagram.png')} // Usar archivos en la carpeta assets
              style={styles.iconImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.tiktok.com/@terusushi')}
        >
          <View style={styles.icon}>
            <Image
              source={require('../assets/tiktok.png')} // Usar archivos en la carpeta assets
              style={styles.iconImage}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 95,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  socialSection: {
    flexDirection: 'row',
    gap: 20,
  },
  icon: {
    width: 40, // Ajusta el tamaño según lo necesites
    height: 40,
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Footer;