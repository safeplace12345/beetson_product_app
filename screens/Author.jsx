import React from 'react';
import { View, StyleSheet, Dimensions , Image } from "react-native"
import { Card, CardTitle, CardContent, CardAction, CardButton } from 'react-native-material-cards'

export default function Author({ route, navigation }) {
    const { avatar, details, institute, name } = (route.params)
    const switchToHomeTab = () => navigation.goBack()
    return (
        <View style={styles.main}>
            <Card>
                <Image style={styles.image} source={avatar} />
                <CardTitle
                style={styles.title}
                    title={`Author : ${name}`}
                    subtitle={`Institute : ${institute}`}
                />
                <CardContent style={styles.location} text={`Address : ${details.location}`}/>
                <CardContent text={details.description} />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={switchToHomeTab}
                        title="Go Back"
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
    },
    menu: {
        fontSize: 20,
        color: "gray"
    },
    image: {
        width: Dimensions.get('window').width,
        resizeMode: "cover"
    },
    title : {
        maxHeight : 100
    },
    location : {
        maxHeight : 40
    }

})
