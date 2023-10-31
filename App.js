import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RootNavigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootNavigation></RootNavigation>;
};

export default App;
