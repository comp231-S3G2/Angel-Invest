import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import HomeScreen from '../navigations/Home/View';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => (<HomeIcon/> )

          
  }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

export {AppTabs};