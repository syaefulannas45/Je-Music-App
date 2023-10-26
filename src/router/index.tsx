import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CustomizeProfileScreen,
  GetStarted,
  HomeScreen,
  LoginScreen,
  NotificationScreen,
  RegisterScreen,
  SearchScreen,
  SettingScreen,
  Splash,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

export type RootStackParamList = {
  splash: undefined;
  getstarted: undefined;
  register: undefined;
  customizeprofile: undefined;
  login: undefined;
  mainapp: undefined;
  home: undefined;
  search: undefined;
  notification: undefined;
  setting: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="getstarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="customizeprofile"
        component={CustomizeProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mainapp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
