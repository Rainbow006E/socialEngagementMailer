'use strict';

import React, { useEffect, useState } from "react";
import { Text, TextInput, View, ScrollView, Modal, Pressable, TouchableOpacity, Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from "./styles";

const CodeScan = () => {
    const [scanner, setScanner] = useState();
    const [code, setCode] = useState();

    const barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
    };

    const onSuccess = e => {
        console.error(e.data);
        setCode(e.data);
        setTimeout(() => {
            scanner.reactivate();
        }, 800);
    };

    useEffect(() => {

    });

    return (
        <View style={styles.container}>
            <QRCodeScanner
                style={styles.QRCodeScanner}
                onRead={onSuccess}
                reactivateTimeout={600}
                // flashMode={RNCamera.Constants.FlashMode.torch}
                ref={(scanner) => { setScanner(scanner) }}
            />
        </View>
        // <View style={styles.container}>
        //     <RNCamera
        //         ref={ref => {
        //             setCamera(ref);
        //         }}
        //         style={{
        //             flex: 1,
        //             width: '100%',
        //         }}
        //         onGoogleVisionBarcodesDetected={barcodeRecognized}
        //     >
        //     </RNCamera>
        // </View>
    );
}

export default CodeScan;