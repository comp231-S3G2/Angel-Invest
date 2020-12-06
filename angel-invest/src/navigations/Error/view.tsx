
import React from "react"
import { View, Text } from "react-native";
import Style from './style';

const SuccessScreen  = () => {
    return(
        <View style={Style.container}>
            <Text>There was an error with your transaction, please try again.</Text>
        </View>
    )

}

export default SuccessScreen;
