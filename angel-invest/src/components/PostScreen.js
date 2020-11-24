import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';


const PostScreen = ({navigation}) => {


  const openDocumentFile =async() =>{
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
    return (
      <View style={styles.container}>
        <Text >Title</Text>
      <TextInput
      style={styles.textinput}
      placeholder ="Title" underlineColorAndroid={'transparent'}/>


       <Text>Business Category</Text>
       <DropDownPicker
    items={[
        {label: 'Information-Technologies', value: 'Information-Technologies'},
        {label: 'HealthCare', value: 'HealthCare'},
        {label: 'Food Industry', value: 'Food Industry'},
        {label: 'Business Services', value: 'Business Services'},
        {label: 'Manufacturer', value: 'Manufacturer'},
        {label: 'Retailer', value: 'Retailer'},
    ]}
    defaultIndex={1}
    containerStyle={{width: 800, height: 70}}
    onChangeItem={item => console.log(item.label, item.value)}
/>

<Text  >Description</Text>
<TextInput
      style={styles.textinput}
      placeholder ="Description" underlineColorAndroid={'transparent'}
      editable
      maxLength={40}
      
       />

<Text >Equity Goal</Text>
<TextInput
      style={styles.textinput}
      placeholder ="Equity Goal" underlineColorAndroid={'transparent'}
      
       />
  
<TouchableOpacity onPress={() =>openDocumentFile} style={{borderRadius:10, padding:10,width:500,height:50, alignItems: "center", backgroundColor:"#59cbbd"}}>
        <Text style = {styles.btntext}>Add Documents</Text>
        </TouchableOpacity>

       
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
    flexDirection:"row",
    paddingHorizontal:10,
    marginHorizontal:55,
    borderWidth:2,
    marginTop:100,
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