import React from 'react';
import {View, Text} from 'react-native';

// import globalStyles from '../../styles/globalStyles';
import aboutStyles from './About.style';

const About = () => {
  return (
    <View style={aboutStyles.container}>
      <Text style={aboutStyles.paragraph}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        ducimus amet enim, assumenda voluptatem ratione asperiores pariatur
        dolor? Ipsam nulla minus rem fugit maiores, pariatur consequuntur.
        Magni, quia. At, labore?
      </Text>
    </View>
  );
};

export default About;
