import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button} from 'react-native';


const Home = ({navigation}) => {
 
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
            <Button title = 'BUTTON 1' onPress={pressHandler}/>
            <Button title = 'BUTTON2 ' onPress={pressHandler2}/>
        </View>
    )

}
export default Home;





const styles = StyleSheet.create({
    View: {
      flex: 1,

    },
});