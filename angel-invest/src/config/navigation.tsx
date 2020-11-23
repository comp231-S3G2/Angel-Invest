import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import  {Test}  from '../components/test'
import HomeIcon from '@material-ui/icons/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Test} options={{
          tabBarIcon: () => (<HomeIcon/> )
          
  }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

export default Tabs;