import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button} from 'react-native';
import Textarea from 'react-native-textarea';
import Header from '../src/header';
import Boxes from '../src/boxes';

export default function Home({navigation}){

    const pressHandler = () => {
        navigation.push('Home');
    }
    
    return (
        <View>
            <Button style = {styles.Button} title = 'Back to home screen' onPress={pressHandler}/>

            <Text>Business Name:</Text>
            <TextInput style = {styles.TextInput}/>
            <Text>Details of your business:</Text>
            <Textarea style = {styles.Textarea}></Textarea>
            <Text>Year of establishment:</Text>
            <TextInput style = {styles.TextInput}/>
            <Text>Set your goal:</Text>
            <TextInput style = {styles.TextInput}/>
            <Text>Set your price per stock:</Text>
            <TextInput style = {styles.TextInput}/>
            <Button style = {styles.Button} title='Post' />
        </View>
    )
}
const styles = StyleSheet.create({
    TextInput: {
      borderWidth: 3,
      marginBottom: 20,
    },

    Textarea:{
        borderWidth: 3,
        height: 150,
    },
    
})


