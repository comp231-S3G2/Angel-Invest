import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    textinput:{
      flexDirection:"row",
      paddingHorizontal:10,
      marginHorizontal:55,
      borderWidth:2,
      marginTop:100,
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color:'#000000',
      borderBottomColor:'#A9A9A9',
      borderBottomWidth: 1,
    },
    Button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding:20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
      
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

  });