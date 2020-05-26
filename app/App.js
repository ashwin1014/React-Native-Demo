import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

import Auth from './screens/Auth/Auth';
import MainNavigation from './navigation/MainNavigation';
import SplashScreen from './screens/Splash/SplashScreen';

const App = () => {
  const timer = useRef();
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false);
    }, 3500);
    () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <NavigationContainer>
        {loading ? (
          <SplashScreen />
        ) : isAuthenticated ? (
          <MainNavigation />
        ) : (
          <Auth />
        )}
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
};

export default App;
