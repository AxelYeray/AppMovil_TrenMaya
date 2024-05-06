import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
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

    // Dimensiones de la ventana
    const windowWidth = Dimensions.get('window').width;
    const imageWidth = (windowWidth - 60) / 2;

    // Estados para controlar la visualización ampliada de las imágenes
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Función para manejar el toque en una imagen
    const handleImagePress = (index) => {
        setSelectedImageIndex(index);
    };

    // Función para manejar el cierre de la visualización ampliada de la imagen
    const handleCloseImage = () => {
        setSelectedImageIndex(null);
    };

    return (
        <View style={styles.container}>
            <AppBar title="Galería" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={styles.text}>Galería</Text>
                <View style={styles.imageContainer}>
                    {imagePaths.map((imagePath, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleImagePress(index)}
                            activeOpacity={0.8}
                        >
                            <Image
                                source={imagePath}
                                style={[
                                    styles.image,
                                    selectedImageIndex === index && styles.selectedImage,
                                ]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            {/* Vista ampliada de la imagen seleccionada */}
            {selectedImageIndex !== null && (
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={handleCloseImage}
                    activeOpacity={1}
                >
                    <Image
                        source={imagePaths[selectedImageIndex]}
                        style={styles.enlargedImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    image: {
        width: imageWidth,
        height: imageWidth * 0.75,
        marginBottom: 20,
        borderRadius: 10,
    },
    selectedImage: {
        transform: [{ scale: 1.2 }],
        zIndex: 1,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    enlargedImage: {
        width: '90%',
        height: '90%',
    },
});

export default GaleriaScreen;
