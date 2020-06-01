import React from 'react';
import {TouchableOpacity, Text, ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ImageButton.style';
import {noop} from '../../utils/common';

const ImageButton = ({img, onPress = noop, text = '', style = {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.btn, ...style}}>
      <LinearGradient
        colors={['#00000000', '#36000000', '#99000000']}
        style={styles.linearGradient}>
        <ImageBackground
          source={img}
          style={styles.img}
          imageStyle={styles.imgStyle}>
          <View style={{width: '100%'}}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ImageButton;
