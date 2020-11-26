import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';
import Constants from 'expo-constants';



const PostScreen = () => {


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
      <View style={Style.container}>
        <Text >Title</Text>
      <TextInput
      style={Style.textinput}
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
    //defaultIndex={1}
    containerStyle={{width: 800, height: 70}}
    onChangeItem={(item:any) => console.log(item.label, item.value)}
/>

<Text  >Description</Text>
<TextInput
      style={Style.textinput}
      placeholder ="Description" underlineColorAndroid={'transparent'}
      editable
      maxLength={40}
      
       />

<Text >Equity Goal</Text>
<TextInput
      style={Style.textinput}
      placeholder ="Equity Goal" underlineColorAndroid={'transparent'}
      
       />
  <TouchableOpacity onPress={() =>openDocumentFile} style={{borderRadius:10, padding:10,width:500,height:50, alignItems: "center", backgroundColor:"#59cbbd"}}>
        <Text style = {Style.appButtonText}>Add Documents</Text>
        </TouchableOpacity>

       
       <TouchableOpacity style={Style.Button}>
        <Text style = {Style.appButtonText}>Add Post</Text>
         </TouchableOpacity>

      </View>
    );
};

export default PostScreen;
