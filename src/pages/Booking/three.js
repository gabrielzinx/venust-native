import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Three = () => {
    const [profissionais, setProfissionais] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        const nomes = ['Matheus', 'Ederson', 'Valeria', 'Miles', 'Enzo', 'Eduarda', 'Nunes'];
        const cabeleleiros = ['Barbeiro ', 'Barbeiro ', 'Hair stylist ', 'Designer de sombrancelhas ', 'Barbeiro ', 'Barbeiro ', 'Barbeiro '];

        const profissionaisData = nomes.map((nome, index) => ({
            nome,
            cabeleleiro: cabeleleiros[index],
        }));

        setProfissionais(profissionaisData);
    }, []);

    const imagemCabeleireiroMap = {
        Matheus: require('./src/Matheus.png'),
        Ederson: require('./src/Ederson.png'),
        Valeria: require('./src/Valeria.png'),
        Miles: require('./src/Miles.png'),
        Enzo: require('./src/Enzo.png'),
        Eduarda: require('./src/Eduarda.png'),
        Nunes: require('./src/Nunes.png'),
    };

    const handleCheckIconPress = () => {
        console.log('Icon Check Pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                {/* <TouchableOpacity onPress={() => console.log('Icon Left Pressed')}>
                    <AntDesign name="left" size={24} color="white" style={styles.iconLeft} />
                </TouchableOpacity> */}
                <Text style={styles.title}>Agendamento</Text>

                <TouchableOpacity style={{position: 'absolute', alignSelf: 'flex-start', left: 0, top: 14}} onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={34} color="white" style={styles.iconClose} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>Escolha um profissional</Text>
                    </View>
                    {profissionais.map((profissional, index) => {
                        const { nome, cabeleleiro } = profissional;
                        const imagemSource = imagemCabeleireiroMap[nome];

                        return (
                            <View style={[styles.infoContainer, index === 0 && styles.firstInfoContainer]} key={index}>
                                <View style={styles.info}>
                                    <Image source={imagemSource} style={styles.infoImage} />
                                    <View style={styles.infoText}>
                                        <Text style={styles.nome}>{nome}</Text>
                                        <Text style={styles.cabeleleiro}>{cabeleleiro}</Text>
                                    </View>
                                    <TouchableOpacity onPress={handleCheckIconPress}>
                                        <AntDesign name="check" size={24} color="white" style={styles.iconCheckRight} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 59,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: 16,
    },
    iconLeft: {
        marginRight: 16,
    },
    iconCheck: {
        marginRight: 16,
    },
    iconClose: {
        marginLeft: 16,
    },
    content: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    progressText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 8,
        color: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'inter',
        marginBottom: 16,
        color: '#fff',
    },
    infoContainer: {
        backgroundColor: '#ffffff1a',
        borderRadius: 10,
        marginBottom: 24,
        paddingRight: 20,
    },
    firstInfoContainer: {
        marginTop: 16,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 90,
    },
    infoImage: {
        width: 100,
        height: '100%',
        marginRight: 32,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        backgroundColor: '#BDBDBD',
    },
    infoText: {
        flex: 1,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    cabeleleiro: {
        fontSize: 14,
        color: '#fff',
    },
    iconCheckRight: {
        marginLeft: 16,
    },
});

export default Three;