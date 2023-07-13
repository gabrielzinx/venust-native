import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, StatusBar, Animated, SafeAreaView } from 'react-native';

import firebase from "./../../Config";

import slides from './slides';
import OnboardingItem from "./OnboardingItem";
import NextButton from "../../components/NextButton";

export default function Onboarding({ navigation }) {

    firebase.auth().onAuthStateChanged(() => {
        navigation.navigate("Main")
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            console.log('Last item.')
            navigation.navigate("Login")
        };
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
                <NextButton
                    scrollTo={scrollTo}
                    percentage={(currentIndex + 1) * (100 / slides.length)}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0A0A0C',
    }
});