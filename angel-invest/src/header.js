import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button, TouchableOpacity} from 'react-native';
import { HeaderHeightContext } from 'react-navigation-stack';

export default class Header extends React.Component {

    render(){
      return(
        <View style = {styles.header}>         

            <Text>Angel Invest</Text>

        </View>
      );
    }
  
  }
  
  const styles = StyleSheet.create({
      header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#99CCFF'
      }
  });

  /*
              <Image
            source={{
             uri: '',
             }}
             style={{ width: 200, height: 200 }}
            />
            */
  