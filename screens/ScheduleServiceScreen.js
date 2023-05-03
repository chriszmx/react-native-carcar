import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScheduleServiceScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Schedule Service</Text>
        <Text style={styles.subtitle}>Coming Soon!</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121012',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#49e88b',
        textShadowColor: '#49e88b',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
