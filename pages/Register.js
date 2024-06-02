import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = ({ navigation }) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (usuario && password) {
            const newUsuario = { usuario, password };
            navigation.navigate('Login', { newUsuario });
        }
    };

    return (
        <ImageBackground source={require('../assets/784402.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        style={styles.textInput}
                        value={usuario}
                        onChangeText={setUsuario}
                        autoCapitalize="none"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Registrarse</Text>
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
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0e88c9',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 10,
        width: '100%',
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#0e88c9',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#909edd',
        color: 'black',
    },
    registerButton: {
        marginTop: 13,
        padding: 10,
        borderRadius: 5,
        width: '50%',
        backgroundColor: '#4f0c00',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Register;
