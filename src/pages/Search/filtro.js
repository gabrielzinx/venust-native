import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import RadioComponent from './radio';
import { TouchableOpacity } from 'react-native';

function FiltroAba({ onClose, selectedOption, setSelectedOption, options, handleSelectOption }) {

    return (
        <View style={{
            height: '50%',
            backgroundColor: '#101010',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        }}>
            <ScrollView
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '94%',
                    width: '100%',
                    backgroundColor: '#101010aa',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                }}
            >
                <View style={{ flexDirection: 'column', width: '100%', paddingTop: 16, paddingBottom: 18 }}>
                    {options.extra ?
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                                <Text style={[styles.text, { marginLeft: 16, marginBottom: 20 }]}>{options.extra.name}</Text>
                                <TouchableOpacity onPress={onClose}>
                                    <Text style={{ color: '#FF5555', fontWeight: 600, fontSize: 15 }}>Fechar Filtro</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{ marginBottom: 16, marginLeft: 16 }} horizontal>
                                {options.extra.itens.map((i) => {
                                    return (
                                        <View key={i} style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            padding: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 12,
                                            marginRight: 16,
                                            marginBottom: 8
                                        }}>
                                            <Text style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{i}</Text>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View> : null}
                    <View style={styles.container}>
                        <Text style={styles.text}>ORDERNAR POR</Text>
                        {options.extra ? null : <TouchableOpacity onPress={onClose}>
                            <Text style={{ color: '#FF5555', fontWeight: 600, fontSize: 15 }}>Fechar Filtro</Text>
                        </TouchableOpacity>}
                    </View>
                    <RadioComponent options={options.data} onSelect={handleSelectOption} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                   { !options.extra ? null : <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 12 }}>
                        {options.extra.buttons.map(element => {
                            return (
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                    paddingVertical: 10,
                                    paddingHorizontal: 16,
                                    borderRadius: 6,
                                    gap: 10
                                }} onPress={onClose}>
                                    {element.icon}
                                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>{element.text}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 24,
        paddingHorizontal: 18
    },
    text: {
        color: '#afafaf',
        fontSize: 16,
        fontWeight: 600
    },
});

export default FiltroAba;