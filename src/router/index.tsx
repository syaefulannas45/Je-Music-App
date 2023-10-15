import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {GetStarted, Splash} from '../screens';

export type RootStackParamList = {
  splash: undefined;
  getstarted: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
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
    </Stack.Navigator>
  );
};

export default Router;
