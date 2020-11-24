import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../navigations/Home/view';
import { Icon } from 'react-native-elements';
import {Text} from 'react-native'
import FavoriteScreen from '../navigations/Favorite/view';
import InvestmentsScreen from '../navigations/Investments/view';
import SearchScreen from '../navigations/Search/view';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator    tabBarOptions={{
            showLabel: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:  ({focused, color}: any) => (<Icon
                    name='home'
                    type='fontawesome'
                    size= {30}
                    color={focused ? '#6AE388' : '#7BA285'}
                  />)
                 }}
          
  />
  <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarIcon:  ({focused, color}: any) => (<Icon
                    name='star'
                    type='fontawesome'
                    size= {30}
                    color={focused ? '#6AE388' : '#7BA285'}
                  />)
                 }}
          
  />  
        <Tab.Screen name="Investments" component={InvestmentsScreen} options={{
                tabBarIcon:  ({focused, color}: any) => (<Icon
                    name='attach-money'
                    type='material'
                    size= {30}
                    color={focused ? '#6AE388' : '#7BA285'}
                  />)
                 }}
          
  />       
  <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon:  ({focused, color}: any) => (<Icon
                    name='search'
                    type='fontawesome'
                    size= {30}
                    color={focused ? '#6AE388' : '#7BA285'}
                  />)
                 }}
          
  />       

     
     </Tab.Navigator>
    );
}

export {AppTabs};