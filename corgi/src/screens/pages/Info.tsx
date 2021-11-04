import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { fontStyle } from '../../style/fontStyle';
import TopBar from '../../style/TopBar';
import { defaultStyle } from '../../style/defaultStyle';

export default function Info() {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <TopBar />
            <View style={{ margin: 20 }}>
                <Text style={[fontStyle.regular, { color: colors.text }]}>This is Info Page</Text>
            </View>
        </SafeAreaView>
    );
}