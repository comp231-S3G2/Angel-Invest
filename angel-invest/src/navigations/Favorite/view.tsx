import React from "react"
import { View, Text } from "react-native";
import Style from './style';

const FavoriteScreen  = () => {
    return(
        <View style={Style.container}>
            <Text>Favorite Screen</Text>
            {/* <AvatarIcon title="random title" size="xlarge" source={{uri: "https://reactnativeelements.com/img/avatar/avatar--photo.jpg"}}/> */}
        </View>
    )

}

export default FavoriteScreen;
