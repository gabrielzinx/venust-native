import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AgendamentoScreen = () => {

    const navigation = useNavigation();

    const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleIconPress = (index) => {
        if (selectedServiceIndex === index) {
            setSelectedServiceIndex(null); // Desselecionar o serviço se já estiver selecionado
        } else {
            setSelectedServiceIndex(index);
        }
    };

    const handleImagePress = (index) => {
        if (selectedImageIndex === index) {
            setSelectedImageIndex(null); // Desselecionar a imagem se já estiver selecionada
        } else {
            setSelectedImageIndex(index);
        }
    };

    const serviceOptions = [
        { name: 'Corte', price: 'R$25,00' },
        { name: 'Barba', price: 'R$25,00' },
        { name: 'Acabamento', price: 'R$25,00' },
        { name: 'Hidratação', price: 'R$25,00' },
    ];

    const imageOptions = [
        { source: require('./img/azul.png'), text: 'Corte e Hidratação', price: 'R$60,00' },
        { source: require('./img/amarelo.png'), text: 'Corte e Hidratação', price: 'R$45,00' },
    ];

    const selectedServicePrice = selectedServiceIndex !== null ? parseFloat(serviceOptions[selectedServiceIndex].price.replace('R$', '').replace(',', '.')) : 0;
    const selectedImagePrice = selectedImageIndex !== null ? parseFloat(imageOptions[selectedImageIndex].price.replace('R$', '').replace(',', '.')) : 0;
    const total = selectedServicePrice + selectedImagePrice;

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.goBack()}>
                    <Feather name="x" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Agendamento</Text>
            </View>
            <Text style={styles.subtitle}>Escolha o tipo</Text>
            <Text style={styles.subsubtitle}>de serviço</Text>
            <View style={styles.content}>
                <Text style={styles.services}>Serviços</Text>
                <ScrollView style={styles.serviceOptions} horizontal={true}>
                    {serviceOptions.map((option, index) => (
                        <TouchableOpacity key={index} onPress={() => handleIconPress(index)}>
                            <View
                                style={[
                                    styles.serviceOption,
                                    index === selectedServiceIndex ? { backgroundColor: '#45D9A6' } : null,
                                ]}
                            >
                                <Text style={styles.serviceOptionText}>{option.name}</Text>
                                <Text style={styles.serviceOptionPrice}>{option.price}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{width: '100%'}}>
                    <Text style={[styles.combs, {alignSelf: 'flex-start'}]}>Combos</Text>
                </View>
                <ScrollView style={styles.comboImages} horizontal={true}>
                    {imageOptions.map((option, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                            <View style={styles.comboImageContainer}>
                                <ImageBackground source={option.source} style={[styles.comboImage, index === selectedImageIndex ? { opacity: 0.5 } : null]}>
                                    <View style={styles.comboImageOverlay}>
                                        <View style={styles.comboImageTextContainer}>
                                            <Text style={styles.comboImageText}>{option.text}</Text>
                                            <Text style={styles.PrecoImage}>{option.price}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Text style={styles.total}>Total: R${total.toFixed(2)}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("BookingTwo")}>
                    <View style={styles.IconBox}>
                        <AntDesign name="arrowright" size={40} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingTop: 5,
    },
    closeIcon: {
        position: 'absolute',
        left: 0,
        top: 12
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 25,
        marginTop: 1,
        top: 45,
        marginLeft: 5,
    },
    subsubtitle: {
        color: 'white',
        fontSize: 25,
        marginTop: 1,
        top: 40,
        marginLeft: 5,
    },
    services: {
        color: 'white',
        fontSize: 25,
        top: 55,
        alignSelf: 'flex-start'
    },
    combs: {
        color: 'white',
        fontSize: 25,
        top: 50,
    },
    serviceOptions: {
        flexDirection: 'row',
        marginTop: 8,
        top: 40,
    },
    serviceOption: {
        backgroundColor: '#41FFD126',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 13,
        marginHorizontal: 4,
        width: 150,
        height: 60,
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceOptionText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
    serviceOptionPrice: {
        color: '#89EBC9',
    },
    total: {
        color: 'white',
        fontSize: 25,
        paddingBottom: 20,
    },
    IconBox: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 15,
        marginBottom: 26
    },
    comboImages: {
        top: 32,
        width: 370,
        height: 200,
    },
    comboImageContainer: {
        marginRight: 10,
        width: 310,
    },
    comboImage: {
        width: 310,
        height: 90,
        top: 35
    },
    comboImageOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    comboImageTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    comboImageText: {
        color: 'white',
        fontSize: 20,
        top: 33,
    },
    PrecoImage: {
        color: 'white',
        fontSize: 20,
        top: 70,
    },
});

export default AgendamentoScreen;