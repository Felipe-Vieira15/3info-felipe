import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarAnimal from "./screens/BuscarAnimal";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarCor from "./screens/BuscarCor";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: "HomeScreen",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                    }}
                    
                />
                <Stack.Screen
                    name="BuscarProduto"
                    component={BuscarProduto}
                    options={{
                        title: "Busca de Produtos",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarAnimal"
                    component={BuscarAnimal}
                    options={{
                        title: "Busca de Animais",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarPessoa"
                    component={BuscarPessoa}
                    options={{
                        title: "Busca de Pessoas",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarCarro"
                    component={BuscarCarro}
                    options={{
                        title: "Busca de Carros",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarFruta"
                    component={BuscarFruta}
                    options={{
                        title: "Busca de Frutas",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarCor"
                    component={BuscarCor}
                    options={{
                        title: "Busca de Cores",
                        headerStyle:{
                            backgroundColor: "#ff6600",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}