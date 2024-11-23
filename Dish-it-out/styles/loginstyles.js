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
    width: 115,
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
  modalContainer: {         // box
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0,0, 0.5)', // Semi-transparent background  
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#f9ebd6',
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 8},
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 5,
  },  
  passwordContainer: {
    width: 250, // Match the width of other input fields
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#fe7240',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginBottom: 20, // Space below the password field
  },
  passwordInput: {
    flex: 1, // Fills the available space in the container
    height: 50,
    fontFamily: 'ArchivoBlack',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10, // Space for input text on the left
    paddingRight: 60, // Space to avoid overlap with the toggle button
  },
  passwordToggle: {
    position: 'absolute',
    right: 10, // Position toggle at the far-right
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5, // Ensure a tappable area for the toggle
  },
  passwordToggleText: {
    color: 'blue', // Color for toggle text
    fontWeight: 'bold',
    fontSize: 14,
  },  
});

export default styles;
