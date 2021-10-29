import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigator from './Navigator';

export default function App() {
    return (<SafeAreaView style={styles.safeAreaView}>
        <Navigator />
    </SafeAreaView>);
}
const styles = StyleSheet.create({
    safeAreaView: { flex: 1 }
})