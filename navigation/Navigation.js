import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../screens/Login';
import WelcomeScreen from '../screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Navigation = () => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
                <Stack.Screen name='Login' component={Login} screenOptions={screenOptions} />
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} screenOptions={screenOptions} />
                {/* <Stack.Screen name='BrandsContainer' component={BrandsContainer} screenOptions={screenOptions} /> */}
                {/* <Stack.Screen name='ProductDetail' component={ProductDetail} screenOptions={screenOptions} />
                <Stack.Screen name='Search' component={Search} screenOptions={screenOptions} /> */}
            </Stack.Navigator>

        // </NavigationContainer>

    )
}

export default Navigation;

const styles = StyleSheet.create({})
