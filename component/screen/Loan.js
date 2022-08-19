import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, RadioButton, TextInput } from 'react-native-paper';
import { useDispatch,useSelector } from "react-redux";
import { loanData } from '../../redux/actions';


const MyComponent = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [state, setState] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [idState, setIdState] = React.useState("");
  const [loan, setLoanAmount] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [value, setValue] = React.useState('Driver Lincence');
  
  const dispatch=useDispatch();


  let SubmitData= {
    PersonalDetails: {
    FirstName: first,
    LastName: last,
    EmailAddress:email,
    PhoneNumber:phone,
    DateOfBirth: dob,
    LoanAmount:loan,
    },
    Address: {
    StreetAddress: address,
    ApartmentNumber: apartment,
    ZipCode: zip,
    State:state,
    },
    Identification:{
    ResidentialProof:value,
    IdNumber: idNumber,
    IdState: idState,
    }
    }

  const handelsubmit = ()=>{
   let currentEmail = false
      console.log(email);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        console.log("Email is Not Correct");
      
      }
      else {
        currentEmail = true
      }
    if(currentEmail === true){
      console.log('all good')
    dispatch(loanData(SubmitData))
    setFirst("");
  setLast("");
  setEmail("");
  setDob("");
  setPhone("");
  setAddress("");
  setApartment("");
  setZip("");
  setState("");
  setIdNumber("");
  setIdState("");
  setLoanAmount("");
  setDisabled(true);
  setValue('Driver Lincence')
    }
  }

  React.useEffect(()=>{
    if(first =='' ||last =='' || email =='' || dob =='' || phone =='' || address =='' || apartment =='' || zip =='' || state =='' || idNumber =='' || idState =='' || loan ==''){
      setDisabled(true)
    }
    
    if(first.length > 3 && last.length > 3){
      console.log('1')
      if(email.length > 6 && dob != ""){
        console.log('2')
        if(phone.length > 9 && loan != '' ){
          console.log('3')
          if(address.length > 6 && apartment.length > 3){
            console.log('4')
            if(zip.length> 4 && state.length !=''){
              console.log('5')
              if(idState != '' && idNumber !=''){
                console.log('6')
                setDisabled(false)
              }
            }
          }
        }
      }
      // setDisabled(true)
      // console.log('in if')
    }else{
      setDisabled(true)
      // console.log('in else')
    }

    
    // console.log('object',first.length > 3 && last.length > 3 && email.length > 6 )
  },[first,last,email,dob,phone,address,apartment,zip,state,idNumber,idState,loan])

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
      <View style={styles.flex}>
    <TextInput style={{flex:.5}}
      label="Date of Birth"
      value={dob}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setDob(text)}
      />
    <TextInput style={styles.lname}
      label="Phone No. +91"
      value={phone}
      keyboardType='numeric'
      maxLength={10}
      mode='outlined'
      left={<TextInput.Icon name="cellphone-basic"/>}
      activeOutlineColor='gray'
      onChangeText={text => setPhone(text)}
      />
      </View>
    <TextInput
      label="Loan Amount"
      value={loan}
      keyboardType='numeric'
      mode='outlined'
      left={<TextInput.Icon name="diamond-stone"/>}
      activeOutlineColor='gray'
      onChangeText={text => setLoanAmount(text)}
      />
      <Text style={styles.text}>Address</Text>
      <TextInput
      label="Street Address"
      value={address}
      left={<TextInput.Icon name="google-street-view"/>}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setAddress(text)}
      />
      <View style={styles.flex}>
      <TextInput style={{flex:.5}}
      label="Apartment Number"
      value={apartment}
      keyboardType='numeric'
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setApartment(text)}
      />
      <TextInput style={styles.lname}
      label="Zip Code"
      value={zip}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setZip(text)}
      />
      </View>
      <TextInput
      label="State"
      value={state}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setState(text)}
      />
      <Text style={styles.text}> Identification</Text>
      <View>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={[styles.flex,{marginBottom:10}]}>
      <View style={[styles.flex,styles.border]}>
        <RadioButton value="Driver Lincence" />
        <Text>Driver Licence</Text>
      </View>
      <View style={[styles.flex,styles.border]}>
        <RadioButton value="Non-Driver/State ID" />
        <Text>Non-Driver/State ID</Text>
      </View>
      </View>
      <View style={styles.flex}>
      <View style={[styles.flex,styles.border]}>
        <RadioButton value="US Military" />
        <Text>US Military</Text>
      </View>
      <View style={[styles.flex,styles.border]}>
        <RadioButton value="US Passport" />
        <Text>US Passport</Text>
      </View>
      </View>
    </RadioButton.Group>
      </View>
      <View style={styles.flex}>
      <TextInput
      style={{flex:.5}}
      label="ID Number"
      value={idNumber}
      left={<TextInput.Icon name="id-card" />}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setIdNumber(text)}
      />
       <TextInput 
       style={styles.lname}
      label="ID State"
      value={idState}
      left={<TextInput.Icon name="id-card" />}
      mode='outlined'
      activeOutlineColor='gray'
      onChangeText={text => setIdState(text)}
      />
      </View>
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
border:{
  borderColor:"gray",
  borderWidth: 1,
  marginRight:"2%",
  alignItems:"center",
}
})

export default MyComponent;