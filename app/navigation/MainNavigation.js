import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Alert} from 'react-native';

import {setAuthentication} from '../commonActions/Auth/Auth.Actions';

const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Settings from '../screens/Settings/Settings';
import Account from '../screens/Account/Account';
import Details from '../screens/Details/Details';
import Header from '../shared/Header/Header';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const TopTabsNavigator = () => (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Items" component={Home} />
      <TopTabs.Screen name="About" component={About} />
    </TopTabs.Navigator>
  );

  const HomeStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={TopTabsNavigator}
        options={{
          headerTitle: props => <Header navigation={navigation} {...props} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          title: route.params.name,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#a6e3e9',
          },
        })}
      />
    </Stack.Navigator>
  );

  const AccountStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: props => <Header navigation={navigation} {...props} />,
        }}
      />
    </Stack.Navigator>
  );

  const SettingsStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: props => <Header navigation={navigation} {...props} />,
        }}
      />
    </Stack.Navigator>
  );

  const CustomDrawerOption = props => {
    const signoutHandler = () => {
      dispatch(setAuthentication(false));
    };

    const signoutAlert = () =>
      Alert.alert(
        'Sign out',
        'Are you sure you want to signout?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => signoutHandler()},
        ],
        {cancelable: false},
      );

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign out" onPress={signoutAlert} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerOption {...props} />}>
      <Drawer.Screen name="Home" children={HomeStackScreen} />
      <Drawer.Screen name="Account" children={AccountStackScreen} />
      <Drawer.Screen name="Settings" children={SettingsStackScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
