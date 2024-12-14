import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9ebd6',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
  },
  input: {
    color: 'black',
    fontFamily: 'ArchivoBlack',
    fontSize: 18,
    width: 200,
    height: 40,
    backgroundColor: '#f7d302',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageContainerSearchIcon: {
    backgroundColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 20,
  },
  imageContainerPlusIcon: {
    backgroundColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 20,
  },
  image: {
    height: 35.5,
    width: 40,
    backgroundColor: "orange",
  },
  image2: {
    height: 35.5,
    width: 40,
    backgroundColor: "#FF6F61",
  },
  sidebar: {
    backgroundColor: '#12e193',
    width: 350,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 7,
    marginTop: 30,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
  },
  text: {
    color: 'Black',
  },
  foodarea: {
    width: 350,
    height: 600,
    backgroundColor: '#30D5C8',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowColor: 'black',
    elevation: 5,
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    alignItems: 'center',
    width: 320,
    height: 520, // Fixed height for the modal
    backgroundColor: '#C7EA46',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 180,
    paddingBottom: 20,  // Padding for the bottom space
  },
  closeButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 280,
    marginBottom: 10,
    marginTop: 150,
  },
  closeIcon: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#FDFCDC',
    width: 200,
    marginTop: 10,
    height: 30,
    textAlign: 'center',
    padding: 4,
  },
  noItemsText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  removeButton: {
    backgroundColor: '#7209B7',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 4,
    shadowOffset: { width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 0,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 6,
    height: 30,
    color: 'white',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Add ScrollView for the modal content to allow scrolling if necessary
  scrollViewContainer: {
    flex: 1,
    padding: 10, // Add padding for some space around items
  },
  recipeItem: {
    marginTop: 20,
    marginBottom: 20, // Space between items
    width: 300,
    marginLeft: 24,
  },

  recipeCard: {
    padding: 10,             
    shadowColor: '#000',     
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5, 
    backgroundColor: '#D72638',
  },

  recipeImage: {
    width: '100%',          // Full width image
    height: 200,            // Fixed height for the image
  },

  recipeTitle: {
    marginTop: 10,          // Space between image and title
    fontSize: 16,           // Title font size
    fontWeight: 'bold',     // Bold title
    textAlign: 'center',    // Centered title
    color: '#333',          // Title color
  },
  itemButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterContainer: {
    backgroundColor: '#50C878', // Adjust color based on your theme
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  counterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  jk: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black', // Optional: Set a subtle gray color
    fontSize: 16, // Optional: Adjust font size
  },
  instructionButton: {
    
  },
  instructionsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalImage: {
    width: 250,
    height: 200,
    marginTop: 15,
  },
  recipeInstructions: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  },
  scrollViewInstructions: {
    marginTop: 20, // Add some space above the instructions
    maxHeight: 300, // Limit the height to make it scrollable, adjust as needed
    paddingHorizontal: 10,
  },
});
export default styles;