import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Custom = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="white" style={styles.iconLeft} />
                </TouchableOpacity>
                <Text style={styles.title}>Personalização</Text>
                <TouchableOpacity onPress={() => console.log('Icon Check Pressed')}>
                    <AntDesign name="check" size={24} color="white" style={styles.iconCheck} />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tipo de cabelo</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                    <AntDesign name="down" size={16} color="white" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tipo de rosto</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                    <AntDesign name="down" size={16} color="white" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        paddingTop: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
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
        marginLeft: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: 'white',
        marginBottom: 12,
        marginLeft: 10
    },
    button: {
        backgroundColor: '#ffffff1a',
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '101%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderColor: '#B8BBC2'
    },
    buttonFullWidth: {
        backgroundColor: '#ffffff1a',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '111%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
    },
    buttonIcon: {
        marginLeft: 'auto',
    },
});

export default Custom;