import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../navigations/Home/view';
import { Icon } from 'react-native-elements';
import {Text} from 'react-native'

const Drawer = createDrawerNavigator();

const AppDrawer = ({navigation}: any) => {

    return (
          <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#F7F8FD'}}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ 
                drawerIcon: () => {return (<Icon type="fontawesome" name="home" color="#9A5FFD" size={30} />)},
                drawerLabel: () => {return (<Text>Home</Text>)}
}}/>
            <Drawer.Screen name="Notifications" component={HomeScreen} options={{ 
                drawerIcon: () => {return (<Icon type="material" name="notifications" color="#9A5FFD" size={30} />)},
                drawerLabel: () => {return (<Text>Notifications</Text>)}
}} />
            <Drawer.Screen name="Payment" component={HomeScreen} options={{ 
                drawerIcon: () => {return (<Icon type="fontawesome" name="payment" color="#9A5FFD" size={30}/>)},
                drawerLabel: () => {return (<Text>Payment</Text>)}
}}/>
            <Drawer.Screen name="Support" component={HomeScreen} options={{ 
                drawerIcon: () => {return (<Icon type="material" name="help" color="#9A5FFD" size={30}/>)},
                drawerLabel: () => {return (<Text>Support</Text>)}
}} />
            <Drawer.Screen name="Log out" component={HomeScreen} options={{ 
                drawerIcon: () => {return (<Icon type="material" name="exit-to-app" color="#9A5FFD" size={30}/>)},
                drawerLabel: () => {return (<Text style={{fontFamily: 'Montserrat-Regular'}}>Log out</Text>)}
}}/>
          </Drawer.Navigator>
      );
}

export default AppDrawer;