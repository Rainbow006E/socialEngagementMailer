import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

import styles from './styles';

class Passport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text>Name: XXXXX XXXX XXXXID</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>Number: 123456789</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>Birthday: Month/Day/Year</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>Retirement: </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Passport;