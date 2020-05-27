import React from 'react';
import {View, StyleSheet} from 'react-native';

const Center = ({children}) => <View style={styles.center}>{children}</View>;

export default Center;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
