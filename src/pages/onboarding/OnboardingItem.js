import React from "react";
import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function OnboardingItem({ item }) {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
            <View style={{flex: 0.3}}> 
                <Text style={[styles.title, {width}]}>{item.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontWeight: 600,
        fontSize: 26,
        textAlign: 'center',
        paddingHorizontal: 30,
        marginTop: 20,
    },
});