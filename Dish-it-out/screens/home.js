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
        <View style={styles.imageContainerPlusIcon}>
        <Image source={require('../assets/plus.png')} style={styles.image2} />
        </View>
        <View style={styles.imageContainerSearchIcon}>
          <Image source={require('../assets/searchicon.jpg')} style={styles.image} />
        </View>
      </View>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <View>
          <Text style={styles.text}>ITEMS</Text>
        </View>
        {/*---------------------------------------------------------------------*/}
        <View>
          <Text style={styles.text}>FAVORITES</Text>
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
