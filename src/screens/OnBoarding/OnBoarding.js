import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {styles} from './styles';

const OnBoarding = () => {
  const colorScheme = useColorScheme();
  const themeColors = colors[colorScheme];
  return (
    <View style={styles.container}>
      <Text>OnBoarding</Text>
    </View>
  );
};

export default OnBoarding;
