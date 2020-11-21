import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';
import UploadPost from '../screens/uploadPost';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            //headerStyle: {backgroundColor: '#99CCFF'}
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details',
            //headerStyle: {backgroundColor: '#99CCFF'},
        }
    },
    UploadPost: {
        screen: UploadPost
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle: {backgroundColor: '#99CCFF'},
    }
});

export default createAppContainer(HomeStack);