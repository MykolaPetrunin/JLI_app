import React, {FC} from 'react';
import AuthScreen from '../screens/AuthScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackParamList from './interfaces/rootStackParamList';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={AuthScreen}
      />
      <Stack.Screen
        name="Root"
        options={{headerShown: false}}
        component={HomeNavigation}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
