import React from "react"
import { View, Text } from "react-native";
import { AvatarIcon } from "../../components/Avatar"
import Style from './style';

const HomeScreen  = () => {
    return(
        <View style={Style.container}>
            <Text>Home Screen</Text>
            {/* <AvatarIcon title="random title" size="xlarge" source={{uri: "https://reactnativeelements.com/img/avatar/avatar--photo.jpg"}}/> */}
        </View>
    )

}

export default HomeScreen;
