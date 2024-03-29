import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import LoginStep from './src/pages/LoginStep'
import Signup from './src/pages/Signup'
import SignupSteps from './src/pages/SignupSteps'
import Onboarding from './src/pages/Onboarding';
import Home from './src/pages/Home';
import Main from './src/Routes/Main';
import EditProfile from './src/pages/EditProfile'
import { StatusBar } from 'expo-status-bar';
import Booking from './src/pages/Booking';
import ForgoutPassword from './src/pages/ForgoutPassword';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(false);

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer >
            <StatusBar style='light' />
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginStep" component={LoginStep} />
                <Stack.Screen name="ForgoutPassword" component={ForgoutPassword} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="SignupSteps" component={SignupSteps} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Booking" component={Booking} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}