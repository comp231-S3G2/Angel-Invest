import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AppTabs} from './src/config/navigation'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </View>
  );
}
