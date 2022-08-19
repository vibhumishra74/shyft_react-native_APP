import * as React from 'react';
import { Button, Image, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';


import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { saveToken,userDetails } from '../../redux/actions';

const Profile = ()=> {

  const userDetail = useSelector((state)=>state.user.userDetails)
  const token = useSelector((state)=>state.user.token)
  const dispatch=useDispatch();

const signOut = async () => {
  console.log('signout press')
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    dispatch(userDetails({}))
    dispatch(saveToken(null))
  } catch (error) {
    console.error(error);
  }
};

    return (
      <View>
        <Image source={{uri:userDetail.photoURL}} 
        style={{width:'100%',
        height: 150,marginBottom:30}}
        />
        <View style={{alignItems:"center"}}>
        <Text> name: {userDetail.displayName}</Text>
        <Text style={{paddingVertical:20}}> email: {userDetail.email}</Text>
        <Text> PhoneNumber: +91{userDetail.phoneNumber}</Text>
        <Text style={{paddingVertical:20}}> your Id: {userDetail.uid}</Text>
      </View>

      <Button
        title="LogOut"
        onPress={signOut}
      />
      </View>

    )
  }

  export default Profile