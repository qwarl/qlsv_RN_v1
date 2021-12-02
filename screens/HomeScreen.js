import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

//lay du lieu tu screen khac qua, da xai api roi
// const HomeScreen = ({route,navigation}) => {
//     const {
//         fullName,
//         address,
//         phoneNumber
//     } = route.params
//     return (
//         <View style={styles.container}>
//             <Text>Hi {fullName}</Text>
//             <Text>Địa chỉ: {address}</Text>
//             <Text>Số điện thoại: {phoneNumber}</Text>
//         </View>
//     )
// }

const HomeScreen = ({ route, navigation }) => {

    return (
        <View style={styles.container}>
            <Button
            style={styles.btnColor}
                title='Manage account'
                onPress={() => navigation.navigate('ManageSubAccount')}
            />
            <Text>Hi there, this is Home screen</Text>
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnColor:{
        backgroundColor:'#6495ed'
    }
})
