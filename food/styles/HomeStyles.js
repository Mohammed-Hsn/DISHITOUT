import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8ebda', // Matching background color with Login
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: "100%",
    marginBottom: 20,
  },
  profileLogoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#2E2E2E', // Deep Charcoal outline
    backgroundColor: '#0077B6', // Electric Blue background
  },
  logoBox: {
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#FFC300', // Warm Mustard background
    width: 170,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBox: {
    marginLeft: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#00B4D8', // Bright Teal background
    width: 170,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#ffffff',
    fontFamily: 'Lexend Mega', // Example font
    fontSize: 50,
  },
  logo: {
    width: 150,
    height: 60,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#1B4332', // Dark Forest Green
    borderRadius: 5,
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Public Sans', // Example font
    borderWidth: 2,
    borderColor: '#2E2E2E', // Deep Charcoal outline for input
  },
  button: {
    backgroundColor: '#FF6F61', // Vivid Coral
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2E2E2E', // Deep Charcoal outline for button
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Archivo Black', // Example font
  },
  recipeList: {
    width: '100%',
  },
  recipeCard: {
    backgroundColor: '#00B4D8', // Bright Teal
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2E2E2E', // Deep Charcoal outline for recipe card
  },
  recipeTitle: {
    fontSize: 18,
    color: '#D62828', // Bold Red
    fontFamily: 'Lexend Mega', // Example font
    marginBottom: 10,
  },
  recipeCalories: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 10,
  },
  recipeSteps: {
    fontSize: 14,
    color: '#ffffff',
  },
});

export default styles;
