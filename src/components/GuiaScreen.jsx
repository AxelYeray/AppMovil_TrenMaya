// GuiaScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';

const GuiaScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Guía" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Introducción
                    </Text>
                    <Text>
                        Bienvenido a la aventura de viajar por el Tren Maya, una experiencia única que te lleva a través de paisajes espectaculares, ruinas antiguas, comunidades locales y una rica diversidad cultural en el sureste de México.
                    </Text>

                    <Text style={styles.text}>
                        ¿Qué es el Tren Maya?
                    </Text>
                    <Text>
                        El Tren Maya es un proyecto ferroviario que conectará los estados del sureste mexicano: Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo. Esta iniciativa tiene como objetivo impulsar el turismo en la región, preservar el patrimonio cultural y promover el desarrollo sostenible.
                    </Text>
                    <Text style={styles.text}>
                        Destinos Destacados
                    </Text>
                    <Text>
                        Palenque, Chiapas
                    </Text>
                    <Text>
                        Sumérgete en la majestuosidad de la
                        civilización maya explorando las
                        ruinas de Palenque, rodeadas por
                        exuberante vegetación tropical.
                    </Text>
                    <Text>
                        Calakmul, Campeche
                    </Text>
                    <Text>
                        Descubre la imponente reserva
                        de la biosfera de Calakmul,
                        hogar de una impresionante variedad
                        de flora y fauna, así como de antiguas
                        pirámides mayas.
                    </Text>
                    <Text>
                        Mérida, Yucatán
                    </Text>
                    <Text>
                        Sumérgete en la cultura yucateca
                        explorando la encantadora ciudad
                        colonial de Mérida, conocida por
                        su arquitectura colonial, gastronomía
                        única y festivales culturales.
                    </Text>
                    <Text>
                        Chichén Itzá, Yucatán
                    </Text>
                    <Text>
                        Maravíllate ante la grandeza de
                        una de las Nuevas Maravillas del
                        Mundo, la antigua ciudad maya de
                        Chichén Itzá, con su famosa
                        pirámide de Kukulcán.
                    </Text>
                    <Text>
                        Tulum, Quintana Roo
                    </Text>
                    <Text>
                        Relájate en las hermosas playas
                        de Tulum y explora las ruinas de
                        una ciudad costera maya con vista
                        al mar Caribe.
                    </Text>

                    <Text style={styles.text}>
                        Consejos para Viajeros
                    </Text>
                    <Text>
                        Reserva con Anticipación
                    </Text>
                    <Text>
                        Empaca de Forma Inteligente
                    </Text>
                    <Text>
                        Respeta la Cultura Local
                    </Text>
                    <Text>
                        Sé Responsable con el Medio Ambiente
                    </Text>
                    <Text style={styles.text}>
                        Información Práctica
                    </Text>
                    <Text>
                        Cómo Llegar
                    </Text>
                    <Text>
                        Horarios y Tarifas
                    </Text>
                    <Text>
                        Alojamiento
                    </Text>
                    <Text>
                        Seguridad
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
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
export default GuiaScreen;
