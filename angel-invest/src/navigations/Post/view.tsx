import React, { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Style from './style';
import { Icon, Input, Image, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

const PostScreen = () => {
    const [name, setName] = useState("");
    const [moneyGoal, setMoneyGoal] = useState(0);
    const [show, setShow] = useState(false);
    const [dateGoal, setDateGoal] = useState(new Date(1598051730000));
    const [description, setDescription] = useState("");
    const [projectImage, setProjectImage] = useState("");

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
      alert(JSON.stringify(result))
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
        <Icon name="send" color="#F6F6F6"/>
        </View>

        <View style={Style.formContainer}>


    <Input
   placeholder="Project Name"
   maxLength={50}
   leftIcon={{ type: 'font-awesome', name: 'edit' }}
   onChangeText={value => setName(value)}
    />

<Input
   placeholder="Project Description"
   multiline
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

export default PostScreen;
