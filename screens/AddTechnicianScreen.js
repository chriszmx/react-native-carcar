import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

function AddTechnicianScreen() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        employee_id: "",
    });

    const handleChange = (name, value) => {
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async () => {
        const response = await fetch("http://localhost:8080/api/technicians/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        Alert.alert("Technician added successfully!");
        setFormData({
            first_name: "",
            last_name: "",
            employee_id: "",
        });
        } else {
        Alert.alert("Failed to add technician.");
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Add Technician</Text>
        <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.first_name}
            onChangeText={(value) => handleChange("first_name", value)}
            required
        />
        <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.last_name}
            onChangeText={(value) => handleChange("last_name", value)}
            required
        />
        <TextInput
            style={styles.input}
            placeholder="Employee ID"
            value={formData.employee_id}
            onChangeText={(value) => handleChange("employee_id", value)}
            required
        />
        <Button title="Add Technician" onPress={handleSubmit} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddTechnicianScreen;
