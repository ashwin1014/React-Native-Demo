import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './IconButton.style';
import {noop} from '../../utils/common';

const FALLBACK_ICON = require('../../assets/images/add.png');

const IconButton = ({
  icon = FALLBACK_ICON,
  onPress = noop,
  text = '',
  style = {},
}) => {
  return (
    <TouchableOpacity style={{...styles.btnIcon, ...style}} onPress={onPress}>
      <Image source={icon} style={styles.img} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
