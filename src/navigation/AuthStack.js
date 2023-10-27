import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import SelectLanguage from '../screens/SelectLanguage/SelectLanguage';
import OTPLogin from '../screens/OTPLogin/OTPLogin';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SelectLang" component={SelectLanguage} />
      <Stack.Screen name="OTPLogin" component={OTPLogin} />
    </Stack.Navigator>
  );
};

export default AuthStack;
