import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from "./../../Config";

import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Platform } from "react-native";
import { Alert } from "react-native";

const StackSteps = createStackNavigator();

function StepOne() {

    const navigation = useNavigation();

    return (
        <View style={stylesOne.container}>
            <StatusBar style="light" />
            <View style={stylesOne.titleContainer}>
                <Text style={stylesOne.title}>I.A</Text>
                <Text style={stylesOne.subTitle}>
                    Escaneie seu rosto e descubra estilos que mais combinam com você
                </Text>
            </View>
            <View style={stylesOne.box}>
                <Image style={stylesOne.boxImage} source={require('./../../images/icons/bg.png')} />
            </View>
            <View style={stylesOne.containerButton}>
                <TouchableOpacity onPress={() => navigation.navigate('StepTwo')}>
                    <Text style={{ color: "#FFF", fontWeight: 600, fontSize: 20 }}>Pular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesOne.nextButton}>
                    <Text style={{ color: "#000", fontWeight: 600, fontSize: 20 }}>Prosseguir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function StepTwo(props) {

    const { data } = props.route.params;

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const SYSTEM_OPERATION = Platform.OS;

    function validateUser() {
        if (name.length === 0) {
            return Alert.alert('Name is invalid!');
        } else if (username.length === 0) {
            return Alert.alert('Username is invalid!');
        } else if (!validarUsername(username)) {
            return Alert.alert('Username not is valid!');
        } else {
            signup({ name: name, username: username, password: data.password, email: data.email });
        }
    }

    function validarUsername(username) {
        // Verifica se o username possui pelo menos 5 caracteres e no máximo 30 caracteres
        if (username.length < 5 || username.length > 16) {
            return false; // Username inválido
        }

        // Verifica se o username contém apenas letras minúsculas, números, pontos ou underscores
        var regex = /^[a-z0-9._]+$/;
        if (!regex.test(username)) {
            return false; // Username inválido
        }

        // Verifica se o username não começa ou termina com ponto ou underscore
        if (username.startsWith('.') || username.endsWith('.') || username.startsWith('_') || username.endsWith('_')) {
            return false; // Username inválido
        }

        // Verifica se o username não contém dois pontos ou underscores consecutivos
        if (username.includes('..') || username.includes('__')) {
            return false; // Username inválido
        }

        return true; // Username válido
    }

    async function signup(data) {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((value) => {
                firebase.database().ref('user').child(value.user.uid).set({
                    nome: name,
                    username: username
                })

                alert('Usuario criado com sucesso!');
                navigation.navigate('Main');

                setName('');
                setUsername('');

            })
            .catch((error) => {
                if (error.code === 'auth/weak-password') {
                    alert('Sua senha deve ter pelo menos 6 caracteres');
                    return;
                }
                if (error.code === 'auth/invalid-email') {
                    alert('Email invalido');
                    return;
                }
                if (error.code === 'auth/email-already-in-use') {
                    alert('Já existe um usuário com este e-mail');
                    return;
                } else {
                    console.log(error.code)
                    alert('Ops algo deu errado!');
                    return;
                }
            })
    }


    return (
        <KeyboardAvoidingView style={stylesTwo.container} behavior={SYSTEM_OPERATION === "ios" ? 'padding' : 'height'}>

            <View style={stylesTwo.container}>
                <StatusBar style="light" />
                <View style={stylesTwo.titleContainer}>
                    <Text style={stylesTwo.title}>Perfil</Text>
                    <Text style={stylesTwo.subTitle}>
                        Escolha um nome legal para ser identificado
                    </Text>
                </View>
                <View style={stylesTwo.form}>
                    <View style={stylesTwo.inputContent}>
                        <Ionicons name="person" color="#FFF" size={20} />
                        <TextInput
                            style={stylesTwo.input}
                            placeholder="Digite seu apelido"
                            placeholderTextColor="#959595"
                            value={name}
                            onChange={(event) => setName(event.nativeEvent.text)}
                        />
                    </View>
                    <View style={stylesTwo.inputContent}>
                        <Ionicons name="log-in" color="#FFF" size={20} />
                        <TextInput
                            style={stylesTwo.input}
                            placeholder="Digite seu nome de usuário"
                            placeholderTextColor="#959595"
                            value={username}
                            onChange={(event) => setUsername(event.nativeEvent.text)}
                        />
                    </View>
                </View>
                <TouchableOpacity style={stylesTwo.nextButton} onPress={validateUser}>
                    <Text style={{ color: "#000", fontWeight: 600, fontSize: 20 }}>Prosseguir</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

function StepThree(props) {

    const { data } = props.route.params;

    const navigation = useNavigation();

    console.log(data);

    return (
        <View style={stylesThree.container}>
            <StatusBar style="light" />
            <View style={stylesThree.titleContainer}>
                <Text style={stylesThree.title}>Perfil</Text>
                <Text style={stylesThree.subTitle}>
                    Agora termine e junte-se à comunidade
                </Text>
            </View>
            <View style={stylesThree.uploadContainer}>
                <TouchableOpacity style={stylesThree.uploadButton}>
                    <AntDesign style={stylesThree.icon} name="upload" size={50} color="#45D9A6" />
                </TouchableOpacity>
                <Text style={stylesThree.uploadText}>Adicione uma {'\n'} foto de perfil</Text>
            </View>
            <TouchableOpacity style={stylesThree.nextButton} onPress={() => navigation.navigate('Main')}>
                <Text style={{ color: "#000", fontWeight: 600, fontSize: 20 }}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}

const stylesOne = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A0C',
        gap: 64,
    },
    titleContainer: {
        width: '78%',
        maxWidth: 420,
    },
    title: {
        fontSize: 44,
        fontWeight: 700,
        color: '#FFF',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFF',
    },
    box: {
        backgroundColor: '#45d9a610',
        padding: 10,
        borderRadius: 24
    },
    boxImage: {
        transform: 'scale(0.8)'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "90%"
    },
    nextButton: {
        backgroundColor: '#45D6A9',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 50
    }
});

const stylesTwo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A0C',
        gap: 100,
    },
    titleContainer: {
        width: '88%',
        maxWidth: 420,
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

const stylesThree = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A0C',
        gap: 90,
    },
    titleContainer: {
        width: '78%',
        maxWidth: 420,
    },
    title: {
        fontSize: 44,
        fontWeight: 700,
        color: '#FFF',
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: '#FFF',
    },
    uploadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    uploadButton: {
        backgroundColor: '#1A322A',
        padding: 28,
        borderRadius: 24
    },
    icon: {
        backgroundColor: '#245B49',
        padding: 12,
        borderRadius: 16
    },
    uploadText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#FFF',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "90%"
    },
    nextButton: {
        backgroundColor: '#45D6A9',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 50
    }
});

export default function SignupSteps(props) {

    const { data } = props.route.params;

    return (
        <StackSteps.Navigator screenOptions={{
            headerShown: false
        }}>
            <StackSteps.Screen name="StepOne" component={StepOne} />
            <StackSteps.Screen name="StepTwo" component={StepTwo} initialParams={{ data: data }} />
            <StackSteps.Screen name="StepThree" component={StepThree} />
        </StackSteps.Navigator>
    );
}