
import React, { useState } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Detail from "../screen/Detail";


const Stack = createNativeStackNavigator();  

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator >    
      
       <Stack.Screen options={{
             headerShown: false,}}
        name="home"
        component={Home}
      />
       <Stack.Screen options={{
        headerShown:false
       }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}

export {HomeScreenNavigator}; //  Screen 1 Tab