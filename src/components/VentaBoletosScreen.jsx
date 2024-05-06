import React from "react";
import { View, Text, StyleSheet, Button, Linking, ScrollView, Image } from 'react-native';
import AppBar from "./AppBar";

const VentaBoletosScreen = ({ navigation }) => {
    const handleGoToLink = () => {
        // Abre el enlace en el navegador del dispositivo
        Linking.openURL("https://reservas.ventaboletostrenmaya.com.mx/");
    };

    return (
        <View style={styles.container}>
            <AppBar title="Venta de Boletos" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.content}>
                    <Text style={styles.headerText}>Venta de Boletos</Text>
                    <Image
                        source={require('./assets/boletos.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>En esta sección podrás comprar tus tickets para el tren Maya.</Text>
                    <Text style={styles.description}>Para comprar tu ticket, selecciona primero el lugar de origen, después el lugar de destino, la fecha de salida y, por último, la cantidad de tickets que deseas comprar.</Text>
                    {/* Botón para ir al enlace */}
                    <View style={styles.buttonContainer}>
                        <Button title="Ir a la página de reserva" onPress={handleGoToLink} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    content: {
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default VentaBoletosScreen;
