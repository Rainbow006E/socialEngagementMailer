import React, { Component } from "react";
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Button } from "native-base";

import styles from "./styles";

class Passport extends Component {
    types = ["A", "B", "C", "D", "E", "F", "G", "H"];
    statuses = ["1", "2", "3", "4", "5", "6", "7", "8"];
    type = this.types[0];
    status = this.statuses[0];

    constructor(props) {
        super(props);
    }

    selectType = (type) => {
        alert(type)
        this.type = type;
    }

    selectStatus = (status) => {
        this.status = status;
    }

    selectableStyle = (option) => {
        if (option) {
            return {
                color: 'blue',
                fontWeight: "bold"
            }
        } else {
            return {};
        }
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

                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Type</Text>
                        {
                            this.types?.map((type, key) => {
                                return (
                                    <Button key={key} style={styles.selectButton} onPress={() => this.selectType(type)}>
                                        <Text style={this.selectableStyle(type === this.type)}>{type}</Text>
                                    </Button>
                                );
                            })
                        }
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Status</Text>
                        {
                            this.statuses?.map((status, key) => {
                                return (
                                    <Button key={key} style={styles.selectButton} onPress={() => this.selectStatus(status)}>
                                        <Text>{status}</Text>
                                    </Button>
                                );
                            })
                        }
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Bin</Text>
                        <TextInput style={styles.input} placeholder="" />
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.printBRLabel}>Print BR Label</Text>
                        <Button style={styles.printBRButton}>
                            <Text style={styles.printBRText}>ID 123456789</Text>
                        </Button>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.printBRLabel}>Print QR Code</Text>
                        <Button style={styles.printBRButton}>
                            <Text style={styles.printBRText}>ID 123456789</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Passport;