import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import styles from '../styles/homestyles'; // Ensure the import path is correct

const API_KEY = 'b0ee7bf0482145e6bed907a043a3a487'; // Your API Key

const Home = () => {
  const [isModalVisible, setModalVisible] = useState({
    items: false,
    favorites: false,
    instructions: false, // Add state for instruction modal
  });

  const [items, setItems] = useState([]); // List of ingredients
  const [currentItem, setCurrentItem] = useState(''); // Current input in search bar
  const [recipes, setRecipes] = useState([]); // Recipes fetched from API
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Store the selected recipe

  // Function to toggle the visibility of modals
  const toggleModal = (key) => {
    setModalVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  // Function to add an item to the items list
  const handleAddItem = () => {
    if (currentItem.trim() === '') return; // Don't add empty strings

    // Check if the item already exists in the list
    if (items.some(item => item.toLowerCase() === currentItem.trim().toLowerCase())) {
      Alert.alert(
        "Duplicate Item",
        `${currentItem.trim()} is already added.`,
        [{ text: "OK" }],
        { cancelable: true }
      );
      return; // Prevent adding the duplicate item
    }

    // Add the item to the list
    setItems((prevItems) => [...prevItems, currentItem.trim()]);
    setCurrentItem(''); // Clear the input field after adding
  };

  // Function to remove an item from the items list
  const handleRemoveItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Function to search for recipes based on the added ingredients
  const handleSearch = async () => {
    if (items.length === 0) return; // Don't search if no items are added

    const ingredientQuery = items.join(','); // Combine all items into a comma-separated string

    try {
      console.log('Searching for recipes with ingredients:', ingredientQuery); // Log the ingredients

      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientQuery}&number=5&apiKey=${API_KEY}`
      );

      console.log('API Response:', response.data);

      if (response.data.length > 0) {
        const recipeDetailsPromises = response.data.map(async (recipe) => {
          const recipeResponse = await axios.get(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
          );
          return {
            ...recipe,
            instructions: recipeResponse.data.instructions,
            image: recipeResponse.data.image, // Add image here for use in modal
          };
        });

        const recipeDetails = await Promise.all(recipeDetailsPromises);
        setRecipes(recipeDetails); // Set the fetched recipes with instructions
      } else {
        console.log('No recipes found for the given ingredients.');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const formatInstructions = (instructions) => {
    // If the instructions contain <ol> and <li>, split them into a list
    const listRegex = /<ol[^>]*>(.*?)<\/ol>/g;
    const listItemsRegex = /<li[^>]*>(.*?)<\/li>/g;
  
    let formattedInstructions = instructions;
  
    // If instructions contain <ol>, <li>, replace them with plain text
    if (listRegex.test(instructions)) {
      formattedInstructions = instructions.replace(listRegex, (match) => {
        const listItems = match.match(listItemsRegex);
        if (listItems) {
          return listItems.map((item) => item.replace(/<\/?li>/g, '').trim()).join('\n');
        }
        return '';
      });
    }
  
    return formattedInstructions.split('\n'); // Split by newline to render each item as a Text component
  };

  return (
    <View style={styles.container}>
      {/* Search Area */}
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Enter item..."
          value={currentItem}
          onChangeText={(text) => setCurrentItem(text)} // Update current input value
        />
        <TouchableOpacity
          style={styles.imageContainerPlusIcon}
          onPress={handleAddItem}>
          <Image source={require('../assets/plus.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainerSearchIcon}
          onPress={handleSearch}> {/* Trigger search */}
          <Image source={require('../assets/searchicon.jpg')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Food Area for Recipes */}
      <View style={styles.foodarea}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <View key={index} style={styles.recipeItem}>
                {/* Wrapper for the title and instructions button */}
                <View style={styles.recipeCard}>
                  <Text style={styles.recipeTitle}>{recipe.title}</Text>
                  <TouchableOpacity
                    style={styles.instructionButton}
                    onPress={() => {
                      setSelectedRecipe(recipe); // Set selected recipe
                      toggleModal('instructions'); // Open the instruction modal
                    }}>
                    <Text style={styles.instructionsText}>View Instructions</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.jk}>No recipes found. Add more ingredients!</Text>
          )}
        </ScrollView>
      </View>

      {/* Sidebar */}
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={() => toggleModal('items')}>
          <View style={styles.itemButtonContainer}>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{items.length}</Text>
            </View>
            <Text style={styles.text}>ITEMS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleModal('favorites')}>
          <Text style={styles.text}>FAVORITES</Text>
        </TouchableOpacity>
      </View>

      {/* Modals */}
      {/* Items Modal */}
      <Modal
        visible={isModalVisible.items}
        transparent={true}
        animationType="fade"
        onRequestClose={() => toggleModal('items')}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => toggleModal('items')}>
            <Image source={require('../assets/cross.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modalText}>
            {items.length > 0 ? (
              <ScrollView>
                {items.map((item, index) => (
                  <View key={index} style={styles.itemRow}>
                    <Text style={styles.itemText}>{item}</Text>
                    <TouchableOpacity onPress={() => handleRemoveItem(index)}>
                      <Text style={styles.removeButton}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            ) : (
              <Text style={styles.noItemsText}>No items added yet.</Text>
            )}
          </View>
        </View>
      </Modal>
      {/* Instruction Modal */}
      <Modal
        visible={isModalVisible.instructions}
        transparent={true}
        animationType="fade"
        onRequestClose={() => toggleModal('instructions')}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => toggleModal('instructions')}>
            <Image source={require('../assets/cross.png')} style={styles.closeIcon} />
          </TouchableOpacity>

          {/* Display recipe image and formatted instructions */}
          {selectedRecipe && (
            <View style={[styles.modalText, styles.centeredContent]}>
              <Image
                source={{ uri: selectedRecipe.image }}
                style={styles.modalImage}
              />

              {/* Scrollable instructions */}
              <ScrollView style={styles.scrollViewInstructions}>
                {formatInstructions(selectedRecipe.instructions).map((instruction, index) => (
                  <Text key={index} style={styles.recipeInstructions}>
                    {instruction}
                  </Text>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Home;
