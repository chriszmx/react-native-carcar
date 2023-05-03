import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ListAutomobileScreen() {
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const automobilesUrl = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(automobilesUrl);
        if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos);
        }
    };

    const colorClasses = [
        '#007bff',
        '#6c757d',
        '#28a745',
        '#dc3545',
        '#ffc107',
        '#17a2b8',
        '#343a40',
        '#f8f9fa',
    ];

    const randomColorClass = () => {
        const randomIndex = Math.floor(Math.random() * colorClasses.length);
        return colorClasses[randomIndex];
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={[styles.row, { backgroundColor: randomColorClass() }]}>
        <Text style={styles.cell}>{item.vin}</Text>
        <Text style={styles.cell}>{item.color}</Text>
        <Text style={styles.cell}>{item.year}</Text>
        <Text style={styles.cell}>{item.model.name}</Text>
        <Text style={styles.cell}>{item.model.manufacturer.name}</Text>
        <Text style={styles.cell}>{item.sold ? 'yes' : 'no'}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Automobiles</Text>
        <FlatList
            data={automobiles}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom: 8,
        borderRadius: 4,
    },
    cell: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ListAutomobileScreen;
