import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Tabs from './src/config/navigation'
export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}
