import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/homestyles'; // Ensure the import path is correct

const API_KEY = 'b406e7cf7e264868879a8fc03e4f2b5d'; // Your API Key

const Home = () => {
  const [isModalVisible, setModalVisible] = useState({
    items: false,
    favorites: false,
    profile: false,
  });

  const [items, setItems] = useState([]); // List of ingredients
  const [currentItem, setCurrentItem] = useState(''); // Current input in search bar
  const [recipes, setRecipes] = useState([]); // Recipes fetched from API

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
        setRecipes(response.data); // Set the fetched recipes
      } else {
        console.log('No recipes found for the given ingredients.');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
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
                {/* Wrapper for the image and title with a white background */}
                <View style={styles.recipeCard}>
                  <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
                  <Text style={styles.recipeTitle}>{recipe.title}</Text>
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
      <TouchableOpacity onPress={() => toggleModal('profile')}>
        <Text style={styles.text}>PROFILE</Text>
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

          {/* Scrollable List of Items */}
          <View style={styles.modalText}>
            <ScrollView style={styles.scrollViewContainer}>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <View key={index} style={styles.itemRow}>
                    <Text style={styles.itemText}>{item}</Text>
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => handleRemoveItem(index)}>
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={styles.noItemsText}>No items added yet.</Text>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Favorites Modal */}
      <Modal
        visible={isModalVisible.favorites}
        transparent={true}
        animationType="fade"
        onRequestClose={() => toggleModal('favorites')}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => toggleModal('favorites')}>
            <Image source={require('../assets/cross.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modalText}></View>
        </View>
      </Modal>

      {/* Profile Modal */}
      <Modal
        visible={isModalVisible.profile}
        transparent={true}
        animationType="fade"
        onRequestClose={() => toggleModal('profile')}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => toggleModal('profile')}>
            <Image source={require('../assets/cross.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modalText}></View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
