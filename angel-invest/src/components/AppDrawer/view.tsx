import React from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from '../../navigations/Home/view';
import { Icon, Divider } from 'react-native-elements';
import {Text, View, Linking} from 'react-native'
import HomeSettings from '../HomeSettings/view';
import Styles from './style';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
    return(
        <DrawerContentScrollView {...props}>
           
            <View style={Styles.HomeSettingsProfileComponent}>
                <HomeSettings/>
            </View>
          <DrawerItemList {...props}/>
            <Divider style={{ top: 15 }} />
            <View>
            <DrawerItem
        label="Angel Invest Inc."
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
            </View>
        </DrawerContentScrollView>)


}
const AppDrawer = ({navigation}: any) => {
 
    return (
          <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#F7F8FD', width: '80%'}} 
          drawerContent={(props: any) => <CustomDrawer {...props}/>}>
 
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