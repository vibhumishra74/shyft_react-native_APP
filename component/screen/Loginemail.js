import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, RadioButton, TextInput } from 'react-native-paper';
import { useDispatch,useSelector } from "react-redux";
import { loanData,saveToken,userDetails,isEmailLogin,isUserLogedin } from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loginmail = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  
  const dispatch=useDispatch();

  const saveData = async (token,data) => {
      try {
          const jsonValue = JSON.stringify(token)
          let token1 = await AsyncStorage.setItem('STORAGE_KEY', jsonValue)
          dispatch(isUserLogedin(true))
          dispatch(saveToken(token1))
          console.log('token data',token1)
      dispatch(userDetails(data))
      dispatch(isEmailLogin(true))
      alert('save the data to the storage email')
      setFirst("");
      setLast("");
      setEmail("");
      setPhone("");
    } catch (e) {
      alert('Failed to save the email data storage')
      console.log('error',e)
    }
  }

  let SubmitData= {

    displayName: first +" "+ last,
    email:email,
    PhoneNumber:phone,
    uid:'pR2zN2Pyr4XkoRRG8J3lBYmj'
    }

  const handelsubmit = ()=>{
   let currentEmail = false
   let token = 'CSz0TLwPFVekOtYZyvz2rfyCZLH3'
   let emaillogin = true
   let tokendata = {token,emaillogin}
      console.log(email);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        alert("Email is Not Correct");
      
      }
      else {
        currentEmail = true
      }
    if(currentEmail === true){
      console.log('all good')
    // dispatch(saveToken(token))
    saveData(tokendata,SubmitData)

    }
  }

  React.useEffect(()=>{
    if(first =='' ||last =='' || email ==''  || phone ==''){
      setDisabled(true)
    }
    
    if(first.length > 3 && last.length > 3){
      console.log('1')
      if(email.length > 6 && phone.length > 9){
        console.log('2')
        setDisabled(false)
      }
    }else{
      setDisabled(true)
      // console.log('in else')
    }
    },[first,last,email,phone])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Personal Detail</Text>
    <View style={styles.flex}>
    <TextInput style={{flex:.5}}
      label="First Name"
      value={first}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setFirst(text)}
      />
    <TextInput style={styles.lname}
      label="Last Name"
      value={last}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setLast(text)}
      />
      </View>
    <TextInput
      label="Email"
      keyboardType='email-address'
      value={email}
      left={<TextInput.Icon name="email" />}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setEmail(text)}
      />
    <TextInput 
      label="Phone No. +91"
      value={phone}
      keyboardType='numeric'
      maxLength={10}
      mode='outlined'
      left={<TextInput.Icon name="cellphone-basic"/>}
      activeOutlineColor='gray'
      onChangeText={text => setPhone(text)}
      />
 
    
      <Divider style={{ marginTop: 14, color: '#95BF25' }} />
      <Button 
       labelStyle={{ fontSize: 18, fontFamily: "medium",color:"#fff" }}
       
       style={{
         width: 129,
         marginVertical:10,
         height: 38,
         alignSelf:"center",
         borderRadius: 16,
         alignItems: "center",
         justifyContent: "center",
         backgroundColor: disabled ? 'gray' :'tomato',
       }}
       disabled={disabled ? true:false}
      mode="contained" onPress={handelsubmit}>
    Submit
  </Button>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    marginBottom:10
  },
  text:{
    fontSize:18,
    fontWeight:"900",
    paddingVertical:10
  },
flex:{
  display:"flex",
  flex:1,
  flexDirection:'row',
  marginVertical:"2%",
},
lname:{
  flex:.5,
  marginLeft:"2%"
},
})

export default Loginmail;