import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HEADER_BACKGROUND} from '../../assets/images/images';

import headerStyles from './Header.styles';
import globalStyles from '../../styles/globalStyles';

const Header = ({navigation}) => {
  const {name} = useRoute();

  const drawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <ImageBackground
      source={HEADER_BACKGROUND}
      style={{...globalStyles.verticalHorizontalAlign, ...headerStyles.header}}>
      <Icon
        name="menu"
        size={28}
        onPress={drawerHandler}
        style={headerStyles.icon}
      />
      <View>
        <Text style={headerStyles.headerText}>{name}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
