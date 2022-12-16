import React, {FC} from 'react';
import useBackgroundStyle from '../hooks/backgroundStyle/useBackgroundStyle';
import {SafeAreaView, Text} from 'react-native';

const SettingsScreen: FC = () => {
  const backgroundStyle = useBackgroundStyle();

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
