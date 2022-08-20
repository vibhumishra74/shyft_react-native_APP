import React, { useEffect, useState } from 'react';
import {
 SafeAreaView,
 StatusBar,
 StyleSheet,
 View,
 Text,
 Dimensions,
 TouchableOpacity,
 Image
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch,useSelector } from "react-redux";
import { isUserLogedin, saveToken, userDetails } from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
const dispatch=useDispatch();

const token = useSelector((state)=>state.user.token)



  React.useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['email'], 
      webClientId: '332294173725-ct8449kr9e9b1grn8va8i3k7uk4fa4mr.apps.googleusercontent.com',
      offlineAccess: true,
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber;
  },[token])
  function onAuthStateChanged(user) {
    if (user) dispatch(userDetails(user));
  }

  const saveData = async (token) => {
    try {
      const jsonValue = JSON.stringify(token)
      let token1 = await AsyncStorage.setItem('STORAGE_KEY', jsonValue)
      dispatch(isUserLogedin(true))
      dispatch(saveToken(token1))
      // alert('save the data to the storage')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }
 
  async function signinWithGoogle() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
   await saveData(idToken)
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    // console.log('googleCredential',googleCredential)
    //  console.log('idToken',idToken)
     dispatch(saveToken(idToken))
     auth().onAuthStateChanged(onAuthStateChanged)
    return auth().signInWithCredential(googleCredential);
  }
 return (
  <SafeAreaView style={styles.safeArea}>
   <StatusBar barStyle="light-content" />
   <View style={styles.container}>
    <View style={styles.topContent}>
     <Text style={styles.mainText}>
      Google Auth
     </Text>
    </View>
    <View style={styles.bottomContent}>
     <TouchableOpacity onPress={signinWithGoogle} style={styles.googleButton}>
      <Image
       style={styles.googleIcon}
       source={{
        uri: "https://i.ibb.co/j82DCcR/search.png",
       }}
      />
      <Text style={styles.googleButtonText}>Sign in with Google</Text>
     </TouchableOpacity>
     {/* <TouchableOpacity onPress={()=>navigation.navigate('login')} style={styles.emailButton}>
     
      <Text style={styles.googleButtonText}>Sign in with email</Text>
     </TouchableOpacity> */}
    </View>
   </View>
  </SafeAreaView>
 );
};
const styles = StyleSheet.create({
 safeArea: {
  backgroundColor: "#262b2f"
 },
 container: {
  height: Dimensions.get('window').height,
  backgroundColor: "#262b2f",
 },
 topContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 bottomContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 mainText: {
  fontSize: 54,
  color: "white",
 },
 googleButton: {
  backgroundColor: "white",
  borderRadius: 4,
  paddingHorizontal: 34,
  paddingVertical: 16,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
 },
 emailButton: {
  marginTop:20,
  backgroundColor: "white",
  borderRadius: 4,
  paddingHorizontal: 34,
  paddingVertical: 16,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
 },
 googleButtonText: {
  marginLeft: 16,
  fontSize: 18,
  fontWeight: '600'
 },
 googleIcon: {
  height: 24,
  width: 24
 }
});
export default Login;