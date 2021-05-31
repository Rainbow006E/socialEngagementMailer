import React, { Component } from "react";
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Button } from "native-base";
import { Picker } from '@react-native-picker/picker';

import styles from "./styles";

const Bins = (props) => {
    const defaultStatus = [
        {
            number: "1",
            type: "One"
        },
        {
            number: "2",
            type: "Clean"
        },
        {
            number: "3",
            type: "Repair"
        },
        {
            number: "4",
            type: "Retire"
        },
        {
            number: "5",
            type: "Five"
        },
        {
            number: "6",
            type: "Six"
        },
        {
            number: "7",
            type: "Seven"
        },
        {
            number: "8",
            type: "Eight"
        },
    ];
    const defaultBins = [
        {
            type: "A",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "B",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "C",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "D",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "E",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "F",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "G",
            number1: "100",
            number2: "000001",
            number3: 72
        },
        {
            type: "H",
            number1: "100",
            number2: "000001",
            number3: 72
        }
    ];

    const [statuses, setStatuses] = React.useState(defaultStatus);
    const [status, setStatus] = React.useState(statuses[0]);
    const [bins, setBins] = React.useState(defaultBins);

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
                        selectedValue={status}
                        style={{
                            width: 120
                        }}
                        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                    >
                        {
                            statuses.map((status, key) => {
                                return (
                                    <Picker.Item key={key} label={status.number} value={status} />
                                )
                            })
                        }
                    </Picker>
                    <TextInput style={styles.statusInput} value={status.type} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}></Text>
                    <View style={styles.addButtonContainer}>
                        <Button style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.binsLabelView}>
                        <Text style={styles.label}>Bin</Text>
                    </View>
                    <View style={styles.binsView}>
                        {
                            bins.map((bin, key) => {
                                return (
                                    <View key={key} style={styles.binView}>
                                        <Text>{bin.type}</Text>
                                        <TextInput style={styles.binInput} value={bin.number1} />
                                        <TextInput style={styles.binInput} value={bin.number2} />
                                        <Text>{bin.number3}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.binAssignmentText}>Bin Assignment</Text>
                    <TextInput style={styles.binAssignmentInput} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.binAssignmentText}>Customer</Text>
                    <TextInput style={styles.binAssignmentInput} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.binAssignmentText}>Addreess</Text>
                    <TextInput style={styles.binAssignmentInput} />
                </View>
            </View>
        </ScrollView>
    );
}

export default Bins;