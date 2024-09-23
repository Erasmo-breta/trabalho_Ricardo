import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Registro from '../../screens/Registro';
import Home from '../../screens/Home';

const AuthStack = () =>{
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator initialRouteName='Login'>
          <AuthStack.Screen name='Login' component={Login} />
          <AuthStack.Screen name='Registro' component={Registro} />
          
        </AuthStack.Navigator>
      );
};
export default AuthStack;
    

