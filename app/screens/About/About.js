import React from 'react';
import {View, Text} from 'react-native';

import globalStyles from '../../styles/globalStyles';
import aboutStyles from './About.style';

const About = () => {
  return (
    <View style={aboutStyles.container}>
      <Text>About</Text>
    </View>
  );
};

export default About;
