import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LoginStudentScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hi there</Text>
        </View>
    )
}

export default LoginStudentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
