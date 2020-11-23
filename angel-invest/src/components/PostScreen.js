import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PostScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("PostScreen")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("HomeScreen")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
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