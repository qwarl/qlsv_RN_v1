import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginStudentScreen from '../screens/student/LoginStudentScreen';
import ManageSubAccount from '../screens/subAdminAccount/ManageSubAccount';
import AddSubAccount from '../screens/subAdminAccount/AddSubAccount';
const Navigation = ({ navigation }) => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (

        <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
            <Stack.Screen name='Login' component={Login} screenOptions={screenOptions} />
            <Stack.Screen name='Home' component={HomeScreen} screenOptions={screenOptions} />
            <Stack.Screen name='LoginStudentScreen' component={LoginStudentScreen} screenOptions={screenOptions} />
            <Stack.Screen name='ManageSubAccount' component={ManageSubAccount} screenOptions={screenOptions} />
            <Stack.Screen name='AddSubAccount' component={AddSubAccount} screenOptions={screenOptions} />
        </Stack.Navigator>

    )
}

export default Navigation;

const styles = StyleSheet.create({})
