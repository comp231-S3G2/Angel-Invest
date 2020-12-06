import React from "react"
import { Text, View } from "react-native";
import Style from './style';
import HomeTopNavigation from "../../components/HomeTopNavigation/view";
import HorizontalList, { CategoryList } from "../../components/horizontalPopularList/view";

const HomeScreen = () => {
    
    return(
        <View style={Style.container}>
            <View style ={ Style.homeTopNavigationWrapper}> 
            <HomeTopNavigation/>
            </View>

            <View style={{ height: '55%', marginTop: '-30%'}}>
                <Text style={{fontFamily: 'Montserrat-Bold',margin: '5%', fontSize: 18}}>Popular</Text>
                <HorizontalList />
            </View>

            <View >
                
                <Text style={{marginTop: "7%", fontFamily: "Montserrat-Bold", paddingLeft: "5%", fontSize: 18}}>Explore more</Text>

              
                <CategoryList/>
            </View>

        </View>
    )

}

export default HomeScreen;
