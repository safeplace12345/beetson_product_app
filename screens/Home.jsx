import React, { useState } from 'react';
import AppLoading from "expo-app-loading"
import Font from "expo-font"
import { Image, FlatList, View, StyleSheet } from "react-native"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { globalStyles } from "../styles/index"
import { AntDesign } from '@expo/vector-icons';
import AuthorsModal from "../components/modal/index"

const getFonts = async () => {
    await Font.loadAsync({
        "Bold": require("../assets/fonts/Lato-BlackItalic.ttf"),
        "light": require("../assets/fonts/Lato-LightItalic.ttf")
    })
}

export default function Home({ navigation }) {

    const [isOpenModal, setOpenModal] = useState(false)
    const [isFontsAvailable, setIsFontsAvailable] = useState(false)


    const closeModal = () => setOpenModal(false);
    const openModal = () => setOpenModal(true);
    const authors = [
        {
            _id: Math.floor(Math.random() * 16),
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        },
        {
            _id: Math.floor(Math.random() * 16),
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        },
        {
            _id: Math.floor(Math.random() * 16),
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        },
        {
            _id: Math.floor(Math.random() * 16),
            name: "John Doe",
            avatar: require("../assets/images/avatar1.jpg"),
            institute: "New york Academy",
            details: {
                location: "New york",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, officia nostrum iure tempora quidem illum in velit. Quidem, quo sunt?"
            }
        }
    ]

    const switchTab = (data) => {
        navigation.navigate("Author", data)

    }
    return (<>
        {
            isFontsAvailable ?
                <View style={styles.main}>
                    <AuthorsModal close={closeModal} isOpened={isOpenModal} />
                    <AntDesign style={globalStyles.addUser} name="adduser" onPress={openModal} size={40} color="#85C1E9" />
                    <FlatList
                        style={globalStyles.list}
                        data={authors}
                        renderItem={({ item }) => (
                            <Card style={globalStyles.card} >
                                <Image style={globalStyles.image} source={item.avatar} />
                                <CardContent text={item.location} />
                                <CardTitle
                                    style={styles.name}
                                    subtitle={item.institute}
                                    title={item.name}
                                />
                                <CardAction
                                    separator={true}
                                    inColumn={false}>
                                    <CardButton
                                        onPress={() => { switchTab(item) }}
                                        title="Push"
                                        color="#85C1E9"
                                    />

                                </CardAction>
                            </Card>

                        )}
                    ></FlatList>

                </View>
                : <AppLoading
                    startAsync={getFonts}
                    onFinish={() => { setIsFontsAvailable(true) }}
                    onError={() => console.warn("Something went wrong")} />
        }</>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 50,
        color: "red",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#E5E5E5",
        // fontFamily : "Bold"
    },
    name: {
        fontFamily: "light",
        fontSize: 30,
        color: "black"
    },

})
