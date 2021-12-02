import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ManageSubAccount = () => {
    return (
        <View style={styles.container}>
            <Text>Hi there, this is manage subadmin account screen</Text>
        </View>
    )
}

export default ManageSubAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
