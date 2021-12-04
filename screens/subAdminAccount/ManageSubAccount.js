import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import axios from 'axios';
import Swipeout from 'react-native-swipeout';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ManageSubAccount = ({ navigation }) => {
    const [subAdminData, setSubAdminData] = useState('');
    useEffect(() => {
        const url = `http://192.168.1.5:3000/admin`;
        axios.get(url)
            // .then(res => setSubAdminData(res['data']))
            .then(res => {
                console.log(res['data'])
                setSubAdminData(res['data'])
            })

    }, [])

    const delSubAccount = (item) => {
        const url = `http://192.168.1.5:3000/admin/delSubAccount`;
        axios.post(url, item)
            // .then(res => )
            .then(res => {
                console.log(res['data'].msg)
                // setSubAdminData(res['data'])
                setSubAdminData(
                    prev => {
                        return prev.filter(idSubAccount => idSubAccount._id != item._id);
                    }
                )
            })
    }

    const ListItem = ({ item }) => {
        const swipeoutSettings = {
            autoClose: true,
            onclose: () => {
                console.log('Close swipeout');
            },
            onOpen: () => {
                console.log('Open swipeout');
            },
            right: [
                {
                    text: 'Update',
                    type: 'secondary',
                    onPress: () => {
                        //bo code update vao day
                        console.log('Update');
                    }
                },
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => {
                        //bo code xoa vao day
                        delSubAccount(item);
                        console.log(item);
                    }

                }

            ]
        };
        return (
            <Swipeout {...swipeoutSettings}>
                <View style={styles.listContainer}>
                    <Text style={{ marginLeft: 10, fontSize: 20 }}>Tên: {item.fullName}</Text>
                    <Text style={styles.itemSinhVien}>Điện thoại: {item.phoneNumber}</Text>
                    <Text style={styles.itemSinhVien}>Địa chỉ: {item.address}</Text>
                </View>
            </Swipeout>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item._id}
                data={subAdminData}
                renderItem={
                    ({ item }) => <ListItem item={item} />
                } />
            <TouchableOpacity style={styles.css_addCircleButton} onPress={() => { navigation.navigate('AddSubAccount') }}>
                <Icon
                    name='plus-circle'
                    color='red'
                    size={50}
                />
            </TouchableOpacity>
        </View>

    )
}

export default ManageSubAccount
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemSinhVien: {
        marginLeft: 10,
    },
    listContainer: {
        backgroundColor: '#f1f1f1',
        // flexDirection:'row',
        margin: width * 3.6 / 187.5,
        padding: width * 3.6 / 187.5,
        borderRadius: width * 3.6 / 187.5,
        width: '100%'
    },
    css_addCircleButton: {
        marginLeft: 300,
        marginBottom: 30,
    }
})
