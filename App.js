import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, useNavigation, DrawerActions} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
