import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';


const PostScreen = ({navigation}) => {


  const [value, onChangeText] = React.useState('Title');
    return (
      <View style={styles.container}>
        
        <TextInput
      style={styles.textinput}
      placeholder ="Title" underlineColorAndroid={'transparent'}
      
       />
       <DropDownPicker
    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultIndex={1}
    containerStyle={{height: 40}}
    onChangeItem={item => console.log(item.label, item.value)}
/>


<TextInput
      style={styles.textinput}
      placeholder ="Description" underlineColorAndroid={'transparent'}
      editable
      maxLength={40}
      
       />

<TextInput
      style={styles.textinput}
      placeholder ="Equity Goal" underlineColorAndroid={'transparent'}
      
       />

       <TouchableOpacity style={styles.Button}>
        <Text style = {styles.btntext}>Add Post</Text>
         </TouchableOpacity>

      </View>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textinput:{
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color:'#000000',
    borderBottomColor:'#A9A9A9',
    borderBottomWidth: 1,
  },
  Button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding:20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  }
});