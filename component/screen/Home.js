import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native'
import AllBank from './Allbank';

const Home = ()=> {

    return (
      <View style={styles.container}>
        <Text style={styles.hometext}> current loan and upcomming payment</Text>
        <AllBank />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom:80
    },
    hometext:{
        paddingBottom:15,
        fontSize:16,
        fontWeight:"600"
    },
  });

export default Home