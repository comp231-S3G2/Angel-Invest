import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../navigations/Home/View';
import { Icon } from 'react-native-elements';
import {Text} from 'react-native'

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator>
            {<Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:  () => (<Icon
                    name='home'
                    type='fontawesome'
                    size= {30}
                    color='#6AE388'
                  />)
                  ,
                  tabBarLabel: ({focused, color}) => {
                      return (<Text style={{color: '#6AE388', fontWeight: "bold"}} >Home</Text>)
                  }
                  
                
                 }
            }
          
  />}
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

export {AppTabs};