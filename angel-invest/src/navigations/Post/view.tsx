import React, { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Style from './style';
import { Icon, Input, Image, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';
import { SUBMIT_POST_FORM_REQUEST } from '../../redux/actions/createPost/postActions';

const mapStateToProps = (state: any, props: any) => {
  const {name} = state.post
  return name
}

const mapDispatchToProps = (dispatch: Dispatch, props: any) => ({
  submitPostForm: (formData: any) => {
    dispatch({
      type: SUBMIT_POST_FORM_REQUEST,
      payload: formData
    })
  }
});

const PostView = (props: any) => {
    const [projectName, setProjectName] = useState("");
    const [moneyGoal, setMoneyGoal] = useState(0);
    const [show, setShow] = useState(false);
    const [dateGoal, setDateGoal] = useState(new Date(1598051730000));
    const [description, setDescription] = useState("");
    const [projectImage, setProjectImage] = useState("");

    const [nameError, setNameError] = useState();
    const [descriptionError, setDescriptionError] = useState()

    const sendForm = () => {

      if(projectName && description !== "") {
        const formData = {
          postData: {
            name: projectName,
            moneyGoal: moneyGoal,
            dateGoal: dateGoal,
            description: description,
          },
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3N0c3NAbWFpbC5jb20iLCJpYXQiOjE2MDY1MzIyMjIsImV4cCI6MTYwNzM5NjIyMn0.gQnVCa-dhPjZZJlUBjr4pt5ypKRbruMIxnKm0JGuq2g"
          
        }

        setNameError("")
        setDescriptionError("")
  
        props.submitPostForm(formData)
      }
      else{
        if(projectName === ""){
          setNameError("Required Field")
        }
        else {
          setNameError("")
        }
        if (description === ""){
          setDescriptionError("Required Field")
        }
        else {
          setDescriptionError("")
        }
      }
      
    }
  

    const onDateGoalChange = (event: any, selectedDate: Date |
       undefined) => {
      const currentDate = selectedDate || dateGoal;
      setShow(Platform.OS === 'ios');
      setDateGoal(currentDate);
    };

    const showDatepicker = () => {
      setShow(true)
    };

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
 
   


  const SelectedImage = (props: any) => {
    return projectImage ? (
    <View style={Style.selectedImageContainer}>
        <Button 
         icon={{
          name: "image",
          size: 15,
          color: "white"
        }}
        buttonStyle={{backgroundColor: '#6AE388'}}
          title="Select project image."
          onPress={pickProjectImage} 
  />
     <Image 
        source={{ uri: projectImage }}
        style={Style.selectedImage}
        />
     </View>)
      : (<Button 
        icon={{
         name: "image",
         size: 15,
         color: "white"
       }}
       buttonStyle={{backgroundColor: '#6AE388'}}
         title="Select project image."
         onPress={pickProjectImage} 
 />)
    }

  const pickProjectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProjectImage(result.uri);
    }
  };
  

    return (
      <TouchableWithoutFeedback onPress={() =>{
         Keyboard.dismiss()
         setShow(false)
        }}>
      <View style={Style.container}>
        <View style={{width: '100%', height: '20%', 
       display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'}}>
            <LinearGradient
            style={Style.linearGradientBackground}
        colors={['#60E381', '#12AC7C']}
      />
        <Text style={Style.postDetailsText}>Post details</Text>
        <Icon name="send" color="#F6F6F6" onPress={sendForm}/>
        </View>

        <View style={Style.formContainer}>


    <Input
   autoFocus
   placeholder="Project Name"
   errorMessage={nameError}
   maxLength={50}
   rightIcon={nameError ? { type: 'font-awesome', name: 'exclamation', color : 'red' } : {}}
   leftIcon={{ type: 'font-awesome', name: 'edit' }}
   onChangeText={value => setProjectName(value)}
    />

<Input
   autoFocus
   placeholder="Project Description"
   errorMessage={descriptionError}
   multiline
   rightIcon={descriptionError ? { type: 'font-awesome', name: 'exclamation', color : 'red' } : {}}
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   onChangeText={value => setDescription(value)}
  />


<Input
   placeholder="Monetary Goal"
   keyboardType="numeric"
   leftIcon={{ type: 'material', name: 'attach-money' }}
   onChangeText={value => setMoneyGoal(parseInt(value))}
  />
  
       <SelectedImage/>

       <Button 
       buttonStyle={{backgroundColor: '#6AE388'}}
       onPress={showDatepicker}
       icon={{
        name: "expand-more",
        size: 30,
        color: "white"
      }}     
        iconRight
        containerStyle={{width: '50%', 
        top:'5%', 
        alignSelf:'center'}}
        title="Project date goal" />
{show &&(
  <DateTimePicker
        style={{width: '70%', height: '20%', alignSelf: 'center'}}
          testID="dateTimePicker"
          value={dateGoal}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={(e, selectedDate: Date | undefined) => onDateGoalChange(e, selectedDate)}
        />
)}
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
};

const PostScreen = connect(mapStateToProps, mapDispatchToProps)(PostView)

export default PostScreen;
