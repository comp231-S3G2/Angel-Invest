import React from 'react';
import Styles from './style'
import { AvatarIcon } from '../Avatar';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const HomeSettings = (props: any) => {

    return (
    // {/* Component's Parent */}
      
        <View style={Styles.topSettingsComponent}>
    
          <LinearGradient
        colors={['#60E381', '#12AC7C']}
        style={Styles.settingsBackgroundGradient}
      />
                <Text style={Styles.settingsText}>SETTINGS</Text>

    {/* Component Wrapper */}
      <View style={Styles.settingComponentWrapper}>
    
            <AvatarIcon
            style={Styles.settingsAvatar}
            rounded 
            size="large"
            source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4iLqWG6iAIygCf0Y1Tu7OQHaEo%26pid%3DApi&f=1'}}  />

        {/* Inner Component Elements: User's Info. Displays in column */}
            <View style={Styles.innerSettingsElement}>
                <Text style={[Styles.settingsProfileText, {fontFamily: 'Montserrat-Bold', fontSize:15}]}>Franndy Abreu</Text>
                <Text style={Styles.settingsProfileText}>fabreu@gmail.com</Text>
                <Text style={Styles.settingsProfileText}>Investor</Text>
            </View>

            <Icon
            containerStyle={{top: '10%', left: '20%'}}
            name='edit'
            type='font-awesome'
            onPress={() => alert('not yet implemented.')}
            size={20}
            color='#FFF'

/>

      </View>    

  </View>
    )
   }
   
export default HomeSettings;