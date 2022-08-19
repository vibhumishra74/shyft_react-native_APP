import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View,StyleSheet, FlatList, TouchableOpacity, ScrollView  } from 'react-native'
import sbi from './../../assets/image/sbi.png'
import syndicate from './../../assets/image/syndicate.png'
import boi from './../../assets/image/boi.png'
import dena from './../../assets/image/dena.png'
import HDFC from './../../assets/image/HDFC.png'
import bob from './../../assets/image/bob.png'
import allahabad from './../../assets/image/allahabad.png'
import icici from './../../assets/image/icici.png'
import ubi from './../../assets/image/ubi.png'
import axis from './../../assets/image/axis.png'
import { useSelector } from 'react-redux';

const AllBank = ()=> {

    const navigation = useNavigation();

    
  const loanData = useSelector((state) => state.Loan.customservice);
  // console.log('loan data',loanData)

let allLoan = [{key:1,name:'sbi bank',imageUrl:sbi,currentLoan:200000,upCommingPayment:10000},{key:2,name:'Syndicate bank',imageUrl:syndicate,currentLoan:200000,upCommingPayment:10000},{name:'boi bank',key:3,imageUrl:boi,currentLoan:200000,upCommingPayment:10000},{key:4,name:'dena bank',imageUrl:dena,currentLoan:300000,upCommingPayment:14000},{name:'HDFC bank',key:5,imageUrl:HDFC,currentLoan:290000,upCommingPayment:10000},{key:6,imageUrl:bob,name:'bob bank',currentLoan:400000,upCommingPayment:10000},{name:'allahabad bank',key:7,imageUrl:allahabad,currentLoan:2300000,upCommingPayment:10000},{name:'icici bank',key:8,imageUrl:icici,currentLoan:200000,upCommingPayment:10000},{name:'ubi bank',key:9,imageUrl:ubi,currentLoan:200000,upCommingPayment:10000},{name:'axis bank',key:10,imageUrl:axis,currentLoan:200000,upCommingPayment:10000},{name:'HDFC bank',key:11,imageUrl:HDFC,currentLoan:20000,upCommingPayment:7000},{name:'boi bank',key:12,imageUrl:boi,currentLoan:200000,upCommingPayment:10000},{name:'sbi bank',key:13,imageUrl:sbi,currentLoan:200000,upCommingPayment:10000},{name:'syndicate bank',key:14,imageUrl:syndicate,currentLoan:2506000,upCommingPayment:107000},{name:'bob bank',key:15,imageUrl:bob,currentLoan:700000,upCommingPayment:90000}]
// console.log('bank',allLoan.map(e=>e.name))
const imagepress = (item)=>{
    // console.log('Home',item)
    navigation.navigate('Detail', { name: item.name,detail:item })
}
const renderItem = ({ item }) => (
  <View>
    <TouchableOpacity  onPress={()=>imagepress(item)} style={styles.singleContainer} key={item.key}>
 <Image source={item.imageUrl} 
        style={styles.logo}
        resizeMode='stretch'
         />
         <Text>current loan:{item.currentLoan}</Text>
         <Text>upcomming payment:{item.upCommingPayment}</Text>
    </TouchableOpacity>
    </View>
  );

 const renderSeparator = () => {
     return <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "gray",
        }}
      />
  };
    return (
      <View>
        <FlatList data={allLoan} renderItem={renderItem} 
         ItemSeparatorComponent={renderSeparator}
         ListFooterComponent={
          loanData.length > 0 && <View>
            <Text style={styles.text}>PersonalDetails</Text>
            <Text>FirstName: {loanData.map(e=>e.PersonalDetails.FirstName)}</Text>
            <Text>LastName: {loanData.map(e=>e.PersonalDetails.LastName,)}</Text>
            <Text>EmailAddress: {loanData.map(e=>e.PersonalDetails.EmailAddress)}</Text>
            <Text>PhoneNumber: {loanData.map(e=>e.PersonalDetails.PhoneNumber)}</Text>
            <Text>DateOfBirth: {loanData.map(e=>e.PersonalDetails.DateOfBirth)}</Text>
            <Text>LoanAmount: {loanData.map(e=>e.PersonalDetails.LoanAmount)}</Text>
            <Text style={styles.text}>Address</Text>
            <Text>ApartmentNumber: {loanData.map(e=>e.Address.ApartmentNumber)}</Text>
            <Text>State {loanData.map(e=>e.Address.State)}</Text>
            <Text>ZipCode {loanData.map(e=>e.Address.ZipCode)}</Text>
            <Text>StreetAddress {loanData.map(e=>e.Address.StreetAddress)}</Text>
            <Text style={styles.text}>Identification</Text>
            <Text>ResidentialProof {loanData.map(e=>e.Identification.ResidentialProof)}</Text>
            <Text>IdNumber {loanData.map(e=>e.Identification.IdNumber)}</Text>
            <Text>IdState {loanData.map(e=>e.Identification.IdState)}</Text>
            
          </View>
         }
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
   
    singleContainer:{
        paddingBottom:10
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: "100%",
      height: 150,
    },
    text:{
      fontWeight:'900',
      fontSize:18
    }
  });

export default AllBank