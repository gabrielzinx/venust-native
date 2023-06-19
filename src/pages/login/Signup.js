import { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [hidePass, setHidePass] = useState(true);
    const [hideConfirmPass, setHideConfirmPass] = useState(true);

    const showAlertOfPassword = () => {
        if (password !== confirmPassword) {
            // Alert.alert('Error', `Passwords do not match: ${password}, ${confirmPassword}`, [{ text: 'OK' }]);
        } else {
            Alert.alert('Success', `Passwords match: ${password}`, [{ text: 'OK' }]);
        }
    };

    const SYSTEM_OPERATION = Platform.OS;

    return (
        <KeyboardAvoidingView style={styles.container} behavior={SYSTEM_OPERATION === "ios" ? 'padding' : 'height'}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.subTitle}>
                        Complete o formulário para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>Endereço de email</Text>
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
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>Senha</Text>
                            <View style={styles.inputContent}>
                                <FontAwesome5 name="lock" color="#FFF" size={20} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite sua senha"
                                    placeholderTextColor="#959595"
                                    value={password}
                                    onChange={(event) => setPassword(event.nativeEvent.text)}
                                    secureTextEntry={hidePass}
                                />
                                <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                                    <Ionicons
                                        name={hidePass ? 'eye' : 'eye-off'}
                                        color="#FFF"
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>Senha (Repita novamente)</Text>
                            <View style={styles.inputContent}>
                                <FontAwesome5 name="lock" color="#FFF" size={20} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite sua senha novamente"
                                    placeholderTextColor="#959595"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.nativeEvent.text)}
                                    secureTextEntry={hideConfirmPass}
                                />
                                <TouchableOpacity
                                    onPress={() => setHideConfirmPass(!hideConfirmPass)}
                                >
                                    <Ionicons
                                        name={hideConfirmPass ? 'eye' : 'eye-off'}
                                        color="#FFF"
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonNext} onPress={showAlertOfPassword}>
                    <Text style={styles.buttonText}>Prosseguir</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
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
        width: '94%',
    },
    inputContainer: {
        gap: 20,
    },
    inputContent: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#C2C2C2',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 16,
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
    buttonNext: {
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