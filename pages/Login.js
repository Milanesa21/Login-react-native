import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const validarLogin = (usuario, contraseña, usuarios) => {
    if (!usuarios) return false; // Si no hay usuarios, retornar falso directamente
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.password === contraseña);
    return !!usuarioValido;
};

const LoginScreen = ({ navigation, route }) => {
    const [usuarios, setUsuarios] = useState([]);; // Inicializas usuarios como null
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (route.params?.newUsuario) {
            setUsuarios(prevUsuarios => [...prevUsuarios, route.params.newUsuario]);
        }
    }, [route.params?.newUsuario]);

    const handleLogin = () => {
        if (validarLogin(usuario, password, usuarios)) {
            navigation.navigate('Home', { usuario });
        } else {
            setError(true);
        }
    };

    return (
        <ImageBackground source={require('../assets/784402.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
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
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Iniciar sesión</Text>
                </TouchableOpacity>

                {error && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>Usuario no válido</Text>
                        <Image source={require('../assets/IMAGENIMPORTANTE-Photoroom.png')} style={styles.errorImage} resizeMode="contain" />
                    </View>
                )}
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
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#0e88c9',
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
    loginButton: {
        marginTop: 13,
        padding: 10,
        borderRadius: 5,
        width: '50%',
        backgroundColor: '#4f0c00', // Cambiado a #ffe8cd
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    errorText: {
        color: '#ff0000',
        fontSize: 16,
        marginBottom: 10,
    },
    errorImage: {
        width: '80%',
        height: 150,
    },
});

export default LoginScreen;
