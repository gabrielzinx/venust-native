import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalendarBox = ({ selectedDate, onDateSelect }) => {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
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
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const getDaysInMonth = (month, year) => {
        if (month === 1) {
            // Fevereiro
            return isLeapYear(year) ? 29 : 28;
        } else if (month === 3 || month === 5 || month === 8 || month === 10) {
            // Abril, Junho, Setembro, Novembro
            return 30;
        } else {
            // Outros meses
            return 31;
        }
    };

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const calendarDays = [];

        // Preencher dias vazios no início do calendário
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(<Text key={`empty-${i}`} style={styles.calendarDay}></Text>);
        }

        // Preencher os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear();

            calendarDays.push(
                <TouchableOpacity
                    key={`day-${day}`}
                    style={[styles.calendarDay, isSelected && styles.selectedDay]}
                    onPress={() => onDateSelect(new Date(currentYear, currentMonth, day))}
                >
                    <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{day}</Text>
                </TouchableOpacity>
            );
        }

        return calendarDays;
    };

    const goToPreviousMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
            if (newMonth === 11) {
                setCurrentYear((prevYear) => prevYear - 1);
            }
            return newMonth;
        });
    };

    const goToNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
            if (newMonth === 0) {
                setCurrentYear((prevYear) => prevYear + 1);
            }
            return newMonth;
        });
    };

    return (
        <View style={styles.calendarContainer}>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={goToPreviousMonth}>
                    <Text style={styles.navigationText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.monthYearText}>{`${months[currentMonth]} ${currentYear}`}</Text>
                <TouchableOpacity onPress={goToNextMonth}>
                    <Text style={styles.navigationText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.daysOfWeekContainer}>
                {daysOfWeek.map((day) => (
                    <Text key={day} style={styles.dayOfWeek}>
                        {day}
                    </Text>
                ))}
            </View>
            <View style={styles.calendarDaysContainer}>{renderCalendar()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: '#161619',
        borderRadius: 16,
        padding: 10,
        paddingBottom: 0,
        marginBottom: 42
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingTop: 10,
        paddingHorizontal: 14
    },
    navigationText: {
        color: '#fff',
        fontSize: 28,
    },
    monthYearText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    daysOfWeekContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dayOfWeek: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    calendarDaysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    calendarDay: {
        width: '14.28%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        borderRadius: 100,
    },
    dayText: {
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedDay: {
        backgroundColor: '#45D9A6',
    },
    selectedDayText: {
        color: '#000',
    },
});

export default CalendarBox;