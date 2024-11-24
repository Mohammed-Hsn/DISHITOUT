import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from '../styles/homestyles'; // Ensure the import path is correct

const Home = () => {
  const [isModalVisible, setModalVisible] = useState({
    items: false,
    favorites: false,
    profile: false,
  });

  // Function to toggle specific modal visibility
  const toggleModal = (key) => {
    setModalVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Search Area */}
      <View style={styles.search}>
        {/* Text Input */}
        <TextInput style={styles.input} placeholder="Search..." placeholderTextColor="#000" />
        
        {/* Plus Icon Button */}
        <TouchableOpacity
          style={styles.imageContainerPlusIcon}
          onPress={() => console.log('Plus icon pressed')}>
          <Image source={require('../assets/plus.png')} style={styles.image2} />
        </TouchableOpacity>

        {/* Search Icon Button */}
        <TouchableOpacity
          style={styles.imageContainerSearchIcon}
          onPress={() => console.log('Search icon pressed')}>
          <Image source={require('../assets/searchicon.jpg')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Food Area */}
      <View style={styles.foodarea}></View>

      {/* Sidebar */}
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={() => toggleModal('items')}>
          <Text style={styles.text}>ITEMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleModal('favorites')}>
          <Text style={styles.text}>FAVORITES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleModal('profile')}>
          <Text style={styles.text}>PROFILE</Text>
        </TouchableOpacity>
      </View>

      {/* Modals */}
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
          <View style={styles.modalText}></View>
        </View>
      </Modal>

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
