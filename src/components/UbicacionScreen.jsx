// UbicacionScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import AppBar from './AppBar';

const UbicacionScreen = ({ navigation }) => {
    return (
        <View>
            <AppBar title="Ubicación" navigation={navigation} />
            <View style={{ padding: 20 }}>
                <Text>Pantalla de Ubicación - Aquí puedes mostrar el mapa y la ubicación del Tren Maya</Text>
            </View>
        </View>
    );
};

export default UbicacionScreen;
