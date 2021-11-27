// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation/Navigation';
import Login from './screens/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
