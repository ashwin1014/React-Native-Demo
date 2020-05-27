import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
const BottomTabs = createBottomTabNavigator();

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Settings from '../screens/Settings/Settings';
import Account from '../screens/Account/Account';
import Details from '../screens/Details/Details';
import Header from '../shared/Header/Header';
import Tab1 from '../screens/Tabs/Tab1';
import Tab2 from '../screens/Tabs/Tab2';
import Tab3 from '../screens/Tabs/Tab3';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const TopTabsNavigator = () => (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Items" component={Home} />
      <TopTabs.Screen name="About" component={About} />
    </TopTabs.Navigator>
  );

  const BottomTabsNavigator = () => (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Tab1') {
            iconName = focused
              ? 'numeric-1-circle'
              : 'numeric-1-circle-outline';
          } else if (route.name === 'Tab2') {
            iconName = focused
              ? 'numeric-2-circle'
              : 'numeric-2-circle-outline';
          } else {
            iconName = focused
              ? 'numeric-3-circle'
              : 'numeric-2-circle-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <BottomTabs.Screen name="Tab1" component={Tab1} />
      <BottomTabs.Screen name="Tab2" component={Tab2} />
      <BottomTabs.Screen name="Tab3" component={Tab3} />
    </BottomTabs.Navigator>
  );

  const TabStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        children={BottomTabsNavigator}
        options={{
          headerTitle: props => <Header navigation={navigation} {...props} />,
        }}
      />
    </Stack.Navigator>
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
      <Stack.Screen name="Tabs" component={BottomTabsNavigator} />
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
      <Drawer.Screen name="Tabs" children={TabStack} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
