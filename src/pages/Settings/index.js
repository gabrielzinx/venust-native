import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

function Setting() {

    const navigation = useNavigation();

    const [notificacoes, setNotificacoes] = useState(false);
    const [idioma, setIdioma] = useState('Português');

    const toggleNotificacoes = () => {
        setNotificacoes((prevState) => !prevState);
    };

    const alterarIdioma = () => {
        // Lógica para alterar o idioma
    };

    const handlePressTermosServico = () => {
        navigation.navigate("PrivacyPolicy")
        console.log('Termos de Serviço');
    };

    const handlePressSuporte = () => {
        console.log('Suporte');
    };

    const handlePressAgendamentos = () => {
        console.log('Agendamentos');
    };

    const handlePressOfertas = () => {
        console.log('Ofertas');
    };

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#0A0A0C' />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={18} color="#fff" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Configurações</Text>
            </View>

            <Text style={styles.sectionTitle}>Geral</Text>

            <TouchableOpacity style={styles.boxContainer} onPress={handlePressTermosServico}>
                <Text style={styles.boxTitle}>Termos de Serviço</Text>
                <TouchableOpacity onPress={handlePressTermosServico}>
                    <Icon name="arrow-right" size={16} color="#fff" style={styles.arrowIcon} />
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxContainer} onPress={handlePressSuporte}>
                <Text style={styles.boxTitle}>Suporte</Text>
                <TouchableOpacity onPress={handlePressSuporte}>
                    <Icon name="arrow-right" size={16} color="#fff" style={styles.arrowIcon} />
                </TouchableOpacity>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Notificações</Text>

            <TouchableOpacity style={styles.boxContainer} onPress={handlePressAgendamentos}>
                <Text style={styles.boxTitle}>Agendamentos</Text>
                <TouchableOpacity onPress={handlePressAgendamentos}>
                    <Icon name="arrow-right" size={16} color="#fff" style={styles.arrowIcon} /> 
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxContainer} onPress={handlePressOfertas}>
                <Text style={styles.boxTitle}>Ofertas</Text>
                <TouchableOpacity onPress={handlePressOfertas}>
                    <Icon name="arrow-right" size={16} color="#fff" style={styles.arrowIcon} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingTop: 32
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 36,
        marginTop: 20
    },
    backIcon: {
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        flex: 1,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    boxContainer: {
        backgroundColor: '#161619',
        borderRadius: 6,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 17
    },
    arrowIcon: {
        marginLeft: 8,
    },
    boxTitle: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default Setting;