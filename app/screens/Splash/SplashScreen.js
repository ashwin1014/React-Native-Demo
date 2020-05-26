import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Splash = () => (
  <View style={styles.container}>
    <AnimatedLoader
      visible
      overlayColor="rgba(255,255,255,0.75)"
      // source={require('./loader.json')}
      animationStyle={styles.lottie}
      speed={1}
    />
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loadingText: {
    fontSize: 18,
    paddingTop: 120,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
