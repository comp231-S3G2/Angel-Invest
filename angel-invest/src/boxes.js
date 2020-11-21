import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { HeaderBackground } from 'react-navigation-stack';

export default class Boxes extends React.Component {

    render(){
      return(
        <View style = {styles.container}>
            
            <View style = {styles.box}>
                <View style = {styles.inner}>
                    <Text>Post 1</Text>
                </View>
            </View>

            <View style = {styles.box}>
                <View style = {styles.inner}>
                    <Text>Post 2</Text>
                </View>
            </View>

            <View style = {styles.box}>
                <View style = {styles.inner}>
                    <Text>Post 3</Text>
                </View>
            </View>

            <View style = {styles.box}>
                <View style = {styles.inner}>
                    <Text>Post 4</Text>
                </View>
            </View>
           

        </View>
      );
    }
  
  }
  
  const styles = StyleSheet.create({
      container: {
            width:'100%',
            height: '85%',
            padding: 5,
            flexDirection: 'row',
            flexWrap: 'wrap'
      },
      box: {
          width:'100%',
          hieght: '50%',
          padding: 5
      },
      inner: {
          flex: 1,
          backgroundColor:'#eee',
          alignItems:'center',
          justifyContent: 'center'
      }
   
  });
  