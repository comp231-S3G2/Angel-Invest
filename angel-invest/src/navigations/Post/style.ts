import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F6F6F6'
    },
    linearGradientBackground: { 
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '90%',
    borderBottomLeftRadius: 50/ 2, 
    borderColor: 'transparent',
    borderWidth: 1
  },
  postDetailsText: {
    fontFamily: 'Montserrat-Bold',
     fontSize: 25,
     color: '#FFF'
    },

    formContainer: {backgroundColor: '#F6F6F6', height: '80%'},
    selectedImageContainer: {
      width: '100%', 
      height: '20%%',
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    selectedImage: { 
      width: 100, 
      height: 100, 
      borderWidth: 1, 
      borderColor: '#f3f3f3',
      borderRadius: 10/2,
      alignSelf: 'center' 
    },
    header: {width: '100%', height: '20%', 
    display: 'flex', 
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around'
    },
    datePickerBtn: {width: '50%', 
    top:'5%', 
    alignSelf:'center'},
    datePicker: {width: '70%', height: '20%', alignSelf: 'center'}


  });