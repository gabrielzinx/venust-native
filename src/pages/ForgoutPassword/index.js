import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

import firebase from "./../../Config";

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";

export default function ForgoutPassword() {

    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const SYSTEM_OPERATION = Platform.OS;

    async function login() {
        if (email.includes('@')) {
            await firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    alert("Voce recebera um e-mail")
                    navigation.navigate('Login');
                }).catch(() => {
                    alert('Erro..')
                });
        } else {
            firebase.database().ref('user').on("value", (value) => {
                const data = value.val();
                for (const key in data) {
                    if (data[key].username === email) {
                        firebase.auth().sendPasswordResetEmail(data[key].email)
                            .then(() => {
                                alert("Voce recebera um e-mail");
                                navigation.navigate('Login');
                            }).catch(() => {
                                alert('Erro..');
                            })
                    }
                }
                alert('Username não existe!')
            })
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={SYSTEM_OPERATION === "ios" ? 'padding' : 'height'}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Recuperar senha!</Text>
                    <Text style={styles.subTitle}>
                        Seja bem-vindo de volta! Entre na sua conta
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputContent}>
                        <Ionicons name="mail" color="#FFF" size={20} />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu Email / Usúario"
                            placeholderTextColor="#959595"
                            value={email}
                            onChange={(event) => setEmail(event.nativeEvent.text)}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.nextButton} onPress={login}>
                        <Text style={{ color: "#000", fontWeight: 600, fontSize: 20 }}>Enviar Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A0C',
        gap: 100,
    },
    titleContainer: {
        width: '88%',
    },
    title: {
        fontSize: 38,
        fontWeight: 700,
        color: '#FFF',
        marginBottom: 16
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: '#FFF',
    },
    form: {
        width: '88%',
        gap: 24,
    },
    inputContent: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#C2C2C2',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 24,
    },
    inputBox: {
        gap: 4,
    },
    input: {
        paddingHorizontal: 12,
        width: '84%',
        height: 58,
        color: '#FFFFFF',
    },
    inputText: {
        fontSize: 14,
        fontWeight: 500,
        color: '#EEEEEE',
    },
    nextButton: {
        backgroundColor: '#4BDEAB',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#000000',
    },
    textForgout: {
        color: '#e7374c',
        fontSize: 14,
        fontWeight: 600
    }
});