import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
const Login = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const LoginButton = () => {
        const url = `http://192.168.1.5:3000/admin/login`;
        axios.post(url, { userName: userName, password: password })
            .then(res => {
                if (res['data'].status == 'SUCCESS') {
                    navigation.navigate('WelcomeScreen', res['data'].admin)
                    ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Vui lòng kiểm tra lại Username hoặc Password', ToastAndroid.SHORT);
                }
            })

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text_Login}>Login Screen</Text>
            <TextInput style={styles.inputType} value={userName} placeholder='User name' onChangeText={(usN) => setUserName(usN)} />
            <TextInput style={styles.inputType} value={password} placeholder='Password' onChangeText={(pw) => setPassword(pw)} secureTextEntry={true} />
            <TouchableOpacity onPress={LoginButton} style={styles.css_LoginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    css_LoginButton: {
        marginTop: 10,
        width: width / 2,
        height: height / 15,
        backgroundColor: '#6495ed',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        color: '#ffffff'
    },
    loginText: {
        color: 'white',
        fontSize: 20
    },
    inputType: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    text_Login: {
        fontSize: 24,
        marginBottom: 10,
    },
    css_SignUpButton: {
        marginTop: 15,
    },
    SignUpText: {
        fontSize: 20,
        color: '#6646ee',
    }
})
