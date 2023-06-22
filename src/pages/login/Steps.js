import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";


export default function Steps() {

    const { width } = useWindowDimensions();


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>I.A</Text>
                <Text style={styles.subTitle}>
                    Escaneie seu rosto e descubra estilos que mais combinam com você
                </Text>
            </View>
            <View style={styles.box}>
                <Image style={styles.boxImage} source={require('./../../images/icons/bg.png')} />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity>
                    <Text style={{ color: "#FFF", fontWeight: 600, fontSize: 20 }}>Pular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={{ color: "#000", fontWeight: 600, fontSize: 20 }}>Prosseguir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A0C',
        gap: 64,
    },
    titleContainer: {
        width: '78%',
        maxWidth: 420,
    },
    title: {
        fontSize: 44,
        fontWeight: 700,
        color: '#FFF',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFF',
    },
    box: {
        backgroundColor: '#45d9a610',
        padding: 10,
        borderRadius: 24
    },
    boxImage: {
        transform: 'scale(0.8)'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "90%"
    },
    nextButton: {
        backgroundColor: '#45D6A9',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 50
    }
});