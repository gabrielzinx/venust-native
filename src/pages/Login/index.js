import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.intro}>
                <Text style={styles.introTitle}>Login</Text>
                <Text style={styles.introTexto}>Por favor, entre na sua conta para continuar.</Text>
            </View>
            <View style={styles.loginContent}>
                <View style={styles.containerLoginButtons}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Ionicons name='logo-google' color="#FFF" size={20} />
                        <Text style={styles.loginText}>Continuar com Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton}>
                        <Ionicons name='logo-facebook' color="#FFF" size={20} />
                        <Text style={styles.loginText}>Continuar com Facebook</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textOtherLogin}>Ou continue com</Text>

                <View style={styles.containerOtherLoginButtons}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Ionicons name='mail' color="#FFF" size={20} />
                        <Text style={styles.loginText}>Continuar com Email</Text>
                    </TouchableOpacity>
                    <Text style={styles.textTip}>Não possui uma conta?</Text>
                    <View style={styles.additionalOptions}>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <Text style={styles.textCreateAccount}>Crie uma conta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textSkip}>Agora não</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0C',
        justifyContent: 'space-around',
        paddingHorizontal: 16
    },
    intro: {
        /*STYLE*/
    },
    introTitle: {
        color: '#FFF',
        fontSize: 48,
        fontWeight: 700
    },
    introTexto: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 600
    },
    loginContent: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50
    },
    containerLoginButtons: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 32,
        width: '74%',
        paddingVertical: 14
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
        width: '80%'
    },
    textOtherLogin: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 600
    },
    containerOtherLoginButtons: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTip: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 600,
        marginVertical: 40,
        marginBottom: 28
    },
    additionalOptions: {
        flexDirection: 'row',
        gap: 30,
    },
    textCreateAccount: {
        color: '#45D9A6',
        fontSize: 14,
        fontWeight: 600
    },
    textSkip: {
        color: '#EC6777',
        fontSize: 14,
        fontWeight: 600
    }
});