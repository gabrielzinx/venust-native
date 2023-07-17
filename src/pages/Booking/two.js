import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CalendarBox from './Calendar';
import DateBox from './DataBox';
import { useNavigation } from '@react-navigation/native';

const Two = () => {

    const [selectedMonth, setSelectedMonth] = useState('Janeiro');
    const [selectedDate, setSelectedDate] = useState(new Date()); // Data selecionada
    const [selectedTime, setSelectedTime] = useState('');
    const [currentStep, setCurrentStep] = useState('calendar');

    const navigation = useNavigation()

    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    const previousMonth = () => {
        const currentIndex = months.indexOf(selectedMonth);
        const previousIndex = currentIndex === 0 ? 11 : currentIndex - 1;
        setSelectedMonth(months[previousIndex]);
        setSelectedDate(new Date(selectedDate.getFullYear(), previousIndex, selectedDate.getDate()));
    };

    const nextMonth = () => {
        const currentIndex = months.indexOf(selectedMonth);
        const nextIndex = currentIndex === 11 ? 0 : currentIndex + 1;
        setSelectedMonth(months[nextIndex]);
        setSelectedDate(new Date(selectedDate.getFullYear(), nextIndex, selectedDate.getDate()));
    };

    const onDateSelect = (date) => {
        setSelectedDate(date);
    };

    const onTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleConfirmDate = () => {
        setCurrentStep('time');
    };

    const handleContinue = () => {
        if (selectedDate && selectedTime) {
            Alert.alert('Data e horário confirmados', 'A data e o horário foram selecionados com sucesso!');
        } else {
            Alert.alert('Data e horário confirmados', 'A data e o horário foram selecionados com sucesso!');
            navigation.navigate('BookingThree');
        }
    };

    const handleGoBack = () => {
        setCurrentStep('calendar');
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                {/* <TouchableOpacity onPress={handleGoBack}>
                    <Icon name="arrow-left" size={20} style={styles.icon} />
                </TouchableOpacity> */}
                <Text style={styles.title}>Agendamento</Text>
                <TouchableOpacity style={{position: 'absolute', left: 0}} onPress={() => navigation.goBack()}>
                    <Icon name="close" size={20} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Título */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Reserve uma data e horário</Text>
            </View>



            {/* Conteúdo */}
            {currentStep === 'calendar' ? (
                <CalendarBox selectedDate={selectedDate} onDateSelect={onDateSelect} />
            ) : (
                <DateBox selectedDate={selectedDate} onTimeSelect={onTimeSelect} setSelectedDate={setSelectedDate}/>
            )}

            {/* Botão de Confirmar Data ou Prosseguir */}
            {currentStep === 'calendar' ? (
                <TouchableOpacity style={styles.button} onPress={handleConfirmDate}>
                    <Text style={styles.buttonText}>Confirmar Data</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={[styles.button, styles.prosseguirButton]} onPress={handleContinue}>
                    <Text style={[styles.buttonText, styles.prosseguirButtonText]}>Prosseguir</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        color: 'white',
    },
    titleContainer: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    monthBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#161619',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 0,
    },
    monthText: {
        fontSize: 18,
        color: 'white',
    },
    button: {
        backgroundColor: '#45D9A6',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 10,
        padding: 45,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    prosseguirButton: {
        backgroundColor: '#45D9A6',
        padding: 45,
        marginTop: 30
    },
    prosseguirButtonText: {
        color: '#000',
    },
});

export default Two;