import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Home from '../screens/home';
import Details from '../screens/details';
import UploadPost from '../screens/uploadPost';
import Ionicons from 'react-native-vector-icons/Ionicons'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            //headerStyle: {backgroundColor: '#99CCFF'}
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details',
            //headerStyle: {backgroundColor: '#99CCFF'},
        }
    },
    UploadPost: {
        screen: UploadPost
    }
}



const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused, color}) => (
          <Ionicons name="Home" color={color}/> )
          
  }}

  tabBarOptions={{
      showIcon: true
  }}
  
  />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
    
)


