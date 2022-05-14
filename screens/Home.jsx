import React, { Component } from 'react';
import { Image, FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import logo from "../assets/icons/logo.svg"
export default function Home({ navigation }) {
    const authors = [
        {
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        },
        {
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        },
        {
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        },
        ]

    const switchTab = (data) => {
        navigation.navigate("Author" , data)
    }
    return (
        <View style={styles.main}>
            <FlatList
                data={authors}
                renderItem={({ item }) => (
                    <Card>
                        <Image style={styles.image} source={item.avatar} />
                        <CardContent text={item.location} />
                        <CardTitle
                        style ={styles.name}
                            subtitle={item.institute}
                        title={item.name}
                        />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => {switchTab(item)}}
                                title="Push"
                                color="blue"
                            />
                        
                        </CardAction>
                    </Card>

                )}
            ></FlatList>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 50,
        color: "red",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#E5E5E5"
    },
    name: {
        fontSize : 30,
        color : "black"
    },
    image: {
        width: Dimensions.get('window').width,
        resizeMode: "contain"
    }
})
