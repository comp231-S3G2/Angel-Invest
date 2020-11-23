import React, {useState} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

const App = () => {
  const [category, setcategory] = useState('Default');
  return (
    <View >
      <Text > Demo Form </Text>
      <View>

        <TextInput 
          placeholder="Title" />
        <TextInput
          placeholder="Description"
        />

        <Picker
          selectedValue={category}
          onValueChange={currentcategory => setcategory(currentcategory)}>
          <Picker.Item label="Information Technology" value="Information Technology" />
          <Picker.Item label="Healthcare" value="Healthcare" />
          <Picker.Item label="hospitality" value="hospitality" />
        </Picker>
        <Text>
          Selected: {category}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default App;