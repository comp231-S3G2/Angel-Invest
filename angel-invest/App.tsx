import 'react-native-gesture-handler'
import * as Font from "expo-font";
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {AppBottomTabs, AppStackNavigation} from './src/config/navigation'
import { FontDisplay, loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux'
import { store, sagaMiddleware } from './src/redux/store'
import rootSaga from './src/redux/sagas'

sagaMiddleware.run(rootSaga)

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
      <Provider store={store}>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
      </Provider>
     )
  }
  return <AppLoading/>
 
}

export default App;
