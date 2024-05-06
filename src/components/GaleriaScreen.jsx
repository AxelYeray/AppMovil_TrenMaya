import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppBar from './AppBar';

const GaleriaScreen = ({ navigation }) => {
    const imagePaths = [
        require('./assets/Inicio.jpg'),
        require('./assets/Segunda.jpg'),
        require('./assets/Tercera.jpg'),
        require('./assets/Cuarta.jpg'),
        require('./assets/Quinta.jpeg'),
        require('./assets/Sexta.jpg'),
        require('./assets/Septima.jpg'),
        require('./assets/Octava.jpg'),
        require('./assets/Novena.jpg'),
        require('./assets/Decima.jpg'),
        require('./assets/Once.jpg'),
        require('./assets/Doce.jpg'),
        require('./assets/Trece.jpg'),
        require('./assets/Catorce.jpg'),
        require('./assets/Quince.jpg'),
        require('./assets/Dicisiete.jpg'),
        require('./assets/Diciocho.jpg'),
        require('./assets/Diecinueve.jpg'),
    ];

    // Divide las imágenes en dos columnas
    const column1 = imagePaths.slice(0, Math.ceil(imagePaths.length / 2));
    const column2 = imagePaths.slice(Math.ceil(imagePaths.length / 2));

    return (
        <View style={styles.container}>
            <AppBar title="Galería" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={styles.text}>Galería</Text>
                <View style={styles.imageContainer}>
                    <View style={styles.column}>
                        {column1.map((imagePath, index) => (
                            <Image key={index} source={imagePath} style={styles.image} />
                        ))}
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.column}>
                        {column2.map((imagePath, index) => (
                            <Image key={index} source={imagePath} style={styles.image} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const imageWidth = (windowWidth - 60) / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 20,
        justifyContent: 'center',
    },
    column: {
        alignItems: 'center',
    },
    separator: {
        width: 20,
    },
    image: {
        width: imageWidth,
        height: imageWidth * 0.75,
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 10,
    },
});

export default GaleriaScreen;
