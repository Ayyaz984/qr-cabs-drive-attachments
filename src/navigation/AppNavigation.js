import {View, Text, useColorScheme, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import defaultTheme from '../theme/defaultTheme';
import darkTheme from '../theme/darkTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Later we will render the screen based on the authentication */}
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
