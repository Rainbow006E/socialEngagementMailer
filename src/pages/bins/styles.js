import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 120
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
    flex: 4,
    height: 40,
    borderWidth: 1
  },
  statusInput: {
    flex: 2,
    height: 40,
    borderWidth: 1
  },
  addButtonContainer: {
    flex: 4,
    padding: 0
  },
  addButton: {
    backgroundColor: 'transparent',
    elevation: 0,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: 'blue'
  },

  binsLabelView: {
    flex: 1,
    marginRight: 5
  },
  binsView: {
    flex: 4,
    marginBottom: 18
  },
  binView: {
    paddingBottom: 4,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  binInput: {
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    height: 30,
    padding: 0,
    paddingLeft: 8,
    borderWidth: 1
  },

  binAssignmentText: {
    flex: 1,
    fontSize: 15,
    marginRight: 5
  },
  binAssignmentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1
  }
});