import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';

import { useState } from 'react';

import { SvgBackLeft, SvgConfirm, SvgFilter, SvgToggle, SvgTrash } from '../../components/CustomIcons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

import FiltroAba from './filtro';

export default function Search(props) {

    const [filtroAberto, setFiltroAberto] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [filterType, setFilterType] = useState("");

    const abrirFiltro = () => {
        setFiltroAberto(true);
    };

    const fecharFiltro = () => {
        setFiltroAberto(false);
    };

    function toggleFilterType(type) {
        setFilterType(type);
        abrirFiltro();
    };

    const options = {
        order: {
            data: ['Recomendado', 'Novidades', 'Nota: Maior para menor', 'Nota: Menor para maior', 'Em Alta']
        },
        filter: {
            data: ['★★★★★', '★★★★ & Maior', '★★★ & Maior', '★★ & Maior', '★ & Maior'],
            extra: {
                name: 'TIPO DE ESTABELECIMENTO',
                itens: ['Barbearia', 'Salão de Beleza', 'Estúdio de Beleza'],
                buttons: [
                    { icon: <SvgTrash />, text: "LIMPAR FILTROS" },
                    { icon: <SvgConfirm />, text: "LIMPAR FILTROS" }
                ]
            }
        }
    }

    const handleSelectOptions = {
        order: (option) => {
            console.log('Opção selecionada:', option);
            // Faça qualquer ação desejada com a opção selecionada
        },
        filter: (option) => {
            console.log('Opção selecionada:', option);
            // Faça qualquer ação desejada com a opção selecionada
        }
    }

    const data = props.route.params.data;
    const images = props.route.params.dataImages;

    const navigation = useNavigation();

    function BarbershopItem(props) {

        const styleItem = StyleSheet.create({
            barbershopContainer: {
                width: '80%',
                marginRight: 24,
                marginBottom: 34,
                alignSelf: 'center',
            },
            barbershopImage: {
                width: '100%',
                height: 160,
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

        return (
            <View style={styleItem.barbershopContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Barbershop", { data: { data: data[props.item.id - 1], barbershopImage: images[props.item.id] } })}>
                    <Image
                        style={styleItem.barbershopImage}
                        source={images[props.item.id]}
                    />
                </TouchableOpacity>
                <Text style={styleItem.barbershopTitle}>{props.item.name}</Text>
                <Text style={styleItem.barbershopText}><Text style={{ color: "#4BDEAB" }}>★ {props.item.stars}</Text> ({props.item.reviews}) - {props.item.type}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Barbershop", { data: { data: data[props.item.id - 1], barbershopImage: images[props.item.id] } })}>
                    <Text style={styleItem.barbershopTextButton}>Clique para saber mais</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <StatusBar style='light' backgroundColor='#0A0A0C' />
            <View style={style.header}>
                <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
                    <SvgBackLeft />
                </TouchableOpacity>
                <Text style={style.title}>Pesquisa Avançada</Text>
            </View>
            <View style={style.advancedFilter}>
                <TouchableOpacity style={style.optionButton} onPress={() => toggleFilterType("order")}>
                    <SvgToggle />
                    <Text style={style.text}>Ordernar por</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.optionButton} onPress={() => toggleFilterType("filter")}>
                    <SvgFilter />
                    <Text style={style.text}>Filtrar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={BarbershopItem}
                style={{ width: '100%', paddingTop: 32 }}
            />
            {filtroAberto && filterType && (
                <>
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                        onTouchStart={fecharFiltro} // Detecta o toque na área externa
                    />
                    <FiltroAba onClose={fecharFiltro} selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options[filterType]} handleSelectOption={handleSelectOptions[filterType]} />
                </>
            )}

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0C',
        paddingTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 700,
        color: '#FFF',
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        color: '#FFF',
        marginLeft: 10
    },
    advancedFilter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: '#B8BBC2',
        borderBottomColor: '#B8BBC2',
        backgroundColor: 'rgba(255, 255, 255, 0.022)',
        borderWidth: 0.3,
        width: '100%',
        height: 88,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 44,
        backgroundColor: '#1B1A1E',
        borderRadius: 4,
        borderColor: '#B8BBC2',
        borderWidth: 0.3
    }
});