import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PrivacyProfile = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons style={{ alignSelf: 'flex-start', alignContent: 'flex-start' }} name="chevron-back-outline" size={36} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Configurações</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.textBox}>
                    <Text style={[styles.text, { color: '#ffff' }]}>
                        Termos e Condições de Uso</Text>
                    <Text style={[styles.text, { color: '#ffff' }]}>Estes termos e condições descrevem as regras de uso do site da empresa Phantom Hair, localizado no endereço https://phantomhair.com</Text>
                    <Text style={[styles.text, { color: '#ffff' }]}>Cookies:</Text>
                    <Text style={[styles.text, { color: '#ffff' }]}>O site usa cookies para ajudar na personalização da sua experiência na internet. Ao acessar o site Venust, você concorda com o uso dos cookies requeridos.</Text>
                    <Text style={[styles.text, { color: '#ffff' }]}>Cookies são arquivos de texto inseridos no seu disco rígido por um servidor de página web. Os cookies não têm permissão para executar programas ou transferir vírus para seu computador. Os cookies são associados exclusivamente a você e só podem ser lidos pelo servidor web do domínio que emitiu o cookie.</Text>
                    <Text style={[styles.text, { color: '#ffff' }]}>Estes termos e condições descrevem as regras de uso do site da empresa Phantom Hair, localizado no endereço https://phantomhair.com</Text>
                    <Text style={[styles.text, { color: '#ffff' }]}>Nós podemos usar cookies para coletar, armazenar ou rastrear informações para finalidades estatísticas e mercadológicas do nosso site. Você tem a opção de aceitar ou rejeitar os cookies opcionais. Existem alguns cookies obrigatórios, que são necessários para o funcionamento de nosso site. Esses cookies obrigatórios são requerem seu consentimento. Por favor, tenha em mente que, ao aceitar os cookies obrigatórios, você também estará aceitando cookies de terceiros, que podem ser usados por terceiros caso você utilize serviços fornecidos por eles em nosso site – por exemplo, uma janela de reprodução de vídeo fornecida por empresas terceiras e integrada ao nosso site.</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A090D',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0A090D',
        paddingTop: 38
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 16,
        textAlign: 'center',
        width: '74%'
    },
    scrollViewContent: {
        padding: 16,
    },
    textBox: {
        marginBottom: 16,
        backgroundColor: '#1F1B24',
        borderRadius: 8,
        padding: 16,
        gap: 18
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
    },
});

export default PrivacyProfile;