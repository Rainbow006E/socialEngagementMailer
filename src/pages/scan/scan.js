import React, { Component } from "react";
import { Text, TextInput, View, ScrollView } from 'react-native';

import styles from "./styles";

class Passport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input} placeholder="XXXX XXXXX" />
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Number</Text>
                        <TextInput style={styles.input} placeholder="123456789" />
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Birthday</Text>
                        <TextInput style={styles.input} placeholder="Month/Dat/Year" />
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Retirement</Text>
                        <TextInput style={styles.input} placeholder="" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Passport;