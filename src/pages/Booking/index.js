import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AgendamentoScreen from './one';
import Two from './two';
import Three from './three';
import BookingFinal from './final';

const BookingStack = createStackNavigator();

export default function Booking() {
    return (
        <BookingStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <BookingStack.Screen name="BookingOne" component={AgendamentoScreen} />
            <BookingStack.Screen name="BookingTwo" component={Two} />
            <BookingStack.Screen name="BookingThree" component={Three} />
            <BookingStack.Screen name="BookingFinal" component={BookingFinal} />
        </BookingStack.Navigator>
    );
}