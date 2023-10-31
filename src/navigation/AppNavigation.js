import {View, Text, useColorScheme, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import defaultTheme from '../theme/defaultTheme';
import darkTheme from '../theme/darkTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainNavigation from './MainNavigation';
import AddVehicle from '../screens/AddVehicle/AddVehicle';
import SelectVehicle from '../screens/SelectVehicle/SelectVehicle';
import SelectDocs from '../screens/SelectDocs/SelectDocs';

const Stack = createNativeStackNavigator();

const AppNavigation = props => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const colorScheme = useColorScheme();

  const mainScreen = isAuthorized ? (
    <>
      <Stack.Screen name="Main">
        {props => <MainNavigation {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="SelectVehicle"
        component={SelectVehicle}
        options={{
          headerShown: true,
          title: 'Add Vehicle',
        }}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{
          headerShown: true,
          title: 'Add Vehicle',
        }}
      />

      <Stack.Screen
        name="SelectDocs"
        component={SelectDocs}
        options={{
          headerShown: true,
          title: '',
        }}
      />
    </>
  ) : (
    <Stack.Screen name="Auth" component={AuthStack} />
  );

  return (
    <NavigationContainer theme={defaultTheme}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Later we will render the screen based on the authentication */}
        {mainScreen}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
