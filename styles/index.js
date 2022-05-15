import {StyleSheet , Dimensions  } from "react-native"

export const globalStyles = StyleSheet.create({
    card : {
        padding : 5,
        marginHorizontal : "auto"
    },
    image: {
        width: Dimensions.get('window').width,
        resizeMode: "contain"
        ,marginTop : 20
    },
    addUser : {
        alignSelf: "center",
        padding : 5,
    },
    closeModal : {
        alignSelf : "center",
    },
    form : {
        padding : 10
    },
    inputFields : {
        padding : 20,
        fontSize : 24,
        marginVertical : 4
    },
    textarea:{

    },
    modalHeader :{
        alignSelf : "center",
        fontSize : 40,
    }
})