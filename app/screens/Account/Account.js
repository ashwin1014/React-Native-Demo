import React from 'react';
import {View, Text} from 'react-native';

import globalStyles from '../../styles/globalStyles';
import accountStyles from './Account.style';

const Account = () => {
  return (
    <View style={{...globalStyles.container, ...accountStyles.container}}>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
