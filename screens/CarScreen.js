import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const CarScreen = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCars(data.autos);
        };
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.carContainer}>
        <Image style={styles.carImage} source={{ uri: item.model.picture_url }} />
        <View style={styles.carInfo}>
            <Text style={styles.carTitle}>{item.year} {item.model.name}</Text>
            <Text style={styles.carSubtitle}>{item.model.manufacturer.name}</Text>
            <Text style={styles.carVin}>VIN: {item.vin}</Text>
        </View>
        </View>
    );

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Car List</Text>
        <FlatList
            data={cars}
            renderItem={renderItem}
            keyExtractor={(item) => item.vin}
        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121012',
    },
    heading: {
        color: '#49e88b',
        textShadowColor: '#49e88b',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    carContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 10,
    },
    carImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    carInfo: {
        flex: 1,
    },
    carTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    carSubtitle: {
        color: '#49e88b',
        fontSize: 16,
        marginVertical: 5,
    },
    carVin: {
        color: '#fff',
        fontSize: 14,
    },
});

export default CarScreen;
