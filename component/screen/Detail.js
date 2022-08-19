import * as React from 'react';
import { Button, Image, Text, View } from 'react-native'

const Detail = ({route,navigation})=> {
let detail = route.params
    return (
      <View>
      <Image source={detail.detail.imageUrl} 
        style={{ width: "100%",
        height: 250,}}
        resizeMode='stretch'
         />
         <Text style={{textAlign:"center",paddingTop:20}}>current loan:{detail.detail.currentLoan}</Text>
         <Text style={{textAlign:"center",fontSize:18}}>upcomming payment:{detail.detail.upCommingPayment}</Text>
         <Button
        title="Go to Home"
        onPress={() => navigation.navigate('home')}
      />
      </View>
    )
  }

  export default Detail