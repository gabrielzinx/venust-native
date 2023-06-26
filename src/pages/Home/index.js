import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SvgMap, SvgCut, SvgChair, SvgHamburguer } from './../../components/CustomIcons';

import Barbershops from './../../database/barbershops.json';
import Barbershop from './Barbershop';
import { FlatList } from 'react-native';

export default function Home() {

    const [barberImages, setBarberImages] = useState({
        1: require('../../images/landscape/barber-1.jpg'),
        2: require('../../images/landscape/barber-2.jpg'),
        3: require('../../images/landscape/barber-3.jpg'),
        4: require('../../images/landscape/barber-4.jpg'),
        5: require('../../images/landscape/barber-5.jpg'),
        6: require('../../images/landscape/barber-6.jpg'),
        7: require('../../images/landscape/barber-7.jpg'),
        // Adicione mais imagens conforme necessário
    });

    const renderBarbershop = ({ item }) => {
        const { id, name, stars, reviews, type } = item;
        const barbershopImage = barberImages[id] || require('../../images/landscape/barber-7.jpg');

        return (
            <Barbershop
                id={id}
                barbershopName={name}
                barbershopStars={stars}
                barbershopReviews={reviews}
                barbershopType={type}
                barbershopImage={barbershopImage}
            />
        );
    };


    const [buttonMapColor, setButtonMapColor] = useState('transparent');
    const [buttonCutColor, setButtonCutColor] = useState('transparent');
    const [buttonChairColor, setButtonChairColor] = useState('transparent');
    const [buttonHamburguerColor, setButtonHamburguerColor] = useState('transparent');

    const handleButtonMapClick = () => {
        setButtonMapColor(prevColor => prevColor === 'transparent' ? '#ff769d36' : 'transparent');
    };

    const handleButtonCutClick = () => {
        setButtonCutColor(prevColor => prevColor === 'transparent' ? '#18274399' : 'transparent');
    };

    const handleButtonChairClick = () => {
        setButtonChairColor(prevColor => prevColor === 'transparent' ? '#1b574b4d' : 'transparent');
    };

    const handleButtonHambuerguerClick = () => {
        setButtonHamburguerColor(prevColor => prevColor === 'transparent' ? '#9d86434d' : 'transparent');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>Bom dia, que tal atualizar seu visual hoje?</Text>
            <ScrollView style={{ height: 120 }} horizontal={true}>
                <View style={styles.containerIcons}>
                    <TouchableOpacity style={[styles.button, { borderColor: '#ED7496', backgroundColor: buttonMapColor }]} onPress={handleButtonMapClick} >
                        <SvgMap />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Perto de Você</Text>
                </View>
                <View style={styles.containerIcons}>
                    <TouchableOpacity style={[styles.button, { borderColor: '#769FEF', backgroundColor: buttonCutColor }]} onPress={handleButtonCutClick} >
                        <SvgCut />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Barbearias</Text>
                </View>
                <View style={styles.containerIcons}>
                    <TouchableOpacity style={[styles.button, { borderColor: '#A1F8E6', backgroundColor: buttonChairColor }]} onPress={handleButtonChairClick} >
                        <SvgChair />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Salões de Beleza</Text>
                </View>
                <View style={styles.containerIcons}>
                    <TouchableOpacity style={[styles.button, { borderColor: '#FFE28C', backgroundColor: buttonHamburguerColor }]} onPress={handleButtonHambuerguerClick} >
                        <SvgHamburguer />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Pesquisa Avançada</Text>
                </View>
            </ScrollView>
            <Text style={styles.titleContainer}>Com base nas suas preferências</Text>
            <FlatList
                data={Barbershops.barbershops}
                renderItem={renderBarbershop}
                horizontal={true}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0A0A0C',
        paddingHorizontal: 20
    },
    titleContainer: {
        fontSize: 22,
        fontWeight: 700,
        color: '#FFF',
        marginBottom: 22,
        width: '100%'
    },
    title: {
        fontSize: 28,
        fontWeight: 600,
        color: '#FFF',
        marginTop: 64,
        marginBottom: 32
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: '#FFF',
    },
    containerIcons: {
        flexWrap: 'wrap',
        alignItems: 'center',
        width: 110,
        gap: 12
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        width: 80,
        height: 80
    },
    buttonText: {
        width: 100,
        fontSize: 18,
        fontWeight: 700,
        color: '#FFF',
        textAlign: 'center',
    },
    // inputContent: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     borderColor: '#C2C2C2',
    //     borderRadius: 12,
    //     borderWidth: 1,
    //     paddingHorizontal: 24,
    // },
    // inputBox: {
    //     gap: 4,
    // },
    // input: {
    //     paddingHorizontal: 12,
    //     width: '84%',
    //     height: 58,
    //     color: '#FFFFFF',
    // },
    barbershopScroll: {
    },
    barbershopContainer: {
        width: 200,
        marginRight: 24
    },
    barbershopImage: {
        width: 200,
        height: 130,
        borderRadius: 16,
        backgroundColor: '#1C1C1C'
    },
    barbershopTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
        marginTop: 6,
    },
    barbershopText: {
        color: '#999999',
        fontSize: 16,
        fontWeight: 400,
    },
    barbershopTextButton: {
        color: '#999999',
        fontSize: 13,
        fontWeight: 400,
        textDecorationLine: 'underline'
    }
});