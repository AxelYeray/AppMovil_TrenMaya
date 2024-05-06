// GaleriaScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';

const GaleriaScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Inicio" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Galería
                    </Text>
                    <Image
                        source={require('./assets/Inicio.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('./assets/Segunda.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('./assets/Tercera.jpg')}
                        style={styles.image}
                    />
                </View>
            </ScrollView >
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 20,

    },
});

export default GaleriaScreen;
