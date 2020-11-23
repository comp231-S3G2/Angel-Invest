import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PostScreen = ({navigation}) => {

  const [value, onChangeText] = React.useState('Title');
    return (
      <View style={styles.container}>
        
        <Text>Details Screen</Text>
        
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
       />

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
});