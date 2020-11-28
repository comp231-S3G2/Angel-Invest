import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import {AvatarIcon} from '../Avatar/index'
import { Icon } from 'react-native-elements'


const HomeTopNavigation = () => {
    return(
        <View style={style.container}>

            <View style={style.topBarContainer} >


            <View >
                <Icon name="bars" type="font-awesome" color='#6AE388'/>
            </View>
            <View><Text style={{fontFamily: 'Logo-Font', fontSize: 22, color: '#6AE388'}}>Angel Invest</Text></View>
            <View  style={{top: '6%'}}><AvatarIcon size="medium" /></View>


            </View>
        </View>
    )
}

export default HomeTopNavigation;