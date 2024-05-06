import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';

const GuiaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar title="Guía" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Introducción</Text>
                    <Text style={styles.paragraph}>
                        Bienvenido a la aventura de viajar por el Tren Maya, una experiencia única que te lleva a través de paisajes espectaculares, ruinas antiguas, comunidades locales y una rica diversidad cultural en el sureste de México.
                    </Text>
                    <Image
                        source={require('./assets/Catorce.jpg')}
                        style={styles.image}
                    />

                    <Text style={styles.sectionTitle}>¿Qué es el Tren Maya?</Text>
                    <Text style={styles.paragraph}>
                        El Tren Maya es un proyecto ferroviario que conectará los estados del sureste mexicano: Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo. Esta iniciativa tiene como objetivo impulsar el turismo en la región, preservar el patrimonio cultural y promover el desarrollo sostenible.
                    </Text>
                    <Image
                        source={require('./assets/Novena.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.sectionTitle}>Destinos Destacados</Text>
                    <View style={styles.destination}>
                        <Text style={styles.destinationTitle}>Palenque, Chiapas</Text>
                        <Text style={styles.destinationDescription}>
                            Sumérgete en la majestuosidad de la civilización maya explorando las ruinas de Palenque, rodeadas por exuberante vegetación tropical.
                        </Text>
                        <Image
                            source={require('./assets/Segunda.jpg')}
                            style={styles.destinationImage}
                        />
                    </View>
                    <View style={styles.destination}>
                        <Text style={styles.destinationTitle}>Calakmul, Campeche</Text>
                        <Text style={styles.destinationDescription}>
                            Descubre la imponente reserva de la biosfera de Calakmul, hogar de una impresionante variedad de flora y fauna, así como de antiguas pirámides mayas.
                        </Text>
                        <Image
                            source={require('./assets/Septima.jpg')}
                            style={styles.destinationImage}
                        />
                    </View>
                    {/* Aquí se agregarían más destinos destacados */}
                    {/* ... */}

                    <Text style={styles.sectionTitle}>Consejos para Viajeros</Text>
                    <Text style={styles.paragraph}>Reserva con Anticipación</Text>
                    <Text style={styles.paragraph}>Empaca de Forma Inteligente</Text>
                    <Text style={styles.paragraph}>Respeta la Cultura Local</Text>
                    <Text style={styles.paragraph}>Sé Responsable con el Medio Ambiente</Text>

                    <Text style={styles.sectionTitle}>Información Práctica</Text>
                    <Text style={styles.paragraph}>Cómo Llegar</Text>
                    <Text style={styles.paragraph}>Horarios y Tarifas</Text>
                    <Text style={styles.paragraph}>Alojamiento</Text>
                    <Text style={styles.paragraph}>Seguridad</Text>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 10,
    },
    destination: {
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    destinationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    destinationDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
    destinationImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
});

export default GuiaScreen;
