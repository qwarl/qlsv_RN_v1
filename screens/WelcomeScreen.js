import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WelcomeScreen = ({route,navigation}) => {
    const {
        fullName,
        address,
        phoneNumber
    } = route.params
    return (
        <View style={styles.container}>
            <Text>Hi {fullName}</Text>
            <Text>Địa chỉ: {address}</Text>
            <Text>Số điện thoại: {phoneNumber}</Text>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
