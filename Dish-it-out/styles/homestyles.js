import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen height
    backgroundColor: '#f9ebd6',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'space-between',
    alignItems: 'center', // This will align the input and image container vertically
  },
  input: {
    color: 'black',  // Set text color to black for visibility against yellow background
    fontFamily: 'ArchivoBlack',  // Apply font family to the text
    fontSize: 18,  // Adjust font size
    width: 200,
    height: 40,
    backgroundColor: '#f7d302',
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for better control
    shadowOpacity: 1,  // Lowered shadow opacity for a softer shadow
    shadowRadius: 1,  // Added a small radius to soften the shadow edges
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
  },
  imageContainer: {
    backgroundColor: 'black',
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for image container
    shadowOpacity: 1,  // Lowered opacity for a subtler shadow
    shadowRadius: 1,  // Softens the shadow around the image container
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 20,
  },
  image: {
    height: 35.5,
    width: 40,
    backgroundColor: "orange",  // Placeholder background for the image
  },
  sidebar: {
    backgroundColor: '#12e193',
    width: 350,
    height: 50, // Adjust height for spacing
    flexDirection: 'row', // Arrange buttons vertically
    justifyContent: 'space-evenly', // Space buttons evenly
    alignItems: 'center', // Center buttons horizontally
    marginHorizontal: 7,
    marginTop: 650,
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for better control
    shadowOpacity: 1,  // Lowered shadow opacity for a softer shadow
    shadowRadius: 1,  // Added a small radius to soften the shadow edges
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
  },
  text: {
    color: 'white',
  },
  
});

export default styles;
