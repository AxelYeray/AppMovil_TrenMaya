import react from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import VentaBoletosScreen from "./VentaBoletosScreen";
import GaleriaScreen from "./GaleriaScreen";
import UbicacionScreen from "./UbicacionScreen";
import GuiaScreen from "./GuiaScreen";

const Stack = createStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VentaBoletos" component={VentaBoletosScreen} />
                <Stack.Screen name="Galeria" component={GaleriaScreen} />
                <Stack.Screen name="Ubicacion" component={UbicacionScreen} />
                <Stack.Screen name="Guia" component={GuiaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}