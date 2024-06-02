import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InicioScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/7a9cd7bc09dadbc6747a928c253a82c1.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Registro</Text>
                </TouchableOpacity>
            </View>
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#341933',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default InicioScreen;
