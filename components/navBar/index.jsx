import React, { Component } from 'react';
import {Image, View , Text , StyleSheet , Dimensions} from "react-native"

export default function NavBar() {

    let bellIcon , profileIcon;

    try {
      bellIcon = require("../../assets/icons/bell.png")
      profileIcon = require("../../assets/icons/profile.png")
    } catch (error) {
      console.log(error)
    }
  return (
    <View style={styles.nav}>
        <Text style={styles.head}> Home</Text>
        <View style={styles.accounts}>
          <Image  style={styles.menu} source={bellIcon} alt="Bell icon .." />
          <Image style={styles.menu} source={profileIcon} alt="Profile icon" />
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
      fontSize : 30,
      color : "#3498DB"
    },
    accounts : {
      flexDirection : "row",
      width : 80,
      justifyContent : "space-between"
    }
})
