import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button} from 'react-native';
import 'react-native-gesture-handler';

export default function App() {
  const [name, setName] = useState('James');
  return (
    <View style={styles.container}>
  
      <View style={styles.header}>
        <Logo/>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>This is the an example of text within body</Text>
        <Text>This is the an example of text within body</Text>
        <View style={styles.buttonContainer}>
          <Button title='Go'/>
        </View>
      </View>
      <StatusBar style="auto" />  
    </View>
  );
}

const Logo = () => {
  return (
    <View>
      <Image
        source={{uri: "data:image/png;base64,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"}}
        style={{width: 100, height: 100}}
      />
      <Text style={styles.boldText}>Angel Invest</Text>
      <TextInput
          style={{
           height: 40,
            borderColor: 'black',
           borderWidth: 2
         }}
         defaultValue="Type in here"
        />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'chartreuse',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    backgroundColor:'green',
    padding:20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20
  }
});


