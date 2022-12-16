import React, {FC} from 'react';
import {Auth0Provider} from 'react-native-auth0';
// import {StyleSheet, useColorScheme} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import RootNavigation from './navigation/RootNavigation';

const App: FC = () => {
  axios.defaults.baseURL = 'https://jli-back.herokuapp.com';

  return (
    <Auth0Provider
      domain="dev-s4myy52mufp2xaj2.eu.auth0.com"
      clientId="o1GncmkcNyGFYVicp7RyFjRjCTHkMOsz">
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Auth0Provider>
  );
};

export default App;
