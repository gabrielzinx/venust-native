import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import RadioComponent from './radio';
import { TouchableOpacity } from 'react-native';

function FiltroAba({ onClose, selectedOption, setSelectedOption }) {

    const options = ['Recomendado', 'Novidades', 'Nota: Maior para menor', 'Nota: Menor para maior', 'Em Alta'];

    const handleSelectOption = (option) => {
        console.log('Opção selecionada:', option);
        // Faça qualquer ação desejada com a opção selecionada
    };

    return (
        <ScrollView
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                width: '100%',
                backgroundColor: '#101010',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
            }}
        >
            <View style={styles.container}>
                <Text style={styles.text}>ORDERNAR POR</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={{color: '#FF5555', fontWeight: 600, fontSize: 15}}>Fechar Filtro</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', paddingTop: 24 }}>
                <RadioComponent options={options} onSelect={handleSelectOption} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: 18
    },
    text: {
        color: '#afafaf',
        fontSize: 16,
        fontWeight: 600
    },
});

export default FiltroAba;