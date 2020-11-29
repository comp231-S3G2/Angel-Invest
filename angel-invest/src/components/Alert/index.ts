import { Alert } from 'react-native';
import React from 'react';

const AlertComponent = (title: string, message: string) => {
    Alert.alert(title, message)
}
export default AlertComponent