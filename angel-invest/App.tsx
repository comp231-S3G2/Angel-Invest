import 'react-native-gesture-handler'
import * as Font from "expo-font";
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {AppTabs} from './src/config/navigation'
import { FontDisplay, loadAsync } from 'expo-font';

const App = () => {

  useEffect(() => {

    (async () => {
        await loadAsync({
            "Montserrat-Regular": {uri: require('./assets/fonts/Montserrat-Regular.ttf'),
        fontDisplay: FontDisplay.FALLBACK}
          });
    })();
  
  }, []);
  return (
    <View style={{flex: 1}}>
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  </View>
  )
}

export default App;
