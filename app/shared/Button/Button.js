import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {noop} from '../../utils/common';

const Button = ({title = 'Button', onPress = noop, disabled, style}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, style]}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    borderColor: '#d8d8d8',
    height: 32,
    width: 72,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    color: '#00a8c3',
  },
});
