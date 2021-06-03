import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const selectableStyle = (option) => {
    if (option) {
        return {
            color: 'blue',
            fontWeight: "bold"
        }
    } else {
        return {
            color: 'black'
        };
    }
}

const SelectTextButton = (props) => {
    const { propValue, selectedValue } = props;
    const [value, setValue] = React.useState(propValue);

    const setSelectedValue = (value) => {
        setValue(value);
        props.onSetSelectedValue(value);
    }

    return (
        <TouchableOpacity style={styles.selectButton} onPress={() => setSelectedValue(value)}>
            <Text style={selectableStyle(propValue === selectedValue)}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selectButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        textDecorationLine: 'none',
        elevation: 0,
        padding: 8
    }
});

export default SelectTextButton;