import React, { Component, useEffect, useState } from "react";
import { Text, TextInput, View, ScrollView, Modal, Pressable } from 'react-native';
import { Button } from "native-base";
import QRCode from 'react-native-qrcode-svg';
import Barcode from 'react-native-barcode-svg';

import SelectTextButton from '../../components/selectTextButton';
import styles from "./styles";

const Scan = () => {
    const [types, setTypes] = React.useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
    const [selectedType, setSelectedTypes] = React.useState(types[0]);
    const [statuses, setStatuses] = React.useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
    const [selectedStatus, setSelectedStatus] = React.useState(statuses[0]);
    const [qrValue, setQrValue] = React.useState("ID123456789");
    // const [qrValue, setQrValue] = React.useState("http://awesome.link.qr");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalCodeType, setModalCodeType] = useState("");

    const changeQrValue = (value) => {
        if (value) {
            setQrValue(value);
        }
    };

    const openModal = (type) => {
        setQrValue("123456789");
        setModalCodeType(type);
        setModalVisible(true);
    }

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
                    <Button style={styles.printBRButton} onPress={() => openModal("barCode")}>
                        <Text style={styles.printBRText}>ID 123456789</Text>
                    </Button>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.printBRLabel}>Print QR Code</Text>
                    <Button style={styles.printBRButton} onPress={() => openModal("qrCode")}>
                        <Text style={styles.printBRText}>ID 123456789</Text>
                    </Button>
                </View>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    onDismiss={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {
                                modalCodeType === "barCode" &&
                                <Text>
                                    <Barcode value={qrValue} />
                                </Text>
                            }
                            
                            {
                                modalCodeType === "qrCode" &&
                                <QRCode
                                    value={qrValue}
                                />
                            }

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

export default Scan;