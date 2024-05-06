import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar title="Inicio" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View>
                    <Text style={styles.headerText}>
                        Bienvenido a la app del Tren Maya
                    </Text>
                    <Image
                        source={require('./assets/Inicio.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>
                            Introducción
                        </Text>
                        <Text style={styles.sectionText}>
                            El Tren Maya es un proyecto de infraestructura ferroviaria que busca conectar los principales destinos turísticos del sureste de México. La ruta del tren abarca los estados de Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>
                            Objetivo
                        </Text>
                        <Text style={styles.sectionText}>
                            El proyecto contempla la construcción de 1,525 kilómetros de vías férreas, con 15 estaciones y una inversión de más de 6,000 millones de dólares. El tren tendrá una velocidad máxima de 160 km/h y se espera que transporte a más de 8 millones de pasajeros al año.
                        </Text>
                    </View>
                    <Image
                        source={require('./assets/Segunda.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.section}>
                        <Text style={styles.sectionText}>
                            El Tren Maya es un proyecto ferroviario que conectará los estados del sureste mexicano: Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo. Esta iniciativa tiene como objetivo impulsar el turismo en la región, preservar el patrimonio cultural y promover el desarrollo sostenible.
                        </Text>
                    </View>
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
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 24,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
});

export default HomeScreen;
