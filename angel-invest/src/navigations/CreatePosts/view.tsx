import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Constants from 'expo-constants';



const PostScreen = () => {


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
    defaultIndex={1}
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
  
       
       <TouchableOpacity style={Style.Button}>
        <Text style = {Style.appButtonText}>Add Post</Text>
         </TouchableOpacity>

      </View>
    );
};

export default PostScreen;
