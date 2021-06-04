import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        paddingBottom: 80
    },
    formContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 5
    },
    label: {
        flex: 1,
        fontSize: 15,
        marginRight: 5
    },
    page: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    mapContainer: {
        flex: 1,
        height: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    },
    icon: {
        paddingBottom: 34,
        flex: 1,
    }
});