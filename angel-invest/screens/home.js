import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button} from 'react-native';
import Header from '../src/header';
import Boxes from '../src/boxes';

export default function Home({navigation}){

    const pressHandler = () => {
        //navigation.navigate('Details')
        navigation.push('Details');
    }

    const pressHandler2 = () => {
        //navigation.navigate('Details')
        navigation.push('UploadPost');
    }
    
    return (
        <View style = {styles.View}>
            <Button title = 'Details' onPress={pressHandler}/>
            <Button title = 'Upload a post' onPress={pressHandler2}/>
        </View>
    )
}


const styles = StyleSheet.create({
    View: {
      flex: 1,

    },
});