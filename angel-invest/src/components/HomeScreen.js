import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const HomeScreen = ({navigation}) => {

  
    return (
      <View style={styles.container}>

        <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("PostScreen")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});