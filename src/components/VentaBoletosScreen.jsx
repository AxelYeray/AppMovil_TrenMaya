import React from "react";
import { View, Text } from "react-native-web";
import AppBar from "./AppBar";

const VentaBoletosScreen = ({ navigation }) => {
    return (
        <View>
            <AppBar title="Venta de Boletos" navigation={navigation} />
            <View style={{ padding: 20 }}>
                <Text>
                    Venta de Boletos
                </Text>
            </View>
        </View>
    );
}

export default VentaBoletosScreen;