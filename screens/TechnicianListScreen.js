import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList, StyleSheet } from "react-native";

function TechnicianListScreen() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const techniciansUrl = "http://localhost:8080/api/technicians/";
        const response = await fetch(techniciansUrl);
        if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technician);
        }
    };

    const handleDeleteTechnician = async (id) => {
        const deleteUrl = `http://localhost:8080/api/technicians/${id}/`;
        const response = await fetch(deleteUrl, {
        method: "DELETE",
        });
        if (response.ok) {
        setTechnicians(technicians.filter((technician) => technician.id !== id));
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        return (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.header]}>{item.employee_id}</Text>
            <Text style={[styles.cell, styles.header]}>{item.first_name}</Text>
            <Text style={[styles.cell, styles.header]}>{item.last_name}</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
                handleDeleteTechnician(item.id);
            }}
            >
            <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
        );
    };

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Technicians</Text>
        <FlatList
            data={technicians}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    list: {
        width: "100%",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#4D4D4D",
    },
    cell: {
        flex: 1,
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
    },
    header: {
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#FF4136",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default TechnicianListScreen;
