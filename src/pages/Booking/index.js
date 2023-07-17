import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AgendamentoScreen from './one';
import Two from './two';
import Three from './three';

const BookingStack = createStackNavigator();

export default function Booking() {
    return (
        <BookingStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <BookingStack.Screen name="BookingOne" component={AgendamentoScreen} />
            <BookingStack.Screen name="BookingTwo" component={Two} />
            <BookingStack.Screen name="BookingThree" component={Three} />
        </BookingStack.Navigator>
    );
}