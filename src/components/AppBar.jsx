//AppBar.jsx
import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ title, navigation }) => {
    const handleMenuPress = () => {
        navigation.openDrawer(); // Abre un menú lateral si lo tienes
    };

    const goToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <Appbar.Header>
            {/* Icono de menú con color azul */}
            <Appbar.Action icon="menu" onPress={handleMenuPress} color="#007bff" />
            <Appbar.Content title={title} />
            {/* Icono de ticket con color naranja */}
            <Appbar.Action icon="ticket" onPress={() => goToScreen('VentaBoletos')} color="#ff7f00" />
            {/* Icono de imagen con color verde */}
            <Appbar.Action icon="image" onPress={() => goToScreen('Galeria')} color="#28a745" />
            {/* Icono de mapa con color rojo */}
            <Appbar.Action icon="map-marker" onPress={() => goToScreen('Ubicacion')} color="#dc3545" />
            {/* Icono de libro con color morado */}
            <Appbar.Action icon="book" onPress={() => goToScreen('Guia')} color="#6f42c1" />
        </Appbar.Header>
    );
};

export default AppBar;
