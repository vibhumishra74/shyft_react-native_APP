
import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtab from './component/bottomnav';
// import Detail from './component/screen/Detail';
import { Provider, useSelector } from "react-redux";
import store from './redux/store';
import Login from './component/screen/Login';


const Stack = createNativeStackNavigator();





const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

function App() {
const token = useSelector(state=>state.user.token)
 
  return (
    <NavigationContainer>
      {/* validating with help of token for security */}
      { token == null ? <Stack.Navigator> 
      <Stack.Screen options={{
             headerShown: false,}}
        name="Login"
        component={Login}
      />
      </Stack.Navigator>
    :<Bottomtab />  
    }
    </NavigationContainer>
  );
}

export default AppWrapper;