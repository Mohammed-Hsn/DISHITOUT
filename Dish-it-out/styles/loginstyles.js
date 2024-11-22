import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',     // Centers content horizontally
    backgroundColor: '#f9ebd6',
  },
  up: {
    alignItems: 'center',     // Ensures the contents inside 'up' are centered horizontally
    justifyContent: 'center', // Ensures the contents inside 'up' are centered vertically
    paddingVertical: 30,      // Adds some space at the top and bottom
  },
  image: {
    width: 200,               // Image width
    height: 200,              // Image height
    borderColor: 'black',     // Border color for the image
    borderRadius: 4,          // Rounded corners for the image
    marginBottom: 20,         // Space below the image
  },
  log: {
    flexDirection: 'row',     // Horizontal layout for buttons
    justifyContent: 'space-between', // Space out the buttons
    width: '100%',            // Take up the full width
    paddingHorizontal: 82,    // Horizontal padding to position buttons properly
    marginTop: 20,            // Space above the login/signup buttons
  },
  text: {
    fontFamily: 'ArchivoBlack',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f7d302', 
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    width: 250,                // Input field width
    height: 50,                // Input field height
    fontFamily: 'ArchivoBlack',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#fe7240',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    color: 'black',
    marginBottom: 20,          // Space below the input fields
  },
});

export default styles;
