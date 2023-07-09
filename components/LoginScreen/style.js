import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    color: '#888',
  },
  input: {
    flex: 1,
  },
  showPasswordButton: {
    padding: 8,
  },
  showPasswordIcon: {
    color: '#888',
  },
  focusedContainer: {
    borderColor: '#52D4D0',
  },
  focusedIcon: {
    color: '#52D4D0',
  },

  //Sign in button

  button: {
    marginVertical: 10,
    backgroundColor: '#52D4D0',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  registerContainer: {
    flexDirection: 'row',
  },
  text: {
    color: '#52D4D0',
    fontSize: 18,
  },
});

export default styles;
