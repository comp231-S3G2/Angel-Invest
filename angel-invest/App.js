import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button,SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {TopTabs} from './routes/homeStack';
import Header from './src/header';
import Boxes from './src/boxes';
import { NavigationContainer } from '@react-navigation/native';




export default class App extends React.Component {
  render(){
    return(
    <View style = {styles.container}>

      <NavigationContainer>
        <TopTabs/>
      </NavigationContainer>

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

