import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import useBackgroundStyle from '../hooks/backgroundStyle/useBackgroundStyle';

const HomeScreen: FC = () => {
  const backgroundStyle = useBackgroundStyle();

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
