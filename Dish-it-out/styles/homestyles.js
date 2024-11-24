import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen height
    backgroundColor: '#f9ebd6',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center', // This will align the input and image container vertically
    marginTop: 70,
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageContainerSearchIcon : {
    backgroundColor: 'black',
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for image container
    shadowOpacity: 1,  // Lowered opacity for a subtler shadow
    shadowRadius: 1,  // Softens the shadow around the image container
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 20,
  },
  imageContainerPlusIcon : {
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
  image2: {
    height: 35.5,
    width: 40,
    backgroundColor: "#FF6F61",  // Placeholder background for the image
  },

  sidebar: {
    backgroundColor: '#12e193',
    width: 350,
    height: 50, // Adjust height for spacing
    flexDirection: 'row', // Arrange buttons vertically
    justifyContent: 'space-evenly', // Space buttons evenly
    alignItems: 'center', // Center buttons horizontally
    marginHorizontal: 7,
    marginTop: 30,
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for better control
    shadowOpacity: 1,  // Lowered shadow opacity for a softer shadow
    shadowRadius: 1,  // Added a small radius to soften the shadow edges
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
  },
  text: {
    color: 'Black',
  },
  foodarea : {
    width: 350, // Box width
    height: 600, // Box height
    backgroundColor: '#30D5C8', // Box background color
    borderColor: '#000', // Border color
    borderWidth: 2, // Border width
    borderRadius: 4, // Border corner radius
    shadowOffset: { width: 4, height: 4 }, // Offset shadow horizontally and vertically
    shadowOpacity: 1, // Shadow transparency (0 to 1)
    shadowRadius: 1, // Spread of the shadow edges
    shadowColor: 'black', // Shadow color
    // Android specific shadow (elevation)
    elevation: 5, // Controls shadow on Android
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    width: 320,
    height: 510,
    backgroundColor: '#C7EA46',
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for better control
    shadowOpacity: 1,  // Lowered shadow opacity for a softer shadow
    shadowRadius: 1,  // Added a small radius to soften the shadow edges
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 30,
  },
  closeButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    shadowOffset: { width: 4, height: 4 },  // Adjusted shadow for better control
    shadowOpacity: 1,  // Lowered shadow opacity for a softer shadow
    shadowRadius: 1,  // Added a small radius to soften the shadow edges
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 280,
    marginBottom: 10,
  },
  closeIcon: {
    width: '100%',
    height: '100%',
  },
  closeText: {
    color: '#000',
    fontSize: 16,
  },
});

export default styles ;
