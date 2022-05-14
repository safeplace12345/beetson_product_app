import React, { Component } from 'react';
import { View , Text , StyleSheet , Dimensions} from "react-native"

export default function NavBar() {
  return (
    <View style={styles.nav}>
        <Text style={styles.head}> Home</Text>
        <View style={styles.accounts}>
        <Text style={styles.menu}> H</Text>
        <Text style={styles.menu}> R</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    nav:{
      width : Dimensions.get('window').width - 30,
      color : "red",
      flexDirection : 'row',
      alignItems : "center",
      justifyContent : "space-between"
    },
    head : {
      fontSize : 30
    },
    menu : {
      fontSize : 20 ,
      marginHorizontal : 3
    },
    accounts : {
      flexDirection : "row",
      paddingHorizontal : 30
    }
})
