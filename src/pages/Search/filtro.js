import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import RadioComponent from './radio';
import { TouchableOpacity } from 'react-native';

function FiltroAba({ onClose, selectedOption, setSelectedOption, options, handleSelectOption }) {

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
                    <Text style={{ color: '#FF5555', fontWeight: 600, fontSize: 15 }}>Fechar Filtro</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column', width: '100%', paddingTop: 24 }}>
                {options.extra ?
                    <View>
                        <Text style={styles.text}>{options.extra.name}</Text>
                        <ScrollView>
                            {options.extra.itens.map((i) => {
                                <View>
                                    <Text style={{color: 'red'}}>{i}</Text>
                                </View>
                            })}
                        </ScrollView>
                    </View> : null}
                <RadioComponent options={options.data} onSelect={handleSelectOption} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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