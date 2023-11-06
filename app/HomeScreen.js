import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Dimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

const HomeScreen = () => {
  console.log(Dimensions.get('screen'));
  const detectOrientation = useDeviceOrientation();
  console.log(detectOrientation);

  return (
    <View style={[styles.fullWidth, detectOrientation === 'portrait' ? styles.flexCol : styles.flexRow]}>
      <ImageBackground source={require('../assets/pexels-photo.jpeg')} style={styles.backGroundImage}>
        <Image source={require('../assets/favicon.png')} style={styles.logo} />
        <Text style={styles.whiteText}>This is my first Mobile App!!!</Text>
      </ImageBackground>
      <View>
        <View style={[styles.loginButton, detectOrientation === 'landscape' ? styles.fillScreen : styles.fillScreen_0]}>
          <Text style={styles.whiteText}>Login</Text>
        </View>
        <View style={[styles.loginButton, styles.backgroundLight, detectOrientation === 'landscape' ? styles.fillScreen : styles.fillScreen_0]}>
          <Text style={styles.whiteText}>Another Info</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backGroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backGroundImage__Mob: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  fullWidth: {
    flex: 1,
    width: '100%',
  },
  loginButton: {
    padding: 20,
    backgroundColor: '#EE9322',
    flexInline: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 50,
    textAlign: 'center',
    fontWeight: '700',
  },
  fillScreen: {
    flex: 1,
  },
  fillScreen_0: {
    flex: 0,
  },
  backgroundLight: {
    backgroundColor: '#D83F31',
  },
  logo: {
    width: 66,
    height: 58,
    marginTop: 50,
    marginBottom: 15,
  },
  whiteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
