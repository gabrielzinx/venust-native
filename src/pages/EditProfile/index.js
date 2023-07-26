import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign, } from '@expo/vector-icons';
import { SvgAvatar, SvgConfig, SvgEditProfile, SvgMoreDown, SvgNextRight, SvgPaintBrush } from "../../components/CustomIcons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import firebase from "./../../Config";
import { useState } from "react";

export default function EditProfile(props) {

    const { user } = props.route.params;

    const navigation = useNavigation();

    const [image, setImage] = useState(null);

    async function logout() {
        await firebase.auth().signOut().then(() => {
            alert('Deslogado com sucesso!');
            navigation.getParent().navigate('Login');
        })
    }

    async function handleImage() {
        if (!user) {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
            
        }
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.caixa1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={30} color="#fff" />
                </TouchableOpacity>
                <Text style={estilos.Texto1}>Editar</Text>

                <TouchableOpacity>
                    <AntDesign name="check" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={estilos.caixa2}>
                    <View style={estilos.avatar}>
                        {image ? <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 10 }} /> : <SvgAvatar />}
                        <TouchableOpacity style={{ position: 'absolute', left: '74%', top: '74%' }} onPress={handleImage}>
                            <SvgEditProfile />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estilos.caixa3}>
                    <TouchableOpacity style={estilos.minicaixas}>
                        <Text style={[estilos.Texto2, { width: 162 }]}>Nome de Usuario</Text>
                        <Text style={estilos.Texto2}>{user ? user.nome : "Anônimo"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.minicaixas}>
                        <Text style={[estilos.Texto2, { width: 162 }]}>Tag de Usuário</Text>
                        <Text style={estilos.Texto2}>@{user ? user.username : "anônimo"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.minicaixas2}>
                        <Text style={estilos.Texto2}>Gênero</Text>
                        <SvgMoreDown />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.minicaixas2} onPress={() => navigation.navigate("Security")}>
                        <Text style={estilos.Texto2}>Segurança</Text>
                        <SvgNextRight />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.minicaixas2} onPress={() => navigation.navigate('Custom')}>
                        <Text style={estilos.Texto2}>Personalização</Text>
                        <SvgPaintBrush />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.minicaixas2} onPress={() => navigation.navigate("Settings")}>
                        <Text style={estilos.Texto2}>Configurações e Suporte</Text>
                        <SvgConfig />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.minicaixas2} onPress={logout}>
                        <Text style={[estilos.Texto2, { color: '#EC6777' }]}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>

    );
}
const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#0A090D',
        flex: 1,
        paddingTop: 16
    },
    caixa1: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    caixa2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
        marginTop: 50,
    },
    caixa3: {

        height: 400,
    },
    Texto1: {
        color: '#fff',
        fontSize: 20,
    },
    minicaixas: {
        borderBottomWidth: 0.5,
        borderTopWidth: 0.2,
        borderColor: '#B8BBC2',
        paddingHorizontal: 18,
        paddingVertical: 11,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#0C0B0F',
    },
    Texto2: {
        color: '#fff',


    },
    avatar: {
        backgroundColor: '#2FBBB3',
        borderRadius: 25,
        width: 90,
        height: 90,
    },
    minicaixas2: {
        borderBottomWidth: 0.5,
        borderTopWidth: 0.2,
        borderColor: '#B8BBC2',
        paddingHorizontal: 18,
        paddingVertical: 16,
        flexDirection: 'row',
        backgroundColor: '#0C0B0F',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});