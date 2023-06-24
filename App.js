import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import LoginStep from './src/pages/LoginStep'
import Signup from './src/pages/Signup'
import SignupSteps from './src/pages/SignupSteps'
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
                <Stack.Screen name="LoginStep" component={LoginStep} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="SignupSteps" component={SignupSteps} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
