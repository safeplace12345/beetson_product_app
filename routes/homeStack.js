import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import {Image , StyleSheet} from "react-native"
import Home from "../screens/Home"
import Author from "../screens/Author"
import NavBar from "../components/navBar"
const Stack = createStackNavigator()

const styles = StyleSheet.create({
    image : {
        width : 50,
        height : 50
    },
    navigator : {
        flex : 1,
        backgroundColor : "blue"
    }
})
const HomeStack = () => {
    return <NavigationContainer  >
        <Stack.Navigator  initialRouteName="Home" screenOptions={{
            headerStyle : {
                backgroundColor : "#F2F2F2",
            },
            headerTitleAlign : "center",
            headerBackImage : () => <Image style={styles.image} source={require("../assets/icons/logo.png")} alt="wpicnpwencwe" width={20} height={20}/>
        }}>
            <Stack.Screen style={styles.navigator} name="Home" component={Home} options={{
                headerTitle : (props) => (<NavBar data={props}/>)
            }}/>
            <Stack.Screen name="Author" component={Author} options={{
               }}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default HomeStack