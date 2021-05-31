import React, { Component } from "react";
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Button } from "native-base";
import { Picker } from '@react-native-picker/picker';

import styles from "./styles";

class Bins extends Component {
    constructor(props) {
        super(props);
    }

    selectStatus = (itemValue) => {
        console.log('itemValue');
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
                        <Text style={styles.label}>Status</Text>
                        <Picker
                            selectedValue="1"
                            onValueChange={(itemValue, itemIndex) =>
                                selectStatus(itemValue)
                            }
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                        </Picker>
                        <TextInput style={styles.statusInput} placeholder="123456789" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Bins;