import React from 'react';
import { View } from "react-native";
import { Avatar } from "react-native-elements";

interface AvatarIconProps{
    title?: string,
    size?: 'small' | 'medium' | 'large' | 'xlarge' | number
    source?: AvatarSource,
    rounded?: boolean, 
    style?: any
    
}

interface AvatarSource {
    uri: string
}


export const AvatarIcon = (props: AvatarIconProps) => {
    return( 
        <View style={props.style? props.style : {flex: 1}}>
                    <Avatar containerStyle={{borderWidth: 3, borderColor: '#6AE388'}} rounded={props.rounded ? props.rounded : true} title={props.title ? props.title : "Avatar Icon"} size={props.size ? props.size : "small"} source={props.source? props.source: {uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4iLqWG6iAIygCf0Y1Tu7OQHaEo%26pid%3DApi&f=1'
  }} />
        </View>
    )
}