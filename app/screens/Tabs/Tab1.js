import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Center from '../../shared/Center/Center';

const Tab1 = () => (
  <Center>
    <Text style={styles.text}>Tab 1</Text>
  </Center>
);

export default Tab1;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
