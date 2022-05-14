import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native"

export default function Main() {
    return (
        <View style={styles.main}>
            <Text style={styles.menu}> HEllo</Text>
            <Text style={styles.menu}> HEllo</Text>
            <Text style={styles.menu}> HEllo</Text>
            <Text style={styles.menu}> HEllo</Text>
            <Text style={styles.menu}> HEllo</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop : 50,
        color: "red",
        display : "flex",
        justifyContent : "flex-end"
    },
    menu: {
    }
})
