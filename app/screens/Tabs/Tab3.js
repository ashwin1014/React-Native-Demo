import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Center from '../../shared/Center/Center';

const Tab3 = () => (
  <Center>
    <Text style={styles.text}>Tab 3</Text>
  </Center>
);

export default Tab3;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
