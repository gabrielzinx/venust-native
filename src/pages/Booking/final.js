import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BookingFinal = () => {

    const navigation = useNavigation();

    const handleIconPress = () => {
        navigation.getParent().navigate('Main');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tudo pronto!</Text>
            <Image source={require('./src/img/retangulo.png')} style={[styles.image, styles.firstImage]} />
            <Image source={require('./src/img/muie.png')} style={[styles.image, styles.secondImage]} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.congratsText}>Parabéns, você terminou seu primeiro agendamento</Text>
                <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                    <AntDesign name="checksquare" size={85} color="black" style={styles.checkboxIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFFE6',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 74
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 236,
        resizeMode: 'contain',
        position: 'absolute',
    },
    firstImage: {
        top: 300,
    },
    secondImage: {
        bottom: 320,
        paddingBottom: 100,
        height: 300,
    },
    congratsText: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        marginRight: 50,
        marginLeft: 50,
    },
    iconContainer: {
        marginTop: 50,
        borderRadius: 100,
    },
    checkboxIcon: {},
});

export default BookingFinal;