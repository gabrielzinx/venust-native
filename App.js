import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/login/Login'
import Signup from './src/pages/login/Signup'
import Steps from './src/pages/login/Steps';
import Onboarding from './src/pages/onboarding/Onboarding';

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
                <Stack.Screen name="Steps" component={Steps} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
