import React, { Component, useState } from "react";
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Button } from "native-base";

import styles from "./styles";

import SelectTextButton from '../components/selectTextButton';

const Scan = () => {
    const [types, setTypes] = React.useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
    const [selectedType, setSelectedTypes] = React.useState(types[0]);
    const [statuses, setStatuses] = React.useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
    const [selectedStatus, setSelectedStatus] = React.useState(statuses[0]);

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
                    <View style={styles.selectTextButton}>
                        {
                            types?.map((typeItem, key) => {
                                return (
                                    <SelectTextButton key={key} propValue={typeItem} selectedValue={selectedType} onSetSelectedValue={setSelectedTypes} />
                                );
                            })
                        }
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Status</Text>
                    <View style={styles.selectTextButton}>
                        {
                            statuses?.map((statusItem, key) => {
                                return (
                                    <SelectTextButton key={key} propValue={statusItem} selectedValue={selectedStatus} onSetSelectedValue={setSelectedStatus} />
                                );
                            })
                        }
                    </View>
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

export default Scan;