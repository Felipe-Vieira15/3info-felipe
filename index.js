import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";


const stack = createNativeStackNavigator();

export default function RootNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.screen
                name="Home"
                component={HomeScreen}>
                </Stack.screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}