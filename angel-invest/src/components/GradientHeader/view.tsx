import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Style from './style'


interface GradientProps { 
    containerStyle? : any;
    gradientStyle? : any;
    headerTextStyle? : any
    text: string
    icon?: any
    onPress?: Function
}
const GradientHeader = (props: GradientProps) => {

    return (
        <View style={props.containerStyle ? props.containerStyle : Style.container}>
             <LinearGradient
             style={props.gradientStyle ? props.gradientStyle : Style.linearGradientBackground}
         colors={['#60E381', '#12AC7C']}
       />
         <Text style={props.headerTextStyle ? props.headerTextStyle : Style.postDetailsText}>{props.text}</Text>
         {props.icon ? props.icon : <Icon name="send" color="#F6F6F6" onPress={props.onPress ? props.onPress : () => console.log("Attach a method handler")}/>}
         </View>
    )
}

export default GradientHeader;
