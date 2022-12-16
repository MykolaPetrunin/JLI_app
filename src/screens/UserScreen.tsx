import React, {FC} from 'react';
import useBackgroundStyle from '../hooks/backgroundStyle/useBackgroundStyle';
import {Button, SafeAreaView, Text} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../navigation/interfaces/rootStackParamList';

type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'User'>;

const UserScreen: FC<UserScreenProps> = ({navigation}) => {
  const backgroundStyle = useBackgroundStyle();
  const {clearSession} = useAuth0();

  const logout = () => {
    clearSession().then();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>UserScreen</Text>
      <Button onPress={logout} title="Log out" />
    </SafeAreaView>
  );
};

export default UserScreen;
