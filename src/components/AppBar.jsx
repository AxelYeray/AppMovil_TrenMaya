// AppBar.js
import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ title, navigation }) => {
    const handleMenuPress = () => {
        navigation.openDrawer(); // Abre un menú lateral si lo tienes
    };

    const goToScreen = (screenName) => {
        navigation.navigate(screenName);

    }

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={handleMenuPress} />
            <Appbar.Content title={title} />
            <Appbar.Action icon="ticket" onPress={() => goToScreen('VentaBoletos')} />
            <Appbar.Action icon="image" onPress={() => goToScreen('Galeria')} />
            <Appbar.Action icon="map-marker" onPress={() => goToScreen('Ubicacion')} />
            <Appbar.Action icon="book" onPress={() => goToScreen('Guia')} />
        </Appbar.Header>
    );
};

export default AppBar;
