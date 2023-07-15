import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const RadioComponent = ({ options, onSelect, selectedOption, setSelectedOption }) => {

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <ScrollView style={{ width: '100%' }}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        marginBottom: 28,
                        paddingLeft: 36,
                        paddingRight: 14,
                    }}
                    onPress={() => handleSelectOption(option)}
                >
                    <Text style={styles.text}>{option}</Text>
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: selectedOption === option ? 'white' : 'gray',
                            marginRight: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {selectedOption === option && (
                            <View
                                style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 5,
                                    backgroundColor: 'white',
                                }}
                            />
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
    }
});

export default RadioComponent;