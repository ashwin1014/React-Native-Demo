import React from 'react';
import {View, Text} from 'react-native';

import globalStyles from '../../styles/globalStyles';
import settingsStyles from './Settings.style';

const Settings = () => {
  return (
    <View style={{...globalStyles.container, ...settingsStyles.container}}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
