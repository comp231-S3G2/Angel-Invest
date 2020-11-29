import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
    },

    formTextHeader: { fontFamily: 'Montserrat-Bold', fontSize: wp('4.5%') },
    formValues: { fontFamily: 'Montserrat-Medium', fontSize: wp('4.5%') },
    formContainer: { height: '80%' },
    viewContainer: { padding: 10 },
    image: {
        width: '100%',
        height: '70%',
        borderWidth: 1,
        borderColor: '#f3f3f3',
        borderRadius: 30 / 2,
    },
    editButton: { width: '40%', position: 'absolute', bottom: '2%' }

});