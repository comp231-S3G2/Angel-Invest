import React, { useEffect } from "react"
import { View, Text } from "react-native";
import { AvatarIcon } from "../../components/Avatar"
import Style from './style';
import { loadAsync, FontDisplay } from 'expo-font';

const HomeScreen = () => {
    
    return(
        <View style={Style.container}>
            <Text style={{fontFamily: 'Montserrat-Regular'}}>Home Screen</Text>
        </View>
    )

}

export default HomeScreen;
