import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Center from '../../shared/Center/Center';

const Tab2 = () => (
  <Center>
    <Text style={styles.text}>Tab 2</Text>
  </Center>
);

export default Tab2;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
