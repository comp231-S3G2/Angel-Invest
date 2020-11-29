import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        width: '100%', height: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
    ,

    linearGradientBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '90%',
        borderBottomLeftRadius: 50 / 2,
        borderColor: 'transparent',
        borderWidth: 1
    },
    postDetailsText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: '#FFF'
    },
})