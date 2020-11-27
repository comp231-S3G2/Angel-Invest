import 'react-native-gesture-handler'
import * as Font from "expo-font";
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {AppTabs} from './src/config/navigation'
import { FontDisplay, loadAsync, useFonts } from 'expo-font';
import { AppLoading } from 'expo';

const App = () => {

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {

    (async () => {
        await loadAsync({
            "Montserrat-Regular": {uri: require('./assets/fonts/Montserrat-Regular.ttf'),
        fontDisplay: FontDisplay.FALLBACK},
            "Montserrat-Bold": {uri: require('./assets/fonts/Montserrat-Bold.ttf'),
            fontDisplay: FontDisplay.FALLBACK},
            "Montserrat-Medium": {uri: require('./assets/fonts/Montserrat-Medium.ttf'),
            fontDisplay: FontDisplay.FALLBACK},
            "Logo-Font": {uri: require('./assets/fonts/Noteworthy-Bold.ttf'),
            fontDisplay: FontDisplay.FALLBACK}
          
          });
          setAssetsLoaded(true)
    })();
  
  }, []);
  if(assetsLoaded) {
    return (
      <View style={{flex: 1}}>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </View>
     )
  }
  return <AppLoading/>
 
}

export default App;
