import React from "react"
import { View, Text } from "react-native";
import Style from './style';


const SuccessScreen  = () => {
    return(
        <View style={Style.container}>
            <Text>Your transaction is completed, click </Text>
                <Text>here</Text> 
                <Text>to return to homepage</Text>
        </View>
    )

}

export default SuccessScreen;
