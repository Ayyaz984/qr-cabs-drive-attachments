import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ride from '../screens/Ride/Ride';
import Earnings from '../screens/Earnings/Earnings';
import Account from '../screens/Account/Account';
import QR from '../screens/QR/QR';
import Rating from '../screens/Rating/Rating';
import Profile from '../screens/Profile/Profile';
import Vehicles from '../screens/Vehicles/Vehicles';
import Settings from '../screens/Settings/Settings';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainNavigation = props => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#470AB4',
        tabBarInactiveTintColor: '#888889',
        tabBarStyle: {backgroundColor: '#ffffff', padding: 10, height: 70},
        tabBarLabelStyle: {
          paddingVertical: 10,
          fontWeight: '700',
        },
        tabBarIcon: ({focused, color, size}) => {
          let IconComponent;

          if (route.name === 'Ride') {
            IconComponent = focused ? (
              <Ionicons name="home" color={color} size={size} />
            ) : (
              <Ionicons name="home-outline" color={color} size={size} />
            );
          } else if (route.name === 'Earnings') {
            IconComponent = focused ? (
              <Ionicons name="person-outline" color={color} size={size} />
            ) : (
              <Ionicons name="person" color={color} size={size} />
            );
          } else if (route.name === 'Account') {
            IconComponent = focused ? (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ) : (
              <Ionicons name="person-circle" color={color} size={size} />
            );
          } else if (route.name === 'QR') {
            IconComponent = focused ? (
              <Ionicons name="qr-code-outline" color={color} size={size} />
            ) : (
              <Ionicons name="qr-code-outline" color={color} size={size} />
            );
          } else if (route.name === 'Rating') {
            IconComponent = focused ? (
              <Ionicons name="star-outline" color={color} size={size} />
            ) : (
              <Ionicons name="star-outline" color={color} size={size} />
            );
          }
          // You can return any component that you like here!
          return IconComponent;
        },
        // tabBarActiveTintColor: '#0084D5',
        // tabBarInactiveTintColor: '#A9ABAF',
      })}>
      <BottomTab.Screen
        name="Ride"
        component={Ride}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Earnings"
        component={Earnings}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="QR"
        component={QR}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <BottomTab.Screen name="Account" component={TopNavigation} />
    </BottomTab.Navigator>
  );
};

const TopNavigation = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Profile"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, fontWeight: '800'},
        tabBarActiveTintColor: '#470AB4',
        tabBarInactiveTintColor: '#888889',
      }}>
      <TopTab.Screen name="Profile" component={Profile} />
      <TopTab.Screen name="Vehicles" component={Vehicles} />
      <TopTab.Screen name="Settings" component={Settings} />
    </TopTab.Navigator>
  );
};

export default MainNavigation;
