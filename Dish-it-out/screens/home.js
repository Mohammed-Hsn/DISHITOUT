import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from '../styles/homestyles'; // Ensure the import path is correct

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Main content area */}
        <View style={styles.search}>
          {/* Text Input */}
          <TextInput style={styles.input} />
          {/* Image container */}
          <View style={styles.imageContainer}>
            <Image source={require('../assets/searchicon.jpg')} style={styles.image} />
          </View>
        </View>
        <View style={styles.sidebar}>
            <View>
              <Text style={styles.text}>ITEMS</Text>
            </View>
          {/*---------------------------------------------------------------------*/}
            <View>
            <Text style={styles.text}>FAVORATES</Text>
            </View>
          {/*---------------------------------------------------------------------*/}
            <View>
            <Text style={styles.text}>PROFILE</Text>
            </View>
        </View>
    </View>
  );
};

export default Home;
