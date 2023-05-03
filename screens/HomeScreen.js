import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [manufacturers, setManufacturers] = useState([])
    async function getData() {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url)

        if (response.ok) {
        const data = await response.json()
        setManufacturers(data.manufacturers)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#121012' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{ color: '#49e88b', textShadowColor: '#49e88b', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 5, fontSize: 40 }}>CarCar</Text>
                <Image style={{
                width: 400,
                height: 400,
                objectFit: 'contain',
                marginLeft: 'auto',
                marginRight: 'auto'
                }}
                source={
                    require('../red-car.png')
                } />
                <Text style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
                margin: 15
                }}>Welcome to <Text style={{ color: '#49e88b', textShadowColor: '#49e88b', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 5 }}>Car Car</Text> your source for the best cars at the lowest prices.</Text>

                <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 30, marginTop: 20 }}>Introducing the ultimate service inventory app - the last one you'll ever need. With cutting-edge technology and intuitive features, this app is the epitome of innovation. Say goodbye to cumbersome inventory management and hello to streamlined operations. Equipped with real-time analytics, predictive maintenance, and state-of-the-art security features, this app is the perfect solution for businesses of all sizes. It's time to revolutionize the way you do business and experience the future of inventory management. Try it today and see the difference for yourself!</Text>
                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Automobiles')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Inventory</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />

                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Car List')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Car List</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />

                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Schedule Service')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Schedule Service</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />

                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Technician List')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Technician List</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />

                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Add Technician')}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Add Technician</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />

                <View style={{ height: 50 }} />

                <View style={styles.trademark}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>© 2023 CarCar. All rights reserved.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#121012',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#49e88b',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#49e88b',
        width: '80%'
    },
    loginText: {
        color: '#121012',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: 'bold'
    },
    trademark: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center'
    }
});
