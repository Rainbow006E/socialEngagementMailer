import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff'
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
  input: {
    flex: 3,
    height: 40,
    borderWidth: 1
  },
  selectButtons: {
    flex: 3,
  },
  selectButton: {
    padding: 12,
    backgroundColor: 'transparent',
    borderWidth: 0,
    textDecorationLine: 'none',
    elevation: 0
  },
  printBRLabel: {
    flex: 1,
    fontSize: 15,
    marginRight: 5,
    color: 'blue'
  },
  printBRButton: {
    flex: 1,
    fontSize: 15,
    marginRight: 5,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    margin: 4,
    color: '#fff'
  },
  printBRText: {
    color: '#fff'
  },
  selectTextButton: {
    flex: 3,
    flexDirection: "row",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  }
});