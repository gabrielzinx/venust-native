import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

import firebase from "./../../Config";

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";

export default function LoginStep() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const SYSTEM_OPERATION = Platform.OS;

    async function login() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                alert('Bem-vindo: ' + value.user.email);
                navigation.navigate('Main');
            })
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={SYSTEM_OPERATION === "ios" ? 'padding' : 'height'}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Conecte-se</Text>
                    <Text style={styles.subTitle}>
                        Seja bem-vindo de volta! Entre na sua conta
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputContent}>
                        <Ionicons name="mail" color="#FFF" size={20} />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            placeholderTextColor="#959595"
                            value={email}
                            onChange={(event) => setEmail(event.nativeEvent.text)}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Ionicons name="key" color="#FFF" size={20} />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            placeholderTextColor="#959595"
                            value={password}
                            onChange={(event) => setPassword(event.nativeEvent.text)}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={login}>
                    <Text style={{ color: "#000", fontWeight: 600, fontSize: 20 }}>Prosseguir</Text>
                </TouchableOpacity>
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
        width: '86%',
    },
    title: {
        fontSize: 48,
        fontWeight: 700,
        color: '#FFF',
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
});