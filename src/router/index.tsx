import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash} from '../screens';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
