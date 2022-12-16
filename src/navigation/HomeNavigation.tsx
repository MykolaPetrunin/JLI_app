import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileNavigation from './ProfileNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStackParamList from './interfaces/rootStackParamList';

const Tab = createBottomTabNavigator<RootStackParamList>();
const HomeNavigation: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" size={20} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
