import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

import HomeScreen from './src/components/HomeScreen';
import PostScreen from './src/components/PostScreen';

const HomeStack = createStackNavigator();
const PostStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
<HomeStack.Navigator 
            screenOptions={{headerStyle: {backgroundColor: '#009387'},headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}} >
        <HomeStack.Screen name="Post" component={HomeScreen} options={{
         headerLeft: () => (
           <Icon.Button 
            name ="menufold" size={25} backgroundColor="009387" onPress={() => navigation.openDrawer()}>
           </Icon.Button>
         )}} />
      </HomeStack.Navigator>
);

const PostStackScreen = ({navigation}) =>(
  <PostStack.Navigator 
              screenOptions={{headerStyle: {backgroundColor: '#009387'},headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}} >
          <PostStack.Screen name="Post" component={PostScreen} options={{
         headerLeft: () => (
           <Icon.Button 
            name ="menufold" size={25} backgroundColor="009387" options={() => {navigation.openDrawer()}}>
           </Icon.Button>
         )}} />
        </PostStack.Navigator>
  );

export default function App() {
  return (
                <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Post" component={PostStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
            
    
    
  );
}








