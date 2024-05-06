import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Inicio" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Bienvenido a la app del Tren Maya
                    </Text>
                    <Image
                        source={require('./assets/Inicio.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        Introducción:
                    </Text>
                    <Text>
                        El Tren Maya es un proyecto de infraestructura ferroviaria
                        que busca conectar los principales destinos turísticos del
                        sureste de México. La ruta del tren abarca los estados de
                        Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo.
                    </Text>
                    <Text style={styles.text}>
                        Objetivo:
                    </Text>
                    <Text>
                        El proyecto contempla la construcción de 1,525 kilómetros
                        de vías férreas, con 15 estaciones y una inversión de más
                        de 6,000 millones de dólares. El tren tendrá una velocidad
                        máxima de 160 km/h y se espera que transporte a más de 8
                        millones de pasajeros al año.
                    </Text>
                    <Image
                        source={require('./assets/Segunda.jpg')}
                        style={styles.image}
                    />

                    <Text>
                        El Tren Maya es un proyecto ferroviario que conectará los estados del sureste mexicano: Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo. Esta iniciativa tiene como objetivo impulsar el turismo en la región, preservar el patrimonio cultural y promover el desarrollo sostenible.
                    </Text>
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

export default HomeScreen;
