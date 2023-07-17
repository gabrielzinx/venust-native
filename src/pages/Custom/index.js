import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SvgHeart, SvgCircle, SvgDiamond, SvgEgg, SvgOblongo, SvgSquare } from './FaceType';
import { Svg1A, Svg1B, Svg1C, Svg2A, Svg2B, Svg2C, Svg3A, Svg3B, Svg3C, Svg4A, Svg4B, Svg4C } from './HairType';

const SelectButton = ({ onPress, options, selectedOption, setSelectedOption, drop }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);
    };

    const getIcon2 = (option) => {
        console.log(option)
        switch (option) {
            case 'Liso (1A)':
                return <Svg1A fillPath="#000" width={24} height={24} />;
            case 'Liso (1B)':
                return <Svg1B fillPath="#000" width={24} height={24} />;
            case 'Liso (1C)':
                return <Svg1C fillPath="#000" width={24} height={24} />;
            case 'Ondulado (2A)':
                return <Svg2A fillPath="#000" width={24} height={24} />;
            case 'Ondulado (2B)':
                return <Svg2B fillPath="#000" width={24} height={24} />;
            case 'Ondulado (2C)':
                return <Svg2C fillPath="#000" width={24} height={24} />;
            case 'Cacheado (3A)':
                return <Svg3A fillPath="#000" width={24} height={24} />;
            case 'Cacheado (3B)':
                return <Svg3B fillPath="#000" width={24} height={24} />;
            case 'Cacheado (3C)':
                return <Svg3C fillPath="#000" width={24} height={24} />;
            case 'Crespo (4A)':
                return <Svg4A fillPath="#000" width={24} height={24} />;
            case 'Crespo (4B)':
                return <Svg4B fillPath="#000" width={24} height={24} />;
            case 'Crespo (4C)':
                return <Svg4C fillPath="#000" width={24} height={24} />;
            default:
                return null;
        }
    };

    const getIcon = (option) => {
        switch (option) {
            case 'Coração':
                return <SvgHeart fillPath="#000" width={24} height={24} />;
            case 'Redondo':
                return <SvgCircle fillCircle="#000" width={24} height={24} />;
            case 'Diamante':
                return <SvgDiamond fillPath="#000" width={24} height={24} />;
            case 'Oblongo':
                return <SvgOblongo fillRect="#000" width={24} height={24} />;
            case 'Quadrado':
                return <SvgSquare fillPath="#000" width={24} height={24} />;
            case 'Oval':
                return <SvgEgg fillRect="#000" width={24} height={24} />;
            default:
                return null;
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={() => setShowDropdown(!showDropdown)}>
            {selectedOption ? (
                <>
                    {drop ? getIcon2(selectedOption) : getIcon(selectedOption)}
                    <Text style={styles.buttonText}>{selectedOption}</Text>
                </>
            ) : (
                <Text style={styles.buttonText}>Editar</Text>
            )}
            <Feather name={showDropdown ? 'chevron-right' : 'chevron-right'} size={16} color="white" style={styles.buttonIcon} />

            {showDropdown && (
                <Modal visible={showDropdown} transparent animationType="fade">
                    <TouchableOpacity
                        style={styles.dropdownContainer}
                        onPress={() => setShowDropdown(false)}
                    >
                        <View style={drop ? styles.dropdown : styles.dropdown2}>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    style={[
                                        styles.dropdownOption,
                                        selectedOption === option ? styles.selectedDropdownOption : null,
                                    ]}
                                    onPress={() => handleOptionSelect(option)}
                                >
                                    {drop ? getIcon2(option) : getIcon(option)}
                                    <Text style={styles.dropdownOptionText}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
        </TouchableOpacity>
    );
};

const Custom = () => {
    const [hairType, setHairType] = useState('');
    const [faceType, setFaceType] = useState('');

    const hairTypeOptions = [
        'Crespo (4A)',
        'Crespo (4B)',
        'Crespo (4C)',
        'Cacheado (3A)',
        'Cacheado (3B)',
        'Cacheado (3C)',
        'Ondulado (2A)',
        'Ondulado (2B)',
        'Ondulado (2C)',
        'Liso (1A)',
        'Liso (1B)',
        'Liso (1C)'
    ];
    const faceTypeOptions = ['Redondo', 'Diamante', 'Oblongo', 'Coração', 'Quadrado', 'Oval'];

    const handleSaveChanges = () => {
        if (hairType !== '' || faceType !== '') {
            Alert.alert('Alterações salvas!', 'As alterações foram salvas com sucesso.');
        } else {
            Alert.alert('Nenhuma alteração', 'Nenhuma alteração foi feita.');
        }

        setHairType('');
        setFaceType('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => console.log('Icon Left Pressed')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Personalização</Text>
                <TouchableOpacity onPress={handleSaveChanges}>
                    <Ionicons name="checkmark-sharp" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tipo de cabelo</Text>
                    <SelectButton
                        onPress={() => console.log('Tipo de cabelo Editar Pressed')}
                        options={hairTypeOptions}
                        selectedOption={hairType}
                        setSelectedOption={setHairType}
                        drop={true}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tipo de rosto</Text>
                    <SelectButton
                        onPress={() => console.log('Tipo de rosto Editar Pressed')}
                        options={faceTypeOptions}
                        selectedOption={faceType}
                        setSelectedOption={setFaceType}
                        drop={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    iconLeft: {
        marginRight: 'auto',
    },
    iconCheck: {
        marginLeft: 'auto',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginLeft: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: 'white',
        marginBottom: 12,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#1A1D21',
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '101%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderColor: '#B8BBC2',
    },
    buttonText: {
        color: 'white',
    },
    buttonIcon: {
        marginLeft: 10,
    },
    dropdownContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdown: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 250, // Definindo um tamanho fixo de 100px
        height: 440, // Definindo um tamanho fixo de 150px
        marginVertical: 80, // Margens de 20px verticalmente
        marginHorizontal: 80, // Margens de 20px horizontalmente
    },
    dropdown2: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 250, // Definindo um tamanho fixo de 100px
        height: 260, // Definindo um tamanho fixo de 150px
        marginVertical: 80, // Margens de 20px verticalmente
        marginHorizontal: 80, // Margens de 20px horizontalmente
    },
    dropdownOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    selectedDropdownOption: {
        backgroundColor: '#F1F1F1',
    },
    dropdownOptionText: {
        marginLeft: 8,
        color: 'black',
    },
});

export default Custom;