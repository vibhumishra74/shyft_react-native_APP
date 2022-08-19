import * as React from 'react';
import { Platform, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Antd  from 'react-native-vector-icons/AntDesign';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/Home';
import Search from '../screen/Search';
import Loan from '../screen/Loan';
import Profile from '../screen/Profile';
import Ionicons from "react-native-vector-icons/Ionicons";
import Money from "react-native-vector-icons/FontAwesome";
import { HomeScreenNavigator } from './StackNavigator';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

function Bottomtab() {
  return (
    // <Tab.Navigator // not using bcz not able to get all icon for bottom tap
    //   initialRouteName="Home"
    //   activeColor="#e91e63"
    //   activeColor="yellow"
    //   labelStyle={{ fontSize: 12 }}
    //   style={{ backgroundColor: 'tomato' }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={20} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Search"
    //     component={search}
    //     options={{
    //       tabBarLabel: 'Search',
    //       tabBarIcon: ({ color }) => (
    //         <Antd name="search1" color={color} size={26} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={profile}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
    //         <MaterialCommunityIcons name="face-woman-profile" color={color} size={26} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Loan"
    //     component={Loan}
    //     options={{
    //       tabBarLabel: 'Loan',
    //       tabBarIcon: ({ color }) => (
    //         <FontAwesome name="money" color={color} size={26} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>

    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused
            ? Platform.OS === "ios"
              ? "ios-home-outline"
              : "md-home-outline"
            : Platform.OS === "android"
            ? "ios-home-outline"
            : "md-home-outline";
        } else if (route.name === 'Profile') {
            iconName = focused
            ? 
               "face-man-profile"
              : "face-man-profile"
            
        }else if(route.name === 'Search'){
            iconName = focused
            ? Platform.OS === "ios"
              ? "ios-search"
              : "search"
            : Platform.OS === "ios"
            ? "ios-search"
            : "search";
        }else if(route.name === 'Loan'){
            iconName = focused
            ? Platform.OS === "ios"
              ? "money"
              : "money"
            : Platform.OS === "ios"
            ? "money"
            : "money";
        }

        //MaterialCommunityIcons use bcz there is no icon in ionicons for profile
        return route.name == 'Profile' ? <MaterialCommunityIcons name={iconName} size={size} color={color} />: route.name =='Loan'?<Money name={iconName} size={size} color={color} /> : <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      size:24
    })}
  >
    <Tab.Screen name="Home" component={HomeScreenNavigator} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Loan" component={Loan} />
  </Tab.Navigator>
  );
}

export default Bottomtab