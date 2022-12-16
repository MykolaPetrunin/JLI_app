import React, {FC, useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../navigation/interfaces/rootStackParamList';
import useBackgroundStyle from '../hooks/backgroundStyle/useBackgroundStyle';

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
const AuthScreen: FC<AuthScreenProps> = ({navigation}) => {
  const backgroundStyle = useBackgroundStyle();
  const {authorize, user} = useAuth0();

  useEffect(() => {
    if (!user) {
      return;
    }

    navigation.navigate('Root');
  }, [user]);
  const login = async () => {
    await authorize({});
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        ...backgroundStyle,
      }}>
      <Button onPress={login} title="Log in" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthScreen;
