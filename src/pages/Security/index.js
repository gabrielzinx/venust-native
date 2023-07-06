import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Security = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLeftIconPress = () => { navigation.goBack() };
    const handleCheckIconPress = () => { };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleEmailIconPress = () => {
        // Lógica para manipular o ícone do lápis no campo de e-mail
    };

    const handlePasswordIconPress = () => {
        // Lógica para manipular o ícone do lápis no campo de senha
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleLeftIconPress}>
                    <AntDesign name="left" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Segurança</Text>
                <TouchableOpacity onPress={handleCheckIconPress}>
                    <AntDesign name="check" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={[styles.inputContainer, styles.emailContainer]}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.placeholderText}
                        placeholder="****@gmail.com"
                        placeholderTextColor="gray"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                    <TouchableOpacity onPress={handleEmailIconPress}>
                        <Octicons name="pencil" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.inputContainer, styles.passwordContainer]}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.placeholderText}
                        placeholder="****"
                        placeholderTextColor="gray"
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={handlePasswordIconPress}>
                        <Octicons name="pencil" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    icon: {
        color: 'white',
    },
    content: {
        flex: 1,
        paddingVertical: 30,
        width: '101%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0C0B0F',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
        color: 'white',
        marginRight: 10,
    },
    placeholderText: {
        fontSize: 16,
        color: 'white',
        flex: 1,
    },
    divider: {
        height: 1,
        backgroundColor: 'white',
        marginBottom: 5,
    },
});

export default Security;
