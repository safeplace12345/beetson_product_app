import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions , Image } from "react-native"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default function Author({ route, navigation }) {
    const { avatar, details, institute, name } = (route.params)
    const switchToHomeTab = () => navigation.goBack()
    return (
        <View style={styles.main}>
            <Card>
                <Image style={styles.image} source={avatar} />
                <CardTitle
                    title={name}
                    subtitle={institute}
                />
                <Text>{details.location}</Text>
                <CardContent text={details.description} />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={() => { }}
                        title="View More"
                        color="blue"
                    />
                    
                </CardAction>
            </Card>
          </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 50,
        color: "red",
        // display: "flex",
        // justifyContent : "flex-end"
    },
    menu: {
        fontSize: 20,
        color: "gray"
    },
    image: {
        width: Dimensions.get('window').width,
        resizeMode: "cover"
    }
})
