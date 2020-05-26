import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

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

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={HomeStackScreen} />
      <Drawer.Screen name="Account" children={AccountStackScreen} />
      <Drawer.Screen name="Settings" children={SettingsStackScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
