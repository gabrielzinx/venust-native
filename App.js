import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import LoginSteps from './src/pages/LoginSteps'
import Onboarding from './src/pages/Onboarding';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="LoginSteps" component={LoginSteps} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
