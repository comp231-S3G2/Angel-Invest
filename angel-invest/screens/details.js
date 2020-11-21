import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button} from 'react-native';

export default function Details({navigation}){

    const pressHandler = () =>{
        navigation.goBack();
    }



    return (
        <View>
            <Text>Hello Details </Text>
            <Button title ='back to home screen' onPress={pressHandler}/>

        </View>
    )
}

