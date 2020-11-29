import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
import {Image, Button, Icon} from 'react-native-elements';
import { useRoute, CommonActions } from '@react-navigation/core';
import GradientHeader from '../../components/GradientHeader/view';
import Style from './style'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SUBMIT_POST_FORM_REQUEST } from '../../redux/actions/createPost/postActions';

const PostDetails = (props: any) => {
    const route = useRoute();
    const [formData, setFormData] = useState()
    const [token, setToken] = useState("")

    const sendFormData = () => {
        props.submitPostForm({...formData, token})

        //Reset the navigation and go back to the home screen.
        props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'Home' },
        
            ],
          })
        );
    }
    
    // Gets the data from the previous screen from the navigation params.
    useEffect(() => {
    setToken(route.params.token)
    setFormData(route.params.postData)
    }, [])
    return (
        <View style={Style.container}>
              <GradientHeader text="Review" onPress={sendFormData}/>
              {formData && ( 
              <View style={Style.formContainer}>
                <View style={Style.viewContainer}>
                <Text style={Style.formTextHeader}>Project name</Text>
                <Text style={Style.formValues}>{formData.name}</Text>
                </View>

                <View style={Style.viewContainer}>
                <Text style={Style.formTextHeader}>Project Description</Text>
                <Text style={Style.formValues}>{formData.description}</Text>
                </View>

               

                {formData.moneyGoal && ( <View style={Style.viewContainer}>
                <Text style={Style.formTextHeader}>Project Monetary Goal</Text>
                <Text style={Style.formValues}>$ {formData.moneyGoal}</Text>
                </View>) }

                {formData.dateGoal && ( <View style={Style.viewContainer}>
                <Text style={Style.formTextHeader}>Project Date Goal</Text>
                <Text style={Style.formValues}>{formData.dateGoal.toISOString()}</Text>
                </View>) }
               
                {formData.projectImage ? ( 
                <View style={Style.viewContainer}>
                <Text style={Style.formTextHeader}>Project Image</Text>

                <Image 
                    PlaceholderContent={<ActivityIndicator/>}
                    source={{uri: formData.projectImage}} 
                    style={Style.image}/>
                </View>) : null}
               
               <Button 
               containerStyle={{width: '40%', position: 'absolute', bottom: '2%'}}
               titleStyle={{color: '#12AC7C'}}
               type="clear"
               title="Edit information" 
               onPress={() => props.navigation.goBack()}
               icon={<Icon name="chevron-left"/>}/>
               
              </View>)}
              

             
        </View>
    )

}

const mapStateToProps = (state: any, props: any) => {
  }
  
  const mapDispatchToProps = (dispatch: Dispatch, props: any) => ({
    submitPostForm: (formData: any) => {
      dispatch({
        type: SUBMIT_POST_FORM_REQUEST,
        payload: formData
      })
    }
  });

const PostDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(PostDetails)

export default PostDetailsScreen;