import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DateBox = ({ selectedDate, onTimeSelect, setSelectedDate }) => {
    const availableTimes = generateRandomTimes();

    function generateRandomTimes() {
        const times = [];
        const startTime = new Date();
        startTime.setHours(7, 0, 0); // Define o horário inicial para 07:00

        while (startTime.getHours() < 20) {
            const timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            times.push(timeString);
            startTime.setMinutes(startTime.getMinutes() + 30); // Incrementa 30 minutos para o próximo horário
        }

        return times;
    }

    const renderTimes = () => {
        return availableTimes.map((time, index) => (
            <TouchableOpacity
                key={index}
                style={[styles.timeSlot, selectedDate === time ? styles.selectedTime : null]}
                onPress={() => setSelectedDate(time)}
            >
                <Text style={[styles.timeText, selectedDate === time ? styles.selectedTimeText : null]}>{time}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.timeContainer}>{renderTimes()}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    timeContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    timeSlot: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#161619',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    timeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedTime: {
        backgroundColor: '#45D9A6',
    },
    selectedTimeText: {
        color: '#000',
    },
});

export default DateBox;