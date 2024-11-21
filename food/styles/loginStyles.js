import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8ebda', // Matching background color with the logo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
    borderWidth: 4,
    borderColor: '#2E2E2E', 
    backgroundColor: '#f8ebda', 
  },
  input: {
    width: '365',
    padding: 10,
    backgroundColor: '#FF6F61', 
    borderRadius: 10,
    marginBottom: 15,
    color: 'white', 
    fontSize: 16,
    fontFamily: 'Public Sans', 
    borderWidth: 2,
    borderColor: 'black', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#0077B6', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'black', 
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Archivo Black', 
  },
});

export default styles;
