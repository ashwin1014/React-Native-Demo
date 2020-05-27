import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';

import styles from './Auth.style';

const Login = ({setAuthMode}) => {
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const submitHandler = () => {
    console.log(loginDetails);
    setAuthMode(true);
  };

  const loginChangeHandler = props => value => {
    setLoginDetails({...loginDetails, [props]: value});
  };

  return (
    <View>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        onChangeText={loginChangeHandler('username')}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        onChangeText={loginChangeHandler('password')}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        color="coral"
        onPress={submitHandler}
        disabled={loginDetails.username === '' || loginDetails.password === ''}
      />
    </View>
  );
};

export default Login;
