import React, {useState, Suspense, lazy} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {setAuthentication} from '../../commonActions/Auth/Auth.Actions';

import styles from './Auth.style';
import globalStyles from '../../styles/globalStyles';
import Card from '../../shared/Card/Card';
import Login from './Login';
const Signup = lazy(() => import('./Signup'));

const Auth = () => {
  const dispatch = useDispatch();
  const [loginMode, setLoginMode] = useState(true);

  const loginModeHandler = () => {
    setLoginMode(prevState => !prevState);
  };

  const setAuthMode = mode => {
    dispatch(setAuthentication(mode));
  };

  return (
    <Suspense fallback={<ActivityIndicator size="small" color="#00ff00" />}>
      <View style={{...globalStyles.container, ...styles.container}}>
        <Card>
          {loginMode ? (
            <Login setAuthMode={setAuthMode} />
          ) : (
            <Signup setAuthMode={setAuthMode} />
          )}
        </Card>
        <View style={{...globalStyles.inline, ...styles.loginModeContainer}}>
          <Text style={styles.infoText}>
            {loginMode ? 'New user?' : 'Already a user?'}
          </Text>
          <TouchableOpacity onPress={loginModeHandler}>
            <Text style={{...globalStyles.btnLink, ...styles.submitButton}}>
              {loginMode ? 'Signup' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Suspense>
  );
};

export default Auth;
