import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'
import { SvgMap, SvgCut, SvgChair, SvgHamburguer } from './../../components/CustomIcons';

import Map from '../Map';
import Barbershops from './../../database/barbershops.json';
import Barbershop from './Barbershop';
import { FlatList } from 'react-native';

const SYSTEM_OS = Platform.OS;

const StackHome = createStackNavigator();

function HomePage() {

    const navigation = useNavigation();

    const [barberImages, setBarberImages] = useState({
        1: require('../../images/landscape/barber-1.jpg'),
        2: require('../../images/landscape/barber-2.jpg'),
        3: require('../../images/landscape/barber-3.jpg'),
        4: require('../../images/landscape/barber-4.jpg'),
        5: require('../../images/landscape/barber-5.jpg'),
        6: require('../../images/landscape/barber-6.jpg'),
        7: require('../../images/landscape/barber-7.jpg'),
        8: require('../../images/landscape/barber-8.jpg'),
        9: require('../../images/landscape/barber-9.jpg'),
        10: require('../../images/landscape/barber-10.jpg'),
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
        navigation.navigate("Map");
        // setButtonMapColor(prevColor => prevColor === 'transparent' ? '#ff769d36' : 'transparent');
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
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#0A0A0C' />
            <Text style={styles.title}>Bom dia, que tal atualizar seu visual hoje?</Text>
            <ScrollView style={styles.scrollViewIcons} horizontal={true}>
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
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8695D', width: 172, height: 26, borderRadius: 4, marginBottom: 24 }}>
                <Text style={styles.offerTitleContainer}>OFERTAS LIMITADAS</Text>
            </View>
            <ScrollView style={styles.scrollViewOffers} horizontal={true}>
                <View style={styles.offerContent}>
                    <Image
                        source={require("./offers/offer-1.png")}
                    />
                    <Text style={styles.offerTitle}>Corte masculino com 20% OFF</Text>
                    <Text style={styles.offerParagraph}>Aproveite nosso desconto especial e tenha um visual incrível.</Text>
                </View>
                <View style={styles.offerContent}>
                    <Image
                        source={require("./offers/offer-2.png")}
                    />
                    <Text style={styles.offerTitle}>Pacote barba com 50% OFF</Text>
                    <Text style={styles.offerParagraph}>Cuide da sua barba com nossos produtos de qualidade e economize na primeira compra.</Text>
                </View>
                <View style={styles.offerContent}>
                    <Image
                        source={require("./offers/offer-3.png")}
                    />
                    <Text style={styles.offerTitle}>Manicure e pedicure para casais</Text>
                    <Text style={styles.offerParagraph}>Desfrute de um momento relaxante com seu parceiro(a) e economize em nossos serviços de manicure e pedicure.</Text>
                </View>
            </ScrollView>
            <View style={styles.communityContainer}>
                <Image
                    source={require('./community.png')}
                />
                <TouchableOpacity style={styles.buttonCommunity}>
                    <Image
                        source={require("./button.png")}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default function Home() {
    return (
        <StackHome.Navigator screenOptions={{
            headerShown: false
        }}>
            <StackHome.Screen name="HomePage" component={HomePage} />
            <StackHome.Screen name="Map" component={Map} />
        </StackHome.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0C',
        paddingHorizontal: 20,
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
    scrollViewIcons: {
        height: SYSTEM_OS === "ios" ? 0 : 170,
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
    },
    offerTitleContainer: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 700,
        gap: 177
    },
    offerContent: {
        flexDirection: 'column',
        width: 324,
        marginRight: 28
    },
    offerTitle: {
        flexWrap: 'wrap',
        fontSize: 18,
        fontWeight: 700,
        color: '#FFF',
        marginTop: 10
    },
    offerParagraph: {
        flexWrap: 'wrap',
        color: '#999',
        fontSize: 12,
        fontWeight: 400
    },
    communityContainer: {
        marginTop: 30,
        marginBottom: 30
    },
    buttonCommunity: {
        position: 'absolute',
        marginTop: 64,
        marginLeft: 10
    }
});