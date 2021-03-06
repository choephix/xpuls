import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, NavigationStackConfig } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

type TabBarIconProps = { focused?: boolean };

const config: NavigationStackConfig = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <TabBarIcon focused={ focused } name={Platform.OS === 'ios' ? 'ios-link' : 'md-appstore'} />
  )
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <TabBarIcon focused={ focused } name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

SettingsStack.path = '';

const tabNavigator: any = createBottomTabNavigator(
  {
    LinksStack,
    HomeStack,
    SettingsStack
  }, { 
    tabBarOptions: { 
      activeBackgroundColor: Colors.bg2,
      inactiveBackgroundColor: Colors.bg2,
      activeTintColor: Colors.tabIconSelected,
      // inactiveTintColor: Colors.bg2,
      style: {
        borderColor: Colors.bg0,
      }
    } 
  } );

tabNavigator.path = '';

export default tabNavigator;
