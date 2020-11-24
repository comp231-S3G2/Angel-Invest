import React from 'react';
import { View } from "react-native";
import { Avatar } from "react-native-elements";

interface AvatarIconProps{
    title?: string,
    size?: 'small' | 'medium' | 'large' | 'xlarge' | number
    source: AvatarSource,
    rounded?: boolean, 
    style?: any
    
}

interface AvatarSource {
    uri: string
}


export const AvatarIcon = (props: AvatarIconProps) => {
    return( 
        <View style={props.style? props.style : {flex: 1}}>
                    <Avatar rounded={props.rounded ? props.rounded : false} title={props.title ? props.title : "Avatar Icon"} size={props.size ? props.size : "small"} source={props.source? props.source: {uri: 'https://reactjs.org/logo-og.png'
  }} />
        </View>
    )
}