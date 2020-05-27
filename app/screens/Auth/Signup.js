import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';

import styles from './Auth.style';

const Login = ({setAuthMode}) => {
  const [signUpDetails, setSignUpDetails] = useState({
    username: '',
    password: '',
    mobile: '',
  });

  const submitHandler = () => {
    console.log(signUpDetails);
    setAuthMode(true);
  };

  const signupChangeHandler = props => value => {
    setSignUpDetails({...signUpDetails, [props]: value});
  };

  return (
    <View>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        onChangeText={signupChangeHandler('username')}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        onChangeText={signupChangeHandler('password')}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Enter mobile"
        style={styles.input}
        onChangeText={signupChangeHandler('mobile')}
        keyboardType="number-pad"
      />
      <Button
        title="Login"
        color="coral"
        onPress={submitHandler}
        disabled={
          signUpDetails.username === '' ||
          signUpDetails.password === '' ||
          signUpDetails.mobile === ''
        }
      />
    </View>
  );
};

export default Login;
