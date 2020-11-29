import { FlatList, Text, TouchableOpacity, View, ActivityIndicator } from "react-native"
import React from 'react'
import { Icon, Image } from "react-native-elements"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const DUMMY = [
    {
        id: 'a123d',
        name: "Angel Invest",
        picture: {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.investopedia.com%2Fthmb%2F_Dl4vwmwq37OBbiciUWsJbUiOJE%3D%2F2121x1414%2Ffilters%3Afill(auto%2C1)%2Flow-angle-view-of-modern-financial-skyscrapers-in-central-business-district--hong-kong-at-sunrise-955431124-1719951714ea42f29987d37c2edeeabb.jpg&f=1&nofb=1"},
        number: 3
    },
     {
        id: "1",
        name: "DD Enterprise",
        picture: {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.businessloans.com%2Fwp-content%2Fuploads%2F2014%2F10%2Fonline-business-loans.jpg&f=1&nofb=1"},
        number: 2
    },
   {
    id: "2",
    name: "Basic Company",
    picture: {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbusinessday.ng%2Fwp-content%2Fuploads%2F2019%2F10%2Fsmall-business.jpg&f=1&nofb=1"},
    number: 1
    }
]

const CATERGORYDUMMY = [
    {
        type: 'font-awesome',
        title: 'Technology',
        iconName:'laptop'
    },
    {
        type: 'font-awesome',
        title: 'Robotics',
        iconName:'android'
    },
    {
        type: 'font-awesome',
        title: 'Gaming',
        iconName:'gamepad'
    },
    {
        type: 'font-awesome',
        title: 'Health Care',
        iconName:'heartbeat'
    },
]


interface PopularListProps {
    item: {id: string, name: string, picture: {uri: string}, number: number}
}


interface CategoryListProps{
    item: {title: string, iconName: string, type: string}
}


export const CategoryList =(props: any) => {
    const renderItem = ({item}: CategoryListProps)=> (
        <TouchableOpacity>
            <View style={{width: wp('30%'), height: hp('50%'), top: hp('4%'), marginLeft: hp('1%')}}>
                <Icon name={item.iconName} type={item.type} size={30} containerStyle={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
                 backgroundColor:  "#6AE388", borderRadius: 20/2, borderWidth: 1, height: hp('7%'), width: wp('15%'), borderColor: '#eee'}} color="#FFF"/>
                <Text style={{textAlign:'center'}}>{item.title}</Text>    
            </View>

        </TouchableOpacity>


    )
        return(
            <View style={props.style ? props.style : {height: hp('20%'), width: wp('100%') }}>
            <FlatList
                showsHorizontalScrollIndicator={true}
                data={props.data ? props.data : CATERGORYDUMMY}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
    
            </View>
        )

}


const HorizontalList = (props: any) => {
    
    const renderItem = ({item}: PopularListProps) => 
    (
        <TouchableOpacity onPress={() => alert(JSON.stringify(item))}>
                <View style={{width: wp('50%'), height: hp('100%'), paddingLeft: wp('5%')}}>
                        <Image
                          PlaceholderContent={<ActivityIndicator />}
                        source={{uri: item.picture.uri}}
                         style={{width:200, height:250}} 
                         containerStyle={{borderWidth: 1, borderRadius: 50/2, borderColor: '#EEE'}}

                         />
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Medium'}}>{item.name}</Text>

                </View>

                </TouchableOpacity>
    )
  
    return (
        <View style={props.style ? props.style : {height: hp('45%'), width: wp('100%') }}>
        <FlatList
            showsHorizontalScrollIndicator={true}
            data={props.data ? props.data : DUMMY}
            horizontal
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

        </View>
    )
}

export default HorizontalList;