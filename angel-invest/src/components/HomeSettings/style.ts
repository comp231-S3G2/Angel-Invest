import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    topSettingsComponent: {
        backgroundColor: '#12AC7C',
         height: '100%', 
         marginTop: '-8%', 
         padding: 0, 
         width: '100%',   
         borderBottomLeftRadius: 50/ 2, 
         borderColor: '#12AC7C',
         borderWidth: 1
        },

    settingsBackgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '90%',
        borderBottomLeftRadius: 50/ 2, 
        borderColor: 'transparent',
        borderWidth: 1
      },

      settingsText: {
        fontFamily: 'Montserrat-Bold',
        color: 'white', 
        textAlign: 'center',
        padding: '2%',margin: '7%', 
        fontSize: 20
    },

    settingsProfileText: {
    color: 'white',
    margin: '1%',
    fontFamily: 'Montserrat-Medium'
    },
    settingComponentWrapper: {
    width: '100%',
    height: '50%',
    display: 'flex', 
    flexDirection: 'row', 
    borderBottomLeftRadius: 50/ 2, 
    borderColor: 'transparent',
    borderWidth: 1

    },
    settingsAvatar: {left: '4%'},
    innerSettingsElement: { padding: '4%', display: 'flex', 
    flexDirection: 'column', left: '10%'}

})