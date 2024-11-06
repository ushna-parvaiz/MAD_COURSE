import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  displayContainer: {
    width: '90%',
    padding: 10,
    alignItems: 'flex-end',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 18,
  },
  inputText: {
    fontSize: 30,
    color: '#333',
  },
  resultText: {
    fontSize: 40,
    color: '#001',
  },
  buttonsContainer: {
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  row_dot: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  button_dot: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 5,
  },
  button: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  operatorButton: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  specialButton: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'olive', //starting clor
    borderRadius: 20,
  },
  equalsButton: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',//= color
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 28,
    color: '#FFAAA5', //button text
  },
});

export default styles;