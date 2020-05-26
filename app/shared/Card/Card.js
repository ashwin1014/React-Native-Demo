import React from 'react';
import {View} from 'react-native';

import cardStyles from './Card.style';

const Card = ({children}) => {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.cardContent}>{children}</View>
    </View>
  );
};

export default Card;
