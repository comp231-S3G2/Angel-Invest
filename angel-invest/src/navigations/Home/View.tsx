import React from "react"
import { View } from "react-native";
import { AvatarIcon } from "../../components/Avatar"
import Style from './Style';

const HomeScreen  = () => {
    return(
        <View style={Style.container}>
            <AvatarIcon title="random title" size="xlarge" source={{uri: "https://reactnativeelements.com/img/avatar/avatar--photo.jpg"}}/>
        </View>
    )

}

export default HomeScreen;
