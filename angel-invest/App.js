import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button,SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './routes/homeStack';
import Header from './src/header';
import Boxes from './src/boxes';




export default class App extends React.Component {
  render(){
    return(
    <View style = {styles.container}>

      <Navigator/>
      <Header/>

    </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
});

