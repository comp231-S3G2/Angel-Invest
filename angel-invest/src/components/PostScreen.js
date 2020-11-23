import React,  {Component} from 'react'
import React, {useState} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';
<input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>

export default class ComponentName extends Component{
render(){
    return (
        <View >
        <Text > Demo Form </Text>
        <View>
          <Text > Title </Text>
          <TextInput  placeholder="Title" />

          <Text > Discription </Text>
          <TextInput placeholder="Discription" />
          <Picker
            selectedValue={category}
            onValueChange={currentcategory => setcategory(currentcategory)}>
            <Picker.Item label="Technology" value="Technology" />
            <Picker.Item label="Robotics" value="Robotics" />
            <Picker.Item label="Gaming" value="Gaming" />
            <Picker.Item label="Healthcare" value="Healthcare" />
          </Picker>
          <Text>
            Selected: {category}
          </Text>
        </View>
      </View>
    )
}
}
onChangeHandler=event=>{
  this.setState({
   selectedFile: event.target.files,
  })
}