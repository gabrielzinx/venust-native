import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AgendamentoScreen from './one';

const BookingStack = createStackNavigator();

export default function Booking() {
    return (
        <BookingStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <BookingStack.Screen name="BookingOne" component={AgendamentoScreen} />
        </BookingStack.Navigator>
    );
}