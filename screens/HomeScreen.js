import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
            <TouchableOpacity style={styles.css_button} onPress={() => navigation.navigate('ManageSubAccount')}>
                <Text style={styles.css_textButton}>MANAGE ACCOUNT</Text>
            </TouchableOpacity>
            <Text>Hi there, this is Home screen</Text>
        </View>
    )
}


export default HomeScreen
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnColor: {
        // backgroundColor:'#6495ed'
    },
    css_button: {
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
    css_textButton: {
        color: 'white',
        fontSize: 15
    },
})
