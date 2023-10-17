import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CustomizeProfileScreen,
  GetStarted,
  RegisterScreen,
  Splash,
} from '../screens';

export type RootStackParamList = {
  splash: undefined;
  getstarted: undefined;
  register: undefined;
  customizeprofile: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="customizeprofile">
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
    </Stack.Navigator>
  );
};

export default Router;
