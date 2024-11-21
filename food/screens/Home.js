import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import styles from '../styles/HomeStyles';

const Home = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients: ingredients,
          number: 5,
          apiKey: process.env.SPOONACULAR_API_KEY, // Using environment variable
        }
      });
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderRecipe = ({ item }) => (
    <View style={styles.recipeCard}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <Text style={styles.recipeCalories}>Calories: {item.calories}</Text>
      <Text style={styles.recipeSteps}>Steps: {item.steps}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileLogoBox}>
          <View style={styles.logoBox}>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
          </View>
          <View style={styles.profileBox}>
            <TouchableOpacity>
              <Text style={styles.profileText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients"
        placeholderTextColor="#ffffff"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <TouchableOpacity style={styles.button} onPress={fetchRecipes}>
        <Text style={styles.buttonText}>Add Ingredients</Text>
      </TouchableOpacity>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id.toString()}
        style={styles.recipeList}
      />
    </ScrollView>
  );
};

export default Home;
