import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    const route = useRoute();
    const { usuario } = route.params;

    return (
        <ImageBackground source={require('../assets/c36fdf6f58dd9cc4c5912ad7e6030371.jpg')} style={styles.backgroundImage}>
            <Text style={styles.welcome}>Bienvenido {usuario}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ededd3',
        backgroundColor: '#372919',
        borderRadius: 5,
        padding: 5,
        marginTop: 50, // Ajusta este valor para cambiar la posición del mensaje hacia abajo
    },
});

export default HomeScreen;
