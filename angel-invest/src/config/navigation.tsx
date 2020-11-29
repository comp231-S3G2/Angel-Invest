import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Icon } from 'react-native-elements';
import FavoriteScreen from '../navigations/Favorite/view';
import InvestmentsScreen from '../navigations/Investments/view';
import SearchScreen from '../navigations/Search/view';
import AppDrawer from '../components/AppDrawer/view';
import PostScreen from '../navigations/Post/view';
import PostDetails from '../navigations/PostDetails/view';

const Stack = createStackNavigator();


const AppStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={AppBottomTabs}/>

      {/* <Stack.Screen name="Post" component={PostScreen}
 /> */}
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            showLabel: false
        }}>
            <Tab.Screen name="Home" component={AppDrawer} options={{
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
    <Tab.Screen name="post" component={PostScreen} options={{
                tabBarIcon:  ({focused, color}: any) => (<Icon
                    containerStyle={{borderWidth: 1, borderColor: '#6AE388'}}
                    name='add'
                    raised
                    type='material'
                    size= {40}
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

export {AppBottomTabs, AppStackNavigation};