
import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtab from './component/bottomnav';
// import Detail from './component/screen/Detail';
import { Provider, useDispatch, useSelector } from "react-redux";
import store from './redux/store';
import Login from './component/screen/Login';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { restoreToken, saveToken } from './redux/actions';
import Loginmail from './component/screen/Loginemail';


const Stack = createNativeStackNavigator();





const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

function App() {

  const dispatch=useDispatch();

const token = useSelector(state=>state.user.token)
// console.log('tokn app',token?.emaillogin)
const readData = async () => {
  
  const jsonValue = await AsyncStorage.getItem('STORAGE_KEY')
   const value = jsonValue != null ? JSON.parse(jsonValue) : null;
  //  console.log('asynch value',value)
   dispatch(restoreToken(value))
  //  dispatch(isEmailLogin(value?.emaillogin))
  };

React.useEffect(() => {
  readData(); 
}, []);
 

  return (
    <NavigationContainer>
      {/* validating with help of token for security */}
      { token == null ? <Stack.Navigator> 
      <Stack.Screen options={{
             headerShown: false,}}
        name="Login"
        component={Login}
      />
      {/* <Stack.Screen options={{
             }}
        name="login"
        component={Loginmail}
      /> */}
      </Stack.Navigator>
    :<Bottomtab />  
    }
    </NavigationContainer>
  );
}

export default AppWrapper;