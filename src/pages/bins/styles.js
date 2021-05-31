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
  statusInput: {
    flex: 2,
    height: 40,
    borderWidth: 1
  }
});